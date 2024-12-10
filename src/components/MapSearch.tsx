import { useEffect, useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image';

interface LocationData {
    value: string;
    label: string;
    flag: string;
    latlng: [number, number];
    region: string;
}

interface MapComponentProps {
    locationData?: LocationData | null;
}

const MapSearch: React.FC<MapComponentProps> = ({ locationData }) => {
    const [viewState, setViewState] = useState({
        longitude: 105.804817,
        latitude: 21.028511,
        zoom: 10,
    });

    useEffect(() => {
        if (locationData) {
            setViewState({
                longitude: locationData.latlng[1],
                latitude: locationData.latlng[0],
                zoom: 10,
            });
        }
    }, [locationData]);

    const [popupInfo, setPopupInfo] = useState<LocationData | null>(null);

    return (
        <div className="relative w-full h-full">
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
                        onClose={() => setPopupInfo(null)}
                        closeOnClick={false}
                        className="rounded-lg shadow-lg p-4"
                    >
                        <div className="text-center">
                            <h3 className="text-lg font-bold text-gray-800">{popupInfo.label}</h3>
                            <p className="text-sm text-gray-600">{popupInfo.region}</p>
                        </div>
                    </Popup>
                )}
            </Map>
        </div>
    );
};

export default MapSearch;
