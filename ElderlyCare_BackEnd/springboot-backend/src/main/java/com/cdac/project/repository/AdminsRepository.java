package com.cdac.project.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cdac.project.entity.Admin;



public interface AdminsRepository extends JpaRepository<Admin, Long>{

//	 @Query("select u from Admin u where u.email_id =?1  and u.password =?2")
//	    Optional<Admin> getUserByUsernameAndPassword(String emailId, String password);
	 
//	 @Query("select u.user_id from Admin u where u.email_id =?1 ")
//	    Long getUserIdByEmail(String email);
	 
	 @Query("select u.user_id from Admin u where u.user_name =?1 ")
	    Long getUserById(String username);
	 
	 @Query("select u from Admin u where u.user_name =?1  and u.password =?2")
	    Optional<Admin> getUserByUsernameAndPassword(String username, String password);
}
