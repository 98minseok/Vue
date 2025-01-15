package backend.service;

import static org.assertj.core.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import backend.domain.Applications;
import backend.repository.ApplicationsLocalRepository;
import backend.repository.ApplicationsRepository;

public class ApplicationsServiceTest {
	
	@Autowired
	ApplicationsService applicationsService;
	
	@Autowired
	ApplicationsRepository applicationsRepository;
	
	@BeforeEach
	public void beforeEach() {
		applicationsRepository = new ApplicationsLocalRepository();
		applicationsService = new ApplicationsService(applicationsRepository);
	}
	
	@Test
	public void save() {
		Applications applications = new Applications();
		applications.setContent("Test Content");
		applications.setName("Test Name");
		applications.setUrl("Test Url");
		applicationsService.save(applications);
		
		List<Applications> list = applicationsService.getAllApplications();
		Applications contentObject = list.get(0);
		assertThat(contentObject).isEqualTo(applications);
	}
}
