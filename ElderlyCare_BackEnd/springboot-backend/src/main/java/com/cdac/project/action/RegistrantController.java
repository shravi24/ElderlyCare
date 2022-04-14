package com.cdac.project.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.entity.Registrant;
import com.cdac.project.repository.RegistrantRepository;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/api")
public class RegistrantController {

	@Autowired
	private RegistrantRepository registrantRepository;

	@PostMapping("/signup")
	public String signUp(@RequestBody Registrant registrant) {
		System.out.println("password" + registrant.toString());

		if (!registrant.getConfirmPassword().equals(registrant.getPassword()))
			return "paswwords does not matched";

		Optional<Registrant> usernameExit = registrantRepository.getUserByUsername(registrant.getUser_name());
		if (usernameExit.isPresent())
			return "username exist";

		registrantRepository.save(registrant);
		// rederict /login
		return "ok";
	}


	
	
//	
	@PostMapping("/login")
	public Map<String, String> login(@RequestBody Registrant registrant) {
		HashMap<String, String> map = new HashMap<>();
//		 map.put("userId", "0");
		 map.put("userId", "0");
		Optional<Registrant> userLogin = registrantRepository.getUserByUsernameAndPassword(registrant.getUser_name(),registrant.getPassword());
		if (userLogin.isPresent()) {
			// rederect to home
			
		    map.replace("userId", registrantRepository.getRegistrantById(registrant.getUser_name()).toString());
//			map.replace("status","1");
//		    map.put("role", usersRepository.findRoleByUserId(user.getUser_name()));
			map.put("role", "user");
			return map;
		}
		return map;
	}
	
	
}
