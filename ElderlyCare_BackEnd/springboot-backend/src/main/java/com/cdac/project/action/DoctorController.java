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

import com.cdac.project.entity.Doctor;
import com.cdac.project.exception.ResourceNotFoundException;
import com.cdac.project.repository.DoctorRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/doctors")
public class DoctorController {

    @Autowired
    private DoctorRepository doctorRepository;

    @GetMapping
    public List<Doctor> getAllDoctors(){
        return doctorRepository.findAll();
    }

    // build create doctor REST API
    @PostMapping
    public Doctor createDoctor(@RequestBody Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    // build get doctor by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Doctor> getDoctorById(@PathVariable  long id){
        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Doctor not exist with id:" + id));
        return ResponseEntity.ok(doctor);
    }

    // build update doctor REST API
    @PutMapping("{id}")
    public ResponseEntity<Doctor> updateDoctor(@PathVariable long id,@RequestBody Doctor doctorDetails) {
        Doctor updateDoctor = doctorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Doctor not exist with id: " + id));


		updateDoctor.setName(doctorDetails.getName());
		updateDoctor.setEmailId(doctorDetails.getEmailId());
	
		updateDoctor.setPhoneNo(doctorDetails.getPhoneNo());
		updateDoctor.setExperience(doctorDetails.getExperience());
		updateDoctor.setSpecialization(doctorDetails.getSpecialization());
  
		doctorRepository.save(updateDoctor);
        return ResponseEntity.ok(updateDoctor);
    }

    // build delete doctor REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteDoctor(@PathVariable long id){

        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Doctor not exist with id: " + id));

        doctorRepository.delete(doctor);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
