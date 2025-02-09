import { ReactElement } from "react";
import useAPILogic from "../../hooks/API/useAPILogic.ts";
import { WeatherLoading } from "./WeatherLoading.tsx";
import WeatherError from "./WeatherError.tsx";
import WeatherDataDisplay from "./WeatherDataDisplay.tsx";

export default function Weather(): ReactElement {
    const { data, loading, error } = useAPILogic();

    const isLoading = loading;
    const hasError = !loading && error;
    const hasData = !loading && data && !error;

    return (
        <div className="text-white font-medium text-3xl">
            {isLoading && <WeatherLoading />}
            {hasError && <WeatherError error={error} />}
            {hasData && <WeatherDataDisplay data={data} />}
        </div>
    );
}
