import React,{useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import MealService from '../services/MealService'
import { Link ,useParams} from 'react-router-dom'

const AddMealComponent = () => {

    const [name, setName] = useState('');
    const navigate = useNavigate();
    // const history = useHistory();
    const {id} = useParams();


    const saveOrUpdateMeal = (e) => {
        e.preventDefault();

        const meal = {name}
        console.log(meal);

        if(id){
            MealService.updateMeal(id, meal).then((response) => {
                navigate('/gesture/dashboardadmin/meals')
                // history.push('/meals')
            }).catch(error => {
                console.log(error)
            })

        }else{
            MealService.createMeal(meal).then((response) =>{

                console.log(response.data)
    
                navigate('/gesture/dashboardadmin/meals');
                // history.push('/meals')
    
            }).catch(error => {
                console.log(error)
            })
        }   
      
    }


    useEffect(() => {

        MealService.getMealById(id).then((response) =>{
           
            setName(response.data.name);
           
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Meal</h2>
        }else{
            return <h2 className = "text-center">Add Meal</h2>
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
                       <hr></hr>
                       <br/> 
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label lbl_meal"> Meal Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Meal Name"
                                        name = "name"
                                        className = "form-control"
                                        value = {name}
                                        onChange = {(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className='btn_save'>
                                   <button className = "btn btn-success" onClick = {(e) => saveOrUpdateMeal(e)} style = {{marginRight:"10px"}} >Submit </button>
                                   <Link to="/gesture/dashboardadmin/meals" className="btn btn-danger"> Cancel </Link>
                                </div>
                               
                            </form>

                        </div>
                    </div>
                </div>

           </div>

    </div>
  )
}

export default AddMealComponent