package com.cdac.project.action;



import java.util.HashMap;
import java.util.List;
import java.util.Map;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.entity.User;
import com.cdac.project.repository.UserRepository;



@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // get all users
    @GetMapping("/users")
    public List<User> getAllRooms() {
        return userRepository.findAll();
    }

    // add user to database
    @PostMapping("/users/add")
    public ResponseEntity<Map<String, Boolean>> addRoom(@RequestBody User user) {
    	userRepository.save(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("added", Boolean.TRUE);
		return ResponseEntity.ok(response);
    }
    
 // delete user
    @PostMapping("/users/delete/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {
		User user = userRepository.findById(id)
				.orElseThrow();
		userRepository.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}


}
