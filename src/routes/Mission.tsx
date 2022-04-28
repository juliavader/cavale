import { ThemeContext } from "../libs/context/themeContext";
import { useValidContext } from "../helpers/ContextHelper";
import { useState } from "react";
import "../libs/scss/mission.scss";

function Mission () {
    const { name, setName } = useValidContext(ThemeContext);
    const [newName, setNewName] = useState<string>();

    return (
        <div className="mission-template">
            <h1>{name}</h1>
            <input type="text" value={newName} placeholder="please indicate your name." onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setNewName(e.currentTarget.value) }} />
            <button onClick={() => { setName(newName); setNewName("") }}>Rename User</button>
        </div>
    )
}

export default Mission;