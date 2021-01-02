/**
 */
package com.vogella.emf.webpage.model.webpage;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Animated Picture</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.AnimatedPicture#isRepeat <em>Repeat</em>}</li>
 * </ul>
 *
 * @see com.vogella.emf.webpage.model.webpage.WebpagePackage#getAnimatedPicture()
 * @model
 * @generated
 */
public interface AnimatedPicture extends Picture {
	/**
	 * Returns the value of the '<em><b>Repeat</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Repeat</em>' attribute.
	 * @see #setRepeat(boolean)
	 * @see com.vogella.emf.webpage.model.webpage.WebpagePackage#getAnimatedPicture_Repeat()
	 * @model
	 * @generated
	 */
	boolean isRepeat();

	/**
	 * Sets the value of the '{@link com.vogella.emf.webpage.model.webpage.AnimatedPicture#isRepeat <em>Repeat</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Repeat</em>' attribute.
	 * @see #isRepeat()
	 * @generated
	 */
	void setRepeat(boolean value);

} // AnimatedPicture
