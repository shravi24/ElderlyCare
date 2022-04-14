import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import ProductServiceController from '../services/ProductServiceController'

const AddProductComponent = () => {

    // const [serviceId, setServiceId] = useState('')
    const [name, setName] = useState('')
    
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateProductService = (e) => {
        e.preventDefault();

        const product = {name}

        if(id){
            ProductServiceController.updateProductService(id, product).then((response) => {
                navigate('/gesture/dashboardadmin/Product')
            }).catch(error => {
                console.log(error)
            })

        }else{
            ProductServiceController.createProductService(product).then((response) =>{

                console.log(response.data)
    
                navigate('/gesture/dashboardadmin/Product');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        ProductServiceController.getProductServiceId(id).then((response) =>{
            // setServiceId(response.data.serviceId)
            setName(response.data.name)
            
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Product</h2>
        }else{
            return <h2 className = "text-center">Add Product</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                {/* <div className = "form-group mb-2">
                                    <label className = "form-label"> Service Id :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Service Id"
                                        name = "serviceId"
                                        className = "form-control"
                                        value = {serviceId}
                                        onChange = {(e) => setServiceId(e.target.value)}
                                    >
                                    </input>
                                </div> */}

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Product name" required
                                        name = "Name"
                                        className = "form-control"
                                        value = {name}
                                        onChange = {(e) => setName(e.target.value)  }
                                    >
                                    </input>
                                </div>

                                

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateProductService(e)} >Submit </button>
                                <Link to="/gesture/dashboardadmin/Product" className="btn btn-danger"> Cancel </Link>

                               
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddProductComponent