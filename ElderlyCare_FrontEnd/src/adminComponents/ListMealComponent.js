import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import MealService from '../services/MealService'
// import MealService from '../../services/MealService'

const ListMealComponent = () => {

    const [meals, setMeals] = useState([])

    useEffect(() => {
       
        getAllMeals();
      
    }, [])

  
    const getAllMeals = () => {
        MealService.getAllMeals().then((response) => {
            setMeals(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
       
    }


    const deleteMeals = (mealId) => {
        MealService.deleteMealsDt(mealId).then((response) => {
            getAllMeals();
        }).catch(error =>{
                console.log(error);
        })
     }

  return (
    <div className='container'>
        <h2 className='text-center'>List Meals</h2>
        <Link to="./add-meal" className='btn btn-primary btn_add'>Add Meal</Link>
        
        <table className='table table-striped table-bordered tbl_size'>
                   <thead>
                       <tr>
                          <th>Id</th>
                           <th>Meal Name</th>
                           <th>Actions</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                          meals.map(
                              meal =>
                              <tr key={meal.id}>
                                  <td>{meal.id}</td>
                                  <td>{meal.name}</td>
                                  <td>
                                      {/* <button className='btn btn-info' onClick={()=>this.editMeal(meal.id)}>Update</button> */}
                                      <Link to={`./edit-meal/${meal.id}`} className="btn btn-info" >Update</Link>
                                      <button className = "btn btn-danger" onClick = {() => deleteMeals(meal.id)}
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

export default ListMealComponent