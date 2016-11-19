package com.madSckillsExeption.repositories;

import com.madSckillsExeption.entities.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "users", path = "api/users")
public interface UserRestRepository extends JpaRepository<User, Long>{
}