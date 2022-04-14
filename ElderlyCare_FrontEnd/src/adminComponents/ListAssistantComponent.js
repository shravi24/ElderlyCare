import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import AssistantService from '../services/AssistantService'

const ListEmployeeComponent = () => {

    const [assistant, setAssistantService] = useState([])

    useEffect(() => {

        getAllAssistant();
    }, [])

    const getAllAssistant = () => {
        AssistantService.getAllAssistant().then((response) => {
            setAssistantService(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const  deleteAssistantService = (AssistantServiceId) => {
       AssistantService.deleteAssistantService(AssistantServiceId).then((response) =>{
        getAllAssistant();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> List of Virtual Daughters and sons </h2>
            <Link to = "./Assistant-add" className = "btn btn-primary mb-2" > Add Assistant</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>  Id </th>
                    {/* <th> Assistant ServiceId </th> */}
                    <th> Assistant Name </th>
                  <th>EmailId</th>
                  <th>Experience</th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        assistant.map(
                            AssistantService =>
                            <tr key = {AssistantService.id}> 
                            <td> {AssistantService.id} </td>
                                {/* <td> {AssistantService.serviceId} </td> */}
                                <td> {AssistantService.name} </td>
                                {/* <td>{AssistantService.lastName}</td> */}
                                <td> {AssistantService.emailId} </td>
                                <td> {AssistantService.experience} </td>
                                <td>
                                    <Link className="btn btn-info" to={`./Assistant-edit/${AssistantService.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteAssistantService(AssistantService.id)}
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