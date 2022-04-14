import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ProductServiceController from '../services/ProductServiceController'

const ListEmployeeComponent = () => {

    const [product, setProductService] = useState([])

    useEffect(() => {

        getAllProduct();
    }, [])

    const getAllProduct = () => {
        ProductServiceController.getAllProduct().then((response) => {
            setProductService(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const  deleteProductService = (productServiceId) => {
       ProductServiceController.deleteProductService(productServiceId).then((response) =>{
        getAllProduct();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> List Products </h2>
            <Link to = "./Product-add" className = "btn btn-primary mb-2" > Add Product </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Product Id </th>
                    {/* <th> Product ServiceId </th> */}
                    <th> Product Name </th>
                  
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        product.map(
                            ProductService =>
                            <tr key = {ProductService.id}> 
                            <td> {ProductService.id} </td>
                                {/* <td> {ProductService.serviceId} </td> */}
                                <td> {ProductService.name} </td>
                                {/* <td>{ProductService.lastName}</td> */}
                                
                                <td>
                                    <Link className="btn btn-info" to={`./Product-edit/${ProductService.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteProductService(ProductService.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent