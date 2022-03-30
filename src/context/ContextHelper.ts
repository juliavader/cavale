import { Context, useContext } from "react";


export function useValidContext(context: Context<any>) {
    const appContext = useContext(context);
    if (!appContext) return null;
    return appContext; 
}