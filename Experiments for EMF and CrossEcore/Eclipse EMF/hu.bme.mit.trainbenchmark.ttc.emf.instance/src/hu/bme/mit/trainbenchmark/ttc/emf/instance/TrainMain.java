package hu.bme.mit.trainbenchmark.ttc.emf.instance;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;

import org.eclipse.emf.common.util.Diagnostic;
import org.eclipse.emf.common.util.URI;
import org.eclipse.emf.compare.Comparison;
import org.eclipse.emf.compare.Diff;
import org.eclipse.emf.compare.EMFCompare;
import org.eclipse.emf.compare.match.IMatchEngine;
import org.eclipse.emf.compare.match.impl.MatchEngineFactoryImpl;
import org.eclipse.emf.compare.match.impl.MatchEngineFactoryRegistryImpl;
import org.eclipse.emf.compare.scope.DefaultComparisonScope;
import org.eclipse.emf.compare.scope.IComparisonScope;
import org.eclipse.emf.compare.utils.UseIdentifiers;
import org.eclipse.emf.ecore.resource.Resource;
import org.eclipse.emf.ecore.resource.ResourceSet;
import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.ecore.EReference;
import org.eclipse.emf.ecore.resource.impl.ResourceSetImpl;
import org.eclipse.emf.ecore.xmi.XMIResource;
import org.eclipse.emf.ecore.xmi.impl.XMIResourceFactoryImpl;
import org.eclipse.emf.ecore.xmi.impl.XMIResourceImpl;

import hu.bme.mit.trainbenchmark.ttc.railway.RailwayPackage;

import org.eclipse.emf.ecore.util.Diagnostician;

public class TrainMain {
    public static void main(String[] args) {
    	// wird benötigt für eine der dependencies für EMF Compare
    	Logger.getRootLogger().setLevel(Level.WARN);  	
    	
    	
    	
    	String seed = "58617367495977272l";
    	String size = "4";
    	
    	List<EObject> instance = loadFromXMIFile("instances/" + seed + "/" + seed + "_" + size + "/" + "generated_train_benchmark.xmi");
    	List<EObject> instance2 = loadFromXMIFile("instances/" + seed + "/" + seed + "_" + size + "/" + "crossecore_serialized_train_benchmark.xmi");
    	saveToXMIFile(instance2, "instances/" + seed + "/" + seed + "_" + size + "/" + "emf_serialized_train_benchmark.xmi");
    	
    	// Vergleich der beiden Instanzen (XMI)
    	// List<Diff> diff = compare(url1, url2);
    	List<Diff> diff = compare(instance, instance2);
    	System.out.println("Experiment 1");
    	System.out.println("Unterschiede TrainBenchmark und CrossEcore: " + diff.size());
    	/*
    	for (int i = 0; i < diff.size(); i++) {
    		System.out.println(diff.get(i));
    	}
    	*/
    	
    	System.out.println("\nExperiment 2");
    	List<EObject> instance3 = loadFromXMIFile("instances/" + seed + "/" + seed + "_" + size + "/" + "emf_serialized_train_benchmark.xmi");
    	List<EObject> instance4 = loadFromXMIFile("instances/" + seed + "/" + seed + "_" + size + "/" + "crossecore_serialized_train_benchmark2.xmi");

    	List<Diff> diff2 = compare(instance2, instance3);
    	System.out.println("Unterschiede CrossEcore und EMF: " + diff2.size());
    	/*
    	for (int i = 0; i < diff2.size(); i++) {
    		System.out.println(diff2.get(i));
    	}
    	*/
    	
    	List<Diff> diff3 = compare(instance, instance3);
    	System.out.println("Unterschiede Trainbenchmark und EMF: " + diff3.size());
    	/*
    	for (int i = 0; i < diff3.size(); i++) {
    		System.out.println(diff3.get(i));
    	}
    	*/
    	
    	List<Diff> diff4 = compare(instance3, instance4);
    	System.out.println("Unterschiede EMF und CrossEcore2: " + diff4.size());
    	/*
    	for (int i = 0; i < diff4.size(); i++) {
    		System.out.println(diff4.get(i));
    	}
    	*/
    	
    	List<Diff> diff5 = compare(instance2, instance4);
    	System.out.println("Unterschiede CrossEcore und CrossEcore2: " + diff5.size());
    	/*
    	for (int i = 0; i < diff5.size(); i++) {
    		System.out.println(diff5.get(i));
    	}
    	*/
    	
    	List<Diff> diff6 = compare(instance, instance4);
    	System.out.println("Unterschiede Trainbenchmark und CrossEcore2: " + diff6.size());
    	/*
    	for (int i = 0; i < diff6.size(); i++) {
    		System.out.println(diff6.get(i));
    	}
    	*/
    	
    	System.out.println("");
    	Counter counter = countEObjectsAndReferences(instance);
    	System.out.println("Train Benchmark      Objekte: " + counter.get_number_of_eobjects() + "	Referenzen: " + counter.get_number_of_references());
    	Counter counter2 = countEObjectsAndReferences(instance2);
    	System.out.println("CrossEcore           Objekte: " + counter2.get_number_of_eobjects() + "	Referenzen: " + counter2.get_number_of_references());
    	Counter counter3 = countEObjectsAndReferences(instance3);
    	System.out.println("EMF                  Objekte: " + counter3.get_number_of_eobjects() + "	Referenzen: " + counter3.get_number_of_references());
    	Counter counter4 = countEObjectsAndReferences(instance4);
    	System.out.println("CrossEcore2          Objekte: " + counter4.get_number_of_eobjects() + "	Referenzen: " + counter4.get_number_of_references());
    	
    }
    
	
    private static List<Diff> compare(List<EObject> instance1, List<EObject> instance2 /*, String instance1, String instance2*/) {
    	// URI uri1 = URI.createFileURI(instance1);
    	// URI uri2 = URI.createFileURI(instance2);
    	ResourceSet rs1 = new ResourceSetImpl();
    	ResourceSet rs2 = new ResourceSetImpl();
    	
        rs1.getResourceFactoryRegistry().getExtensionToFactoryMap().put(
            	Resource.Factory.Registry.DEFAULT_EXTENSION, new XMIResourceFactoryImpl());
        rs2.getResourceFactoryRegistry().getExtensionToFactoryMap().put(
            	Resource.Factory.Registry.DEFAULT_EXTENSION, new XMIResourceFactoryImpl());
    	
    	// rs1.getResource(uri1, true);
    	// rs2.getResource(uri2, true);
        Resource resource1 = rs1.createResource(URI.createURI(""));
        Resource resource2 = rs2.createResource(URI.createURI(""));
        for (EObject element1 : instance1) {
            resource1.getContents().add(element1);
        }
        for (EObject element2 : instance2) {
            resource2.getContents().add(element2);
        }

        // die UUIDs sollen keine Diffs mehr verursachen!
    	IMatchEngine.Factory factory = new MatchEngineFactoryImpl(UseIdentifiers.NEVER);
    	IMatchEngine.Factory.Registry registry = new MatchEngineFactoryRegistryImpl();
    	registry.add(factory);
    	// IComparisonScope scope = new DefaultComparisonScope(rs1, rs2, null);
    	IComparisonScope scope = new DefaultComparisonScope(resource1, resource2, null);
    	Comparison comparison = EMFCompare.builder().setMatchEngineFactoryRegistry(registry)
    			.build().compare(scope);
    	return comparison.getDifferences();
    }
    
    
    public static List<EObject> loadFromXMI(String xmi /*, String URL*/) {
    	
    	long start = System.nanoTime();
    	
    	if (xmi.equals("")) {
    		return null;
    	}
    	
    	RailwayPackage.eINSTANCE.eClass();
    	
    	Resource.Factory.Registry reg =
    			Resource.Factory.Registry.INSTANCE;
    	Map<String, Object> m = reg.getExtensionToFactoryMap();
    	m.put("webpage", new XMIResourceFactoryImpl());
    	
    	ResourceSet resSet = new ResourceSetImpl();
    	List<EObject> instance = new ArrayList<EObject>();
    	
        resSet.getResourceFactoryRegistry().getExtensionToFactoryMap().put(
            	Resource.Factory.Registry.DEFAULT_EXTENSION, new XMIResourceFactoryImpl());
    	Resource resource = null;
    	ByteArrayInputStream input = new ByteArrayInputStream(xmi.getBytes());
        
        try {
        	// resource = resSet.getResource(URI.createURI(URL), true);
        	resource = resSet.createResource(URI.createURI(""));
        	resource.load(input, Collections.EMPTY_MAP);
        } catch (Exception e) {
        	System.out.println(e.getMessage());
        	return null;
        }
        
    	for (EObject element : resource.getContents()) {
    		instance.add(element);
    	}
    	
    	if (!validate_correctness(instance)) {
    		return null;
    	}
    	
    	long end = System.nanoTime();
    	// System.out.println("Ladezeit: " + ((end - start)/1000000000.0));
    	
    	return instance;
    }
    
    
    public static List<EObject> loadFromXMIFile(String URL) {
    	
    	long start = System.nanoTime();
    	
    	if (URL.equals("")) {
    		return null;
    	}
    	
    	RailwayPackage.eINSTANCE.eClass();
    	
    	Resource.Factory.Registry reg =
    			Resource.Factory.Registry.INSTANCE;
    	Map<String, Object> m = reg.getExtensionToFactoryMap();
    	m.put("webpage", new XMIResourceFactoryImpl());
    	
    	ResourceSet resSet = new ResourceSetImpl();
    	List<EObject> instance = new ArrayList<EObject>();
    	
        resSet.getResourceFactoryRegistry().getExtensionToFactoryMap().put(
            	Resource.Factory.Registry.DEFAULT_EXTENSION, new XMIResourceFactoryImpl());
    	Resource resource = null;
        
        try {
        	resource = resSet.getResource(URI.createURI(URL), true);
        	resource.load(Collections.EMPTY_MAP);
        } catch (Exception e) {
        	System.out.println(e.getMessage());
        	return null;
        }
        
    	for (EObject element : resource.getContents()) {
    		instance.add(element);
    	}
    	
    	if (!validate_correctness(instance)) {
    		return null;
    	}
    	
    	long end = System.nanoTime();
    	// System.out.println("Ladezeit: " + ((end - start)/1000000000.0));
    	
    	return instance;
    }
    
    
    public static String saveToXMI(List<EObject> ecore_instance_to_serialize) {
    	
    	long start = System.nanoTime();
    	
    	if(null == ecore_instance_to_serialize) {
    		return "";
    	}
    	
    	if (!validate_correctness(ecore_instance_to_serialize)) {
    		return "";
    	}
    	
        ResourceSet resSet = new ResourceSetImpl();

        resSet.getResourceFactoryRegistry().getExtensionToFactoryMap().put(
        	Resource.Factory.Registry.DEFAULT_EXTENSION, new XMIResourceFactoryImpl() {
        		  @Override
        		  public Resource createResource(URI uri) {
        		    return new XMIResourceImpl(uri) {
		    			@Override
		    			protected boolean useUUIDs() {
		    				return true;
		    			}
        		    };
        		  }
        	});
        
        Resource resource = resSet.createResource(URI.createURI(""));
        for (EObject element : ecore_instance_to_serialize) {
            resource.getContents().add(element);
        }
        
        ByteArrayOutputStream output = new ByteArrayOutputStream();
        
        try {
        	Map<String, Boolean> options = new HashMap<String, Boolean>();
            options.put(XMIResource.OPTION_USE_XMI_TYPE, Boolean.TRUE);
    		options.put(XMIResource.OPTION_SAVE_TYPE_INFORMATION, Boolean.TRUE);
			resource.save(output, options);
			
			long end = System.nanoTime();
	    	// System.out.println("Speicherzeit: " + ((end - start)/1000000000.0));
			
			return output.toString();
		} catch (IOException e) {
			System.out.println(e.getMessage());
			System.out.println("");
	        return "";
		}
        
    }
    
    
    public static boolean saveToXMIFile(List<EObject> ecore_instance_to_serialize, String URL) {
    	
    	long start = System.nanoTime();
    	
    	if(null == ecore_instance_to_serialize) {
    		return false;
    	}
    	
    	if (!validate_correctness(ecore_instance_to_serialize)) {
    		return false;
    	}
    	
        ResourceSet resSet = new ResourceSetImpl();

        resSet.getResourceFactoryRegistry().getExtensionToFactoryMap().put(
        	Resource.Factory.Registry.DEFAULT_EXTENSION, new XMIResourceFactoryImpl() {
        		  @Override
        		  public Resource createResource(URI uri) {
        		    return new XMIResourceImpl(uri) {
		    			@Override
		    			protected boolean useUUIDs() {
		    				return true;
		    			}
        		    };
        		  }
        	});
        
        Resource resource = resSet.createResource(URI.createURI(URL));

        for (EObject element : ecore_instance_to_serialize) {
            resource.getContents().add(element);
        }
        
        try {
        	Map<String, Boolean> options = new HashMap<String, Boolean>();
            options.put(XMIResource.OPTION_USE_XMI_TYPE, Boolean.TRUE);
    		options.put(XMIResource.OPTION_SAVE_TYPE_INFORMATION, Boolean.TRUE);
            resource.save(options);
            
            long end = System.nanoTime();
	    	// System.out.println("Speicherzeit: " + ((end - start)/1000000000.0));
            
            return true;
        } catch (IOException e) {
        	System.out.println(e.getMessage());
        	System.out.println("");
        	return false;
        }
        
    }
    
    
    /*
     * Validate syntactic and semantic correctness
     * referential integrity of bidirectional references is validated in generated code
     */
    
    private static boolean validate_correctness(List<EObject> ecore_instance) {
    	for (EObject element : ecore_instance) {
        	Diagnostic diagnostic = Diagnostician.INSTANCE.validate(element);
        	if (diagnostic.getSeverity() != Diagnostic.OK) {
            	System.out.println(diagnostic.getMessage());
            	for (Diagnostic child: diagnostic.getChildren()) {
            		System.out.println(child.getMessage());
            	}
        		return false;
        	}
    	}
    	
    	return true;
    }
    
    
    private static Counter countEObjectsAndReferences(List<EObject> ecore_instance) {
    	Counter counter = new Counter();
    	
    	for (EObject eobject : ecore_instance) {
    		counter.increase_number_of_eobjects_by_n(1);
    		EClass eclass = eobject.eClass();
    		List<EReference> references = eclass.getEAllReferences();
    		for (EReference ref : references) {
    			if (ref.isMany()) {
    				counter.increase_number_of_references_by_n(((List<EObject>)eobject.eGet(ref)).size());
    				if (ref.isContainment()) {
    					Counter counter_containment = countEObjectsAndReferences((List<EObject>)eobject.eGet(ref));
    					counter.increase_number_of_eobjects_by_n(counter_containment.get_number_of_eobjects());
    					counter.increase_number_of_references_by_n(counter_containment.get_number_of_references());
    				}
    			} else {
    				counter.increase_number_of_references_by_n(1);
    				if (ref.isContainment()) {
    					List<EObject> temp = new ArrayList<EObject>();
    					temp.add((EObject)eobject.eGet(ref));
    					Counter counter_containment = countEObjectsAndReferences(temp);
    					counter.increase_number_of_eobjects_by_n(counter_containment.get_number_of_eobjects());
    					counter.increase_number_of_references_by_n(counter_containment.get_number_of_references());
    				}
    			}
    		}
    	}
    	
    	return counter;
    }
    
    
}