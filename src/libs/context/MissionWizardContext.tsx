import React, { ReactNode, useState } from "react";
import { IsMissionInterface } from "./Interface";

export const MissionWizardContext = React.createContext<IsMissionInterface | null>(null);

export const MissionWizardProvider = ({ children }: {children: ReactNode}) => {
    const [title, setTitle] = useState<string | null>(null);
    const [steps, setSteps] = useState<Array<object | null> >([]);
    
    const defaultValues = {
        title,
        setTitle, 
        steps,
        setSteps
    }

     return (
        <MissionWizardContext.Provider value={defaultValues}>
            {children}
        </MissionWizardContext.Provider>
    )
}