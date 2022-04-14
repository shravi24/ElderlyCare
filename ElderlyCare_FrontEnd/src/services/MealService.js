import axios from "axios";

const MEAL_API_BASE_URL = "http://localhost:8080/api/v1/meals";

class MealService{

    getAllMeals(){
        return axios.get(MEAL_API_BASE_URL);
    }

    createMeal(meal){
        return axios.post(MEAL_API_BASE_URL,meal);
    }

    getMealById(mealId){
        return axios.get(MEAL_API_BASE_URL + '/' + mealId);
    }

    updateMeal(mealId,meal){
        return axios.put(MEAL_API_BASE_URL + '/' +mealId,meal);
    }

    // deleteMeal(mealId){
    //     return axios.delete(MEAL_API_BASE_URL + '/' + mealId);
    // }

    deleteMealsDt(mealId){
        return axios.delete(MEAL_API_BASE_URL + '/' +mealId);
    }
}


export default new MealService();