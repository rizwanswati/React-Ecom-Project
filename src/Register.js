import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Form, Button } from "react-bootstrap";
import Header from "./Header";

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function sendData() {
        let data = { name, email, password }
        let results = await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });
        results = await results.json();
        console.warn("results", results);
        localStorage.setItem('user', JSON.stringify(results))
        navigate('../add', { replace: true })
    }

    return (
        <>     <Header />
            <div className="container">
                <h1>Sign Up</h1>
                <div className="row">
                    <div className="col-sm-4 offset-4">
                        <Form.Control size="sm" type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                        <br />
                        <Form.Control size="sm" type="text" name="email" placeholder="example@email.com" value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                        <br />
                        <Form.Control size="sm" type="text" name="password" placeholder="*********" value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                        <br />
                        <Button variant="warning" onClick={() => sendData()}>Save</Button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Register