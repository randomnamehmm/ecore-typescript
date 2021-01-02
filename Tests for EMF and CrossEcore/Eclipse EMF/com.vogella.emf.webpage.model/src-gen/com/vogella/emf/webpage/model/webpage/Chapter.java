/**
 */
package com.vogella.emf.webpage.model.webpage;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EObject;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Chapter</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.Chapter#getTitle <em>Title</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.Chapter#isSubSection <em>Sub Section</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.Chapter#getLetters <em>Letters</em>}</li>
 * </ul>
 *
 * @see com.vogella.emf.webpage.model.webpage.WebpagePackage#getChapter()
 * @model
 * @generated
 */
public interface Chapter extends EObject {
	/**
	 * Returns the value of the '<em><b>Title</b></em>' attribute list.
	 * The list contents are of type {@link java.lang.String}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Title</em>' attribute list.
	 * @see com.vogella.emf.webpage.model.webpage.WebpagePackage#getChapter_Title()
	 * @model
	 * @generated
	 */
	EList<String> getTitle();

	/**
	 * Returns the value of the '<em><b>Sub Section</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sub Section</em>' attribute.
	 * @see #setSubSection(boolean)
	 * @see com.vogella.emf.webpage.model.webpage.WebpagePackage#getChapter_SubSection()
	 * @model
	 * @generated
	 */
	boolean isSubSection();

	/**
	 * Sets the value of the '{@link com.vogella.emf.webpage.model.webpage.Chapter#isSubSection <em>Sub Section</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sub Section</em>' attribute.
	 * @see #isSubSection()
	 * @generated
	 */
	void setSubSection(boolean value);

	/**
	 * Returns the value of the '<em><b>Letters</b></em>' attribute list.
	 * The list contents are of type {@link java.lang.Character}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Letters</em>' attribute list.
	 * @see com.vogella.emf.webpage.model.webpage.WebpagePackage#getChapter_Letters()
	 * @model
	 * @generated
	 */
	EList<Character> getLetters();

} // Chapter
