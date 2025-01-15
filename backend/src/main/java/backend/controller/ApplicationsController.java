package backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import backend.domain.Applications;
import backend.service.ApplicationsService;

@Controller
@RestController
public class ApplicationsController {
	
	private ApplicationsService applicationsService;
	
	@Autowired
	public ApplicationsController(ApplicationsService applicationsService) {
		this.applicationsService = applicationsService;
	}
	
	@GetMapping("/applications")
	public ResponseEntity<Object> getAllApplications(){
		System.out.println("여기왔음");
		
		Map<String, Object> response = new HashMap<>();
        response.put("data", applicationsService.getAllApplications());
        
		return ResponseEntity.ok(response);
	}
	
	@PostMapping("/applications")
	public String saveApplications(@RequestBody Applications application) {
		System.out.println(application.getContent());
		applicationsService.save(application);
		return "Success";
	}
}
