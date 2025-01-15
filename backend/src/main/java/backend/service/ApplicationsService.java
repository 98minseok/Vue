package backend.service;

import java.util.List;

import backend.domain.Applications;
import backend.repository.ApplicationsRepository;

public class ApplicationsService {

	
	private ApplicationsRepository applicationsRepository;
	
	public ApplicationsService(ApplicationsRepository applicationsRepository) {
		// TODO Auto-generated constructor stub
		this.applicationsRepository = applicationsRepository;
	}
	
	public void save(Applications applications) {
		applicationsRepository.save(applications);
	}
	public List<Applications> getAllApplications(){
		
		return applicationsRepository.findAll();
	}
}
