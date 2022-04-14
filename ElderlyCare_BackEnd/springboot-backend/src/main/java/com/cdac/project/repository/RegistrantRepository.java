package com.cdac.project.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cdac.project.entity.Registrant;

@Repository
public interface RegistrantRepository extends JpaRepository<Registrant, Long> {

	 @Query("select r from Registrant r where r.user_name =?1 ")
	    Optional<Registrant> getUserByUsername(String user_name);

	    @Query("select r from Registrant r where r.user_name =?1  and r.password =?2")
	    Optional<Registrant> getUserByUsernameAndPassword(String user_name, String password);

	    @Query("select r.id from Registrant r where r.user_name =?1 ")
	    Long getRegistrantById(String username);
	    
}
