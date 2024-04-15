import { Link, Navigate, useNavigate } from "react-router-dom"
import { ChangeEvent, useState } from "react";
import { SignupInput } from "@niteesh96/medium-common-updated";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({type}: {type: "signup" | "signin"})=>{
    const navigate = useNavigate()
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    });

    async function sendRequest(){
        try {
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/${type=== "signup" ? "signup" : "signin"}`, postInputs);
            //console.log(res.data.token)
            const token = res.data.token;
            //console.log(token)
            localStorage.setItem("token", token);
            navigate("/blogs");
        } catch (error) {
            
        }
    }
        return <div className="h-screen flex justify-center flex-col">
            {/* {JSON.stringify(postInputs)} */}
        <div className="flex justify-center">
            <div>
                    <div className="px-10">
                        <div className="text-4xl font-bold">
                            Create an account 
                        </div>
                        <div className="text-slate-400 pl-2 text-center">
                            {type === "signin" ? "Don't have an Account ? " : "Already have an account ? "} 
                            <Link className="underline" to={type === "signin" ? "/signup" : "/signin"}>{type === "signin" ? "Sign Up" : "Login"}</Link>
                        </div>
                    </div>
                    <div className="pt-8">
                            {type === "signup" ? <LabelledInput  label="Name" placeholder="Enter your name" 
                            onChange={(e)=>{
                                    setPostInputs(c=>({
                                        ...c,
                                        name: e.target.value
                                    }))
                            }}/> : null}
                            <LabelledInput label="Username" placeholder="Enter your username" 
                            onChange={(e)=>{
                                    setPostInputs(c=>({
                                        ...c,
                                        username: e.target.value
                                    }))
                            }}/>
                            <LabelledInput label="Password" placeholder="Enter your password" type={"password"} 
                            onChange={(e)=>{
                                    setPostInputs(c=>({
                                        ...c,
                                        password: e.target.value
                                    }))
                            }}/>

                            <button onClick={sendRequest} className=" mt-8 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    {type === "signin" ? "Sign In" : "Sign Up" }
                            </button>

                    </div>
            </div>
        </div>
        
    </div>
}

interface labelledInputType{
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>)=> void;
    type?: string
}

function LabelledInput({label, placeholder, type, onChange}:labelledInputType){
    return <div>
        <label  className="block mb-2 text-sm font-bold text-gray-900 dark:text-black">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder={placeholder} required />
    </div>
}