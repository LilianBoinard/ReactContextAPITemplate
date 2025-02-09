import {APIContext, APIContextType} from "../../context/API/APIContext.ts";
import {useContext} from "react";

export function useAPIContext(): APIContextType {
    const context = useContext(APIContext);

    if (!context) {
        throw new Error("useAPIContext must be used within APIContext");
    }

    return context;
}