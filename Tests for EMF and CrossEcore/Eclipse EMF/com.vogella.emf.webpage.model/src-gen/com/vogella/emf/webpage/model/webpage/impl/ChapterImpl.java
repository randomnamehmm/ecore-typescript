/**
 */
package com.vogella.emf.webpage.model.webpage.impl;

import com.vogella.emf.webpage.model.webpage.Chapter;
import com.vogella.emf.webpage.model.webpage.WebpagePackage;

import java.util.Collection;

import org.eclipse.emf.common.notify.Notification;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.ENotificationImpl;
import org.eclipse.emf.ecore.impl.MinimalEObjectImpl;

import org.eclipse.emf.ecore.util.EDataTypeUniqueEList;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Chapter</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.ChapterImpl#getTitle <em>Title</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.ChapterImpl#isSubSection <em>Sub Section</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.ChapterImpl#getLetters <em>Letters</em>}</li>
 * </ul>
 *
 * @generated
 */
public class ChapterImpl extends MinimalEObjectImpl.Container implements Chapter {
	/**
	 * The cached value of the '{@link #getTitle() <em>Title</em>}' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getTitle()
	 * @generated
	 * @ordered
	 */
	protected EList<String> title;

	/**
	 * The default value of the '{@link #isSubSection() <em>Sub Section</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #isSubSection()
	 * @generated
	 * @ordered
	 */
	protected static final boolean SUB_SECTION_EDEFAULT = false;

	/**
	 * The cached value of the '{@link #isSubSection() <em>Sub Section</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #isSubSection()
	 * @generated
	 * @ordered
	 */
	protected boolean subSection = SUB_SECTION_EDEFAULT;

	/**
	 * The cached value of the '{@link #getLetters() <em>Letters</em>}' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getLetters()
	 * @generated
	 * @ordered
	 */
	protected EList<Character> letters;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected ChapterImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return WebpagePackage.Literals.CHAPTER;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EList<String> getTitle() {
		if (title == null) {
			title = new EDataTypeUniqueEList<String>(String.class, this, WebpagePackage.CHAPTER__TITLE);
		}
		return title;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public boolean isSubSection() {
		return subSection;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setSubSection(boolean newSubSection) {
		boolean oldSubSection = subSection;
		subSection = newSubSection;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, WebpagePackage.CHAPTER__SUB_SECTION, oldSubSection,
					subSection));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EList<Character> getLetters() {
		if (letters == null) {
			letters = new EDataTypeUniqueEList<Character>(Character.class, this, WebpagePackage.CHAPTER__LETTERS);
		}
		return letters;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object eGet(int featureID, boolean resolve, boolean coreType) {
		switch (featureID) {
		case WebpagePackage.CHAPTER__TITLE:
			return getTitle();
		case WebpagePackage.CHAPTER__SUB_SECTION:
			return isSubSection();
		case WebpagePackage.CHAPTER__LETTERS:
			return getLetters();
		}
		return super.eGet(featureID, resolve, coreType);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	@Override
	public void eSet(int featureID, Object newValue) {
		switch (featureID) {
		case WebpagePackage.CHAPTER__TITLE:
			getTitle().clear();
			getTitle().addAll((Collection<? extends String>) newValue);
			return;
		case WebpagePackage.CHAPTER__SUB_SECTION:
			setSubSection((Boolean) newValue);
			return;
		case WebpagePackage.CHAPTER__LETTERS:
			getLetters().clear();
			getLetters().addAll((Collection<? extends Character>) newValue);
			return;
		}
		super.eSet(featureID, newValue);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void eUnset(int featureID) {
		switch (featureID) {
		case WebpagePackage.CHAPTER__TITLE:
			getTitle().clear();
			return;
		case WebpagePackage.CHAPTER__SUB_SECTION:
			setSubSection(SUB_SECTION_EDEFAULT);
			return;
		case WebpagePackage.CHAPTER__LETTERS:
			getLetters().clear();
			return;
		}
		super.eUnset(featureID);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public boolean eIsSet(int featureID) {
		switch (featureID) {
		case WebpagePackage.CHAPTER__TITLE:
			return title != null && !title.isEmpty();
		case WebpagePackage.CHAPTER__SUB_SECTION:
			return subSection != SUB_SECTION_EDEFAULT;
		case WebpagePackage.CHAPTER__LETTERS:
			return letters != null && !letters.isEmpty();
		}
		return super.eIsSet(featureID);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String toString() {
		if (eIsProxy())
			return super.toString();

		StringBuilder result = new StringBuilder(super.toString());
		result.append(" (title: ");
		result.append(title);
		result.append(", subSection: ");
		result.append(subSection);
		result.append(", letters: ");
		result.append(letters);
		result.append(')');
		return result.toString();
	}

} //ChapterImpl
