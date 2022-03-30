import { ThemeContext } from "../context/themeContext";
import { useValidContext } from "../context/ContextHelper";
import { useState } from "react";

function Mission() {
    const { name, setName } = useValidContext(ThemeContext);
    const [newName, setNewName] = useState<string>();

    return (
        <>
            <h1>{name}</h1>
            <input type="text" value={newName} placeholder="please indicate your name." onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setNewName(e.currentTarget.value) }} />
            <button onClick={() => { setName(newName); setNewName("") }}>Rename User</button>
        </>

    )
}
export default Mission;