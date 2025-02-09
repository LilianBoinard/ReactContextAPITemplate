import { ReactElement } from "react";
import {Weather} from "../../types/Weather/WeatherType.ts";

interface Props {
    data: Weather;
}

export default function WeatherDataDisplay({ data }: Props): ReactElement {

    const weather = data.weather[0].main;
    const city = data.name;

    return (
        <div className="">
            <p>
                {`The weather is ${weather} in ${city}.`}
            </p>
        </div>
    );
}
