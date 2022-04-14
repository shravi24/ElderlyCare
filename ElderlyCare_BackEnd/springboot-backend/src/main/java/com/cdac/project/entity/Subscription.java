package com.cdac.project.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "subscriptions")
public class Subscription {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;


	
	@Column(name = "registrant_id")
	private String registrantId;

	@Column(columnDefinition = "TINYINT(1)")

	private boolean assistant_service;

	@Column(columnDefinition = "TINYINT(1)")

	private boolean doctor_service;

	@Column(columnDefinition = "TINYINT(1)")

	private boolean meal_service;

	@Column(columnDefinition = "TINYINT(1)")

	private boolean products_service;

	@Column(name = "totalcost")
	private long totalcost;

	public Subscription() {
		super();
	}

	public Subscription(long id, boolean assistant_service, boolean doctor_service, boolean meal_service,
			boolean products_service, long totalcost) {
		super();
		this.id = id;
		this.assistant_service = assistant_service;
		this.doctor_service = doctor_service;
		this.meal_service = meal_service;
		this.products_service = products_service;
		this.totalcost = totalcost;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public boolean isAssistant_service() {
		return assistant_service;
	}

	public void setAssistant_service(boolean assistant_service) {
		this.assistant_service = assistant_service;
	}

	public boolean isDoctor_service() {
		return doctor_service;
	}

	public void setDoctor_service(boolean doctor_service) {
		this.doctor_service = doctor_service;
	}

	public boolean isMeal_service() {
		return meal_service;
	}

	public void setMeal_service(boolean meal_service) {
		this.meal_service = meal_service;
	}

	public boolean isProducts_service() {
		return products_service;
	}

	public void setProducts_service(boolean products_service) {
		this.products_service = products_service;
	}

	public long getTotalcost() {
		return totalcost;
	}

	public void setTotalcost(long totalcost) {
		this.totalcost = totalcost;
	}

	@Override
	public String toString() {
		return "Subscription [id=" + id + ", assistant_service=" + assistant_service + ", doctor_service="
				+ doctor_service + ", meal_service=" + meal_service + ", products_service=" + products_service
				+ ", totalcost=" + totalcost + "]";
	}

}
