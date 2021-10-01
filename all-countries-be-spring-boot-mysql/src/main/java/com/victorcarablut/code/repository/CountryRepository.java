package com.victorcarablut.code.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.victorcarablut.code.model.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, Integer> {
	
	@Query(value = "SELECT * FROM all_countries.countries ORDER BY RAND()", nativeQuery = true)
	List<Country> findAll();

}
