/**
 */
package com.vogella.emf.webpage.model.webpage;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EObject;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Article</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.Article#getName <em>Name</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.Article#getChapters <em>Chapters</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.Article#getAuthors <em>Authors</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.Article#getPicture <em>Picture</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.Article#getArticletype <em>Articletype</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.Article#getRelated <em>Related</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.Article#getSources <em>Sources</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.Article#getFlags <em>Flags</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.Article#getNumber <em>Number</em>}</li>
 * </ul>
 *
 * @see com.vogella.emf.webpage.model.webpage.WebpagePackage#getArticle()
 * @model
 * @generated
 */
public interface Article extends EObject {
	/**
	 * Returns the value of the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Name</em>' attribute.
	 * @see #setName(String)
	 * @see com.vogella.emf.webpage.model.webpage.WebpagePackage#getArticle_Name()
	 * @model
	 * @generated
	 */
	String getName();

	/**
	 * Sets the value of the '{@link com.vogella.emf.webpage.model.webpage.Article#getName <em>Name</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Name</em>' attribute.
	 * @see #getName()
	 * @generated
	 */
	void setName(String value);

	/**
	 * Returns the value of the '<em><b>Chapters</b></em>' containment reference list.
	 * The list contents are of type {@link com.vogella.emf.webpage.model.webpage.Chapter}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Chapters</em>' containment reference list.
	 * @see com.vogella.emf.webpage.model.webpage.WebpagePackage#getArticle_Chapters()
	 * @model containment="true"
	 * @generated
	 */
	EList<Chapter> getChapters();

	/**
	 * Returns the value of the '<em><b>Authors</b></em>' reference list.
	 * The list contents are of type {@link com.vogella.emf.webpage.model.webpage.Person}.
	 * It is bidirectional and its opposite is '{@link com.vogella.emf.webpage.model.webpage.Person#getArticles <em>Articles</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Authors</em>' reference list.
	 * @see com.vogella.emf.webpage.model.webpage.WebpagePackage#getArticle_Authors()
	 * @see com.vogella.emf.webpage.model.webpage.Person#getArticles
	 * @model opposite="articles" required="true"
	 * @generated
	 */
	EList<Person> getAuthors();

	/**
	 * Returns the value of the '<em><b>Picture</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Picture</em>' reference.
	 * @see #setPicture(Picture)
	 * @see com.vogella.emf.webpage.model.webpage.WebpagePackage#getArticle_Picture()
	 * @model required="true"
	 * @generated
	 */
	Picture getPicture();

	/**
	 * Sets the value of the '{@link com.vogella.emf.webpage.model.webpage.Article#getPicture <em>Picture</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Picture</em>' reference.
	 * @see #getPicture()
	 * @generated
	 */
	void setPicture(Picture value);

	/**
	 * Returns the value of the '<em><b>Articletype</b></em>' attribute.
	 * The literals are from the enumeration {@link com.vogella.emf.webpage.model.webpage.ArticleType}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Articletype</em>' attribute.
	 * @see com.vogella.emf.webpage.model.webpage.ArticleType
	 * @see #setArticletype(ArticleType)
	 * @see com.vogella.emf.webpage.model.webpage.WebpagePackage#getArticle_Articletype()
	 * @model
	 * @generated
	 */
	ArticleType getArticletype();

	/**
	 * Sets the value of the '{@link com.vogella.emf.webpage.model.webpage.Article#getArticletype <em>Articletype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Articletype</em>' attribute.
	 * @see com.vogella.emf.webpage.model.webpage.ArticleType
	 * @see #getArticletype()
	 * @generated
	 */
	void setArticletype(ArticleType value);

	/**
	 * Returns the value of the '<em><b>Related</b></em>' reference list.
	 * The list contents are of type {@link com.vogella.emf.webpage.model.webpage.Article}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Related</em>' reference list.
	 * @see com.vogella.emf.webpage.model.webpage.WebpagePackage#getArticle_Related()
	 * @model
	 * @generated
	 */
	EList<Article> getRelated();

	/**
	 * Returns the value of the '<em><b>Sources</b></em>' reference list.
	 * The list contents are of type {@link com.vogella.emf.webpage.model.webpage.Source}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sources</em>' reference list.
	 * @see com.vogella.emf.webpage.model.webpage.WebpagePackage#getArticle_Sources()
	 * @model ordered="false"
	 * @generated
	 */
	EList<Source> getSources();

	/**
	 * Returns the value of the '<em><b>Flags</b></em>' attribute list.
	 * The list contents are of type {@link java.lang.Boolean}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Flags</em>' attribute list.
	 * @see com.vogella.emf.webpage.model.webpage.WebpagePackage#getArticle_Flags()
	 * @model
	 * @generated
	 */
	EList<Boolean> getFlags();

	/**
	 * Returns the value of the '<em><b>Number</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Number</em>' attribute.
	 * @see #setNumber(float)
	 * @see com.vogella.emf.webpage.model.webpage.WebpagePackage#getArticle_Number()
	 * @model
	 * @generated
	 */
	float getNumber();

	/**
	 * Sets the value of the '{@link com.vogella.emf.webpage.model.webpage.Article#getNumber <em>Number</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Number</em>' attribute.
	 * @see #getNumber()
	 * @generated
	 */
	void setNumber(float value);

} // Article
