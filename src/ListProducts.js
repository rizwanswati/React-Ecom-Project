import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function ListProducts() {
    const [data, setData] = useState([]);

    useEffect(() => {
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
    }, []);

    return (<>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((product)=>(
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td><img className="photo" src={"http://localhost/ecom-backend/public/storage/"+product.img} alt=""/></td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    </>)
}
export default ListProducts;