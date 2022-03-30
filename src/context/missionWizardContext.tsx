import React from "react";

export interface MissionWizardContextInterface {
    name: string
    steps: object
  }

export const MissionWizardContext = React.createContext<MissionWizardContextInterface | null>(null);