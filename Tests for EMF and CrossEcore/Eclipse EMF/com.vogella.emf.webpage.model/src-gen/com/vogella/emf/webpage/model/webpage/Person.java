/**
 */
package com.vogella.emf.webpage.model.webpage;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EObject;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Person</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.Person#getName <em>Name</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.Person#getArticles <em>Articles</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.Person#getSurname <em>Surname</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.Person#getAge <em>Age</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.Person#getAccess_key <em>Access key</em>}</li>
 * </ul>
 *
 * @see com.vogella.emf.webpage.model.webpage.WebpagePackage#getPerson()
 * @model
 * @generated
 */
public interface Person extends EObject {
	/**
	 * Returns the value of the '<em><b>Name</b></em>' attribute list.
	 * The list contents are of type {@link java.lang.String}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Name</em>' attribute list.
	 * @see com.vogella.emf.webpage.model.webpage.WebpagePackage#getPerson_Name()
	 * @model
	 * @generated
	 */
	EList<String> getName();

	/**
	 * Returns the value of the '<em><b>Articles</b></em>' reference list.
	 * The list contents are of type {@link com.vogella.emf.webpage.model.webpage.Article}.
	 * It is bidirectional and its opposite is '{@link com.vogella.emf.webpage.model.webpage.Article#getAuthors <em>Authors</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Articles</em>' reference list.
	 * @see com.vogella.emf.webpage.model.webpage.WebpagePackage#getPerson_Articles()
	 * @see com.vogella.emf.webpage.model.webpage.Article#getAuthors
	 * @model opposite="authors"
	 * @generated
	 */
	EList<Article> getArticles();

	/**
	 * Returns the value of the '<em><b>Surname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Surname</em>' attribute.
	 * @see #setSurname(String)
	 * @see com.vogella.emf.webpage.model.webpage.WebpagePackage#getPerson_Surname()
	 * @model
	 * @generated
	 */
	String getSurname();

	/**
	 * Sets the value of the '{@link com.vogella.emf.webpage.model.webpage.Person#getSurname <em>Surname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Surname</em>' attribute.
	 * @see #getSurname()
	 * @generated
	 */
	void setSurname(String value);

	/**
	 * Returns the value of the '<em><b>Age</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Age</em>' attribute.
	 * @see #setAge(short)
	 * @see com.vogella.emf.webpage.model.webpage.WebpagePackage#getPerson_Age()
	 * @model
	 * @generated
	 */
	short getAge();

	/**
	 * Sets the value of the '{@link com.vogella.emf.webpage.model.webpage.Person#getAge <em>Age</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Age</em>' attribute.
	 * @see #getAge()
	 * @generated
	 */
	void setAge(short value);

	/**
	 * Returns the value of the '<em><b>Access key</b></em>' attribute list.
	 * The list contents are of type {@link java.lang.Character}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Access key</em>' attribute list.
	 * @see com.vogella.emf.webpage.model.webpage.WebpagePackage#getPerson_Access_key()
	 * @model upper="256" ordered="false"
	 * @generated
	 */
	EList<Character> getAccess_key();

} // Person
