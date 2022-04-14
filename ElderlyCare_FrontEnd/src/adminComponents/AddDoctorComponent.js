import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams,useNavigate} from 'react-router-dom';
import DoctorService from '../services/DoctorService'

const AddDoctorComponent = () => {

    const [emailId, setEmailId] = useState('');
    const [experience, setExperience] = useState('');
    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [specialization, setSpecialization] = useState('');
    // const history = useHistory();
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateDoctor = (e) => {
        e.preventDefault();

        const doctor = {emailId,experience,name,phoneNo,specialization}

        if(id){
            DoctorService.updateDoctor(id, doctor).then((response) => {
                navigate('/gesture/dashboardadmin/doctors')
            }).catch(error => {
                console.log(error)
            })

        }else{
            DoctorService.createDoctor(doctor).then((response) =>{

                console.log(response.data)
    
                navigate('/gesture/dashboardadmin/doctors')
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        DoctorService.getDoctorById(id).then((response) =>{
            setEmailId(response.data.emailId)
            setExperience(response.data.experience)
            setName(response.data.name)
           
            setPhoneNo(response.data.phoneNo)
            setSpecialization(response.data.specialization)
            
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Doctor</h2>
        }else{
            return <h2 className = "text-center">Add Doctor</h2>
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
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> EmailID :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter EmailID"
                                        name = "emailID"
                                        className = "form-control"
                                        value = {emailId}
                                        onChange = {(e) => setEmailId(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Experience :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Experience"
                                        name = "experience"
                                        className = "form-control"
                                        value = {experience}
                                        onChange = {(e) => setExperience(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Name :</label>
                                    <input
                                        type = "name"
                                        placeholder = "Enter Name"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {name}
                                        onChange = {(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> PhoneNo :</label>
                                    <input
                                        type = "phoneNo"
                                        placeholder = "Enter Phone No"
                                        name = "phoneNo"
                                        className = "form-control"
                                        value = {phoneNo}
                                        onChange = {(e) => setPhoneNo(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Specialization :</label>
                                    <input
                                        type = "specialization"
                                        placeholder = "Enter Specialization"
                                        name = "specialization"
                                        className = "form-control"
                                        value = {specialization}
                                        onChange = {(e) => setSpecialization(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateDoctor(e)} style = {{marginRight:"10px"}} >Submit </button>
                                <Link to="/gesture/dashboardadmin/doctors" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddDoctorComponent
