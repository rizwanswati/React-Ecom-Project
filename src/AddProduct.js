import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Header from "./Header"
import ListProducts from "./ListProducts";
function AddProduct() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDesc] = useState('');
    const [file, setFile] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        getListOfProducts()
    }, []);

    function getListOfProducts(){
        fetch("http://localhost:8000/api/list", {
            method: 'get',
            headers: {
                'Content-Type': 'applicaion/json',
                'Accept': 'application/json'
            },
        }).then((response) => {
            response.json().then((result) => {
                setData(result)
            })
        })
    }


    async function sendData() {
        let data = { name, price, description, file }

        let fileSelected = data.file[0];


        const formData = new FormData();

        formData.append('prod_image', fileSelected);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description)

        // console.log(formData)

        let result = await fetch('http://localhost:8000/api/add', {
            mode: 'no-cors',
            method: 'POST',
            // headers:{
            //    'Content-Type': "multipart/form-data; boundary=formData",
            // },
            body: formData

        }).then((response) => {
        }).catch((err) => console.error(err))
    }

    const FileOnChangeHandler = (e) => {
        setFile(e.target.files)
    }

    return (
        <div>
            <Header />
            <ListProducts data={data}/>
            <div className="container">
                <h1>Add Products</h1>
                <div className="row">

                    <div className="col-sm-4 offset-4">
                        <Form.Control size="sm" type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                        <br />
                        <Form.Control size="sm" type="text" name="price" placeholder="$12345" value={price} onChange={(e) => setPrice(e.target.value)}></Form.Control>
                        <br />
                        <Form.Control size="sm" type="text" name="description" placeholder="description" value={description} onChange={(e) => setDesc(e.target.value)}></Form.Control>
                        <br />
                        <Form.Control size="sm" type="file" name="prod_image" onChange={FileOnChangeHandler}></Form.Control>
                        <br />
                        <Button variant="warning" onClick={() => sendData()}>Save</Button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default AddProduct