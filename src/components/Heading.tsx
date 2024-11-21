'use client';
interface HeadingProps {
    title?: string;
    subtitle?: string;
    center?: boolean;
    font?: boolean;
    className?: string;
    fontSize?: string;
    fontSizeSubTitle?: string;
}
const Heading: React.FC<HeadingProps> = ({ title, subtitle, center, font, className, fontSize, fontSizeSubTitle }) => {
    return (
        <div className={`${className} ${center} ? text-center : text-start`}>
            <div className={`${fontSize} ? '${fontSize}' : text-2xl font-bold ${font ? 'font-inter' : ''} `}>
                {title}
            </div>
            <div className={`font-light  text-neutral-500 mt-2 ${fontSizeSubTitle} ? '${fontSizeSubTitle}':''`}>
                {subtitle}
            </div>
        </div>
    );
};

export default Heading;
