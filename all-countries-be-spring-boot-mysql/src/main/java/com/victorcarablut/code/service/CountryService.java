package com.victorcarablut.code.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.victorcarablut.code.model.Country;
import com.victorcarablut.code.repository.CountryRepository;

@Service
public class CountryService {
	
	@Autowired
	private CountryRepository countryRepository;
	
	public List<Country> findAllCountries() {
		return countryRepository.findAll();
	}
	
}
