import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import { useEffect, useRef, useState } from "react";
import './Form.css'

export default function FormChoices(){
    const [isLoginChoice, setChoice] = useState(false)
    let form = <SignUpForm />
    const choice = useRef(false)
    function handleClick(e){
        e.preventDefault()
        const id = e.target.id
        console.log(id, isLoginChoice)
        
        if (id === 'login' && !isLoginChoice){
            setChoice(true)
            form = <LoginForm />
            
            // console.log(1)
        } else if (id === 'signup' && isLoginChoice){
            setChoice(false)
            form = <SignUpForm />
            // console.log(2)
        }
        console.log(form)
    }
    // useEffect()
    
    return (
        <div id="main-container">
            <div id="choice-container">
                <button className={`choice-btn ${!isLoginChoice ? `chosen` : ``}`} onClick={handleClick} id="signup">Signup</button>
                <button className={`choice-btn ${isLoginChoice ? `chosen` : ``}`} onClick={handleClick} id="login">Login</button>
                {/* {!isLoginChoice ? <SignUpForm /> : <LoginForm />} */}
            </div>
            <div id="form-container">
                {!isLoginChoice ? <SignUpForm /> : <LoginForm />}
            </div>
        </div>
    )
}