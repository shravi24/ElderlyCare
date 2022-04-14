package com.cdac.project.action;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.entity.Subscription;

import com.cdac.project.repository.subscriptionRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api")

public class SubscriptionController
{
	@Autowired
	private subscriptionRepository  subscriptionsRepository;
	
	//Get all subscriptions
	@GetMapping("/subscriptions")
	public List<Subscription> getAllSubscriptions()
	{
		return subscriptionsRepository.findAll();
	}

	//Get subscription by id
	@GetMapping("/subscriptions/{id}")
	public ResponseEntity<Subscription> getSubscriptionsById(@PathVariable Long id)
	{
		System.out.println(id);
		Subscription subscriptions =  subscriptionsRepository.findById(id).orElseThrow();
		return ResponseEntity.ok(subscriptions);
	}

	//Add subscription to database
	@PostMapping("/offer/add")
	public Subscription postMethodName(@RequestBody Subscription subscriptions)
	{
		return subscriptionsRepository.save(subscriptions);
	}


	//Get the last subscription added by user and return to the front
     @GetMapping("/subscriptions/recentone/{registrantId}")
     public Long getRecentSubscriptionId(@PathVariable Long registrantId)
     {
    	 System.out.println(registrantId);
    	 return subscriptionsRepository.findSubscriptionByUserId(registrantId);
  }
	
	
	
}
