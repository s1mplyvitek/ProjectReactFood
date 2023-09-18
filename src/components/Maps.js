import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps"



const Maps = () => {
    const defaultState = {
        center: [55.751574, 37.573856],
        zoom: 10,
    }

    return (
        <YMaps>
            <Map defaultState={defaultState} className="w-[1000px] h-[300px]">
                <Placemark geometry={[55.684758, 37.738521]} />
                <Placemark geometry={[55.764117, 37.614001]} />
                <Placemark geometry={[55.764132, 37.626800]} />
                <Placemark geometry={[55.740819, 37.619958]} />
            </Map>
        </YMaps>
    );

};

export default Maps;