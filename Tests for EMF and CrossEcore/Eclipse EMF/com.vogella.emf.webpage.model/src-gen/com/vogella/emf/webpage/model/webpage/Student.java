/**
 */
package com.vogella.emf.webpage.model.webpage;

import org.eclipse.emf.common.util.EList;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Student</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.Student#getMatrikelnr <em>Matrikelnr</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.Student#getGrades <em>Grades</em>}</li>
 * </ul>
 *
 * @see com.vogella.emf.webpage.model.webpage.WebpagePackage#getStudent()
 * @model
 * @generated
 */
public interface Student extends Person {
	/**
	 * Returns the value of the '<em><b>Matrikelnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Matrikelnr</em>' attribute.
	 * @see #setMatrikelnr(long)
	 * @see com.vogella.emf.webpage.model.webpage.WebpagePackage#getStudent_Matrikelnr()
	 * @model
	 * @generated
	 */
	long getMatrikelnr();

	/**
	 * Sets the value of the '{@link com.vogella.emf.webpage.model.webpage.Student#getMatrikelnr <em>Matrikelnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Matrikelnr</em>' attribute.
	 * @see #getMatrikelnr()
	 * @generated
	 */
	void setMatrikelnr(long value);

	/**
	 * Returns the value of the '<em><b>Grades</b></em>' attribute list.
	 * The list contents are of type {@link java.lang.Float}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Grades</em>' attribute list.
	 * @see com.vogella.emf.webpage.model.webpage.WebpagePackage#getStudent_Grades()
	 * @model
	 * @generated
	 */
	EList<Float> getGrades();

} // Student
