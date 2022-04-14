import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import DoctorService from '../services/DoctorService'

const ListDoctorComponent = () => {

    const [doctors, setDoctors] = useState([])

    useEffect(() => {

        getAllDoctors();
    }, [])

    const getAllDoctors = () => {
        DoctorService.getAllDoctors().then((response) => {
            setDoctors(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteDoctor = (doctorId) => {
       DoctorService.deleteDoctor(doctorId).then((response) =>{
        getAllDoctors();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> List Doctors </h2>
            <Link to = "./add-doctor" className = "btn btn-primary mb-2" > Add Doctor </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Doctor Id </th>
                    <th> EmailID </th>
                    <th> Experience </th>
                    <th> Name </th>
                    <th> PhoneNo </th>
                    <th> Specialization </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        doctors.map(
                            doctor =>
                            <tr key = {doctor.id}> 
                                <td> {doctor.id} </td>
                                <td> {doctor.emailId} </td>
                                <td>{doctor.experience}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.phoneNo}</td>
                                <td>{doctor.specialization}</td>
                                <td>
                                    <Link className="btn btn-info" to={`./edit-doctor/${doctor.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteDoctor(doctor.id)}
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

export default ListDoctorComponent
