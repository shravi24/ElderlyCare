package com.cdac.project.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.cdac.project.entity.Meals;
import com.cdac.project.entity.ProductService;
import com.cdac.project.exception.ResourceNotFoundException;
import com.cdac.project.repository.ProductRepository;



@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ProductServiceController {
	
	@Autowired
	private ProductRepository ProductRepository;
	
//	-----------------------
//	Get all Product service Rest API
	
	@GetMapping("/Product")
	public List<ProductService>getAllProduct(){
		return ProductRepository.findAll();
	}
	
//	----------------------------------
//	create Product Rest API
	@PostMapping("/Product")
	public ProductService createProductService(@RequestBody ProductService productservice) {
		return ProductRepository.save(productservice);
	}
	
//	---------------------
//	get Product by id Rest API
	@GetMapping("/Product/{id}")
	public ResponseEntity<ProductService> getProductServiceById(@PathVariable Long id) {
	
		ProductService productservice = ProductRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Product Not Exists with id"+id));
		return ResponseEntity.ok(productservice);
	}
	
//	--------------------------------------
//	update employee REST API
	
	@PutMapping("/Product/{id}")
	public ResponseEntity<ProductService>updateProductService(@PathVariable long id,@RequestBody ProductService productserviceDetails){

		ProductService productservice = ProductRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Product Not Exists with id"+id));
//		productservice.setServiceId(productserviceDetails.getServiceId());
		productservice.setName(productserviceDetails.getName());
//		
//		
		ProductService updateProductService =ProductRepository.save(productservice);
		return ResponseEntity.ok(updateProductService);
		

		
	
	}
	
//	----------------------------------------------------------
//	Delete Product REST API
	@DeleteMapping("/Product/{id}")
	public ResponseEntity<Map<String ,Boolean>>deleteProductService(@PathVariable Long id){
		ProductService productservice = ProductRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Product Not Exists with id"+id));
		
		ProductRepository.delete(productservice);
		Map<String,Boolean> response = new HashMap();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
	

}

