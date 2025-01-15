package backend.repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import backend.domain.Applications;

public class ApplicationsJdbcRepository implements ApplicationsRepository {

	private Map<Long, Applications> applicationsData = new HashMap<>();
	private Long sequence = 0L;
	
	@Override
	public void save(Applications applications) {
		applicationsData.put(sequence++,applications);
	}

	@Override
	public List<Applications> findAll() {
		// TODO Auto-generated method stub
		return new ArrayList<>(applicationsData.values());
	}
	
}
