import {APIContextType} from "../../context/API/APIContext.ts";
import {useAPIContext} from "./useAPIContext.ts";
import {SetStateAction, useEffect} from "react";
import get from "axios";
import {Weather} from "../../types/Weather/WeatherType.ts";

export default function useAPILogic(): APIContextType {

    const {
        data, setData,
        loading, setLoading,
        error, setError
    } = useAPIContext()

    const apiURL = import.meta.env.VITE_OPEN_WEATHER_API_URL
    const apiID = import.meta.env.VITE_OPEN_WEATHER_API_ID

    useEffect(() => {
        get(apiURL, {
            params: {
                lat: 48.86221354392448,
                lon: 2.34462932979464,
                appid: apiID,
                units: "metric",
                exclude: "minutely,alerts"
            }
        })
            .then((response: { data: SetStateAction<Weather | null>; }) => setData(response.data))
            .catch((err: SetStateAction<Error | null>) => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return {
        data, setData,
        loading, setLoading,
        error, setError
    }

}