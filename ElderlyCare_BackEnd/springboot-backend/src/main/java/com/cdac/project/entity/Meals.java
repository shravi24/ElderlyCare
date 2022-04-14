package com.cdac.project.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name= "meal_service" )
public class Meals {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	
	private long ServiceId=3;
	
	
	private String name;
	
	public Meals() {
		
	}
	
	public Meals(String name) {
		super();
		this.name = name;
	}

	public Meals(long id, long serviceId, String name) {
		super();
		this.id = id;
		this.ServiceId = serviceId;
		this.name = name;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getServiceId() {
		return ServiceId;
	}
	public void setServiceId(long serviceId) {
		this.ServiceId = serviceId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
}
