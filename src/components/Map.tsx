import { useEffect, useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image';

interface LocationData {
    value: string;
    label: string;
    flag: string;
    latlng: [number, number]; // [latitude, longitude]
    region: string;
}

interface MapComponentProps {
    locationData?: LocationData | null; // có thể là null nếu không có dữ liệu
}

const MapComponent: React.FC<MapComponentProps> = ({ locationData }) => {
    const [viewState, setViewState] = useState({
        longitude: 105.804817, // Kinh độ mặc định
        latitude: 21.028511, // Vĩ độ mặc định
        zoom: 10,
    });

    // Cập nhật viewState khi locationData thay đổi
    useEffect(() => {
        if (locationData) {
            setViewState({
                longitude: locationData.latlng[1], // Kinh độ
                latitude: locationData.latlng[0], // Vĩ độ
                zoom: 10,
            });
        }
    }, [locationData]);

    // State để kiểm soát hiển thị Popup
    const [popupInfo, setPopupInfo] = useState<LocationData | null>(null);

    return (
        <Map
            {...viewState}
            onMove={(evt) => setViewState(evt.viewState)}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
        >
            <Marker longitude={viewState.longitude} latitude={viewState.latitude} anchor="bottom">
                <Image
                    src="/images/IconMap.svg"
                    alt="Marker"
                    style={{ width: '30px', height: '30px', cursor: 'pointer' }}
                    onClick={() => setPopupInfo(locationData || null)}
                    width={30}
                    height={30}
                />
            </Marker>
            {popupInfo && (
                <Popup
                    longitude={viewState.longitude}
                    latitude={viewState.latitude}
                    onClose={() => setPopupInfo(null)} // Đóng popup
                    closeOnClick={false}
                    className=" rounded-lg shadow-lg p-4" // Tailwind CSS classes for styling
                >
                    <div className="text-center">
                        <h3 className="text-lg font-bold text-gray-800">{popupInfo.label}</h3>
                        <p className="text-sm text-gray-600">{popupInfo.region}</p>
                    </div>
                </Popup>
            )}
        </Map>
    );
};

export default MapComponent;
