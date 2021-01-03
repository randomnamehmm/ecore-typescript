package com.vogella.emf.webpage.instance;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
// import java.io.Console;
// import java.io.File;
import java.io.IOException;
// import java.io.StringWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;

import org.eclipse.emf.common.util.Diagnostic;
// import org.eclipse.emf.common.util.TreeIterator;
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
import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.ecore.resource.impl.ResourceSetImpl;
import org.eclipse.emf.ecore.xmi.XMIResource;
import org.eclipse.emf.ecore.xmi.impl.XMIResourceFactoryImpl;
import org.eclipse.emf.ecore.xmi.impl.XMIResourceImpl;
// import org.eclipse.emf.ecore.xmi.util.XMLProcessor;
// import org.emfjson.jackson.module.EMFModule;
// import org.emfjson.jackson.resource.JsonResource;
// import org.emfjson.jackson.resource.JsonResourceFactory;
import org.eclipse.emf.ecore.util.Diagnostician;

// import com.fasterxml.jackson.databind.ObjectMapper;
// import com.fasterxml.jackson.databind.SerializationFeature;
import com.vogella.emf.webpage.model.webpage.*;
// import com.vogella.emf.webpage.model.webpage.impl.*;

public class CreateSaveTester {
    public static void main(String[] args) {
    	// String url1 = "webpage/webpage.xmi";
    	// String url2 = "webpage/webpage2.xmi";
    	String savedToXMI;
    	
    	// wird benötigt für eine der dependencies für EMF Compare
    	Logger.getRootLogger().setLevel(Level.WARN);

    	
        // List<EObject> instance = setUpModelInstance();
    	
    	// savedToXMI = saveToXMI(instance /*, url1*/);
    	// List<EObject> instance2 = loadFromXMI(savedToXMI /*, url2*/);
    	
    	// if (null == instance2) {
    	// 	return;
    	// }
    	
    	List<EObject> instance = loadFromXMIFile("../fr.inria.atlanmod.instantiator/webpage/result0_1000.xmi");
    	
    	List<EObject> instance2 = loadFromXMIFile("../fr.inria.atlanmod.instantiator/webpage/crossecore_result0_1000.xmi");
    	
    	// Vergleich der beiden Instanzen (XMI)
    	// List<Diff> diff = compare(url1, url2);
    	List<Diff> diff = compare(instance, instance2);
    	System.out.println("Anzahl an Unterscheidungen zwischen der gespeicherten und gelesenen XMI Instanz: " + diff.size());
    	for (int i = 0; i < diff.size(); i++) {
    		System.out.println(diff.get(i));
    	}
    }
    
    
	private static List<EObject> setUpModelInstance() {
    	WebpagePackage.eINSTANCE.eClass();
    	WebpageFactory factory = WebpageFactory.eINSTANCE;
    	
    	List<EObject> instance = new ArrayList<EObject>();
    	
    	Website website = factory.createWebsite();
    	Website website2 = factory.createWebsite();
    	Category category = factory.createCategory();
    	Category category2 = factory.createCategory();
    	Article article = factory.createArticle();
    	Article article2 = factory.createArticle();
    	Article article3 = factory.createArticle();
    	Picture picture = factory.createPicture();
    	Picture picture2 = factory.createPicture();
    	Picture picture3 = factory.createPicture();
    	Chapter chapter = factory.createChapter();
    	Chapter chapter2 = factory.createChapter();
    	Chapter chapter3 = factory.createChapter();
    	Source source1 = factory.createSource();
    	Source source2 = factory.createSource();
    	Source source3 = factory.createSource();
    	Person person = factory.createPerson();
    	Student student = factory.createStudent();
    	
    	website.setName("website");
    	website.setTitle("website title");
    	website.setDescription("website description");
    	website.setNumber(1.0);
    	website.getLinks().add("www.google.de");
    	website.getLinks().add("www.kit.edu");
    	website2.setName("website2");
    	website2.setTitle("website title2");
    	website2.setDescription("website description2");
    	website2.setNumber(2.0);
    	website2.getLinks().add("www.facebook.de");
    	
    	category.setName("category");
    	category.setNumber((short)1);
    	category2.setName("category2");
    	category2.setNumber((short)2);
    	
    	article.setName("article");
    	article.setArticletype(ArticleType.STUDY);
    	article.getFlags().add(true);
    	article.getFlags().add(false);
    	article.setNumber((float)1.0);
    	article2.setName("article2");
    	article2.setArticletype(ArticleType.REVIEW);
    	article2.getFlags().add(true);
    	article2.setNumber((float)2.0);
    	article3.setName("article3");
    	article3.setArticletype(ArticleType.REVIEW);
    	
    	picture.setName("picture");
    	picture.getInformation().add('a');
    	picture.getInformation().add('b');
    	picture.getInformation().add('c');
    	picture.setNumber(1);
    	picture.getHash().add(true);
    	picture.getHash().add(false);
    	picture2.setName("picture2");
    	picture2.getInformation().add('x');
    	picture2.getInformation().add('y');
    	picture2.getInformation().add('z');
    	picture2.setNumber(2);
    	picture2.getHash().add(true);
    	picture3.setName("picture3");
    	picture3.getInformation().add('w');
    	picture3.setNumber(3);
    	
    	chapter.getTitle().add("Title");
    	chapter.getTitle().add("Subtitle");
    	chapter.setSubSection(false);
    	chapter.getLetters().add('l');
    	chapter.getLetters().add('e');
    	chapter.getLetters().add('t');
    	chapter2.getTitle().add("Title2");
    	chapter2.getTitle().add("Subtitle2");
    	chapter2.setSubSection(false);
    	chapter2.getLetters().add('w');
    	chapter2.getLetters().add('o');
    	chapter2.getLetters().add('r');
    	chapter2.getLetters().add('d');
    	chapter3.getTitle().add("Title3");
    	chapter3.getLetters().add('y');
    	
    	
    	source1.setTitle("source");
    	source1.setUrl("source url");
    	source1.getAuthors().add("This was once");
    	source1.getAuthors().add("revealed to me");
    	source1.getAuthors().add("in a dream");
    	source1.getPage_no().add(1);
    	source1.getPage_no().add(2);
    	source2.setTitle("source2");
    	source2.setUrl("source url2");
    	source2.getAuthors().add("I was there");
    	source2.getAuthors().add("3000 years ago");
    	source2.getPage_no().add(3);
    	source3.setTitle("source3");
    	source3.setUrl("source url3");
    	source3.getAuthors().add("Dude trust me");
    	source3.getPage_no().add(7);
    	
    	person.getName().add("Erster Vorname");
    	person.getName().add("Zweiter Vorname");
    	person.setSurname("Nachname");
    	person.setAge((short)28);
    	person.getAccess_key().add('a');
    	person.getAccess_key().add('e');
    	person.getAccess_key().add('s');
    	
    	student.getName().add("Peter");
    	student.getName().add("Christos");
    	student.setSurname("Digas");
    	student.setAge((short)24);
    	student.getAccess_key().add('t');
    	student.getAccess_key().add('f');
    	student.setMatrikelnr(1780794);
    	student.getGrades().add((float)2.0);
    	student.getGrades().add((float)2.3);
    	student.getGrades().add((float)2.7);
    	
    	article.getAuthors().add(person);
    	article.getAuthors().add(student);
    	article.getSources().add(source1);
    	article.getChapters().add(chapter);
    	article.setPicture(picture);
    	article.getRelated().add(article2);
    	article2.getAuthors().add(student);
    	article2.getSources().add(source2);
    	article2.getSources().add(source3);
    	article2.getChapters().add(chapter2);
    	article2.setPicture(picture2);
    	article2.getRelated().add(article);
    	article3.getAuthors().add(student);
    	article3.getSources().add(source2);
    	article3.getChapters().add(chapter3);
    	article3.setPicture(picture3);
    	article3.getRelated().add(article2);
    	person.getArticles().add(article);
    	student.getArticles().add(article);
    	student.getArticles().add(article2);
    	student.getArticles().add(article3);
    	category.getArticles().add(article);
    	category.getArticles().add(article2);
    	category2.getArticles().add(article3);
    	website.getPictures().add(picture);
    	website.getPictures().add(picture2);
    	website.getCategories().add(category);
    	website2.getPictures().add(picture3);
    	website2.getCategories().add(category2);
    	
    	instance.add(website2);
    	instance.add(person);
    	instance.add(website);
    	instance.add(student);
    	instance.add(source1);
    	instance.add(source2);
    	instance.add(source3);

    	return instance;
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
    	
    	if (xmi.equals("")) {
    		return null;
    	}
    	
    	WebpagePackage.eINSTANCE.eClass();
    	
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
    	
    	return instance;
    }
    
    
    public static List<EObject> loadFromXMIFile(/*String xmi,*/ String URL) {
    	
    	/*
    	if (xmi.equals("")) {
    		return null;
    	}
    	*/
    	
    	WebpagePackage.eINSTANCE.eClass();
    	
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
    	
    	return instance;
    }
    
    
    public static String saveToXMI(List<EObject> ecore_instance_to_serialize) {
    	
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
			return output.toString();
		} catch (IOException e) {
			System.out.println(e.getMessage());
			System.out.println("");
	        return "";
		}
        
    }
    
    
    public static boolean saveToXMIFile(List<EObject> ecore_instance_to_serialize, String URL) {
    	
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
    
    
    
    
    /*
    private static EObject loadFromJSON(String URL) {
    	ResourceSet resourceSet = new ResourceSetImpl();
    	resourceSet.getResourceFactoryRegistry().getExtensionToFactoryMap()
    	.put("json", new JsonResourceFactory());
    	Resource resource = resourceSet.createResource(URI.createFileURI(URL));
    	
    	try {
			resource.load(null);
		} catch (IOException e) {
			System.out.println("error: not a valid .json file!");
			return null;
		}
    	
    	
    	// TODO: check all EObjects for referential integrity (i.e. can every reference be correctly resolved)
    	for (TreeIterator<EObject> i = resource.getAllContents(); i.hasNext();) {
    		for (EObject eobj : i.next().eCrossReferences()) {
    			if (eobj.eIsProxy() || eobj.eResource() == null) {
    				// return null;
    			}
    		}
    	}

    	return (EObject)resource.getContents().get(0);
    }
    
    private static void saveToJSON(EObject instance_to_serialize, String URL) {
		ObjectMapper mapper = new ObjectMapper();
		EMFModule emfmodule = new EMFModule();
		// force the JSON to use the @id tag
		emfmodule.configure(EMFModule.Feature.OPTION_USE_ID, true);
		
		mapper.configure(SerializationFeature.INDENT_OUTPUT, true);
		mapper.registerModule(emfmodule);
		// could also configure Date like in EMFModule setupDefaultMapper()
		
		
    	ResourceSet resourceSet = new ResourceSetImpl();
    	
    	resourceSet.getResourceFactoryRegistry().getExtensionToFactoryMap()
    	.put("json", new JsonResourceFactory(mapper) {
    		@Override
    		public Resource createResource(URI uri) {
    			return new JsonResource(uri, getMapper()) {
    				@Override
    				protected boolean useUUIDs() {
    					return true;
    				};
    			};
    		}
    	});
    	
    	Resource resource = resourceSet.createResource(URI.createFileURI(URL));
    	resource.getContents().add(instance_to_serialize);
    	try {
			resource.save(null);
		} catch (IOException e) {
			
		}
    }
    */
    
	// saveToJSON(web, "webpage/webpage.json");
	// Web web3 = (Web)loadFromJSON("webpage/webpage2.json");

	
	/*
	URI uri1 = URI.createFileURI("webpage/webpage.json");
	URI uri2 = URI.createFileURI("webpage/webpage2.json");
	Resource.Factory.Registry.INSTANCE.getExtensionToFactoryMap().put("json", new JsonResourceFactory());
	ResourceSet resourceSet1 = new ResourceSetImpl();
	ResourceSet resourceSet2 = new ResourceSetImpl();
	resourceSet1.getResource(uri1,  true);
	resourceSet2.getResource(uri2, true);
	IComparisonScope scope = new DefaultComparisonScope(resourceSet1,resourceSet2, null);
	Comparison comparison = EMFCompare.builder().build().compare(scope);
	List<Diff> differences = comparison.getDifferences();
	System.out.println("Differences: " + differences.size());
	*/
    
}