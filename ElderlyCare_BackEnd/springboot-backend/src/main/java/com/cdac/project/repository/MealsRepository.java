package com.cdac.project.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.project.entity.Meals;

public interface MealsRepository extends JpaRepository<Meals, Long>{
	   
}
