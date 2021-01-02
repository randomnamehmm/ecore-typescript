/**
 */
package com.vogella.emf.webpage.model.webpage;

import org.eclipse.emf.ecore.EAttribute;
import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.EEnum;
import org.eclipse.emf.ecore.EPackage;
import org.eclipse.emf.ecore.EReference;

/**
 * <!-- begin-user-doc -->
 * The <b>Package</b> for the model.
 * It contains accessors for the meta objects to represent
 * <ul>
 *   <li>each class,</li>
 *   <li>each feature of each class,</li>
 *   <li>each operation of each class,</li>
 *   <li>each enum,</li>
 *   <li>and each data type</li>
 * </ul>
 * <!-- end-user-doc -->
 * @see com.vogella.emf.webpage.model.webpage.WebpageFactory
 * @model kind="package"
 * @generated
 */
public interface WebpagePackage extends EPackage {
	/**
	 * The package name.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	String eNAME = "webpage";

	/**
	 * The package namespace URI.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	String eNS_URI = "http://www.xmibypeterfollowingthetutoria.ls/webpage";

	/**
	 * The package namespace name.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	String eNS_PREFIX = "webpage";

	/**
	 * The singleton instance of the package.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	WebpagePackage eINSTANCE = com.vogella.emf.webpage.model.webpage.impl.WebpagePackageImpl.init();

	/**
	 * The meta object id for the '{@link com.vogella.emf.webpage.model.webpage.impl.WebsiteImpl <em>Website</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.vogella.emf.webpage.model.webpage.impl.WebsiteImpl
	 * @see com.vogella.emf.webpage.model.webpage.impl.WebpagePackageImpl#getWebsite()
	 * @generated
	 */
	int WEBSITE = 0;

	/**
	 * The feature id for the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int WEBSITE__NAME = 0;

	/**
	 * The feature id for the '<em><b>Title</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int WEBSITE__TITLE = 1;

	/**
	 * The feature id for the '<em><b>Description</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int WEBSITE__DESCRIPTION = 2;

	/**
	 * The feature id for the '<em><b>Categories</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int WEBSITE__CATEGORIES = 3;

	/**
	 * The feature id for the '<em><b>Pictures</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int WEBSITE__PICTURES = 4;

	/**
	 * The feature id for the '<em><b>Number</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int WEBSITE__NUMBER = 5;

	/**
	 * The feature id for the '<em><b>Links</b></em>' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int WEBSITE__LINKS = 6;

	/**
	 * The number of structural features of the '<em>Website</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int WEBSITE_FEATURE_COUNT = 7;

	/**
	 * The number of operations of the '<em>Website</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int WEBSITE_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link com.vogella.emf.webpage.model.webpage.impl.CategoryImpl <em>Category</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.vogella.emf.webpage.model.webpage.impl.CategoryImpl
	 * @see com.vogella.emf.webpage.model.webpage.impl.WebpagePackageImpl#getCategory()
	 * @generated
	 */
	int CATEGORY = 1;

	/**
	 * The feature id for the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CATEGORY__NAME = 0;

	/**
	 * The feature id for the '<em><b>Articles</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CATEGORY__ARTICLES = 1;

	/**
	 * The feature id for the '<em><b>Number</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CATEGORY__NUMBER = 2;

	/**
	 * The number of structural features of the '<em>Category</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CATEGORY_FEATURE_COUNT = 3;

	/**
	 * The number of operations of the '<em>Category</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CATEGORY_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link com.vogella.emf.webpage.model.webpage.impl.ArticleImpl <em>Article</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.vogella.emf.webpage.model.webpage.impl.ArticleImpl
	 * @see com.vogella.emf.webpage.model.webpage.impl.WebpagePackageImpl#getArticle()
	 * @generated
	 */
	int ARTICLE = 2;

	/**
	 * The feature id for the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ARTICLE__NAME = 0;

	/**
	 * The feature id for the '<em><b>Chapters</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ARTICLE__CHAPTERS = 1;

	/**
	 * The feature id for the '<em><b>Authors</b></em>' reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ARTICLE__AUTHORS = 2;

	/**
	 * The feature id for the '<em><b>Picture</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ARTICLE__PICTURE = 3;

	/**
	 * The feature id for the '<em><b>Articletype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ARTICLE__ARTICLETYPE = 4;

	/**
	 * The feature id for the '<em><b>Related</b></em>' reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ARTICLE__RELATED = 5;

	/**
	 * The feature id for the '<em><b>Sources</b></em>' reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ARTICLE__SOURCES = 6;

	/**
	 * The feature id for the '<em><b>Flags</b></em>' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ARTICLE__FLAGS = 7;

	/**
	 * The feature id for the '<em><b>Number</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ARTICLE__NUMBER = 8;

	/**
	 * The number of structural features of the '<em>Article</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ARTICLE_FEATURE_COUNT = 9;

	/**
	 * The number of operations of the '<em>Article</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ARTICLE_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link com.vogella.emf.webpage.model.webpage.impl.PersonImpl <em>Person</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.vogella.emf.webpage.model.webpage.impl.PersonImpl
	 * @see com.vogella.emf.webpage.model.webpage.impl.WebpagePackageImpl#getPerson()
	 * @generated
	 */
	int PERSON = 3;

	/**
	 * The feature id for the '<em><b>Name</b></em>' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PERSON__NAME = 0;

	/**
	 * The feature id for the '<em><b>Articles</b></em>' reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PERSON__ARTICLES = 1;

	/**
	 * The feature id for the '<em><b>Surname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PERSON__SURNAME = 2;

	/**
	 * The feature id for the '<em><b>Age</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PERSON__AGE = 3;

	/**
	 * The feature id for the '<em><b>Access key</b></em>' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PERSON__ACCESS_KEY = 4;

	/**
	 * The number of structural features of the '<em>Person</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PERSON_FEATURE_COUNT = 5;

	/**
	 * The number of operations of the '<em>Person</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PERSON_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link com.vogella.emf.webpage.model.webpage.impl.StudentImpl <em>Student</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.vogella.emf.webpage.model.webpage.impl.StudentImpl
	 * @see com.vogella.emf.webpage.model.webpage.impl.WebpagePackageImpl#getStudent()
	 * @generated
	 */
	int STUDENT = 4;

	/**
	 * The feature id for the '<em><b>Name</b></em>' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int STUDENT__NAME = PERSON__NAME;

	/**
	 * The feature id for the '<em><b>Articles</b></em>' reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int STUDENT__ARTICLES = PERSON__ARTICLES;

	/**
	 * The feature id for the '<em><b>Surname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int STUDENT__SURNAME = PERSON__SURNAME;

	/**
	 * The feature id for the '<em><b>Age</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int STUDENT__AGE = PERSON__AGE;

	/**
	 * The feature id for the '<em><b>Access key</b></em>' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int STUDENT__ACCESS_KEY = PERSON__ACCESS_KEY;

	/**
	 * The feature id for the '<em><b>Matrikelnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int STUDENT__MATRIKELNR = PERSON_FEATURE_COUNT + 0;

	/**
	 * The feature id for the '<em><b>Grades</b></em>' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int STUDENT__GRADES = PERSON_FEATURE_COUNT + 1;

	/**
	 * The number of structural features of the '<em>Student</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int STUDENT_FEATURE_COUNT = PERSON_FEATURE_COUNT + 2;

	/**
	 * The number of operations of the '<em>Student</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int STUDENT_OPERATION_COUNT = PERSON_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link com.vogella.emf.webpage.model.webpage.impl.ChapterImpl <em>Chapter</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.vogella.emf.webpage.model.webpage.impl.ChapterImpl
	 * @see com.vogella.emf.webpage.model.webpage.impl.WebpagePackageImpl#getChapter()
	 * @generated
	 */
	int CHAPTER = 5;

	/**
	 * The feature id for the '<em><b>Title</b></em>' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CHAPTER__TITLE = 0;

	/**
	 * The feature id for the '<em><b>Sub Section</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CHAPTER__SUB_SECTION = 1;

	/**
	 * The feature id for the '<em><b>Letters</b></em>' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CHAPTER__LETTERS = 2;

	/**
	 * The number of structural features of the '<em>Chapter</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CHAPTER_FEATURE_COUNT = 3;

	/**
	 * The number of operations of the '<em>Chapter</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CHAPTER_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link com.vogella.emf.webpage.model.webpage.impl.PictureImpl <em>Picture</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.vogella.emf.webpage.model.webpage.impl.PictureImpl
	 * @see com.vogella.emf.webpage.model.webpage.impl.WebpagePackageImpl#getPicture()
	 * @generated
	 */
	int PICTURE = 6;

	/**
	 * The feature id for the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PICTURE__NAME = 0;

	/**
	 * The feature id for the '<em><b>Information</b></em>' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PICTURE__INFORMATION = 1;

	/**
	 * The feature id for the '<em><b>Number</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PICTURE__NUMBER = 2;

	/**
	 * The feature id for the '<em><b>Hash</b></em>' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PICTURE__HASH = 3;

	/**
	 * The number of structural features of the '<em>Picture</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PICTURE_FEATURE_COUNT = 4;

	/**
	 * The number of operations of the '<em>Picture</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PICTURE_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link com.vogella.emf.webpage.model.webpage.impl.SourceImpl <em>Source</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.vogella.emf.webpage.model.webpage.impl.SourceImpl
	 * @see com.vogella.emf.webpage.model.webpage.impl.WebpagePackageImpl#getSource()
	 * @generated
	 */
	int SOURCE = 7;

	/**
	 * The feature id for the '<em><b>Title</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SOURCE__TITLE = 0;

	/**
	 * The feature id for the '<em><b>Url</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SOURCE__URL = 1;

	/**
	 * The feature id for the '<em><b>Page no</b></em>' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SOURCE__PAGE_NO = 2;

	/**
	 * The feature id for the '<em><b>Authors</b></em>' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SOURCE__AUTHORS = 3;

	/**
	 * The number of structural features of the '<em>Source</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SOURCE_FEATURE_COUNT = 4;

	/**
	 * The number of operations of the '<em>Source</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SOURCE_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link com.vogella.emf.webpage.model.webpage.impl.AnimatedPictureImpl <em>Animated Picture</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.vogella.emf.webpage.model.webpage.impl.AnimatedPictureImpl
	 * @see com.vogella.emf.webpage.model.webpage.impl.WebpagePackageImpl#getAnimatedPicture()
	 * @generated
	 */
	int ANIMATED_PICTURE = 8;

	/**
	 * The feature id for the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ANIMATED_PICTURE__NAME = PICTURE__NAME;

	/**
	 * The feature id for the '<em><b>Information</b></em>' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ANIMATED_PICTURE__INFORMATION = PICTURE__INFORMATION;

	/**
	 * The feature id for the '<em><b>Number</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ANIMATED_PICTURE__NUMBER = PICTURE__NUMBER;

	/**
	 * The feature id for the '<em><b>Hash</b></em>' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ANIMATED_PICTURE__HASH = PICTURE__HASH;

	/**
	 * The feature id for the '<em><b>Repeat</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ANIMATED_PICTURE__REPEAT = PICTURE_FEATURE_COUNT + 0;

	/**
	 * The number of structural features of the '<em>Animated Picture</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ANIMATED_PICTURE_FEATURE_COUNT = PICTURE_FEATURE_COUNT + 1;

	/**
	 * The number of operations of the '<em>Animated Picture</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ANIMATED_PICTURE_OPERATION_COUNT = PICTURE_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link com.vogella.emf.webpage.model.webpage.ArticleType <em>Article Type</em>}' enum.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.vogella.emf.webpage.model.webpage.ArticleType
	 * @see com.vogella.emf.webpage.model.webpage.impl.WebpagePackageImpl#getArticleType()
	 * @generated
	 */
	int ARTICLE_TYPE = 9;

	/**
	 * Returns the meta object for class '{@link com.vogella.emf.webpage.model.webpage.Website <em>Website</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Website</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Website
	 * @generated
	 */
	EClass getWebsite();

	/**
	 * Returns the meta object for the attribute '{@link com.vogella.emf.webpage.model.webpage.Website#getName <em>Name</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Name</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Website#getName()
	 * @see #getWebsite()
	 * @generated
	 */
	EAttribute getWebsite_Name();

	/**
	 * Returns the meta object for the attribute '{@link com.vogella.emf.webpage.model.webpage.Website#getTitle <em>Title</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Title</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Website#getTitle()
	 * @see #getWebsite()
	 * @generated
	 */
	EAttribute getWebsite_Title();

	/**
	 * Returns the meta object for the attribute '{@link com.vogella.emf.webpage.model.webpage.Website#getDescription <em>Description</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Description</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Website#getDescription()
	 * @see #getWebsite()
	 * @generated
	 */
	EAttribute getWebsite_Description();

	/**
	 * Returns the meta object for the containment reference list '{@link com.vogella.emf.webpage.model.webpage.Website#getCategories <em>Categories</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>Categories</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Website#getCategories()
	 * @see #getWebsite()
	 * @generated
	 */
	EReference getWebsite_Categories();

	/**
	 * Returns the meta object for the containment reference list '{@link com.vogella.emf.webpage.model.webpage.Website#getPictures <em>Pictures</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>Pictures</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Website#getPictures()
	 * @see #getWebsite()
	 * @generated
	 */
	EReference getWebsite_Pictures();

	/**
	 * Returns the meta object for the attribute '{@link com.vogella.emf.webpage.model.webpage.Website#getNumber <em>Number</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Number</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Website#getNumber()
	 * @see #getWebsite()
	 * @generated
	 */
	EAttribute getWebsite_Number();

	/**
	 * Returns the meta object for the attribute list '{@link com.vogella.emf.webpage.model.webpage.Website#getLinks <em>Links</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute list '<em>Links</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Website#getLinks()
	 * @see #getWebsite()
	 * @generated
	 */
	EAttribute getWebsite_Links();

	/**
	 * Returns the meta object for class '{@link com.vogella.emf.webpage.model.webpage.Category <em>Category</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Category</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Category
	 * @generated
	 */
	EClass getCategory();

	/**
	 * Returns the meta object for the attribute '{@link com.vogella.emf.webpage.model.webpage.Category#getName <em>Name</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Name</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Category#getName()
	 * @see #getCategory()
	 * @generated
	 */
	EAttribute getCategory_Name();

	/**
	 * Returns the meta object for the containment reference list '{@link com.vogella.emf.webpage.model.webpage.Category#getArticles <em>Articles</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>Articles</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Category#getArticles()
	 * @see #getCategory()
	 * @generated
	 */
	EReference getCategory_Articles();

	/**
	 * Returns the meta object for the attribute '{@link com.vogella.emf.webpage.model.webpage.Category#getNumber <em>Number</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Number</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Category#getNumber()
	 * @see #getCategory()
	 * @generated
	 */
	EAttribute getCategory_Number();

	/**
	 * Returns the meta object for class '{@link com.vogella.emf.webpage.model.webpage.Article <em>Article</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Article</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Article
	 * @generated
	 */
	EClass getArticle();

	/**
	 * Returns the meta object for the attribute '{@link com.vogella.emf.webpage.model.webpage.Article#getName <em>Name</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Name</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Article#getName()
	 * @see #getArticle()
	 * @generated
	 */
	EAttribute getArticle_Name();

	/**
	 * Returns the meta object for the containment reference list '{@link com.vogella.emf.webpage.model.webpage.Article#getChapters <em>Chapters</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>Chapters</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Article#getChapters()
	 * @see #getArticle()
	 * @generated
	 */
	EReference getArticle_Chapters();

	/**
	 * Returns the meta object for the reference list '{@link com.vogella.emf.webpage.model.webpage.Article#getAuthors <em>Authors</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference list '<em>Authors</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Article#getAuthors()
	 * @see #getArticle()
	 * @generated
	 */
	EReference getArticle_Authors();

	/**
	 * Returns the meta object for the reference '{@link com.vogella.emf.webpage.model.webpage.Article#getPicture <em>Picture</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Picture</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Article#getPicture()
	 * @see #getArticle()
	 * @generated
	 */
	EReference getArticle_Picture();

	/**
	 * Returns the meta object for the attribute '{@link com.vogella.emf.webpage.model.webpage.Article#getArticletype <em>Articletype</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Articletype</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Article#getArticletype()
	 * @see #getArticle()
	 * @generated
	 */
	EAttribute getArticle_Articletype();

	/**
	 * Returns the meta object for the reference list '{@link com.vogella.emf.webpage.model.webpage.Article#getRelated <em>Related</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference list '<em>Related</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Article#getRelated()
	 * @see #getArticle()
	 * @generated
	 */
	EReference getArticle_Related();

	/**
	 * Returns the meta object for the reference list '{@link com.vogella.emf.webpage.model.webpage.Article#getSources <em>Sources</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference list '<em>Sources</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Article#getSources()
	 * @see #getArticle()
	 * @generated
	 */
	EReference getArticle_Sources();

	/**
	 * Returns the meta object for the attribute list '{@link com.vogella.emf.webpage.model.webpage.Article#getFlags <em>Flags</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute list '<em>Flags</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Article#getFlags()
	 * @see #getArticle()
	 * @generated
	 */
	EAttribute getArticle_Flags();

	/**
	 * Returns the meta object for the attribute '{@link com.vogella.emf.webpage.model.webpage.Article#getNumber <em>Number</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Number</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Article#getNumber()
	 * @see #getArticle()
	 * @generated
	 */
	EAttribute getArticle_Number();

	/**
	 * Returns the meta object for class '{@link com.vogella.emf.webpage.model.webpage.Person <em>Person</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Person</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Person
	 * @generated
	 */
	EClass getPerson();

	/**
	 * Returns the meta object for the attribute list '{@link com.vogella.emf.webpage.model.webpage.Person#getName <em>Name</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute list '<em>Name</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Person#getName()
	 * @see #getPerson()
	 * @generated
	 */
	EAttribute getPerson_Name();

	/**
	 * Returns the meta object for the reference list '{@link com.vogella.emf.webpage.model.webpage.Person#getArticles <em>Articles</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference list '<em>Articles</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Person#getArticles()
	 * @see #getPerson()
	 * @generated
	 */
	EReference getPerson_Articles();

	/**
	 * Returns the meta object for the attribute '{@link com.vogella.emf.webpage.model.webpage.Person#getSurname <em>Surname</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Surname</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Person#getSurname()
	 * @see #getPerson()
	 * @generated
	 */
	EAttribute getPerson_Surname();

	/**
	 * Returns the meta object for the attribute '{@link com.vogella.emf.webpage.model.webpage.Person#getAge <em>Age</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Age</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Person#getAge()
	 * @see #getPerson()
	 * @generated
	 */
	EAttribute getPerson_Age();

	/**
	 * Returns the meta object for the attribute list '{@link com.vogella.emf.webpage.model.webpage.Person#getAccess_key <em>Access key</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute list '<em>Access key</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Person#getAccess_key()
	 * @see #getPerson()
	 * @generated
	 */
	EAttribute getPerson_Access_key();

	/**
	 * Returns the meta object for class '{@link com.vogella.emf.webpage.model.webpage.Student <em>Student</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Student</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Student
	 * @generated
	 */
	EClass getStudent();

	/**
	 * Returns the meta object for the attribute '{@link com.vogella.emf.webpage.model.webpage.Student#getMatrikelnr <em>Matrikelnr</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Matrikelnr</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Student#getMatrikelnr()
	 * @see #getStudent()
	 * @generated
	 */
	EAttribute getStudent_Matrikelnr();

	/**
	 * Returns the meta object for the attribute list '{@link com.vogella.emf.webpage.model.webpage.Student#getGrades <em>Grades</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute list '<em>Grades</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Student#getGrades()
	 * @see #getStudent()
	 * @generated
	 */
	EAttribute getStudent_Grades();

	/**
	 * Returns the meta object for class '{@link com.vogella.emf.webpage.model.webpage.Chapter <em>Chapter</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Chapter</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Chapter
	 * @generated
	 */
	EClass getChapter();

	/**
	 * Returns the meta object for the attribute list '{@link com.vogella.emf.webpage.model.webpage.Chapter#getTitle <em>Title</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute list '<em>Title</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Chapter#getTitle()
	 * @see #getChapter()
	 * @generated
	 */
	EAttribute getChapter_Title();

	/**
	 * Returns the meta object for the attribute '{@link com.vogella.emf.webpage.model.webpage.Chapter#isSubSection <em>Sub Section</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Sub Section</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Chapter#isSubSection()
	 * @see #getChapter()
	 * @generated
	 */
	EAttribute getChapter_SubSection();

	/**
	 * Returns the meta object for the attribute list '{@link com.vogella.emf.webpage.model.webpage.Chapter#getLetters <em>Letters</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute list '<em>Letters</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Chapter#getLetters()
	 * @see #getChapter()
	 * @generated
	 */
	EAttribute getChapter_Letters();

	/**
	 * Returns the meta object for class '{@link com.vogella.emf.webpage.model.webpage.Picture <em>Picture</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Picture</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Picture
	 * @generated
	 */
	EClass getPicture();

	/**
	 * Returns the meta object for the attribute '{@link com.vogella.emf.webpage.model.webpage.Picture#getName <em>Name</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Name</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Picture#getName()
	 * @see #getPicture()
	 * @generated
	 */
	EAttribute getPicture_Name();

	/**
	 * Returns the meta object for the attribute list '{@link com.vogella.emf.webpage.model.webpage.Picture#getInformation <em>Information</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute list '<em>Information</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Picture#getInformation()
	 * @see #getPicture()
	 * @generated
	 */
	EAttribute getPicture_Information();

	/**
	 * Returns the meta object for the attribute '{@link com.vogella.emf.webpage.model.webpage.Picture#getNumber <em>Number</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Number</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Picture#getNumber()
	 * @see #getPicture()
	 * @generated
	 */
	EAttribute getPicture_Number();

	/**
	 * Returns the meta object for the attribute list '{@link com.vogella.emf.webpage.model.webpage.Picture#getHash <em>Hash</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute list '<em>Hash</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Picture#getHash()
	 * @see #getPicture()
	 * @generated
	 */
	EAttribute getPicture_Hash();

	/**
	 * Returns the meta object for class '{@link com.vogella.emf.webpage.model.webpage.Source <em>Source</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Source</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Source
	 * @generated
	 */
	EClass getSource();

	/**
	 * Returns the meta object for the attribute '{@link com.vogella.emf.webpage.model.webpage.Source#getTitle <em>Title</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Title</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Source#getTitle()
	 * @see #getSource()
	 * @generated
	 */
	EAttribute getSource_Title();

	/**
	 * Returns the meta object for the attribute '{@link com.vogella.emf.webpage.model.webpage.Source#getUrl <em>Url</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Url</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Source#getUrl()
	 * @see #getSource()
	 * @generated
	 */
	EAttribute getSource_Url();

	/**
	 * Returns the meta object for the attribute list '{@link com.vogella.emf.webpage.model.webpage.Source#getPage_no <em>Page no</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute list '<em>Page no</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Source#getPage_no()
	 * @see #getSource()
	 * @generated
	 */
	EAttribute getSource_Page_no();

	/**
	 * Returns the meta object for the attribute list '{@link com.vogella.emf.webpage.model.webpage.Source#getAuthors <em>Authors</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute list '<em>Authors</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.Source#getAuthors()
	 * @see #getSource()
	 * @generated
	 */
	EAttribute getSource_Authors();

	/**
	 * Returns the meta object for class '{@link com.vogella.emf.webpage.model.webpage.AnimatedPicture <em>Animated Picture</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Animated Picture</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.AnimatedPicture
	 * @generated
	 */
	EClass getAnimatedPicture();

	/**
	 * Returns the meta object for the attribute '{@link com.vogella.emf.webpage.model.webpage.AnimatedPicture#isRepeat <em>Repeat</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Repeat</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.AnimatedPicture#isRepeat()
	 * @see #getAnimatedPicture()
	 * @generated
	 */
	EAttribute getAnimatedPicture_Repeat();

	/**
	 * Returns the meta object for enum '{@link com.vogella.emf.webpage.model.webpage.ArticleType <em>Article Type</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for enum '<em>Article Type</em>'.
	 * @see com.vogella.emf.webpage.model.webpage.ArticleType
	 * @generated
	 */
	EEnum getArticleType();

	/**
	 * Returns the factory that creates the instances of the model.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the factory that creates the instances of the model.
	 * @generated
	 */
	WebpageFactory getWebpageFactory();

	/**
	 * <!-- begin-user-doc -->
	 * Defines literals for the meta objects that represent
	 * <ul>
	 *   <li>each class,</li>
	 *   <li>each feature of each class,</li>
	 *   <li>each operation of each class,</li>
	 *   <li>each enum,</li>
	 *   <li>and each data type</li>
	 * </ul>
	 * <!-- end-user-doc -->
	 * @generated
	 */
	interface Literals {
		/**
		 * The meta object literal for the '{@link com.vogella.emf.webpage.model.webpage.impl.WebsiteImpl <em>Website</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.vogella.emf.webpage.model.webpage.impl.WebsiteImpl
		 * @see com.vogella.emf.webpage.model.webpage.impl.WebpagePackageImpl#getWebsite()
		 * @generated
		 */
		EClass WEBSITE = eINSTANCE.getWebsite();

		/**
		 * The meta object literal for the '<em><b>Name</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute WEBSITE__NAME = eINSTANCE.getWebsite_Name();

		/**
		 * The meta object literal for the '<em><b>Title</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute WEBSITE__TITLE = eINSTANCE.getWebsite_Title();

		/**
		 * The meta object literal for the '<em><b>Description</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute WEBSITE__DESCRIPTION = eINSTANCE.getWebsite_Description();

		/**
		 * The meta object literal for the '<em><b>Categories</b></em>' containment reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference WEBSITE__CATEGORIES = eINSTANCE.getWebsite_Categories();

		/**
		 * The meta object literal for the '<em><b>Pictures</b></em>' containment reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference WEBSITE__PICTURES = eINSTANCE.getWebsite_Pictures();

		/**
		 * The meta object literal for the '<em><b>Number</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute WEBSITE__NUMBER = eINSTANCE.getWebsite_Number();

		/**
		 * The meta object literal for the '<em><b>Links</b></em>' attribute list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute WEBSITE__LINKS = eINSTANCE.getWebsite_Links();

		/**
		 * The meta object literal for the '{@link com.vogella.emf.webpage.model.webpage.impl.CategoryImpl <em>Category</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.vogella.emf.webpage.model.webpage.impl.CategoryImpl
		 * @see com.vogella.emf.webpage.model.webpage.impl.WebpagePackageImpl#getCategory()
		 * @generated
		 */
		EClass CATEGORY = eINSTANCE.getCategory();

		/**
		 * The meta object literal for the '<em><b>Name</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute CATEGORY__NAME = eINSTANCE.getCategory_Name();

		/**
		 * The meta object literal for the '<em><b>Articles</b></em>' containment reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference CATEGORY__ARTICLES = eINSTANCE.getCategory_Articles();

		/**
		 * The meta object literal for the '<em><b>Number</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute CATEGORY__NUMBER = eINSTANCE.getCategory_Number();

		/**
		 * The meta object literal for the '{@link com.vogella.emf.webpage.model.webpage.impl.ArticleImpl <em>Article</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.vogella.emf.webpage.model.webpage.impl.ArticleImpl
		 * @see com.vogella.emf.webpage.model.webpage.impl.WebpagePackageImpl#getArticle()
		 * @generated
		 */
		EClass ARTICLE = eINSTANCE.getArticle();

		/**
		 * The meta object literal for the '<em><b>Name</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute ARTICLE__NAME = eINSTANCE.getArticle_Name();

		/**
		 * The meta object literal for the '<em><b>Chapters</b></em>' containment reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference ARTICLE__CHAPTERS = eINSTANCE.getArticle_Chapters();

		/**
		 * The meta object literal for the '<em><b>Authors</b></em>' reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference ARTICLE__AUTHORS = eINSTANCE.getArticle_Authors();

		/**
		 * The meta object literal for the '<em><b>Picture</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference ARTICLE__PICTURE = eINSTANCE.getArticle_Picture();

		/**
		 * The meta object literal for the '<em><b>Articletype</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute ARTICLE__ARTICLETYPE = eINSTANCE.getArticle_Articletype();

		/**
		 * The meta object literal for the '<em><b>Related</b></em>' reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference ARTICLE__RELATED = eINSTANCE.getArticle_Related();

		/**
		 * The meta object literal for the '<em><b>Sources</b></em>' reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference ARTICLE__SOURCES = eINSTANCE.getArticle_Sources();

		/**
		 * The meta object literal for the '<em><b>Flags</b></em>' attribute list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute ARTICLE__FLAGS = eINSTANCE.getArticle_Flags();

		/**
		 * The meta object literal for the '<em><b>Number</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute ARTICLE__NUMBER = eINSTANCE.getArticle_Number();

		/**
		 * The meta object literal for the '{@link com.vogella.emf.webpage.model.webpage.impl.PersonImpl <em>Person</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.vogella.emf.webpage.model.webpage.impl.PersonImpl
		 * @see com.vogella.emf.webpage.model.webpage.impl.WebpagePackageImpl#getPerson()
		 * @generated
		 */
		EClass PERSON = eINSTANCE.getPerson();

		/**
		 * The meta object literal for the '<em><b>Name</b></em>' attribute list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute PERSON__NAME = eINSTANCE.getPerson_Name();

		/**
		 * The meta object literal for the '<em><b>Articles</b></em>' reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference PERSON__ARTICLES = eINSTANCE.getPerson_Articles();

		/**
		 * The meta object literal for the '<em><b>Surname</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute PERSON__SURNAME = eINSTANCE.getPerson_Surname();

		/**
		 * The meta object literal for the '<em><b>Age</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute PERSON__AGE = eINSTANCE.getPerson_Age();

		/**
		 * The meta object literal for the '<em><b>Access key</b></em>' attribute list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute PERSON__ACCESS_KEY = eINSTANCE.getPerson_Access_key();

		/**
		 * The meta object literal for the '{@link com.vogella.emf.webpage.model.webpage.impl.StudentImpl <em>Student</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.vogella.emf.webpage.model.webpage.impl.StudentImpl
		 * @see com.vogella.emf.webpage.model.webpage.impl.WebpagePackageImpl#getStudent()
		 * @generated
		 */
		EClass STUDENT = eINSTANCE.getStudent();

		/**
		 * The meta object literal for the '<em><b>Matrikelnr</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute STUDENT__MATRIKELNR = eINSTANCE.getStudent_Matrikelnr();

		/**
		 * The meta object literal for the '<em><b>Grades</b></em>' attribute list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute STUDENT__GRADES = eINSTANCE.getStudent_Grades();

		/**
		 * The meta object literal for the '{@link com.vogella.emf.webpage.model.webpage.impl.ChapterImpl <em>Chapter</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.vogella.emf.webpage.model.webpage.impl.ChapterImpl
		 * @see com.vogella.emf.webpage.model.webpage.impl.WebpagePackageImpl#getChapter()
		 * @generated
		 */
		EClass CHAPTER = eINSTANCE.getChapter();

		/**
		 * The meta object literal for the '<em><b>Title</b></em>' attribute list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute CHAPTER__TITLE = eINSTANCE.getChapter_Title();

		/**
		 * The meta object literal for the '<em><b>Sub Section</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute CHAPTER__SUB_SECTION = eINSTANCE.getChapter_SubSection();

		/**
		 * The meta object literal for the '<em><b>Letters</b></em>' attribute list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute CHAPTER__LETTERS = eINSTANCE.getChapter_Letters();

		/**
		 * The meta object literal for the '{@link com.vogella.emf.webpage.model.webpage.impl.PictureImpl <em>Picture</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.vogella.emf.webpage.model.webpage.impl.PictureImpl
		 * @see com.vogella.emf.webpage.model.webpage.impl.WebpagePackageImpl#getPicture()
		 * @generated
		 */
		EClass PICTURE = eINSTANCE.getPicture();

		/**
		 * The meta object literal for the '<em><b>Name</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute PICTURE__NAME = eINSTANCE.getPicture_Name();

		/**
		 * The meta object literal for the '<em><b>Information</b></em>' attribute list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute PICTURE__INFORMATION = eINSTANCE.getPicture_Information();

		/**
		 * The meta object literal for the '<em><b>Number</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute PICTURE__NUMBER = eINSTANCE.getPicture_Number();

		/**
		 * The meta object literal for the '<em><b>Hash</b></em>' attribute list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute PICTURE__HASH = eINSTANCE.getPicture_Hash();

		/**
		 * The meta object literal for the '{@link com.vogella.emf.webpage.model.webpage.impl.SourceImpl <em>Source</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.vogella.emf.webpage.model.webpage.impl.SourceImpl
		 * @see com.vogella.emf.webpage.model.webpage.impl.WebpagePackageImpl#getSource()
		 * @generated
		 */
		EClass SOURCE = eINSTANCE.getSource();

		/**
		 * The meta object literal for the '<em><b>Title</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute SOURCE__TITLE = eINSTANCE.getSource_Title();

		/**
		 * The meta object literal for the '<em><b>Url</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute SOURCE__URL = eINSTANCE.getSource_Url();

		/**
		 * The meta object literal for the '<em><b>Page no</b></em>' attribute list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute SOURCE__PAGE_NO = eINSTANCE.getSource_Page_no();

		/**
		 * The meta object literal for the '<em><b>Authors</b></em>' attribute list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute SOURCE__AUTHORS = eINSTANCE.getSource_Authors();

		/**
		 * The meta object literal for the '{@link com.vogella.emf.webpage.model.webpage.impl.AnimatedPictureImpl <em>Animated Picture</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.vogella.emf.webpage.model.webpage.impl.AnimatedPictureImpl
		 * @see com.vogella.emf.webpage.model.webpage.impl.WebpagePackageImpl#getAnimatedPicture()
		 * @generated
		 */
		EClass ANIMATED_PICTURE = eINSTANCE.getAnimatedPicture();

		/**
		 * The meta object literal for the '<em><b>Repeat</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute ANIMATED_PICTURE__REPEAT = eINSTANCE.getAnimatedPicture_Repeat();

		/**
		 * The meta object literal for the '{@link com.vogella.emf.webpage.model.webpage.ArticleType <em>Article Type</em>}' enum.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.vogella.emf.webpage.model.webpage.ArticleType
		 * @see com.vogella.emf.webpage.model.webpage.impl.WebpagePackageImpl#getArticleType()
		 * @generated
		 */
		EEnum ARTICLE_TYPE = eINSTANCE.getArticleType();

	}

} //WebpagePackage
