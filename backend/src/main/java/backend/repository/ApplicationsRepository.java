package backend.repository;

import java.util.List;

import backend.domain.Applications;

public interface ApplicationsRepository {
	
	public void save(Applications applications);
	public List<Applications> findAll();
}
