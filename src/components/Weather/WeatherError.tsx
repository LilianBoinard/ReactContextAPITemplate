import {ReactElement} from "react";

interface Props {
    error: Error
}

export default function WeatherError({ error }: Props): ReactElement {
    return (
        <>
            Error while fetching api data: {error.message}
        </>
    )
}