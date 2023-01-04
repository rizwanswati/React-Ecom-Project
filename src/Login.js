import { useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import Header from "./Header"
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const [user, setUser] = useState([]);

    const navigate = useNavigate();

    function sendData() {
        let data = { email, password }
        fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((results) => {
            results.json().then((response) => {
                console.log(response.id)
                if (response.id >= -1) {
                    localStorage.setItem('user', JSON.stringify(response))
                    navigate('../add', { replace: true })
                } else {
                    setShow(true)
                }
            })
        });
    }

    return (
        <>     <Header />
            <div className="container">
                <h1>Login In</h1>
                <div className="row">
                    <div className="col-sm-4 offset-4">
                        <Form.Control size="sm" type="text" name="email" placeholder="example@email.com" value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                        <br />
                        <Form.Control size="sm" type="text" name="password" placeholder="*********" value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                        <br />
                        <Button variant="warning" onClick={() => sendData()}>Save</Button>
                    </div>
                </div>
                <br />
                <div className="row">
                    {
                        show ?

                            <div className="col-sm-4 offset-4">
                                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                                    <p>
                                        Change this and that and try again. Duis mollis, est non commodo
                                        luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                                        Cras mattis consectetur purus sit amet fermentum.
                                    </p>
                                </Alert>
                            </div>
                            : null
                    }
                </div>
            </div>
        </>
    )
}

export default Login