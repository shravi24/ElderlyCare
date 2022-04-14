package com.cdac.project.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.project.entity.Service;

@Repository
public interface ServiceRepository extends JpaRepository<Service , Integer>{
	
	

}