package com.cdac.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.project.entity.Doctor;



@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long>{

}