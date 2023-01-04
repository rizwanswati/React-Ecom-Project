import './App.css';
import { Button } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import AddProduct from "./AddProduct";
import Register from "./Register";
import UpdateProduct from "./UpdateProduct";
import Protected from './Protected';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={"/login"} element={<Login />} />
                    <Route path={"/register"} element={<Register />} />

                    <Route path={"/add"} element=
                        {
                            <Protected Comp={AddProduct} />
                        } />
                    <Route path={"/update"} element=
                    {
                        <Protected Comp={UpdateProduct} />
                    } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
