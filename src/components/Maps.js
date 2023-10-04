import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps"
import { useSelector } from "react-redux";



const Maps = () => {


    const map = useSelector((state) => state.maps)


    const defaultState = {
        center: [55.751574, 37.573856],
        zoom: 11,
    }

  
    return (

        <YMaps>
            <Map defaultState={defaultState}  className="w-[1000px] h-[300px]">

                {map.map((item) =>
                    <Placemark geometry={item.coordinates} />
                )}

            </Map>
        </YMaps>
    );

};

export default Maps;