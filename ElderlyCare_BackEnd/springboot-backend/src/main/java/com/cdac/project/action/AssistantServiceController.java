package com.cdac.project.action;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.apache.tomcat.util.http.parser.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.entity.AssistantService;
import com.cdac.project.exception.ResourceNotFoundException;
import com.cdac.project.repository.AssistantRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api")
public class AssistantServiceController {

	@Autowired
	private AssistantRepository assistantRepository;

//	Get all Assistant service Rest API

	@GetMapping("/Assistant")
//	public List<AssistantService> getAllProduct()
	public List<AssistantService> getAllAssistantService(){
		return assistantRepository.findAll();
	}

//	Create Assistant Rest API
	@PostMapping("/Assistant")
	public AssistantService createAssistantService(@RequestBody AssistantService assistantservice) {
		return assistantRepository.save(assistantservice);
	}

//	get Assistant by id Rest API
	@GetMapping("/Assistant/{id}")
	public ResponseEntity<AssistantService> getAssistantServiceById(@PathVariable Long id) {

		AssistantService assistantservice = assistantRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Assistant Not Exists with id" + id));
		return ResponseEntity.ok(assistantservice);
	}

//	Update Assistant REST API

	@PutMapping("/Assistant/{id}")
	public ResponseEntity<AssistantService> updateAssistantService(@PathVariable long id,
			@RequestBody AssistantService assistantserviceDetails) {
		AssistantService assistantservice = assistantRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Assistant Not Exists with id" + id));
		assistantservice.setServiceId(assistantserviceDetails.getServiceId());
		assistantservice.setName(assistantserviceDetails.getName());

		AssistantService updateAssistantService = assistantRepository.save(assistantservice);
		return ResponseEntity.ok(updateAssistantService);
	}

//	Delete Assistant REST API
	@DeleteMapping("/Assistant/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteAssistantService(@PathVariable Long id) {
		AssistantService assistantservice = assistantRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Assistant Not Exists with id" + id));

		assistantRepository.delete(assistantservice);
		Map<String, Boolean> response = new HashMap();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);

	}

}
