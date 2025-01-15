package backend.domain;

public class Applications {
	
	private long id;
	
	private String name;
	
	private String content;
	
	private String url;

	private String image;
	
	public Applications() {
		// TODO Auto-generated constructor stub
	}
	
	public Applications(long id, String name, String content, String url, String image) {
		super();
		this.id = id;
		this.name = name;
		this.content = content;
		this.url = url;
		this.image = image;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
	
	
}
