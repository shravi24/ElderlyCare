package com.cdac.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.project.entity.AssistantService;

@Repository
public interface AssistantRepository extends JpaRepository<AssistantService, Long> {

}
