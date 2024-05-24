import React from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
export const Form = () => {
    const navigate = useNavigate();
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showpassword, setShowPassword] = React.useState("");

    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log({
            "name":name,
            "email": email,
            "password":password

        })
    }

    return (
        <React.Fragment>
            <form className="form max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={
                        (e) => {
                            setName(e.target.value)
                        }
                    }

                    placeholder="Enter your Name"
                    className="w-full p-2 border-gray-300 rounded-md  focus:ring-2 focus:ring-blue-500"
                />

                <label>Email</label>
                <input
                    value={email}
                    onChange={
                        (e) => {
                            setEmail(e.target.value)
                        }
                    }
                    type="email"
                    placeholder="Enter your Email"
                    className="w-full p-2 border-gray-300 rounded-md  focus:ring-2 focus:ring-blue-500"
                />

                <label>
                    Password
                </label>
                <input
                    value={password}
                    onChange={
                        (e) => {
                            setPassword(e.target.value)
                        }
                    }
                    type={
                        showpassword ? "text" : "password"
                    }
                    placeholder="Enter your Password"
                    className="w-full p-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />

                {
                    showpassword ?
                        (<FaEye
                            onClick={() => {

                                setShowPassword(!showpassword)


                            }
                            }
                        />)
                        :
                        (<FaEyeSlash
                            onClick={
                                () => {
                                    setShowPassword(!showpassword)
                                }
                            }
                        />)

                }




                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit"
                onClick={
                    (e)=>{
                        handleSubmit(e)
                        navigate("/home")
                    }
                }
                >
                    Button
                </button>
            </form>
        </React.Fragment>
    );
};

export default Form
