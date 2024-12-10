'use client';

import qs from 'query-string';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import Modal from './Modal';

import useCategoryModal from '@/hooks/useCategoryModal';
import Heading from '../Heading';
import CategoryInput from '../inputs/CategoryInput';
import { getIcon } from '../navbar/Categories';
import { getCategory } from '@/actions/categories/getCategories';

const CategoryModal = () => {
    const categoryModal = useCategoryModal();
    const router = useRouter();
    const params = useSearchParams();

    const [categories, setCategories] = useState<SafeCategory[]>();
    const [category, setCategory] = useState<string | null>(null);

    const handleCategorySelect = (categoryId: string) => {
        setCategory(categoryId);
    };
    useEffect(() => {
        const controller = new AbortController();
        const fetchCategories = async () => {
            try {
                const categories = await getCategory();
                setCategories(categories);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
        return () => controller.abort();
    }, []);

    const onSubmit = useCallback(async () => {
        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString());
        }
        const updateQuery: any = {
            ...currentQuery,
            category,
        };

        const url = qs.stringifyUrl(
            {
                url: '/search',
                query: updateQuery,
            },
            { skipNull: true },
        );

        categoryModal.onClose();
        router.push(url);
    }, [params, categoryModal, router, category]);

    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading title="Hãy mô tả chính xác nhất về nơi ở của bạn?" subtitle="Chọn 1 chủ đề" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto">
                {categories?.map((item, index) => {
                    const Icon = getIcon(item.icon);
                    if (!Icon) return null;
                    return (
                        <div key={index} className="col-span-1">
                            <CategoryInput
                                onClick={(category) => handleCategorySelect(category)}
                                selected={category === item._id}
                                label={item.name}
                                icon={Icon}
                                id={item?._id}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );

    return (
        <Modal
            isOpen={categoryModal.isOpen}
            onClose={categoryModal.onClose}
            onSubmit={onSubmit}
            title="Filters"
            actionLabel={'xác nhận'}
            body={bodyContent}
        ></Modal>
    );
};

export default CategoryModal;
