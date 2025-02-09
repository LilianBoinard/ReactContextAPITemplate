import {ReactElement} from "react";
import NotFound from "../components/404/NotFound.tsx";

export default function NotFoundPage(): ReactElement {
    return (
        <div className="h-screen flex items-center justify-center">
            <NotFound/>
        </div>
    )
}