import {ReactNode, useState} from "react";
import { APIContext } from "./APIContext";
import {Weather} from "../../types/Weather/WeatherType.ts";

export function APIProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<Weather | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)

    return (
        <APIContext.Provider value={
            {
                data,
                setData,
                loading,
                setLoading,
                error,
                setError
            }}>
            {children}
        </APIContext.Provider>
    )
}