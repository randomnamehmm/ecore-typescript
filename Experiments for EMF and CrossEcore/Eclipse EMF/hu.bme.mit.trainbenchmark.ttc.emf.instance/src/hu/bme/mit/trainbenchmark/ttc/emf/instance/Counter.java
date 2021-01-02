package hu.bme.mit.trainbenchmark.ttc.emf.instance;

public class Counter {
	
	private int no_eobj;
	private int no_ref;
	
	public Counter() {
		no_eobj = 0;
		no_ref = 0;
	}
	
	public int get_number_of_eobjects() {
		return no_eobj;
	}
	
	public void set_number_of_eobjects(int new_value) {
		no_eobj = new_value;
	}
	
	public void increase_number_of_eobjects_by_n(int n) {
		no_eobj += n;
	}
	
	public int get_number_of_references() {
		return no_ref;
	}
	
	public void set_number_of_references(int new_value) {
		no_ref = new_value;
	}
	
	public void increase_number_of_references_by_n(int n) {
		no_ref += n;
	}

}
