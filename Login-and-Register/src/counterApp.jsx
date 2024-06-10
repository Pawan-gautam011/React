import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import { GrPowerReset } from "react-icons/gr";
import {}

const counterApp = () => {
    const [Number, SetNumber] = useState(0);
    return <div>
        <h1>{Number}</h1> <hr></hr>

        <button onClick={() => SetNumber(Number + 1)} className="button"><IoIosAddCircle />
            Increment</button>
        <button onClick={() => SetNumber(Number - 1)} className="button"><GrSubtractCircle />
            Decrement</button>
        <button onClick={() => SetNumber(0)} className="button"><GrPowerReset />Reset</button>
    </div>
}


export default App;