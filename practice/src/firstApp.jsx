import React from "react";
import prototype from "prop-types"

import { useState } from "react";


function FirstApp({ name, age }) {
    const [counter, setCounter] = useState(0)
    const [mode, setmode] = useState('light')

    return (
        <React.Fragment>
            <div>
                <button onClick={() => {
                    setmode(mode === 'light' ? "dark" : "light");

                }
                }
                >
                    {mode}
                </button>

                <div>
                    <h1>{counter}</h1>
                    {counter != 2 && (
                        <h1>COunter value is 1</h1>
                    )}
                    {counter == 2 && (
                        <h1>COunter value is 2</h1>
                    )}
                    {counter == 3 && (
                        <h1>COunter value is 3</h1>
                    )}

                    {mode == "dark" ? (
                        <div style={{ "backgroundColor": "black" }}>
                            <h1 style={{ "color": "white" }}>
                                Hello world

                            </h1>
                        </div>
                    ) :
                        <div style={{ "backgroundColor": "red" }}>
                            <h1 style={{ "color": "white" }}>
                                Hello world

                            </h1>

                        </div>
                    }

                    <button  
                        style={{
                            width:"100px",
                            color:"red",
                        }}
                        onClick={() => setCounter(counter + 1)}
                    >
                        Click me

                    </button>

                </div>
                <h1>My details</h1>
                <p>{name},{age}</p>
                </div>
        </React.Fragment>
    )}