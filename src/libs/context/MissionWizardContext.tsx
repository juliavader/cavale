import React, { ReactNode, useState } from "react";
import { IsMissionInterface } from "../Interface";

export const MissionWizardContext = React.createContext<IsMissionInterface | null>(null);

export const MissionWizardProvider = ({ children }: {children: ReactNode}) => {
     const defaultValues = {
        title: "Test",
        steps: {
            step1: "test"
        }
     }

     return (
        <MissionWizardContext.Provider value={defaultValues}>
            {children}
        </MissionWizardContext.Provider>
    )
}