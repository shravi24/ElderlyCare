package com.cdac.project.entity;




import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="service")
public class Service {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;
	
	@Column(name="service_name")
	private String serviceName;
	
	@Column(name="price")
	private Integer price;
	
//	@OneToOne(mappedBy = "service", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//  private ProductService productservice;
//	-------------------------------------------------------------------------------------
//	
//	@OneToOne(mappedBy = "service", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    private AssistantService assistantservice;
	
	public Service() {
		
	}
//--------------------------------------------------------------
	public Service(String servicename, Integer price) {
		super();
		this.serviceName = servicename;
		this.price = price;
	}
//	----------------------------------------------------
	public long getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getServiceName() {
		return serviceName;
	}
	public void setServiceName(String service_name) {
		this.serviceName = service_name;
	}
	public Integer getPrice() {
		return price;
	}
	public void setPrice(Integer price) {
		this.price = price;
	}
	
	

}
