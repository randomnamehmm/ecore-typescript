package com.vogella.emf.webpage.instance;

import java.util.ArrayList;
import java.util.List;

import org.eclipse.emf.ecore.EObject;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import com.vogella.emf.webpage.model.webpage.Article;
import com.vogella.emf.webpage.model.webpage.ArticleType;
import com.vogella.emf.webpage.model.webpage.Category;
import com.vogella.emf.webpage.model.webpage.Chapter;
import com.vogella.emf.webpage.model.webpage.Person;
import com.vogella.emf.webpage.model.webpage.Picture;
import com.vogella.emf.webpage.model.webpage.Source;
import com.vogella.emf.webpage.model.webpage.Student;
import com.vogella.emf.webpage.model.webpage.WebpageFactory;
import com.vogella.emf.webpage.model.webpage.WebpagePackage;
import com.vogella.emf.webpage.model.webpage.Website;

public class Tests {
	
	WebpageFactory factory = WebpageFactory.eINSTANCE;
	List<EObject> eobjects;
	
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
    	WebpagePackage.eINSTANCE.eClass();
	}
	
	@Before
	public void setUp() throws Exception {
		eobjects = new ArrayList<EObject>();
	}

	@Test
	public void testClassSave() {
		Person person = factory.createPerson();
		
		eobjects.add(person);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test01.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testSingleStringAttributeSave() {
		Person person = factory.createPerson();
		person.setSurname("Surname");
		
		eobjects.add(person);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test02.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testMultiStringAttributeSave() {
		Source source = factory.createSource();
		source.getAuthors().add("Author1");
		source.getAuthors().add("Author2");
		
		eobjects.add(source);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test03.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test 
	public void testSingleShortAttributeSave() {
		Person person = factory.createPerson();
		person.setAge((short)27);
		
		eobjects.add(person);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test04.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testSingleLongAttributeSave() {
		Student student = factory.createStudent();
		student.setMatrikelnr(123);
		
		eobjects.add(student);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test05.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testSingleIntAttributeSave() {
		Picture picture = factory.createPicture();
		picture.setNumber(123);
		
		eobjects.add(picture);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test06.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testMultiIntAttributeSave() {
		Source source = factory.createSource();
		source.getPage_no().add(-1);
		source.getPage_no().add(2);
		
		eobjects.add(source);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test07.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testSingleFloatAttributeSave() {
		Article article = factory.createArticle();
		Person person = factory.createPerson();
		article.setNumber((float)1.2);
		Picture picture = factory.createPicture();
		article.setPicture(picture);
		article.getAuthors().add(person);
		
		eobjects.add(article);
		eobjects.add(picture);
		eobjects.add(person);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test08.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testMultiFloatAttributeSave() {
		Student student = factory.createStudent();
		student.getGrades().add((float) -2.0);
		student.getGrades().add((float) 2.3);
		
		eobjects.add(student);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test09.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testSingleDoubleAttributeSave() {
		Website website = factory.createWebsite();
		website.setNumber(1.0);
		Picture picture = factory.createPicture();
		website.getPictures().add(picture);
		
		eobjects.add(website);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test10.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testMultiCharAttributeSave() {
		Person person = factory.createPerson();
		person.getAccess_key().add('a');
		person.getAccess_key().add('b');
		
		eobjects.add(person);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test11.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testSingleBooleanAttributeSave() {
		Chapter chapter = factory.createChapter();
		chapter.setSubSection(true);
		
		eobjects.add(chapter);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test12.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testMultiBooleanAttributeSave() {
		Picture picture = factory.createPicture();
		picture.getHash().add(true);
		picture.getHash().add(false);
		
		eobjects.add(picture);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test13.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testEnumAttributeSave() {
		Article article = factory.createArticle();
		Picture picture = factory.createPicture();
		Person person = factory.createPerson();
		article.setPicture(picture);
		article.setArticletype(ArticleType.STUDY);
		article.getAuthors().add(person);
		
		eobjects.add(article);
		eobjects.add(picture);
		eobjects.add(person);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test14.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testSingleContainmentSave() {
		Website website = factory.createWebsite();
		Picture picture = factory.createPicture();
		website.getPictures().add(picture);
		
		eobjects.add(website);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test15.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testMultiContainmentSave() {
		Website website = factory.createWebsite();
		Picture picture = factory.createPicture();
		Category category = factory.createCategory();
		Category category2 = factory.createCategory();
		website.getPictures().add(picture);
		website.getCategories().add(category);
		website.getCategories().add(category2);
		
		eobjects.add(website);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test16.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	

	@Test
	public void testSingleReferenceSave() {
		Article article = factory.createArticle();
		Picture picture = factory.createPicture();
		Person person = factory.createPerson();
		article.setPicture(picture);
		article.getAuthors().add(person);
		
		eobjects.add(article);
		eobjects.add(picture);
		eobjects.add(person);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test17.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testMultiReferenceSave() {
		Article article = factory.createArticle();
		Picture picture = factory.createPicture();
		Person person = factory.createPerson();
		Source source = factory.createSource();
		Source source2 = factory.createSource();
		article.setPicture(picture);
		article.getAuthors().add(person);
		article.getSources().add(source);
		article.getSources().add(source2);
		
		eobjects.add(article);
		eobjects.add(picture);
		eobjects.add(person);
		eobjects.add(source);
		eobjects.add(source2);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test18.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testSingleBidirectionalReferenceSave() {
		Article article = factory.createArticle();
		Picture picture = factory.createPicture();
		Student student = factory.createStudent();
		article.setPicture(picture);
		article.getAuthors().add(student);
		student.getArticles().add(article);
		
		eobjects.add(article);
		eobjects.add(picture);
		eobjects.add(student);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test19.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testMultiBidirectionalReferenceSave() {
		Article article = factory.createArticle();
		Article article2 = factory.createArticle();
		Picture picture = factory.createPicture();
		article.setPicture(picture);
		article2.setPicture(picture);
		Person person = factory.createPerson();
		Student student = factory.createStudent();
		article.getAuthors().add(person);
		article.getAuthors().add(student);
		article2.getAuthors().add(student);
		person.getArticles().add(article);
		student.getArticles().add(article);
		student.getArticles().add(article2);
		
		eobjects.add(article);
		eobjects.add(article2);
		eobjects.add(picture);
		eobjects.add(person);
		eobjects.add(student);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test20.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testMultiReferenceSameClassSave() {
		Article article = factory.createArticle();
		Article article2 = factory.createArticle();
		Article article3 = factory.createArticle();
		Picture picture = factory.createPicture();
		Person person = factory.createPerson();
		article.setPicture(picture);
		article2.setPicture(picture);
		article3.setPicture(picture);
		article.getAuthors().add(person);
		article2.getAuthors().add(person);
		article3.getAuthors().add(person);
		article.getRelated().add(article2);
		article.getRelated().add(article3);
		
		eobjects.add(article);
		eobjects.add(article2);
		eobjects.add(article3);
		eobjects.add(picture);
		eobjects.add(person);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test21.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testSelfReferenceSave() {
		Article article = factory.createArticle();
		Picture picture = factory.createPicture();
		Person person = factory.createPerson();
		article.setPicture(picture);
		article.getRelated().add(article);
		article.getAuthors().add(person);
		
		eobjects.add(article);
		eobjects.add(picture);
		eobjects.add(person);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test22.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	
	@Test
	public void testincorrectAttributeMulitplicitySave() {
		Person person = factory.createPerson();
		for (int i = 0; i < 257; i++) {
			person.getAccess_key().add((char)i);
		}
		
		eobjects.add(person);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test23.xmi");
		Assert.assertEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testincorrectReferenceMultiplicitySave() {
		Article article = factory.createArticle();
		
		eobjects.add(article);
		
		// fehlendes Bild und Autoren
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test24.xmi");
		Assert.assertEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	
	@Test
	public void testincorrectContainmentMultiplicitySave() {
		Website website = factory.createWebsite();
		
		eobjects.add(website);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test25.xmi");
		Assert.assertEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testincorrectBidirectionalReferenceSave() {
		Article article = factory.createArticle();
		Article article2 = factory.createArticle();
		Person person = factory.createPerson();
		Person person2 = factory.createPerson();
		Picture picture = factory.createPicture();
		article.setPicture(picture);
		article2.setPicture(picture);
		article.getAuthors().add(person);
		article2.getAuthors().add(person2);
		person.getArticles().add(article2);
		person2.getArticles().add(article);
		
		eobjects.add(article);
		eobjects.add(article2);
		eobjects.add(picture);
		eobjects.add(person);
		eobjects.add(person2);
		// fehlende bidirektionale Referenzen werden automatisch hinzugefügt
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test26.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testmissingReferenceSave() {
		Person person = factory.createPerson();
		Article article = factory.createArticle();
		Picture picture = factory.createPicture();
		article.setPicture(picture);
		person.getArticles().add(article);
		article.getAuthors().add(person);
		
		eobjects.add(person);
		eobjects.add(picture);
		// wird gespeichert aber bei Assert equals trotzdem als "" angezeigt. Warum?
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test27.xmi");
		Assert.assertEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testMultipleContainmentSave() {
		Website website = factory.createWebsite();
		Website website2 = factory.createWebsite();
		Picture picture = factory.createPicture();
		website.getPictures().add(picture);
		website2.getPictures().add(picture);
		
		eobjects.add(website);
		eobjects.add(website2);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test28.xmi");
		Assert.assertEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testContainmentAndSeparateSave() {
		Website website = factory.createWebsite();
		Picture picture = factory.createPicture();
		website.getPictures().add(picture);
		
		eobjects.add(website);
		eobjects.add(picture);
		// wird gespeichert aber bei Assert equals trotzdem als "" angezeigt. Warum?
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test29.xmi");
		Assert.assertEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testMultipleSameClassSave() {
		Student student = factory.createStudent();
		
		eobjects.add(student);
		eobjects.add(student);
		
		// bei zwei gleichen EObjekten wird also nur eines serialisiert
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test30.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testMultipleSameContainmentSave() {
		Website website = factory.createWebsite();
		Picture picture = factory.createPicture();
		website.getPictures().add(picture);
		website.getPictures().add(picture);
		
		eobjects.add(website);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test31.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testMultipleSameReferenceSave() {
		Article article = factory.createArticle();
		Picture picture = factory.createPicture();
		Person person = factory.createPerson();
		article.setPicture(picture);
		article.getAuthors().add(person);
		Source source = factory.createSource();
		article.getSources().add(source);
		article.getSources().add(source);
		
		eobjects.add(article);
		eobjects.add(picture);
		eobjects.add(source);
		eobjects.add(person);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test32.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testInheritanceSave() {
		Person student = factory.createStudent();
		student.setAge((short)29);
		
		eobjects.add(student);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test33.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testFloatSpecialValuesSave() {
		Article article = factory.createArticle();
		Article article2 = factory.createArticle();
		Article article3 = factory.createArticle();
		Picture picture = factory.createPicture();
		Person person = factory.createPerson();
		article.getAuthors().add(person);
		article2.getAuthors().add(person);
		article3.getAuthors().add(person);
		article.setPicture(picture);
		article2.setPicture(picture);
		article3.setPicture(picture);
		article.setNumber(Float.NaN);
		article2.setNumber(Float.NEGATIVE_INFINITY);
		article3.setNumber(Float.POSITIVE_INFINITY);
		
		eobjects.add(article);
		eobjects.add(article2);
		eobjects.add(article3);
		eobjects.add(picture);
		eobjects.add(person);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test35.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	@Test
	public void testDoubleSpecialValuesSave() {
		Website website = factory.createWebsite();
		Website website2 = factory.createWebsite();
		Website website3 = factory.createWebsite();
		Picture picture = factory.createPicture();
		Picture picture2 = factory.createPicture();
		Picture picture3 = factory.createPicture();
		website.getPictures().add(picture);
		website2.getPictures().add(picture2);
		website3.getPictures().add(picture3);
		website.setNumber(Double.NaN);
		website2.setNumber(Double.NEGATIVE_INFINITY);
		website3.setNumber(Double.POSITIVE_INFINITY);
		
		eobjects.add(website);
		eobjects.add(website2);
		eobjects.add(website3);
		// CreateSaveTester.saveToXMIFile(eobjects, "webpage/tests/test36.xmi");
		Assert.assertNotEquals(CreateSaveTester.saveToXMI(eobjects), "");
	}
	
	
	

	
	
	
	@Test
	public void testClassLoad() {
		String t1 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Person xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OV7VADWJEeu78Z-yboWG0Q\"/>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t1));
	}
	
	@Test
	public void testSingleStringAttributeLoad() {
		String t2 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Person xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OVda8DWJEeu78Z-yboWG0Q\" surname=\"Surname\"/>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t2));
	}
	
	@Test
	public void testMultiStringAttributeLoad() {
		String t3 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Source xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OV-YUDWJEeu78Z-yboWG0Q\">\r\n" + 
				"  <authors>Author1</authors>\r\n" + 
				"  <authors>Author2</authors>\r\n" + 
				"</webpage:Source>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t3));
	}
	
	@Test
	public void testSingleShortAttributeLoad() {
		String t4 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Person xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OVugsDWJEeu78Z-yboWG0Q\" age=\"27\"/>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t4));
	}
	
	@Test
	public void testSingleLongAttributeLoad() {
		String t5 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Student xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OU1v4DWJEeu78Z-yboWG0Q\" matrikelnr=\"123\"/>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t5));
	}
	
	@Test
	public void testSingleIntAttributeLoad() {
		String t6 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Picture xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OVcM0DWJEeu78Z-yboWG0Q\" number=\"123\"/>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t6));
	}
	
	@Test
	public void testMultiIntAttributeLoad() {
		String t7 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Source xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OWTIcDWJEeu78Z-yboWG0Q\">\r\n" + 
				"  <page_no>-1</page_no>\r\n" + 
				"  <page_no>2</page_no>\r\n" + 
				"</webpage:Source>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t7));
	}
	
	@Test
	public void testSingleFloatAttributeLoad() {
		String t8 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Article xmi:id=\"_OV8jIDWJEeu78Z-yboWG0Q\" authors=\"_OV8jIjWJEeu78Z-yboWG0Q\" picture=\"_OV8jITWJEeu78Z-yboWG0Q\" number=\"1.2\"/>\r\n" + 
				"  <webpage:Picture xmi:id=\"_OV8jITWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Person xmi:id=\"_OV8jIjWJEeu78Z-yboWG0Q\" articles=\"_OV8jIDWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"</xmi:XMI>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t8));
	}
	
	@Test
	public void testMultiFloatAttributeLoad() {
		String t9 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Student xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OVHcsDWJEeu78Z-yboWG0Q\">\r\n" + 
				"  <grades>-2.0</grades>\r\n" + 
				"  <grades>2.3</grades>\r\n" + 
				"</webpage:Student>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t9));
	}
	
	@Test
	public void testSingleDoubleAttributeLoad() {
		String t10 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Website xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OWDQ0DWJEeu78Z-yboWG0Q\" number=\"1.0\">\r\n" + 
				"  <pictures xmi:id=\"_OWDQ0TWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"</webpage:Website>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t10));
	}
	
	@Test
	public void testMultiCharAttributeLoad() {
		String t11 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Person xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OVsrgDWJEeu78Z-yboWG0Q\">\r\n" + 
				"  <access_key>97</access_key>\r\n" + 
				"  <access_key>98</access_key>\r\n" + 
				"</webpage:Person>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t11));
	}
	
	@Test
	public void testSingleBooleanAttributeLoad() {
		String t12 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Chapter xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OVJ48DWJEeu78Z-yboWG0Q\" subSection=\"true\"/>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t12));
	}
	
	@Test
	public void testMultiBooleanAttributeLoad() {
		String t13 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Picture xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OVepEDWJEeu78Z-yboWG0Q\">\r\n" + 
				"  <hash>true</hash>\r\n" + 
				"  <hash>false</hash>\r\n" + 
				"</webpage:Picture>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t13));
	}
	
	@Test
	public void testEnumAttributeLoad() {
		String t14 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Article xmi:id=\"_OWQsMDWJEeu78Z-yboWG0Q\" authors=\"_OWQsMjWJEeu78Z-yboWG0Q\" picture=\"_OWQsMTWJEeu78Z-yboWG0Q\" articletype=\"STUDY\"/>\r\n" + 
				"  <webpage:Picture xmi:id=\"_OWQsMTWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Person xmi:id=\"_OWQsMjWJEeu78Z-yboWG0Q\" articles=\"_OWQsMDWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"</xmi:XMI>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t14));
	}
	
	@Test
	public void testSingleContainmentLoad() {
		String t15 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Website xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OVq2UDWJEeu78Z-yboWG0Q\">\r\n" + 
				"  <pictures xmi:id=\"_OVq2UTWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"</webpage:Website>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t15));
	}
	
	@Test
	public void testMultiContainmentLoad() {
		String t16 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Website xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OVw88DWJEeu78Z-yboWG0Q\">\r\n" + 
				"  <categories xmi:id=\"_OVw88TWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <categories xmi:id=\"_OVw88jWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <pictures xmi:id=\"_OVw88zWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"</webpage:Website>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t16));
	}
	
	@Test
	public void testSingleReferenceLoad() {
		String t17 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Article xmi:id=\"_OVWtQDWJEeu78Z-yboWG0Q\" authors=\"_OVWtQjWJEeu78Z-yboWG0Q\" picture=\"_OVWtQTWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Picture xmi:id=\"_OVWtQTWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Person xmi:id=\"_OVWtQjWJEeu78Z-yboWG0Q\" articles=\"_OVWtQDWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"</xmi:XMI>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t17));
	}
	
	@Test
	public void testMultiReferenceLoad() {
		String t18 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Article xmi:id=\"_OWIwYDWJEeu78Z-yboWG0Q\" authors=\"_OWIwYjWJEeu78Z-yboWG0Q\" picture=\"_OWIwYTWJEeu78Z-yboWG0Q\" sources=\"_OWIwYzWJEeu78Z-yboWG0Q _OWIwZDWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Picture xmi:id=\"_OWIwYTWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Person xmi:id=\"_OWIwYjWJEeu78Z-yboWG0Q\" articles=\"_OWIwYDWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Source xmi:id=\"_OWIwYzWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Source xmi:id=\"_OWIwZDWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"</xmi:XMI>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t18));
	}
	
	@Test
	public void testSingleBidirectionalReferenceLoad() {
		String t19 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Article xmi:id=\"_OWG7MDWJEeu78Z-yboWG0Q\" authors=\"_OWG7MjWJEeu78Z-yboWG0Q\" picture=\"_OWG7MTWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Picture xmi:id=\"_OWG7MTWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Student xmi:id=\"_OWG7MjWJEeu78Z-yboWG0Q\" articles=\"_OWG7MDWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"</xmi:XMI>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t19));
	}
	
	@Test
	public void testMultiBidirectionalReferenceLoad() {
		String t20 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Article xmi:id=\"_OWLMoDWJEeu78Z-yboWG0Q\" authors=\"_OWLMozWJEeu78Z-yboWG0Q _OWLMpDWJEeu78Z-yboWG0Q\" picture=\"_OWLMojWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Article xmi:id=\"_OWLMoTWJEeu78Z-yboWG0Q\" authors=\"_OWLMpDWJEeu78Z-yboWG0Q\" picture=\"_OWLMojWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Picture xmi:id=\"_OWLMojWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Person xmi:id=\"_OWLMozWJEeu78Z-yboWG0Q\" articles=\"_OWLMoDWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Student xmi:id=\"_OWLMpDWJEeu78Z-yboWG0Q\" articles=\"_OWLMoDWJEeu78Z-yboWG0Q _OWLMoTWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"</xmi:XMI>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t20));
	}
	
	@Test
	public void testMultiReferenceSameClassLoad() {
		String t21 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Article xmi:id=\"_OV5f0DWJEeu78Z-yboWG0Q\" authors=\"_OV5f1DWJEeu78Z-yboWG0Q\" picture=\"_OV5f0zWJEeu78Z-yboWG0Q\" related=\"_OV5f0TWJEeu78Z-yboWG0Q _OV5f0jWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Article xmi:id=\"_OV5f0TWJEeu78Z-yboWG0Q\" authors=\"_OV5f1DWJEeu78Z-yboWG0Q\" picture=\"_OV5f0zWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Article xmi:id=\"_OV5f0jWJEeu78Z-yboWG0Q\" authors=\"_OV5f1DWJEeu78Z-yboWG0Q\" picture=\"_OV5f0zWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Picture xmi:id=\"_OV5f0zWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Person xmi:id=\"_OV5f1DWJEeu78Z-yboWG0Q\" articles=\"_OV5f0DWJEeu78Z-yboWG0Q _OV5f0TWJEeu78Z-yboWG0Q _OV5f0jWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"</xmi:XMI>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t21));
	}
	
	@Test
	public void testSelfReferenceLoad() {
		String t22 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Article xmi:id=\"_OV_mcDWJEeu78Z-yboWG0Q\" authors=\"_OV_mcjWJEeu78Z-yboWG0Q\" picture=\"_OV_mcTWJEeu78Z-yboWG0Q\" related=\"_OV_mcDWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Picture xmi:id=\"_OV_mcTWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Person xmi:id=\"_OV_mcjWJEeu78Z-yboWG0Q\" articles=\"_OV_mcDWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"</xmi:XMI>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t22));
	}
	
	@Test
	public void testincorrectAttributeMulitplicityLoad() {
		String t23 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Person xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_7pU58DTuEeuvNaUlYvhjsA\">\r\n" + 
				"<access_key>0</access_key><access_key>1</access_key><access_key>2</access_key><access_key>3</access_key><access_key>4</access_key><access_key>5</access_key><access_key>6</access_key><access_key>7</access_key><access_key>8</access_key><access_key>9</access_key><access_key>10</access_key><access_key>11</access_key><access_key>12</access_key><access_key>13</access_key><access_key>14</access_key><access_key>15</access_key><access_key>16</access_key><access_key>17</access_key><access_key>18</access_key><access_key>19</access_key><access_key>20</access_key><access_key>21</access_key><access_key>22</access_key><access_key>23</access_key><access_key>24</access_key><access_key>25</access_key><access_key>26</access_key><access_key>27</access_key><access_key>28</access_key><access_key>29</access_key><access_key>30</access_key><access_key>31</access_key><access_key>32</access_key><access_key>33</access_key><access_key>34</access_key><access_key>35</access_key><access_key>36</access_key><access_key>37</access_key><access_key>38</access_key><access_key>39</access_key><access_key>40</access_key><access_key>41</access_key><access_key>42</access_key><access_key>43</access_key><access_key>44</access_key><access_key>45</access_key><access_key>46</access_key><access_key>47</access_key><access_key>48</access_key><access_key>49</access_key><access_key>50</access_key><access_key>51</access_key><access_key>52</access_key><access_key>53</access_key><access_key>54</access_key><access_key>55</access_key><access_key>56</access_key><access_key>57</access_key><access_key>58</access_key><access_key>59</access_key><access_key>60</access_key><access_key>61</access_key><access_key>62</access_key><access_key>63</access_key><access_key>64</access_key><access_key>65</access_key><access_key>66</access_key><access_key>67</access_key><access_key>68</access_key><access_key>69</access_key><access_key>70</access_key><access_key>71</access_key><access_key>72</access_key><access_key>73</access_key><access_key>74</access_key><access_key>75</access_key><access_key>76</access_key><access_key>77</access_key><access_key>78</access_key><access_key>79</access_key><access_key>80</access_key><access_key>81</access_key><access_key>82</access_key><access_key>83</access_key><access_key>84</access_key><access_key>85</access_key><access_key>86</access_key><access_key>87</access_key><access_key>88</access_key><access_key>89</access_key><access_key>90</access_key><access_key>91</access_key><access_key>92</access_key><access_key>93</access_key><access_key>94</access_key><access_key>95</access_key><access_key>96</access_key><access_key>97</access_key><access_key>98</access_key><access_key>99</access_key><access_key>100</access_key><access_key>101</access_key><access_key>102</access_key><access_key>103</access_key><access_key>104</access_key><access_key>105</access_key><access_key>106</access_key><access_key>107</access_key><access_key>108</access_key><access_key>109</access_key><access_key>110</access_key><access_key>111</access_key><access_key>112</access_key><access_key>113</access_key><access_key>114</access_key><access_key>115</access_key><access_key>116</access_key><access_key>117</access_key><access_key>118</access_key><access_key>119</access_key><access_key>120</access_key><access_key>121</access_key><access_key>122</access_key><access_key>123</access_key><access_key>124</access_key><access_key>125</access_key><access_key>126</access_key><access_key>127</access_key><access_key>128</access_key><access_key>129</access_key><access_key>130</access_key><access_key>131</access_key><access_key>132</access_key><access_key>133</access_key><access_key>134</access_key><access_key>135</access_key><access_key>136</access_key><access_key>137</access_key><access_key>138</access_key><access_key>139</access_key><access_key>140</access_key><access_key>141</access_key><access_key>142</access_key><access_key>143</access_key><access_key>144</access_key><access_key>145</access_key><access_key>146</access_key><access_key>147</access_key><access_key>148</access_key><access_key>149</access_key><access_key>150</access_key><access_key>151</access_key><access_key>152</access_key><access_key>153</access_key><access_key>154</access_key><access_key>155</access_key><access_key>156</access_key><access_key>157</access_key><access_key>158</access_key><access_key>159</access_key><access_key>160</access_key><access_key>161</access_key><access_key>162</access_key><access_key>163</access_key><access_key>164</access_key><access_key>165</access_key><access_key>166</access_key><access_key>167</access_key><access_key>168</access_key><access_key>169</access_key><access_key>170</access_key><access_key>171</access_key><access_key>172</access_key><access_key>173</access_key><access_key>174</access_key><access_key>175</access_key><access_key>176</access_key><access_key>177</access_key><access_key>178</access_key><access_key>179</access_key><access_key>180</access_key><access_key>181</access_key><access_key>182</access_key><access_key>183</access_key><access_key>184</access_key><access_key>185</access_key><access_key>186</access_key><access_key>187</access_key><access_key>188</access_key><access_key>189</access_key><access_key>190</access_key><access_key>191</access_key><access_key>192</access_key><access_key>193</access_key><access_key>194</access_key><access_key>195</access_key><access_key>196</access_key><access_key>197</access_key><access_key>198</access_key><access_key>199</access_key><access_key>200</access_key><access_key>201</access_key><access_key>202</access_key><access_key>203</access_key><access_key>204</access_key><access_key>205</access_key><access_key>206</access_key><access_key>207</access_key><access_key>208</access_key><access_key>209</access_key><access_key>210</access_key><access_key>211</access_key><access_key>212</access_key><access_key>213</access_key><access_key>214</access_key><access_key>215</access_key><access_key>216</access_key><access_key>217</access_key><access_key>218</access_key><access_key>219</access_key><access_key>220</access_key><access_key>221</access_key><access_key>222</access_key><access_key>223</access_key><access_key>224</access_key><access_key>225</access_key><access_key>226</access_key><access_key>227</access_key><access_key>228</access_key><access_key>229</access_key><access_key>230</access_key><access_key>231</access_key><access_key>232</access_key><access_key>233</access_key><access_key>234</access_key><access_key>235</access_key><access_key>236</access_key><access_key>237</access_key><access_key>238</access_key><access_key>239</access_key><access_key>240</access_key><access_key>241</access_key><access_key>242</access_key><access_key>243</access_key><access_key>244</access_key><access_key>245</access_key><access_key>246</access_key><access_key>247</access_key><access_key>248</access_key><access_key>249</access_key><access_key>250</access_key><access_key>251</access_key><access_key>252</access_key><access_key>253</access_key><access_key>254</access_key><access_key>255</access_key><access_key>256</access_key>\r\n" + 
				"</webpage:Person>";
		Assert.assertNull(CreateSaveTester.loadFromXMI(t23));
	}
	
	@Test
	public void testincorrectReferenceMultiplicityLoad() {
		String t24 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Article xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_r8XHQDTtEeuSVPhUdMjQ3Q\"/>";
		Assert.assertNull(CreateSaveTester.loadFromXMI(t24));
	}
	
	@Test
	public void testincorrectContainmentMultiplicityLoad() {
		String t25 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Website xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_X4UNUDTxEeuFys6VEc4WOg\"/>";
		Assert.assertNull(CreateSaveTester.loadFromXMI(t25));
	}
	
	@Test
	public void testincorrectBidirectionalReferenceLoad() {
		String t26 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Article xmi:id=\"_OVmk4DWJEeu78Z-yboWG0Q\" authors=\"_OVmk4zWJEeu78Z-yboWG0Q\" picture=\"_OVmk4jWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Article xmi:id=\"_OVmk4TWJEeu78Z-yboWG0Q\" picture=\"_OVmk4jWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Picture xmi:id=\"_OVmk4jWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Person xmi:id=\"_OVmk4zWJEeu78Z-yboWG0Q\" articles=\"_OVmk4TWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Person xmi:id=\"_OVmk5DWJEeu78Z-yboWG0Q\" articles=\"_OVmk4DWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"</xmi:XMI>";
		// im Gegensatz zum speichern werden beim laden nicht automatisch bidirektionale Referenzen angepasst
		Assert.assertNull(CreateSaveTester.loadFromXMI(t26));
	}
	
	@Test
	public void testmissingReferenceLoad() {
		String t27 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Person xmi:id=\"_CI7L4DT1EeuJqahhVh2ivw\" articles=\"_TEST4jT1EeuJqahhVh2ivw\"/>\r\n" + 
				"  <webpage:Picture xmi:id=\"_CI7L4TT1EeuJqahhVh2ivw\"/>\r\n" + 
				"</xmi:XMI>";
		Assert.assertNull(CreateSaveTester.loadFromXMI(t27));
	}

	@Test
	public void testMultipleContainmentLoad() {
		String t28 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Website xmi:id=\"_Ea1OADT-Eeuy-6z-kXSK-w\">\r\n" + 
				"    <pictures xmi:id=\"_Ea1OATT-Eeuy-6z-kXSK-w\"/>\r\n" + 
				"  </webpage:Website>\r\n" + 
				"  <webpage:Website xmi:id=\"_Ea1OAjT-Eeuy-6z-kXSK-w\">\r\n" + 
				"    <pictures xmi:id=\"_Ea1OATT-Eeuy-6z-kXSK-w\"/>\r\n" + 
				"  </webpage:Website>\r\n" + 
				"</xmi:XMI>";
		
		//ACHTUNG! Hier unterscheidet sich das Verhalten von safe und load!
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t28));
	}
	
	@Test
	public void testContainmentAndSeparateLoad() {
		String t29 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Website xmi:id=\"_YEcKQDWgEeuiRLkt8tJQnA\">\r\n" + 
				"      <pictures xmi:id=\"_YEcKQTWgEeuiRLkt8tJQnA\"/>\r\n" + 
				"  </webpage:Website>\r\n" + 
				"  <webpage:Picture xmi:id=\"_YEcKQTWgEeuiRLkt8tJQnA\"/>\r\n" + 
				"</xmi:XMI>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t29));
	}
	
	@Test
	public void testMultipleSameClassLoad() {
		String t30 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Student xmi:id=\"_tPFc8DT5EeuAP8PgtQG7XA\"/>\r\n" + 
				"  <webpage:Student xmi:id=\"_tPFc8DT5EeuAP8PgtQG7XA\"/>\r\n" + 
				"</xmi:XMI>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t30));
	}
	
	@Test
	public void testMultipleSameContainmentLoad() {
		String t31 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Website xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_BumjMDT8EeuC0ILVHZfbng\">\r\n" + 
				"  <pictures xmi:id=\"_BunKQDT8EeuC0ILVHZfbng\"/>\r\n" + 
				"  <pictures xmi:id=\"_BunKQDT8EeuC0ILVHZfbng\"/>\r\n" + 
				"</webpage:Website>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t31));
	}
	
	@Test
	public void testMultipleSameReferenceLoad() {
		String t32 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Article xmi:id=\"_2Yq9kDV7EeulSerH-1v9sA\" authors=\"_2Yq9kzV7EeulSerH-1v9sA\" picture=\"_2Yq9kTV7EeulSerH-1v9sA _2Yq9kTV7EeulSerH-1v9sA _2Yq9kTV7EeulSerH-1v9sA\" sources=\"_2Yq9kjV7EeulSerH-1v9sA _2Yq9kjV7EeulSerH-1v9sA\"/>\r\n" + 
				"  <webpage:Picture xmi:id=\"_2Yq9kTV7EeulSerH-1v9sA\"/>\r\n" + 
				"  <webpage:Source xmi:id=\"_2Yq9kjV7EeulSerH-1v9sA\"/>\r\n" + 
				"  <webpage:Person xmi:id=\"_2Yq9kzV7EeulSerH-1v9sA\" articles=\"_2Yq9kDV7EeulSerH-1v9sA\"/>\r\n" + 
				"</xmi:XMI>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t32));
	}
	
	@Test
	public void testInheritanceLoad() {
		String t33 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Student xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_NnTn0DUCEeur7KrFr2pF2A\" age=\"29\" matrikelnr=\"123\"/>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t33));
	}
	
	@Test
	public void nonexistentAttributesLoad() {
		String t34 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Person xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_NnTn0DUCEeur7KrFr2pF2A\" age=\"29\" memes=\"1\" matrikelnr=\"123\"/>";
	Assert.assertNull(CreateSaveTester.loadFromXMI(t34));
	}
	
	@Test
	public void testFloatSpecialValuesLoad() {
		String t35 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Article xmi:id=\"_OWfVsDWJEeu78Z-yboWG0Q\" authors=\"_OWfVtDWJEeu78Z-yboWG0Q\" picture=\"_OWfVszWJEeu78Z-yboWG0Q\" number=\"NaN\"/>\r\n" + 
				"  <webpage:Article xmi:id=\"_OWfVsTWJEeu78Z-yboWG0Q\" authors=\"_OWfVtDWJEeu78Z-yboWG0Q\" picture=\"_OWfVszWJEeu78Z-yboWG0Q\" number=\"-Infinity\"/>\r\n" + 
				"  <webpage:Article xmi:id=\"_OWfVsjWJEeu78Z-yboWG0Q\" authors=\"_OWfVtDWJEeu78Z-yboWG0Q\" picture=\"_OWfVszWJEeu78Z-yboWG0Q\" number=\"Infinity\"/>\r\n" + 
				"  <webpage:Picture xmi:id=\"_OWfVszWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Person xmi:id=\"_OWfVtDWJEeu78Z-yboWG0Q\" articles=\"_OWfVsDWJEeu78Z-yboWG0Q _OWfVsTWJEeu78Z-yboWG0Q _OWfVsjWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"</xmi:XMI>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t35));
	}
	
	@Test
	public void testDoubleSpecialValuesLoad() {
		String t36 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Website xmi:id=\"_OWEe8DWJEeu78Z-yboWG0Q\" number=\"NaN\">\r\n" + 
				"    <pictures xmi:id=\"_OWEe8TWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  </webpage:Website>\r\n" + 
				"  <webpage:Website xmi:id=\"_OWEe8jWJEeu78Z-yboWG0Q\" number=\"-Infinity\">\r\n" + 
				"    <pictures xmi:id=\"_OWEe8zWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  </webpage:Website>\r\n" + 
				"  <webpage:Website xmi:id=\"_OWEe9DWJEeu78Z-yboWG0Q\" number=\"Infinity\">\r\n" + 
				"    <pictures xmi:id=\"_OWEe9TWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  </webpage:Website>\r\n" + 
				"</xmi:XMI>";
		Assert.assertNotNull(CreateSaveTester.loadFromXMI(t36));
	}
	
	@Test
	public void testWrongClassReferenceTypeLoad() {
		String t37 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Article xmi:id=\"_OVWtQDWJEeu78Z-yboWG0Q\" authors=\"_OVWtQjWJEeu78Z-yboWG0Q _OVWtQTWJEeu78Z-yboWG0Q\" picture=\"_OVWtQTWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Picture xmi:id=\"_OVWtQTWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"  <webpage:Person xmi:id=\"_OVWtQjWJEeu78Z-yboWG0Q\" articles=\"_OVWtQDWJEeu78Z-yboWG0Q\"/>\r\n" + 
				"</xmi:XMI>";
		Assert.assertNull(CreateSaveTester.loadFromXMI(t37));
	}
	
	@Test
	public void testWrongClassContainmentTypeLoad() {
		String t38 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Website xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_tPRqMDT5EeuAP8PgtQG7XA\">\r\n" + 
				"  <pictures xmi:id=\"_tPRqMTT5EeuAP8PgtQG7XA\"/>\r\n" +
				"  <memes xmi:id=\"_memeMTT5EeuAP8PgtQG7XA\"/>\r\n" +
				"</webpage:Website>";
		Assert.assertNull(CreateSaveTester.loadFromXMI(t38));
	}
	
	@Test
	public void testWrongAttributeTypeLoad() {
		String t39 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Chapter xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_tPBykDT5EeuAP8PgtQG7XA\" subSection=\"yes\"/>";
	Assert.assertNull(CreateSaveTester.loadFromXMI(t39));
	}
	
	@Test
	public void testWrongContainmentInheritanceType() {
		String t42 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Website xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_BumjMDT8EeuC0ILVHZfbng\">\r\n" + 
				"  <pictures xmi:type=\"webpage:Picture\" xmi:id=\"_BunKQDT8EeuC0ILVHZfbng\" repeat=\"true\"/>\r\n" + 
				"  <pictures xmi:type=\"webpage:AnimatedPicture\" xmi:id=\"_CunDQDT8EeuC0ILVHZfbng\" repeat=\"true\"/>\r\n" + 
				"</webpage:Website>";
		Assert.assertNull(CreateSaveTester.loadFromXMI(t42));
	}
	
	
	
	
	
	
	
	
	@Test
	public void testClassSaveLoadComparison() {
		Person person = factory.createPerson();
		
		eobjects.add(person);
		String xmi1 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi1);
		
		boolean test = instance.get(0) instanceof Person;
		Assert.assertTrue(test);
	}

	@Test
	public void testSingleStringAttributeSaveLoadComparison() {
		Person person = factory.createPerson();
		person.setSurname("Surname");
		
		eobjects.add(person);
		String xmi2 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi2);
		
		boolean test = instance.get(0) instanceof Person && ((Person)instance.get(0)).getSurname().equals("Surname"); 
		Assert.assertTrue(test);
	}
	
	@Test
	public void testMultiStringAttributeSaveLoadComparison() {
		Source source = factory.createSource();
		source.getAuthors().add("Author1");
		source.getAuthors().add("Author2");
		
		eobjects.add(source);
		String xmi3 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi3);
		
		boolean test = instance.get(0) instanceof Source
				&& ((Source)instance.get(0)).getAuthors().contains("Author1") 
				&& ((Source)instance.get(0)).getAuthors().contains("Author2");
		Assert.assertTrue(test);
	}
	
	@Test 
	public void testSingleShortAttributeSaveLoadComparison() {
		Person person = factory.createPerson();
		person.setAge((short)27);
		
		eobjects.add(person);
		String xmi4 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi4);
		
		boolean test = instance.get(0) instanceof Person 
				&& ((Person)instance.get(0)).getAge() == (short)27;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testSingleLongAttributeSaveLoadComparison() {
		Student student = factory.createStudent();
		student.setMatrikelnr(123);
		
		eobjects.add(student);
		String xmi5 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi5);
		
		boolean test = instance.get(0) instanceof Student
				&& ((Student)instance.get(0)).getMatrikelnr() == 123;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testSingleIntAttributeSaveLoadComparison() {
		Picture picture = factory.createPicture();
		picture.setNumber(123);
		
		eobjects.add(picture);
		String xmi6 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi6);
		
		boolean test = instance.get(0) instanceof Picture
				&& ((Picture)instance.get(0)).getNumber() == 123;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testMultiIntAttributeSaveLoadComparison() {
		Source source = factory.createSource();
		source.getPage_no().add(-1);
		source.getPage_no().add(2);
		
		eobjects.add(source);
		String xmi7 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi7);
		
		boolean test = instance.get(0) instanceof Source
				&& ((Source)instance.get(0)).getPage_no().contains(-1)
				&& ((Source)instance.get(0)).getPage_no().contains(2);
		Assert.assertTrue(test);
	}
	
	@Test
	public void testSingleFloatAttributeSaveLoadComparison() {
		Article article = factory.createArticle();
		Person person = factory.createPerson();
		article.setNumber((float)1.2);
		Picture picture = factory.createPicture();
		article.setPicture(picture);
		article.getAuthors().add(person);
		
		eobjects.add(article);
		eobjects.add(picture);
		eobjects.add(person);
		String xmi8 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi8);
		
		boolean test = instance.get(0) instanceof Article
				&& ((Article)instance.get(0)).getNumber() == (float)1.2;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testMultiFloatAttributeSaveLoadComparison() {
		Student student = factory.createStudent();
		student.getGrades().add((float) -2.0);
		student.getGrades().add((float) 2.3);
		
		eobjects.add(student);
		String xmi9 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi9);
		
		boolean test = instance.get(0) instanceof Student
				&& ((Student)instance.get(0)).getGrades().contains((float)-2.0)
				&& ((Student)instance.get(0)).getGrades().contains((float)2.3);
		Assert.assertTrue(test);
	}
	
	@Test
	public void testSingleDoubleAttributeSaveLoadComparison() {
		Website website = factory.createWebsite();
		website.setNumber(1.0);
		Picture picture = factory.createPicture();
		website.getPictures().add(picture);
		
		eobjects.add(website);
		String xmi10 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi10);
		
		boolean test = instance.get(0) instanceof Website
				&& ((Website)instance.get(0)).getNumber() == 1.0;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testMultiCharAttributeSaveLoadComparison() {
		Person person = factory.createPerson();
		person.getAccess_key().add('a');
		person.getAccess_key().add('b');
		
		eobjects.add(person);
		String xmi11 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi11);
		
		boolean test = instance.get(0) instanceof Person
				&& ((Person)instance.get(0)).getAccess_key().contains('a')
				&& ((Person)instance.get(0)).getAccess_key().contains('b');
		Assert.assertTrue(test);
	}
	
	@Test
	public void testSingleBooleanAttributeSaveLoadComparison() {
		Chapter chapter = factory.createChapter();
		chapter.setSubSection(true);
		
		eobjects.add(chapter);
		String xmi12 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi12);
		
		boolean test = instance.get(0) instanceof Chapter 
				&& ((Chapter)instance.get(0)).isSubSection() == true;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testMultiBooleanAttributeSaveLoadComparison() {
		Picture picture = factory.createPicture();
		picture.getHash().add(true);
		picture.getHash().add(false);
		
		eobjects.add(picture);
		String xmi13 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi13);
		
		boolean test = instance.get(0) instanceof Picture
				&& ((Picture)instance.get(0)).getHash().contains(true)
				&& ((Picture)instance.get(0)).getHash().contains(false);
		Assert.assertTrue(test);
	}
	
	@Test
	public void testEnumAttributeSaveLoadComparison() {
		Article article = factory.createArticle();
		Picture picture = factory.createPicture();
		Person person = factory.createPerson();
		article.setPicture(picture);
		article.setArticletype(ArticleType.STUDY);
		article.getAuthors().add(person);
		
		eobjects.add(article);
		eobjects.add(picture);
		eobjects.add(person);
		String xmi14 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi14);
		
		boolean test = instance.get(0) instanceof Article
				&& ((Article)instance.get(0)).getArticletype() == ArticleType.STUDY;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testSingleContainmentSaveLoadComparison() {
		Website website = factory.createWebsite();
		Picture picture = factory.createPicture();
		website.getPictures().add(picture);
		
		eobjects.add(website);
		String xmi15 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi15);
		
		boolean test = instance.get(0) instanceof Website
				&& ((Website)instance.get(0)).getPictures().size() == 1;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testMultiContainmentSaveLoadComparison() {
		Website website = factory.createWebsite();
		Picture picture = factory.createPicture();
		Category category = factory.createCategory();
		Category category2 = factory.createCategory();
		website.getPictures().add(picture);
		website.getCategories().add(category);
		website.getCategories().add(category2);
		
		eobjects.add(website);
		String xmi16 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi16);
		
		boolean test = instance.get(0) instanceof Website
				&& ((Website)instance.get(0)).getCategories().size() == 2;
		Assert.assertTrue(test);
	}
	

	@Test
	public void testSingleReferenceSaveLoadComparison() {
		Article article = factory.createArticle();
		Picture picture = factory.createPicture();
		Person person = factory.createPerson();
		article.setPicture(picture);
		article.getAuthors().add(person);
		
		eobjects.add(article);
		eobjects.add(picture);
		eobjects.add(person);
		String xmi17 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi17);
		
		boolean test = instance.get(0) instanceof Article
				&& ((Article)instance.get(0)).getAuthors().size() == 1;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testMultiReferenceSaveLoadComparison() {
		Article article = factory.createArticle();
		Picture picture = factory.createPicture();
		Person person = factory.createPerson();
		Source source = factory.createSource();
		Source source2 = factory.createSource();
		article.setPicture(picture);
		article.getAuthors().add(person);
		article.getSources().add(source);
		article.getSources().add(source2);
		
		eobjects.add(article);
		eobjects.add(picture);
		eobjects.add(person);
		eobjects.add(source);
		eobjects.add(source2);
		String xmi18 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi18);
		
		boolean test = instance.get(0) instanceof Article
				&& ((Article)instance.get(0)).getSources().size() == 2 ;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testSingleBidirectionalReferenceSaveLoadComparison() {
		Article article = factory.createArticle();
		Picture picture = factory.createPicture();
		Student student = factory.createStudent();
		article.setPicture(picture);
		article.getAuthors().add(student);
		student.getArticles().add(article);
		
		eobjects.add(article);
		eobjects.add(picture);
		eobjects.add(student);
		String xmi19 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi19);
		
		boolean test = instance.get(0) instanceof Article
				&& ((Article)instance.get(0)).getAuthors().size() == 1 
				&& instance.get(2) instanceof Student 
				&& ((Student)instance.get(2)).getArticles().size() == 1;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testMultiBidirectionalReferenceSaveLoadComparison() {
		Article article = factory.createArticle();
		Article article2 = factory.createArticle();
		Picture picture = factory.createPicture();
		article.setPicture(picture);
		article2.setPicture(picture);
		Person person = factory.createPerson();
		Student student = factory.createStudent();
		article.getAuthors().add(person);
		article.getAuthors().add(student);
		article2.getAuthors().add(student);
		person.getArticles().add(article);
		student.getArticles().add(article);
		student.getArticles().add(article2);
		
		eobjects.add(article);
		eobjects.add(article2);
		eobjects.add(picture);
		eobjects.add(person);
		eobjects.add(student);
		String xmi20 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi20);
		
		boolean test = instance.get(0) instanceof Article
				&& ((Article)instance.get(0)).getAuthors().size() == 2
				&& instance.get(4) instanceof Student
				&& ((Student)instance.get(4)).getArticles().size() == 2;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testMultiReferenceSameClassSaveLoadComparison() {
		Article article = factory.createArticle();
		Article article2 = factory.createArticle();
		Article article3 = factory.createArticle();
		Picture picture = factory.createPicture();
		Person person = factory.createPerson();
		article.setPicture(picture);
		article2.setPicture(picture);
		article3.setPicture(picture);
		article.getAuthors().add(person);
		article2.getAuthors().add(person);
		article3.getAuthors().add(person);
		article.getRelated().add(article2);
		article.getRelated().add(article3);
		
		eobjects.add(article);
		eobjects.add(article2);
		eobjects.add(article3);
		eobjects.add(picture);
		eobjects.add(person);
		String xmi21 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi21);
		
		boolean test = instance.get(0) instanceof Article
				&& ((Article)instance.get(0)).getRelated().size() == 2
						&& ((Article)instance.get(0)).getRelated().get(0) instanceof Article
						&& ((Article)instance.get(0)).getRelated().get(1) instanceof Article;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testSelfReferenceSaveLoadComparison() {
		Article article = factory.createArticle();
		Picture picture = factory.createPicture();
		Person person = factory.createPerson();
		article.setName("test");
		article.setPicture(picture);
		article.getRelated().add(article);
		article.getAuthors().add(person);
		
		eobjects.add(article);
		eobjects.add(picture);
		eobjects.add(person);
		String xmi22 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi22);
		
		boolean test = instance.get(0) instanceof Article
				&& ((Article)instance.get(0)).getRelated().size() == 1
				&& ((Article)instance.get(0)).getRelated().get(0) instanceof Article
				&& ((Article)instance.get(0)).getRelated().get(0).getName().equals("test");
		Assert.assertTrue(test);
	}
	
	@Test
	public void testincorrectBidirectionalReferenceSaveLoadComparison() {
		Article article = factory.createArticle();
		Article article2 = factory.createArticle();
		Person person = factory.createPerson();
		Person person2 = factory.createPerson();
		Picture picture = factory.createPicture();
		article.setPicture(picture);
		article2.setPicture(picture);
		article.getAuthors().add(person);
		article2.getAuthors().add(person2);
		person.getArticles().add(article2);
		person2.getArticles().add(article);
		
		eobjects.add(article);
		eobjects.add(article2);
		eobjects.add(picture);
		eobjects.add(person);
		eobjects.add(person2);
		// fehlende bidirektionale Referenzen werden automatisch hinzugefügt
		String xmi26 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi26);
		
		boolean test = instance.get(0) instanceof Article
				&& ((Article)instance.get(0)).getAuthors().size() == 2
			    && instance.get(1) instanceof Article
				&& ((Article)instance.get(1)).getAuthors().size() == 2
				&& instance.get(3) instanceof Person
				&& ((Person)instance.get(3)).getArticles().size() == 2
				&& instance.get(4) instanceof Person
				&& ((Person)instance.get(4)).getArticles().size() == 2;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testMultipleSameClassSaveLoadComparison() {
		Student student = factory.createStudent();
		
		eobjects.add(student);
		eobjects.add(student);
		
		// bei zwei gleichen EObjekten wird also nur eines serialisiert
		String xmi30 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi30);
		
		boolean test = instance.size() == 1;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testMultipleSameContainmentSaveLoadComparison() {
		Website website = factory.createWebsite();
		Picture picture = factory.createPicture();
		website.getPictures().add(picture);
		website.getPictures().add(picture);
		
		eobjects.add(website);
		String xmi31 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi31);
		
		boolean test = instance.get(0) instanceof Website
				&& ((Website)instance.get(0)).getPictures().size() == 1;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testMultipleSameReferenceSaveLoadComparison() {
		Article article = factory.createArticle();
		Picture picture = factory.createPicture();
		Person person = factory.createPerson();
		article.setPicture(picture);
		article.getAuthors().add(person);
		Source source = factory.createSource();
		article.getSources().add(source);
		article.getSources().add(source);
		
		eobjects.add(article);
		eobjects.add(picture);
		eobjects.add(source);
		eobjects.add(person);
		String xmi32 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi32);
		
		boolean test = instance.get(0) instanceof Article
				&& ((Article)instance.get(0)).getSources().size() == 1;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testInheritanceSaveLoadComparison() {
		Person student = factory.createStudent();
		student.setAge((short)29);
		
		eobjects.add(student);
		String xmi33 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi33);
		
		boolean test = instance.get(0) instanceof Student
				&& ((Student)instance.get(0)).getAge() == 29;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testFloatSpecialValuesSaveLoadComparison() {
		Article article = factory.createArticle();
		Article article2 = factory.createArticle();
		Article article3 = factory.createArticle();
		Picture picture = factory.createPicture();
		Person person = factory.createPerson();
		article.getAuthors().add(person);
		article2.getAuthors().add(person);
		article3.getAuthors().add(person);
		article.setPicture(picture);
		article2.setPicture(picture);
		article3.setPicture(picture);
		article.setNumber(Float.NaN);
		article2.setNumber(Float.NEGATIVE_INFINITY);
		article3.setNumber(Float.POSITIVE_INFINITY);
		
		eobjects.add(article);
		eobjects.add(article2);
		eobjects.add(article3);
		eobjects.add(picture);
		eobjects.add(person);
		String xmi35 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi35);
		
		boolean test = instance.get(0) instanceof Article 
				&& Float.isNaN(((Article)instance.get(0)).getNumber())
				&& instance.get(1) instanceof Article 
				&& Float.isInfinite(((Article)instance.get(1)).getNumber())
				&& instance.get(2) instanceof Article 
				&& Float.isInfinite(((Article)instance.get(2)).getNumber());
		Assert.assertTrue(test);
	}
	
	@Test
	public void testDoubleSpecialValuesSaveLoadComparison() {
		Website website = factory.createWebsite();
		Website website2 = factory.createWebsite();
		Website website3 = factory.createWebsite();
		Picture picture = factory.createPicture();
		Picture picture2 = factory.createPicture();
		Picture picture3 = factory.createPicture();
		website.getPictures().add(picture);
		website2.getPictures().add(picture2);
		website3.getPictures().add(picture3);
		website.setNumber(Double.NaN);
		website2.setNumber(Double.NEGATIVE_INFINITY);
		website3.setNumber(Double.POSITIVE_INFINITY);
		
		eobjects.add(website);
		eobjects.add(website2);
		eobjects.add(website3);
		String xmi36 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi36);
		
		boolean test = instance.get(0) instanceof Website
				&& Double.isNaN(((Website)instance.get(0)).getNumber())
				&& instance.get(1) instanceof Website
				&& Double.isInfinite(((Website)instance.get(1)).getNumber())
				&& instance.get(2) instanceof Website
				&& Double.isInfinite(((Website)instance.get(2)).getNumber());
		Assert.assertTrue(test);
	}
	
	@Test
	public void testOrderedAttributeSaveLoadComparison() {
		Article article = factory.createArticle();
		Article article2 = factory.createArticle();
		Article article3 = factory.createArticle();
		Article article4 = factory.createArticle();
		Person person = factory.createPerson();
		Picture picture = factory.createPicture();
		article.getAuthors().add(person);
		article2.getAuthors().add(person);
		article3.getAuthors().add(person);
		article4.getAuthors().add(person);
		article.setPicture(picture);
		article2.setPicture(picture);
		article3.setPicture(picture);
		article4.setPicture(picture);
		article.setName("a1");
		article2.setName("a2");
		article3.setName("a3");
		article4.setName("a4");
		article.getRelated().add(article2);
		article.getRelated().add(article3);
		article.getRelated().add(article4);
		
		eobjects.add(article);
		eobjects.add(article2);
		eobjects.add(article3);
		eobjects.add(article4);
		eobjects.add(person);
		eobjects.add(picture);
		String xmi40 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi40);
		
		boolean test = instance.get(0) instanceof Article
				&& ((Article)instance.get(0)).getRelated().get(0).getName().equals("a2")
				&& ((Article)instance.get(0)).getRelated().get(1).getName().equals("a3")
				&& ((Article)instance.get(0)).getRelated().get(2).getName().equals("a4");
		Assert.assertTrue(test);
	}
	
	@Test
	public void testBigLongSaveLoadComparison() {
		Student student = factory.createStudent();
		student.setMatrikelnr(435510489098620210L);
		
		eobjects.add(student);
		String xmi41 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi41);
		
		boolean test = instance.get(0) instanceof Student
				&& ((Student)instance.get(0)).getMatrikelnr() == 435510489098620210L;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testOrderedReferenceSaveLoadComparison() {
		Article article = factory.createArticle();
		Picture picture = factory.createPicture();
		article.setPicture(picture);
		article.setName("x");
		Person person = factory.createPerson();
		Person person2 = factory.createPerson();
		Person person3 = factory.createPerson();
		person.setSurname("a");
		person2.setSurname("b");
		person3.setSurname("c");
		article.getAuthors().add(person);
		article.getAuthors().add(person2);
		article.getAuthors().add(person3);
		person.getArticles().add(article);
		person2.getArticles().add(article);
		person3.getArticles().add(article);
		
		eobjects.add(article);
		eobjects.add(picture);
		eobjects.add(person3);
		eobjects.add(person);
		eobjects.add(person2);
		String xmi43 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi43);
		
		boolean test = instance.get(0) instanceof Article
				&& instance.get(1) instanceof Picture
				&& instance.get(2) instanceof Person
				&& instance.get(3) instanceof Person
				&& instance.get(4) instanceof Person
				&& ((Article)instance.get(0)).getAuthors().get(0).getSurname().equals("a")
				&& ((Article)instance.get(0)).getAuthors().get(1).getSurname().equals("b")
				&& ((Article)instance.get(0)).getAuthors().get(2).getSurname().equals("c")
				&& ((Person)instance.get(2)).getArticles().get(0).getName().equals("x")
				&& ((Person)instance.get(3)).getArticles().get(0).getName().equals("x")
				&& ((Person)instance.get(4)).getArticles().get(0).getName().equals("x");
		Assert.assertTrue(test);
	}
	
	@Test
	public void testOrderedContainmentSaveLoadComparison() {
		Website website = factory.createWebsite();
		Picture picture = factory.createPicture();
		Picture picture2 = factory.createPicture();
		Picture picture3 = factory.createPicture();
		picture.setName("a");
		picture2.setName("b");
		picture3.setName("c");
		website.getPictures().add(picture);
		website.getPictures().add(picture2);
		website.getPictures().add(picture3);
		
		eobjects.add(website);
		String xmi44 = CreateSaveTester.saveToXMI(eobjects);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi44);
		
		boolean test = instance.get(0) instanceof Website
				&& ((Website)instance.get(0)).getPictures().get(0).getName().equals("a")
				&& ((Website)instance.get(0)).getPictures().get(1).getName().equals("b")
				&& ((Website)instance.get(0)).getPictures().get(2).getName().equals("c");
		Assert.assertTrue(test);
	}
	
	@Test
	public void testSpecialOrderedReferenceSaveLoadComparison() {
		Person person = factory.createPerson();
		Person person2 = factory.createPerson();
		Person person3 = factory.createPerson();
		person.setAge((short)1);
		person2.setAge((short)2);
		person3.setAge((short)3);
		Article article = factory.createArticle();
		Picture picture = factory.createPicture();
		article.setPicture(picture);
		article.getAuthors().add(person);
		article.getAuthors().add(person2);
		article.getAuthors().add(person3);

		person.getArticles().add(article);
		person2.getArticles().add(article);
		person3.getArticles().add(article);
		
		eobjects.add(person3);
		eobjects.add(person);
		eobjects.add(person2);
		eobjects.add(article);
		eobjects.add(picture);
		String xmi45 = CreateSaveTester.saveToXMI(eobjects);
		System.out.println(xmi45);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi45);
		
		boolean test = instance.get(3) instanceof Article
				&& ((Article)instance.get(3)).getAuthors().get(0).getAge() == 1
				&& ((Article)instance.get(3)).getAuthors().get(1).getAge() == 2
			    && ((Article)instance.get(3)).getAuthors().get(2).getAge() == 3;
		Assert.assertTrue(test);
	}
	
	
	
	
	
	
	
	@Test
	public void testClassLoadSaveCompare() {
		String t1 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Person xmi:id=\"1cf6b631-cac9-4d39-a08f-300ecf2f361d\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\"/>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t1);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Person;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testSingleStringAttributeLoadSaveCompare() {
		String t2 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Person xmi:id=\"09664bdb-d6e0-494e-b2ab-044797b61604\" surname=\"Surname\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\"/>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t2);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Person && ((Person)instance.get(0)).getSurname().equals("Surname"); 
		Assert.assertTrue(test);
	}
	
	@Test
	public void testMultiStringAttributeLoadSaveCompare() {
		String t3 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Source xmi:id=\"647c11b6-2132-4f6f-e69b-d88aa7d03f8d\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <authors>Author1</authors>\r\n" + 
				"    <authors>Author2</authors>\r\n" + 
				"</webpage:Source>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t3);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Source
				&& ((Source)instance.get(0)).getAuthors().contains("Author1") 
				&& ((Source)instance.get(0)).getAuthors().contains("Author2");
		Assert.assertTrue(test);
	}
	
	@Test
	public void testSingleShortAttributeLoadSaveCompare() {
		String t4 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Person xmi:id=\"3da2fc8d-a0cd-4f17-b691-6c2a8922e941\" age=\"27\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\"/>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t4);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Person 
				&& ((Person)instance.get(0)).getAge() == (short)27;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testSingleLongAttributeLoadSaveCompare() {
		String t5 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Student xmi:id=\"06fe7e6d-4109-4c9d-9c10-34b1812e301a\" matrikelnr=\"123\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\"/>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t5);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Student
				&& ((Student)instance.get(0)).getMatrikelnr() == 123;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testSingleIntAttributeLoadSaveCompare() {
		String t6 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Picture xmi:id=\"a35104bb-65f8-4129-a057-c78b09d481a7\" number=\"123\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\"/>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t6);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Picture
				&& ((Picture)instance.get(0)).getNumber() == 123;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testMultiIntAttributeLoadSaveCompare() {
		String t7 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Source xmi:id=\"d9c206d0-2cf4-44f2-a9a1-54357d398c18\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <page_no>-1</page_no>\r\n" + 
				"    <page_no>2</page_no>\r\n" + 
				"</webpage:Source>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t7);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Source
				&& ((Source)instance.get(0)).getPage_no().contains(-1)
				&& ((Source)instance.get(0)).getPage_no().contains(2);
		Assert.assertTrue(test);
	}
	
	@Test
	public void testSingleFloatAttributeLoadSaveCompare() {
		String t8 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <webpage:Article xmi:id=\"333ba83c-3a58-466d-b443-7130fda04462\" number=\"1.2\" authors=\"1ec56f4e-0108-4de1-ae79-6ec4706e8916\" picture=\"64926fe7-fbdb-48dd-f399-51516d5e0391\"/>\r\n" + 
				"    <webpage:Picture xmi:id=\"64926fe7-fbdb-48dd-f399-51516d5e0391\"/>\r\n" + 
				"    <webpage:Person xmi:id=\"1ec56f4e-0108-4de1-ae79-6ec4706e8916\" articles=\"333ba83c-3a58-466d-b443-7130fda04462\"/>\r\n" + 
				"</xmi:XMI>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t8);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Article
				&& ((Article)instance.get(0)).getNumber() == (float)1.2;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testMultiFloatAttributeLoadSaveCompare() {
		String t9 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Student xmi:id=\"26d956b3-90c5-4f67-e9ee-b7f399142aef\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <grades>-2</grades>\r\n" + 
				"    <grades>2.3</grades>\r\n" + 
				"</webpage:Student>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t9);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Student
				&& ((Student)instance.get(0)).getGrades().contains((float)-2.0)
				&& ((Student)instance.get(0)).getGrades().contains((float)2.3);
		Assert.assertTrue(test);
	}
	
	@Test
	public void testSingleDoubleAttributeLoadSaveCompare() {
		String t10 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Website xmi:id=\"ff8309dc-8c76-4c8d-e4fc-f09a05e24631\" number=\"1\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <pictures xmi:id=\"1ffd1279-8862-459c-9661-890419bd1aff\"/>\r\n" + 
				"</webpage:Website>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t10);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Website
				&& ((Website)instance.get(0)).getNumber() == 1.0;
		Assert.assertTrue(test);

	}
	
	@Test
	public void testMultiCharAttributeLoadSaveCompare() {
		String t11 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Person xmi:id=\"0bc874d8-28c5-48a3-ba5d-3b569547399e\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <access_key>97</access_key>\r\n" + 
				"    <access_key>98</access_key>\r\n" + 
				"</webpage:Person>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t11);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Person
				&& ((Person)instance.get(0)).getAccess_key().contains('a')
				&& ((Person)instance.get(0)).getAccess_key().contains('b');
		Assert.assertTrue(test);
	}
	
	@Test
	public void testSingleBooleanAttributeLoadSaveCompare() {
		String t12 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Chapter xmi:id=\"676a9b23-44e9-4d9e-fe8f-d7d814bbff92\" subSection=\"true\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\"/>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t12);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Chapter 
				&& ((Chapter)instance.get(0)).isSubSection() == true;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testMultiBooleanAttributeLoadSaveCompare() {
		String t13 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Picture xmi:id=\"ecff830e-d343-4bce-ab6c-2b3dc0c473db\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <hash>true</hash>\r\n" + 
				"    <hash>false</hash>\r\n" + 
				"</webpage:Picture>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t13);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Picture
				&& ((Picture)instance.get(0)).getHash().contains(true)
				&& ((Picture)instance.get(0)).getHash().contains(false);
		Assert.assertTrue(test);
	}
	
	@Test
	public void testEnumAttributeLoadSaveCompare() {
		String t14 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <webpage:Article xmi:id=\"1421bb6d-f18e-4268-da06-e8bf346856d2\" articletype=\"STUDY\" authors=\"7c0e6673-2bf2-430a-e8b0-05a1cb29c0ad\" picture=\"c6cb7159-b814-470c-aea4-ec1bc1694a4d\"/>\r\n" + 
				"    <webpage:Picture xmi:id=\"c6cb7159-b814-470c-aea4-ec1bc1694a4d\"/>\r\n" + 
				"    <webpage:Person xmi:id=\"7c0e6673-2bf2-430a-e8b0-05a1cb29c0ad\" articles=\"1421bb6d-f18e-4268-da06-e8bf346856d2\"/>\r\n" + 
				"</xmi:XMI>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t14);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Article
				&& ((Article)instance.get(0)).getArticletype() == ArticleType.STUDY;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testSingleContainmentLoadSaveCompare() {
		String t15 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Website xmi:id=\"fd6e2095-2115-464c-d629-433533965348\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <pictures xmi:id=\"c002f044-3bdf-47cf-c309-13a7a5a9e40e\"/>\r\n" + 
				"</webpage:Website>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t15);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Website
				&& ((Website)instance.get(0)).getPictures().size() == 1;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testMultiContainmentLoadSaveCompare() {
		String t16 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Website xmi:id=\"bbb65d82-d73d-4609-8d27-866d22ed196d\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <categories xmi:id=\"704fc979-7ea8-4e52-ed28-0c49a21118bf\"/>\r\n" + 
				"    <categories xmi:id=\"387f83a6-342c-46ed-afff-9efc985f2b3a\"/>\r\n" + 
				"    <pictures xmi:id=\"545cb65a-ebd4-44f3-f27b-97cfcef963c4\"/>\r\n" + 
				"</webpage:Website>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t16);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Website
				&& ((Website)instance.get(0)).getCategories().size() == 2;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testSingleReferenceLoadSaveCompare() {
		String t17 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <webpage:Article xmi:id=\"9e407b40-ba5d-45a6-8047-68cb69068113\" authors=\"fd610df5-4962-4014-d21c-dc68df97f583\" picture=\"e7e4e6a1-7e93-4bf1-f2f5-6a6b3f52c553\"/>\r\n" + 
				"    <webpage:Picture xmi:id=\"e7e4e6a1-7e93-4bf1-f2f5-6a6b3f52c553\"/>\r\n" + 
				"    <webpage:Person xmi:id=\"fd610df5-4962-4014-d21c-dc68df97f583\" articles=\"9e407b40-ba5d-45a6-8047-68cb69068113\"/>\r\n" + 
				"</xmi:XMI>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t17);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Article
				&& ((Article)instance.get(0)).getAuthors().size() == 1;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testMultiReferenceLoadSaveCompare() {
		String t18 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <webpage:Article xmi:id=\"cc39a545-0ec1-46ce-f61f-44ed189c3990\" authors=\"715f5cbc-0cb6-4cf6-bb5e-857a0daab469\" picture=\"5fd076af-fba3-4f06-d3ef-94ea79a7fbe3\" sources=\"de196a6f-74b4-49c1-f710-18ff8a47e293 989b1f83-4fb6-418e-9b88-b74bd60d6939\"/>\r\n" + 
				"    <webpage:Picture xmi:id=\"5fd076af-fba3-4f06-d3ef-94ea79a7fbe3\"/>\r\n" + 
				"    <webpage:Person xmi:id=\"715f5cbc-0cb6-4cf6-bb5e-857a0daab469\" articles=\"cc39a545-0ec1-46ce-f61f-44ed189c3990\"/>\r\n" + 
				"    <webpage:Source xmi:id=\"de196a6f-74b4-49c1-f710-18ff8a47e293\"/>\r\n" + 
				"    <webpage:Source xmi:id=\"989b1f83-4fb6-418e-9b88-b74bd60d6939\"/>\r\n" + 
				"</xmi:XMI>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t18);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Article
				&& ((Article)instance.get(0)).getSources().size() == 2 ;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testSingleBidirectionalReferenceLoadSaveCompare() {
		String t19 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <webpage:Article xmi:id=\"ff5066f8-9f96-4e15-debb-c19c71d9aa39\" authors=\"1810fd44-1644-4a6e-8534-0f547c01e30b\" picture=\"84570dc3-28e7-4667-d8d8-02e4fb2e9bc6\"/>\r\n" + 
				"    <webpage:Picture xmi:id=\"84570dc3-28e7-4667-d8d8-02e4fb2e9bc6\"/>\r\n" + 
				"    <webpage:Student xmi:id=\"1810fd44-1644-4a6e-8534-0f547c01e30b\" articles=\"ff5066f8-9f96-4e15-debb-c19c71d9aa39\"/>\r\n" + 
				"</xmi:XMI>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t19);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Article
				&& ((Article)instance.get(0)).getAuthors().size() == 1 
				&& instance.get(2) instanceof Student 
				&& ((Student)instance.get(2)).getArticles().size() == 1;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testMultiBidirectionalReferenceLoadSaveCompare() {
		String t20 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <webpage:Article xmi:id=\"7dae9211-3a7e-4b52-af74-9203505a3844\" authors=\"d33d5859-cdb2-490a-cfef-068b2dcf47d2 991bab0f-8c72-4a55-ca3f-45449141dd4a\" picture=\"2d831061-11fa-4c55-b88b-eed339cfa15d\"/>\r\n" + 
				"    <webpage:Article xmi:id=\"2334bf2b-e1b9-4113-aa3e-e6a38f98b39d\" authors=\"991bab0f-8c72-4a55-ca3f-45449141dd4a\" picture=\"2d831061-11fa-4c55-b88b-eed339cfa15d\"/>\r\n" + 
				"    <webpage:Picture xmi:id=\"2d831061-11fa-4c55-b88b-eed339cfa15d\"/>\r\n" + 
				"    <webpage:Person xmi:id=\"d33d5859-cdb2-490a-cfef-068b2dcf47d2\" articles=\"7dae9211-3a7e-4b52-af74-9203505a3844\"/>\r\n" + 
				"    <webpage:Student xmi:id=\"991bab0f-8c72-4a55-ca3f-45449141dd4a\" articles=\"7dae9211-3a7e-4b52-af74-9203505a3844 2334bf2b-e1b9-4113-aa3e-e6a38f98b39d\"/>\r\n" + 
				"</xmi:XMI>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t20);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Article
				&& ((Article)instance.get(0)).getAuthors().size() == 2
				&& instance.get(4) instanceof Student
				&& ((Student)instance.get(4)).getArticles().size() == 2;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testMultiReferenceSameClassLoadSaveCompare() {
		String t21 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <webpage:Article xmi:id=\"8f418e8d-5f61-47af-d954-b2e7b3796276\" authors=\"126dec12-fab8-4065-9967-0cc86f16547a\" picture=\"3c31c2f1-f0bb-42ab-a882-079b7ec82377\" related=\"02cd90b2-b4d1-4b6f-9ee4-8c68dbaae362 95b21118-320c-4272-c831-422799917568\"/>\r\n" + 
				"    <webpage:Article xmi:id=\"02cd90b2-b4d1-4b6f-9ee4-8c68dbaae362\" authors=\"126dec12-fab8-4065-9967-0cc86f16547a\" picture=\"3c31c2f1-f0bb-42ab-a882-079b7ec82377\"/>\r\n" + 
				"    <webpage:Article xmi:id=\"95b21118-320c-4272-c831-422799917568\" authors=\"126dec12-fab8-4065-9967-0cc86f16547a\" picture=\"3c31c2f1-f0bb-42ab-a882-079b7ec82377\"/>\r\n" + 
				"    <webpage:Person xmi:id=\"126dec12-fab8-4065-9967-0cc86f16547a\" articles=\"8f418e8d-5f61-47af-d954-b2e7b3796276 02cd90b2-b4d1-4b6f-9ee4-8c68dbaae362 95b21118-320c-4272-c831-422799917568\"/>\r\n" + 
				"    <webpage:Picture xmi:id=\"3c31c2f1-f0bb-42ab-a882-079b7ec82377\"/>\r\n" + 
				"</xmi:XMI>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t21);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Article
				&& ((Article)instance.get(0)).getRelated().size() == 2
						&& ((Article)instance.get(0)).getRelated().get(0) instanceof Article
						&& ((Article)instance.get(0)).getRelated().get(1) instanceof Article;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testSelfReferenceLoadSaveCompare() {
		String t22 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <webpage:Article xmi:id=\"9bcf1685-cf81-4709-a19b-8768241c0a70\" name=\"test\" authors=\"9c4323ef-2ee9-4157-ca39-ed8f70e505f9\" picture=\"90cf7c3a-37aa-4d2f-af0a-d8b55349c9e0\" related=\"9bcf1685-cf81-4709-a19b-8768241c0a70\"/>\r\n" + 
				"    <webpage:Picture xmi:id=\"90cf7c3a-37aa-4d2f-af0a-d8b55349c9e0\"/>\r\n" + 
				"    <webpage:Person xmi:id=\"9c4323ef-2ee9-4157-ca39-ed8f70e505f9\" articles=\"9bcf1685-cf81-4709-a19b-8768241c0a70\"/>\r\n" + 
				"</xmi:XMI>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t22);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Article
				&& ((Article)instance.get(0)).getRelated().size() == 1
				&& ((Article)instance.get(0)).getRelated().get(0) instanceof Article
				&& ((Article)instance.get(0)).getRelated().get(0).getName().equals("test");
		Assert.assertTrue(test);
	}

	@Test
	public void testMultipleContainmentLoadSaveCompare() {
		String t28 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Website xmi:id=\"_Ea1OADT-Eeuy-6z-kXSK-w\">\r\n" + 
				"    <pictures xmi:id=\"_Ea1OATT-Eeuy-6z-kXSK-w\"/>\r\n" + 
				"  </webpage:Website>\r\n" + 
				"  <webpage:Website xmi:id=\"_Ea1OAjT-Eeuy-6z-kXSK-w\">\r\n" + 
				"    <pictures xmi:id=\"_Ea1OATT-Eeuy-6z-kXSK-w\"/>\r\n" + 
				"  </webpage:Website>\r\n" + 
				"</xmi:XMI>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t28);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Website
				&& ((Website)instance.get(0)).getPictures().size() == 1
				&& ((Website)instance.get(1)).getPictures().size() == 1;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testContainmentAndSeparateLoadSaveCompare() {
		String t29 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Website xmi:id=\"_YEcKQDWgEeuiRLkt8tJQnA\">\r\n" + 
				"      <pictures xmi:id=\"_YEcKQTWgEeuiRLkt8tJQnA\"/>\r\n" + 
				"  </webpage:Website>\r\n" + 
				"  <webpage:Picture xmi:id=\"_YEcKQTWgEeuiRLkt8tJQnA\"/>\r\n" + 
				"</xmi:XMI>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t29);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Website
				&& instance.get(1) instanceof Picture
				&& ((Website)instance.get(0)).getPictures().size() == 1;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testMultipleSameClassLoadSaveCompare() {
		String t30 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Student xmi:id=\"_tPFc8DT5EeuAP8PgtQG7XA\"/>\r\n" + 
				"  <webpage:Student xmi:id=\"_tPFc8DT5EeuAP8PgtQG7XA\"/>\r\n" + 
				"</xmi:XMI>";;
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t30);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.size() == 1;
		Assert.assertFalse(test);
	}
	
	@Test
	public void testMultipleSameContainmentLoadSaveCompare() {
		String t31 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Website xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_BumjMDT8EeuC0ILVHZfbng\">\r\n" + 
				"  <pictures xmi:id=\"_BunKQDT8EeuC0ILVHZfbng\"/>\r\n" + 
				"  <pictures xmi:id=\"_BunKQDT8EeuC0ILVHZfbng\"/>\r\n" + 
				"</webpage:Website>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t31);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Website
				&& ((Website)instance.get(0)).getPictures().size() == 1;
		Assert.assertFalse(test);
	}
	
	@Test
	public void testMultipleSameReferenceLoadSaveCompare() {
		String t32 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Article xmi:id=\"_2Yq9kDV7EeulSerH-1v9sA\" authors=\"_2Yq9kzV7EeulSerH-1v9sA\" picture=\"_2Yq9kTV7EeulSerH-1v9sA _2Yq9kTV7EeulSerH-1v9sA _2Yq9kTV7EeulSerH-1v9sA\" sources=\"_2Yq9kjV7EeulSerH-1v9sA _2Yq9kjV7EeulSerH-1v9sA\"/>\r\n" + 
				"  <webpage:Picture xmi:id=\"_2Yq9kTV7EeulSerH-1v9sA\"/>\r\n" + 
				"  <webpage:Source xmi:id=\"_2Yq9kjV7EeulSerH-1v9sA\"/>\r\n" + 
				"  <webpage:Person xmi:id=\"_2Yq9kzV7EeulSerH-1v9sA\" articles=\"_2Yq9kDV7EeulSerH-1v9sA\"/>\r\n" + 
				"</xmi:XMI>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t32);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Article
				&& ((Article)instance.get(0)).getSources().size() == 1;
		// hier reagiert EMF falsch
		Assert.assertFalse(test);
	}
	
	@Test
	public void testInheritanceLoadSaveCompare() {
		String t33 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Student xmi:id=\"56250b3e-41b1-44af-cf0d-94af281da067\" age=\"29\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\"/>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t33);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Student
				&& ((Student)instance.get(0)).getAge() == 29;
		Assert.assertTrue(test);
	}
	
	@Test
	public void testFloatSpecialValuesLoadSaveCompare() {
		String t35 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <webpage:Article xmi:id=\"5243dba2-9e25-4ae1-9623-c3f844704928\" number=\"NaN\" authors=\"327e47c5-dad2-4e5b-8650-f41954ffb2b8\" picture=\"bc9d3114-32c1-4040-8657-7762f1c9e6f9\"/>\r\n" + 
				"    <webpage:Article xmi:id=\"c90d6531-ad68-4b3c-f763-3b3b704611ec\" number=\"-Infinity\" authors=\"327e47c5-dad2-4e5b-8650-f41954ffb2b8\" picture=\"bc9d3114-32c1-4040-8657-7762f1c9e6f9\"/>\r\n" + 
				"    <webpage:Article xmi:id=\"fa7c127f-7291-40c5-9cf3-a0dbf40987a1\" number=\"Infinity\" authors=\"327e47c5-dad2-4e5b-8650-f41954ffb2b8\" picture=\"bc9d3114-32c1-4040-8657-7762f1c9e6f9\"/>\r\n" + 
				"    <webpage:Picture xmi:id=\"bc9d3114-32c1-4040-8657-7762f1c9e6f9\"/>\r\n" + 
				"    <webpage:Person xmi:id=\"327e47c5-dad2-4e5b-8650-f41954ffb2b8\" articles=\"5243dba2-9e25-4ae1-9623-c3f844704928 c90d6531-ad68-4b3c-f763-3b3b704611ec fa7c127f-7291-40c5-9cf3-a0dbf40987a1\"/>\r\n" + 
				"</xmi:XMI>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t35);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Article 
				&& Float.isNaN(((Article)instance.get(0)).getNumber())
				&& instance.get(1) instanceof Article 
				&& Float.isInfinite(((Article)instance.get(1)).getNumber())
				&& instance.get(2) instanceof Article 
				&& Float.isInfinite(((Article)instance.get(2)).getNumber());
		Assert.assertTrue(test);
	}
	
	@Test
	public void testDoubleSpecialValuesLoadSaveCompare() {
		String t36 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <webpage:Website xmi:id=\"17c35e46-a28e-4271-ffb6-bc2fd63a3983\" number=\"NaN\">\r\n" + 
				"        <pictures xmi:id=\"8e29074e-ea39-4252-f2d0-810c7fad6c17\"/>\r\n" + 
				"    </webpage:Website>\r\n" + 
				"    <webpage:Website xmi:id=\"8cacf1ac-257b-4ff2-b261-5f1dc987effe\" number=\"-Infinity\">\r\n" + 
				"        <pictures xmi:id=\"2e0452f6-14ed-4631-8df3-1275aedd28f0\"/>\r\n" + 
				"    </webpage:Website>\r\n" + 
				"    <webpage:Website xmi:id=\"69ca85a0-8ef2-41c0-ee21-2c914b4bf606\" number=\"Infinity\">\r\n" + 
				"        <pictures xmi:id=\"69c4a0d5-f3b5-4cf0-988b-fd660df0122a\"/>\r\n" + 
				"    </webpage:Website>\r\n" + 
				"</xmi:XMI>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t36);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Website
				&& Double.isNaN(((Website)instance.get(0)).getNumber())
				&& instance.get(1) instanceof Website
				&& Double.isInfinite(((Website)instance.get(1)).getNumber())
				&& instance.get(2) instanceof Website
				&& Double.isInfinite(((Website)instance.get(2)).getNumber());
		Assert.assertTrue(test);
	}
	
	@Test
	public void testOrderedAttributeLoadSaveCompare() {
		String t40 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Article xmi:id=\"_4WuC0DflEeufmvup1OnXvg\" name=\"a1\" authors=\"_4WuC1DflEeufmvup1OnXvg\" picture=\"_4WuC1TflEeufmvup1OnXvg\" related=\"_4WuC0TflEeufmvup1OnXvg _4WuC0jflEeufmvup1OnXvg _4WuC0zflEeufmvup1OnXvg\"/>\r\n" + 
				"  <webpage:Article xmi:id=\"_4WuC0TflEeufmvup1OnXvg\" name=\"a2\" authors=\"_4WuC1DflEeufmvup1OnXvg\" picture=\"_4WuC1TflEeufmvup1OnXvg\"/>\r\n" + 
				"  <webpage:Article xmi:id=\"_4WuC0jflEeufmvup1OnXvg\" name=\"a3\" authors=\"_4WuC1DflEeufmvup1OnXvg\" picture=\"_4WuC1TflEeufmvup1OnXvg\"/>\r\n" + 
				"  <webpage:Article xmi:id=\"_4WuC0zflEeufmvup1OnXvg\" name=\"a4\" authors=\"_4WuC1DflEeufmvup1OnXvg\" picture=\"_4WuC1TflEeufmvup1OnXvg\"/>\r\n" + 
				"  <webpage:Person xmi:id=\"_4WuC1DflEeufmvup1OnXvg\" articles=\"_4WuC0DflEeufmvup1OnXvg _4WuC0TflEeufmvup1OnXvg _4WuC0jflEeufmvup1OnXvg _4WuC0zflEeufmvup1OnXvg\"/>\r\n" + 
				"  <webpage:Picture xmi:id=\"_4WuC1TflEeufmvup1OnXvg\"/>\r\n" + 
				"</xmi:XMI>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t40);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Article
				&& ((Article)instance.get(0)).getRelated().get(0).getName().equals("a2")
				&& ((Article)instance.get(0)).getRelated().get(1).getName().equals("a3")
				&& ((Article)instance.get(0)).getRelated().get(2).getName().equals("a4");
		Assert.assertTrue(test);
	}
	
	@Test
	public void testOrderedReferenceLoadSaveCompare() {
		String t43 = "<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Article xmi:id=\"_OkKS8EI6EeuEic2tK4l2WA\" name=\"x\" authors=\"_OkKS80I6EeuEic2tK4l2WA _OkKS9EI6EeuEic2tK4l2WA _OkKS8kI6EeuEic2tK4l2WA\" picture=\"_OkKS8UI6EeuEic2tK4l2WA\"/>\r\n" + 
				"  <webpage:Picture xmi:id=\"_OkKS8UI6EeuEic2tK4l2WA\"/>\r\n" + 
				"  <webpage:Person xmi:id=\"_OkKS8kI6EeuEic2tK4l2WA\" articles=\"_OkKS8EI6EeuEic2tK4l2WA\" surname=\"c\"/>\r\n" + 
				"  <webpage:Person xmi:id=\"_OkKS80I6EeuEic2tK4l2WA\" articles=\"_OkKS8EI6EeuEic2tK4l2WA\" surname=\"a\"/>\r\n" + 
				"  <webpage:Person xmi:id=\"_OkKS9EI6EeuEic2tK4l2WA\" articles=\"_OkKS8EI6EeuEic2tK4l2WA\" surname=\"b\"/>\r\n" + 
				"</xmi:XMI>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t43);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Article
				&& instance.get(1) instanceof Picture
				&& instance.get(2) instanceof Person
				&& instance.get(3) instanceof Person
				&& instance.get(4) instanceof Person
				&& ((Article)instance.get(0)).getAuthors().get(0).getSurname().equals("a")
				&& ((Article)instance.get(0)).getAuthors().get(1).getSurname().equals("b")
				&& ((Article)instance.get(0)).getAuthors().get(2).getSurname().equals("c")
				&& ((Person)instance.get(2)).getArticles().get(0).getName().equals("x")
				&& ((Person)instance.get(3)).getArticles().get(0).getName().equals("x")
				&& ((Person)instance.get(4)).getArticles().get(0).getName().equals("x");
		Assert.assertTrue(test);
	}
	
	
	@Test
	public void testOrderedContainmentLoadSaveCompare() {
		String t44 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Website xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_4mb6kEI9EeuUBrV7JMdYJA\">\r\n" + 
				"  <pictures xmi:type=\"webpage:Picture\" xmi:id=\"_4mb6kUI9EeuUBrV7JMdYJA\" name=\"a\"/>\r\n" + 
				"  <pictures xmi:type=\"webpage:Picture\" xmi:id=\"_4mb6kkI9EeuUBrV7JMdYJA\" name=\"b\"/>\r\n" + 
				"  <pictures xmi:type=\"webpage:Picture\" xmi:id=\"_4mb6k0I9EeuUBrV7JMdYJA\" name=\"c\"/>\r\n" + 
				"</webpage:Website>";
		List<EObject> loaded = CreateSaveTester.loadFromXMI(t44);
		String xmi = CreateSaveTester.saveToXMI(loaded);
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi);
		boolean test = instance.get(0) instanceof Website
				&& ((Website)instance.get(0)).getPictures().get(0).getName().equals("a")
				&& ((Website)instance.get(0)).getPictures().get(1).getName().equals("b")
				&& ((Website)instance.get(0)).getPictures().get(2).getName().equals("c");
		Assert.assertTrue(test);
	}

	
	
	
	
	
	
	
	
	@Test
	public void textComplexInstance1() {
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
    	
    	eobjects.add(website2);
    	eobjects.add(person);
    	eobjects.add(website);
    	eobjects.add(student);
    	eobjects.add(source1);
    	eobjects.add(source2);
    	eobjects.add(source3);
    	String xmi_full = CreateSaveTester.saveToXMI(eobjects);
    	List<EObject> instance = CreateSaveTester.loadFromXMI(xmi_full);
    	
    	boolean test = testInstance(instance);
    	Assert.assertTrue(test);
    }
	
	@Test
	public void textComplexInstance2() {
		String xmi_crossecore = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <webpage:Website xmi:id=\"5b4db7e9-7862-401d-f890-e136e3cd4aba\" name=\"website2\" title=\"website title2\" description=\"website description2\" number=\"2\">\r\n" + 
				"        <links>www.facebook.de</links>\r\n" + 
				"        <categories xmi:id=\"71a93413-51be-475b-b2e6-b8ee4bafc834\" name=\"category2\" number=\"2\">\r\n" + 
				"            <articles xmi:id=\"6ddc8416-1425-4190-a24a-5493fee914e6\" name=\"article3\" authors=\"ec1b3920-9abb-4e6f-f537-3b9e3fc6f2ee\" picture=\"df0d3de3-df11-4f1a-acbf-8ca622a257de\" related=\"f4e9fcc4-6e5a-4ed3-9d1b-29821f5c4fe3\" sources=\"f9ad261c-760a-47af-98e9-021ca0e0517d\">\r\n" + 
				"                <chapters xmi:id=\"cf2fa351-a412-4451-856e-dd3fff09763a\" subSection=\"false\">\r\n" + 
				"                    <title>Title3</title>\r\n" + 
				"                    <letters>121</letters>\r\n" + 
				"                </chapters>\r\n" + 
				"            </articles>\r\n" + 
				"        </categories>\r\n" + 
				"        <pictures xmi:id=\"df0d3de3-df11-4f1a-acbf-8ca622a257de\" name=\"picture3\" number=\"3\">\r\n" + 
				"            <information>119</information>\r\n" + 
				"        </pictures>\r\n" + 
				"    </webpage:Website>\r\n" + 
				"    <webpage:Person xmi:id=\"24e14e6d-277a-4bcb-ee01-421d20a9a23a\" surname=\"Nachname\" age=\"28\" articles=\"c80786f4-31ab-4e4c-98f5-6e6d8977fe26\">\r\n" + 
				"        <name>Erster Vorname</name>\r\n" + 
				"        <name>Zweiter Vorname</name>\r\n" + 
				"        <access_key>97</access_key>\r\n" + 
				"        <access_key>101</access_key>\r\n" + 
				"        <access_key>115</access_key>\r\n" + 
				"    </webpage:Person>\r\n" + 
				"    <webpage:Website xmi:id=\"f3fc9971-327b-418f-cb21-f0dc8b90b0f3\" name=\"website\" title=\"website title\" description=\"website description\" number=\"1\">\r\n" + 
				"        <links>www.google.de</links>\r\n" + 
				"        <links>www.kit.edu</links>\r\n" + 
				"        <categories xmi:id=\"72b19448-59dc-4e2a-9206-40bbe3516fd1\" name=\"category\" number=\"1\">\r\n" + 
				"            <articles xmi:id=\"c80786f4-31ab-4e4c-98f5-6e6d8977fe26\" name=\"article\" articletype=\"STUDY\" number=\"1\" authors=\"24e14e6d-277a-4bcb-ee01-421d20a9a23a ec1b3920-9abb-4e6f-f537-3b9e3fc6f2ee\" picture=\"3c94105d-deb3-4782-adc2-8c966b87d1a1\" related=\"f4e9fcc4-6e5a-4ed3-9d1b-29821f5c4fe3\" sources=\"70b7ff91-2d89-4356-9327-fed0afab53f6\">\r\n" + 
				"                <flags>true</flags>\r\n" + 
				"                <flags>false</flags>\r\n" + 
				"                <chapters xmi:id=\"4469a8ea-dee6-49a4-b9f2-9fbbcd98f658\" subSection=\"false\">\r\n" + 
				"                    <title>Title</title>\r\n" + 
				"                    <title>Subtitle</title>\r\n" + 
				"                    <letters>108</letters>\r\n" + 
				"                    <letters>101</letters>\r\n" + 
				"                    <letters>116</letters>\r\n" + 
				"                </chapters>\r\n" + 
				"            </articles>\r\n" + 
				"            <articles xmi:id=\"f4e9fcc4-6e5a-4ed3-9d1b-29821f5c4fe3\" name=\"article2\" number=\"2\" authors=\"ec1b3920-9abb-4e6f-f537-3b9e3fc6f2ee\" picture=\"691daa70-0a80-4b51-a298-2e5f6634cb6a\" related=\"c80786f4-31ab-4e4c-98f5-6e6d8977fe26\" sources=\"f9ad261c-760a-47af-98e9-021ca0e0517d 1b110ae4-2095-49cd-eca3-ea25426c40bf\">\r\n" + 
				"                <flags>true</flags>\r\n" + 
				"                <chapters xmi:id=\"34861e26-a14c-4f8e-8538-33e88ef0eaf1\" subSection=\"false\">\r\n" + 
				"                    <title>Title2</title>\r\n" + 
				"                    <title>Subtitle2</title>\r\n" + 
				"                    <letters>119</letters>\r\n" + 
				"                    <letters>111</letters>\r\n" + 
				"                    <letters>114</letters>\r\n" + 
				"                    <letters>100</letters>\r\n" + 
				"                </chapters>\r\n" + 
				"            </articles>\r\n" + 
				"        </categories>\r\n" + 
				"        <pictures xmi:id=\"3c94105d-deb3-4782-adc2-8c966b87d1a1\" name=\"picture\" number=\"1\">\r\n" + 
				"            <information>97</information>\r\n" + 
				"            <information>98</information>\r\n" + 
				"            <information>99</information>\r\n" + 
				"            <hash>true</hash>\r\n" + 
				"            <hash>false</hash>\r\n" + 
				"        </pictures>\r\n" + 
				"        <pictures xmi:id=\"691daa70-0a80-4b51-a298-2e5f6634cb6a\" name=\"picture2\" number=\"2\">\r\n" + 
				"            <information>120</information>\r\n" + 
				"            <information>121</information>\r\n" + 
				"            <information>122</information>\r\n" + 
				"            <hash>true</hash>\r\n" + 
				"        </pictures>\r\n" + 
				"    </webpage:Website>\r\n" + 
				"    <webpage:Student xmi:id=\"ec1b3920-9abb-4e6f-f537-3b9e3fc6f2ee\" matrikelnr=\"1780794\" surname=\"Digas\" age=\"24\" articles=\"c80786f4-31ab-4e4c-98f5-6e6d8977fe26 f4e9fcc4-6e5a-4ed3-9d1b-29821f5c4fe3 6ddc8416-1425-4190-a24a-5493fee914e6\">\r\n" + 
				"        <grades>2</grades>\r\n" + 
				"        <grades>2.3</grades>\r\n" + 
				"        <grades>2.7</grades>\r\n" + 
				"        <name>Peter</name>\r\n" + 
				"        <name>Christos</name>\r\n" + 
				"        <access_key>116</access_key>\r\n" + 
				"        <access_key>102</access_key>\r\n" + 
				"    </webpage:Student>\r\n" + 
				"    <webpage:Source xmi:id=\"70b7ff91-2d89-4356-9327-fed0afab53f6\" title=\"source\" url=\"source url\">\r\n" + 
				"        <page_no>1</page_no>\r\n" + 
				"        <page_no>2</page_no>\r\n" + 
				"        <authors>This was once</authors>\r\n" + 
				"        <authors>revealed to me</authors>\r\n" + 
				"        <authors>in a dream</authors>\r\n" + 
				"    </webpage:Source>\r\n" + 
				"    <webpage:Source xmi:id=\"f9ad261c-760a-47af-98e9-021ca0e0517d\" title=\"source2\" url=\"source url2\">\r\n" + 
				"        <page_no>3</page_no>\r\n" + 
				"        <authors>I was there</authors>\r\n" + 
				"        <authors>3000 years ago</authors>\r\n" + 
				"    </webpage:Source>\r\n" + 
				"    <webpage:Source xmi:id=\"1b110ae4-2095-49cd-eca3-ea25426c40bf\" title=\"source3\" url=\"source url3\">\r\n" + 
				"        <page_no>7</page_no>\r\n" + 
				"        <authors>Dude trust me</authors>\r\n" + 
				"    </webpage:Source>\r\n" + 
				"</xmi:XMI>";
		List<EObject> instance = CreateSaveTester.loadFromXMI(xmi_crossecore);
    	boolean test = testInstance(instance);
    	Assert.assertTrue(test);
	}
	
	private boolean testInstance(List<EObject> instance) {
		return instance.get(0) instanceof Website
		&& instance.get(1) instanceof Person
		&& instance.get(2) instanceof Website
		&& instance.get(3) instanceof Student
		&& instance.get(4) instanceof Source
		&& instance.get(5) instanceof Source
		&& instance.get(6) instanceof Source
		&& ((Website)instance.get(0)).getName().equals("website2")
		&& ((Website)instance.get(0)).getTitle().equals("website title2")
		&& ((Website)instance.get(0)).getDescription().equals("website description2")
		&& ((Website)instance.get(0)).getNumber() == 2.0
		&& ((Website)instance.get(0)).getLinks().contains("www.facebook.de")
		&& ((Person)instance.get(1)).getName().contains("Erster Vorname")
		&& ((Person)instance.get(1)).getName().contains("Zweiter Vorname")
		&& ((Person)instance.get(1)).getSurname().equals("Nachname")
		&& ((Person)instance.get(1)).getAge() == (short)28
		&& ((Person)instance.get(1)).getAccess_key().contains('a')
		&& ((Person)instance.get(1)).getAccess_key().contains('e')
		&& ((Person)instance.get(1)).getAccess_key().contains('s')
		&& ((Website)instance.get(2)).getName().equals("website")
		&& ((Website)instance.get(2)).getTitle().equals("website title")
		&& ((Website)instance.get(2)).getDescription().equals("website description")
		&& ((Website)instance.get(2)).getNumber() == 1.0
		&& ((Website)instance.get(2)).getLinks().contains("www.google.de")
		&& ((Website)instance.get(2)).getLinks().contains("www.kit.edu")
		&& ((Student)instance.get(3)).getName().contains("Peter")
		&& ((Student)instance.get(3)).getName().contains("Christos")
		&& ((Student)instance.get(3)).getSurname().equals("Digas")
		&& ((Student)instance.get(3)).getAge() == (short)24
		&& ((Student)instance.get(3)).getAccess_key().contains('t')
		&& ((Student)instance.get(3)).getAccess_key().contains('f')
		&& ((Student)instance.get(3)).getMatrikelnr() == 1780794
		&& ((Student)instance.get(3)).getGrades().contains((float)2.0)
		&& ((Student)instance.get(3)).getGrades().contains((float)2.3)
		&& ((Student)instance.get(3)).getGrades().contains((float)2.7)
		&& ((Source)instance.get(4)).getTitle().equals("source")
		&& ((Source)instance.get(4)).getUrl().equals("source url")
		&& ((Source)instance.get(4)).getAuthors().contains("This was once")
		&& ((Source)instance.get(4)).getAuthors().contains("revealed to me")
		&& ((Source)instance.get(4)).getAuthors().contains("in a dream")
		&& ((Source)instance.get(4)).getPage_no().contains(1)
		&& ((Source)instance.get(4)).getPage_no().contains(2)
		&& ((Source)instance.get(5)).getTitle().equals("source2")
		&& ((Source)instance.get(5)).getUrl().equals("source url2")
		&& ((Source)instance.get(5)).getAuthors().contains("I was there")
		&& ((Source)instance.get(5)).getAuthors().contains("3000 years ago")
		&& ((Source)instance.get(5)).getPage_no().contains(3)
		&& ((Source)instance.get(6)).getTitle().equals("source3")
		&& ((Source)instance.get(6)).getUrl().equals("source url3")
		&& ((Source)instance.get(6)).getAuthors().contains("Dude trust me")
		&& ((Source)instance.get(6)).getPage_no().contains(7)
		
		&& ((Website)instance.get(0)).getCategories().get(0).getName().equals("category2")
		&& ((Website)instance.get(0)).getCategories().get(0).getNumber() == (short)2
	    && ((Website)instance.get(0)).getPictures().get(0).getName().equals("picture3")
	    && ((Website)instance.get(0)).getPictures().get(0).getInformation().contains('w')
	    && ((Website)instance.get(0)).getPictures().get(0).getNumber() == 3
	    && ((Website)instance.get(2)).getCategories().get(0).getName().equals("category")
	    && ((Website)instance.get(2)).getCategories().get(0).getNumber() == (short)1
	    && ((Website)instance.get(2)).getPictures().get(0).getName().equals("picture")
	    && ((Website)instance.get(2)).getPictures().get(0).getInformation().contains('a')
	    && ((Website)instance.get(2)).getPictures().get(0).getInformation().contains('b')
	    && ((Website)instance.get(2)).getPictures().get(0).getInformation().contains('c')
	    && ((Website)instance.get(2)).getPictures().get(0).getNumber() == 1
	    && ((Website)instance.get(2)).getPictures().get(0).getHash().contains(true)
	    && ((Website)instance.get(2)).getPictures().get(0).getHash().contains(false)
	    && ((Website)instance.get(2)).getPictures().get(1).getName().equals("picture2")
	    && ((Website)instance.get(2)).getPictures().get(1).getInformation().contains('x')
	    && ((Website)instance.get(2)).getPictures().get(1).getInformation().contains('y')
	    && ((Website)instance.get(2)).getPictures().get(1).getInformation().contains('z')
	    && ((Website)instance.get(2)).getPictures().get(1).getNumber() == 2
	    && ((Website)instance.get(2)).getPictures().get(1).getHash().contains(true)
	    
	    && ((Website)instance.get(0)).getCategories().get(0).getArticles().get(0).getName().equals("article3")
	    && ((Website)instance.get(0)).getCategories().get(0).getArticles().get(0).getArticletype() == ArticleType.REVIEW
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(0).getName().equals("article")
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(0).getArticletype() == ArticleType.STUDY
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(0).getFlags().contains(true)
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(0).getFlags().contains(false)
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(0).getNumber() == (float)1.0
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(1).getName().equals("article2")
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(1).getArticletype() == ArticleType.REVIEW
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(1).getFlags().contains(true)
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(1).getNumber() == (float)2.0
	    
	    && ((Website)instance.get(0)).getCategories().get(0).getArticles().get(0).getChapters().get(0).getTitle().contains("Title3")
	    && ((Website)instance.get(0)).getCategories().get(0).getArticles().get(0).getChapters().get(0).getLetters().contains('y')
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(0).getChapters().get(0).getTitle().contains("Title")
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(0).getChapters().get(0).getTitle().contains("Subtitle")
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(0).getChapters().get(0).isSubSection() == false
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(0).getChapters().get(0).getLetters().contains('l')
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(0).getChapters().get(0).getLetters().contains('e')
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(0).getChapters().get(0).getLetters().contains('t')
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(1).getChapters().get(0).getTitle().contains("Title2")
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(1).getChapters().get(0).getTitle().contains("Subtitle2")
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(1).getChapters().get(0).isSubSection() == false
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(1).getChapters().get(0).getLetters().contains('w')
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(1).getChapters().get(0).getLetters().contains('o')
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(1).getChapters().get(0).getLetters().contains('r')
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(1).getChapters().get(0).getLetters().contains('d')
	    
	    && ((Website)instance.get(0)).getCategories().get(0).getArticles().get(0).getAuthors().get(0).getSurname().equals("Digas")
	    && ((Website)instance.get(0)).getCategories().get(0).getArticles().get(0).getSources().get(0).getTitle().equals("source2")
	    && ((Website)instance.get(0)).getCategories().get(0).getArticles().get(0).getPicture().getName().equals("picture3")
	    && ((Website)instance.get(0)).getCategories().get(0).getArticles().get(0).getRelated().get(0).getName().equals("article2")
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(0).getAuthors().get(0).getSurname().equals("Nachname")
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(0).getAuthors().get(1).getSurname().equals("Digas")
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(0).getSources().get(0).getTitle().equals("source")
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(0).getPicture().getName().equals("picture")
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(0).getRelated().get(0).getName().equals("article2")
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(1).getAuthors().get(0).getSurname().equals("Digas")
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(1).getSources().get(0).getTitle().equals("source2")
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(1).getSources().get(1).getTitle().equals("source3")
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(1).getPicture().getName().equals("picture2")
	    && ((Website)instance.get(2)).getCategories().get(0).getArticles().get(1).getRelated().get(0).getName().equals("article")
	    && ((Person)instance.get(1)).getArticles().get(0).getName().equals("article")
	    && ((Student)instance.get(3)).getArticles().get(0).getName().equals("article")
	    && ((Student)instance.get(3)).getArticles().get(1).getName().equals("article2")
	    && ((Student)instance.get(3)).getArticles().get(2).getName().equals("article3");
	}

}
