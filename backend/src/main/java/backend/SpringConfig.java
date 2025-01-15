package backend;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import backend.repository.ApplicationsJdbcRepository;
import backend.repository.ApplicationsLocalRepository;
import backend.repository.ApplicationsRepository;
import backend.service.ApplicationsService;

@Configuration
public class SpringConfig {

	
	@Bean
	ApplicationsService applicationsService() {
		return new ApplicationsService(applicationsRepository());
	}
	
	@Bean
	ApplicationsRepository applicationsRepository() {
		return new ApplicationsLocalRepository();
	}
}
