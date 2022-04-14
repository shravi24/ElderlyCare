package com.cdac.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import com.cdac.project.entity.Subscription;

@Repository
public interface subscriptionRepository extends JpaRepository<Subscription,Long>
{
    @Query(value = "SELECT id FROM Subscription WHERE registrantid = ?1 ORDER"
    		+ " BY id DESC LIMIT 1", nativeQuery = true)
    Long findSubscriptionByUserId(Long registrantId);
    
//    @Query("SELECT r FROM Subscription r where r.registrant.registrantid = :id") 
//    List<Subscription> findIdByName(@Param("id") Long id);
////
////    @Query("SELECT o FROM Subscription o WHERE o.registrant.id = ?1")
////    List<Subscription> findSubscriptionsByUserId(int registrantId);
}

