package com.cdac.project.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="product_service")
public class ProductService {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	
	private Integer serviceId=4;
	
	@Column(name="name")
	private String name;
	
	//@OneToOne(fetch = FetchType.LAZY)
  //  @JoinColumn(name = "id")
   // private Service service;
	
//	----------------------------------------------------
	
	public ProductService() {
		
	}
	
//	----------------------------------------------------

		
	
//	---------------------------------------------
	public long getId() {
		return id;
	}
	public ProductService(Integer serviceId, String name) {
	super();
	this.serviceId = serviceId;
	this.name = name;
}

	public void setId(long id) {
		this.id = id;
	}
	public Integer getServiceId() {
		return serviceId;
	}
	public void setServiceId(Integer serviceId) {
		this.serviceId = serviceId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	

}
