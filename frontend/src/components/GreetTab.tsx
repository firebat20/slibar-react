import React, { useState, ChangeEvent } from 'react';
import { Greet } from "../../wailsjs/go/main/App"; // Path might need adjustment

const GreetTab: React.FC = () => {
    const [resultText, setResultText] = useState("Please enter your name below 👇");
    const [name, setName] = useState('');

    const updateName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const updateResultText = (result: string) => setResultText(result);

    function greet() {
        Greet(name).then(updateResultText);
    }

    return (
        <>
            <div id="result" className="result">{resultText}</div>
            <div id="input" className="input-box">
                <input
                    id="name"
                    className="input"
                    onChange={updateName}
                    value={name}
                    autoComplete="off"
                    name="input"
                    type="text"
                />
                <button className="btn" onClick={greet}>Greet</button>
            </div>
        </>
    );
};

export default GreetTab;
