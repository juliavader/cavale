import { timeStamp } from "console";

export interface IsThemeContextInterface {
    name: string,
    setName: {},
    lightTheme: boolean,
    setLightTheme: {}
}

export interface IsMissionInterface {
    title: string | null,
    steps: Array<object | null>
}

export interface IsMissionDataInterface {
    missionData: {
        title: string,
        descr: string,
        image: string
    }
}