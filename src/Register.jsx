import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label for="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label for="password">password</label>
            <input value={pass} onChange={(e) =>setPass(e.target.value)} type="password" placeholder="Password Here" id="password" name="password"/>
            <button type="submit">Register Account</button>
        </form>
        <button onClick={() => props.onFormSwitch('login')}>Already have an Account? Log In.</button>
        </>
    )
}