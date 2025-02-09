import {ReactElement} from "react";
import Weather from "../components/Weather/Weather.tsx";

export default function WeatherPage(): ReactElement {
    return (
        <div className="h-screen flex items-center justify-center">
            <Weather/>
        </div>
    )
}