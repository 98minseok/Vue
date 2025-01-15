package backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import backend.domain.Applications;
import backend.repository.ApplicationsLocalRepository;
import backend.repository.ApplicationsRepository;
import backend.service.ApplicationsService;

@SpringBootApplication
public class BackendApplication {

	@Autowired
	public ApplicationsService applicationsService;
	
	
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

}
