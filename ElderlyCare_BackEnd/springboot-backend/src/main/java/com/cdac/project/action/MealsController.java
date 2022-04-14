package com.cdac.project.action;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.entity.Meals;
import com.cdac.project.exception.ResourceNotFoundException;
import com.cdac.project.repository.MealsRepository;


//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/meals")
public class MealsController {

	@Autowired
	private MealsRepository mealsRepository;
	

	//get all meals
	
	@GetMapping
	public List<Meals> getAllMeals(){
		//this.addMeal();
		return mealsRepository.findAll();
	}
	
	
	//build create mels rest api
	@PostMapping
	public Meals createMeal(@RequestBody Meals meal) {
//		long mealId = this.getMealId();
//		meal.setServiceId(mealId);
		return mealsRepository.save(meal);
		
	}
	
	//get meal by id
	@GetMapping("{id}")
	public ResponseEntity<Meals> getMealById(@PathVariable long id) {
		
		Meals meal = mealsRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("meal not exists with id: "+id));
		return ResponseEntity.ok(meal);
	}
	
	
//	//update meal rest api
	@PutMapping("{id}")
	public ResponseEntity<Meals> updateMeal(@PathVariable long id,@RequestBody Meals mealDetails){
		
		Meals updateMeal = mealsRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("meal not exists with id: "+id));
		
		updateMeal.setName(mealDetails.getName());
		
		
		mealsRepository.save(updateMeal);
		return ResponseEntity.ok(updateMeal);
	}
	
	
	// build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteMealsDt(@PathVariable long id){

        Meals meal = mealsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Meal not exist with id: " + id));

        mealsRepository.delete(meal);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
	


}
