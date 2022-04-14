package com.cdac.project.action;



import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.entity.Service;
import com.cdac.project.repository.ServiceRepository;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class ServiceController {
	
	@Autowired
	private ServiceRepository serviceRepository;
	
//	-----------------------------------------------
//	Get all Services Rest API
	
	 @Value("${Services.serviceName}")
	@GetMapping("/Services")
	public List<Service>getAllServices(){
		
		return serviceRepository.findAll();
	}

	 
}
