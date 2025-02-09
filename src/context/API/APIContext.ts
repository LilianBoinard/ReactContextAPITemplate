import {createContext, Dispatch, SetStateAction} from "react";
import {Weather} from "../../types/Weather/WeatherType.ts";

export interface APIContextType {
    data: Weather | null
    setData: Dispatch<SetStateAction<Weather | null>>
    loading: boolean
    setLoading: Dispatch<SetStateAction<boolean>>
    error: Error | null
    setError: Dispatch<SetStateAction<Error | null>>
}

export const APIContext = createContext<APIContextType | undefined>(undefined)