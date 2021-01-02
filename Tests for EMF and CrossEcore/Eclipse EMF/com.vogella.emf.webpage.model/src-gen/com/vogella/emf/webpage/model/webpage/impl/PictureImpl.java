/**
 */
package com.vogella.emf.webpage.model.webpage.impl;

import com.vogella.emf.webpage.model.webpage.Picture;
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
 * An implementation of the model object '<em><b>Picture</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.PictureImpl#getName <em>Name</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.PictureImpl#getInformation <em>Information</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.PictureImpl#getNumber <em>Number</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.PictureImpl#getHash <em>Hash</em>}</li>
 * </ul>
 *
 * @generated
 */
public class PictureImpl extends MinimalEObjectImpl.Container implements Picture {
	/**
	 * The default value of the '{@link #getName() <em>Name</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getName()
	 * @generated
	 * @ordered
	 */
	protected static final String NAME_EDEFAULT = null;

	/**
	 * The cached value of the '{@link #getName() <em>Name</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getName()
	 * @generated
	 * @ordered
	 */
	protected String name = NAME_EDEFAULT;

	/**
	 * The cached value of the '{@link #getInformation() <em>Information</em>}' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getInformation()
	 * @generated
	 * @ordered
	 */
	protected EList<Character> information;

	/**
	 * The default value of the '{@link #getNumber() <em>Number</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getNumber()
	 * @generated
	 * @ordered
	 */
	protected static final int NUMBER_EDEFAULT = 0;

	/**
	 * The cached value of the '{@link #getNumber() <em>Number</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getNumber()
	 * @generated
	 * @ordered
	 */
	protected int number = NUMBER_EDEFAULT;

	/**
	 * The cached value of the '{@link #getHash() <em>Hash</em>}' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getHash()
	 * @generated
	 * @ordered
	 */
	protected EList<Boolean> hash;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected PictureImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return WebpagePackage.Literals.PICTURE;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String getName() {
		return name;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setName(String newName) {
		String oldName = name;
		name = newName;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, WebpagePackage.PICTURE__NAME, oldName, name));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EList<Character> getInformation() {
		if (information == null) {
			information = new EDataTypeUniqueEList<Character>(Character.class, this,
					WebpagePackage.PICTURE__INFORMATION);
		}
		return information;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public int getNumber() {
		return number;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setNumber(int newNumber) {
		int oldNumber = number;
		number = newNumber;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, WebpagePackage.PICTURE__NUMBER, oldNumber, number));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EList<Boolean> getHash() {
		if (hash == null) {
			hash = new EDataTypeUniqueEList<Boolean>(Boolean.class, this, WebpagePackage.PICTURE__HASH);
		}
		return hash;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object eGet(int featureID, boolean resolve, boolean coreType) {
		switch (featureID) {
		case WebpagePackage.PICTURE__NAME:
			return getName();
		case WebpagePackage.PICTURE__INFORMATION:
			return getInformation();
		case WebpagePackage.PICTURE__NUMBER:
			return getNumber();
		case WebpagePackage.PICTURE__HASH:
			return getHash();
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
		case WebpagePackage.PICTURE__NAME:
			setName((String) newValue);
			return;
		case WebpagePackage.PICTURE__INFORMATION:
			getInformation().clear();
			getInformation().addAll((Collection<? extends Character>) newValue);
			return;
		case WebpagePackage.PICTURE__NUMBER:
			setNumber((Integer) newValue);
			return;
		case WebpagePackage.PICTURE__HASH:
			getHash().clear();
			getHash().addAll((Collection<? extends Boolean>) newValue);
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
		case WebpagePackage.PICTURE__NAME:
			setName(NAME_EDEFAULT);
			return;
		case WebpagePackage.PICTURE__INFORMATION:
			getInformation().clear();
			return;
		case WebpagePackage.PICTURE__NUMBER:
			setNumber(NUMBER_EDEFAULT);
			return;
		case WebpagePackage.PICTURE__HASH:
			getHash().clear();
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
		case WebpagePackage.PICTURE__NAME:
			return NAME_EDEFAULT == null ? name != null : !NAME_EDEFAULT.equals(name);
		case WebpagePackage.PICTURE__INFORMATION:
			return information != null && !information.isEmpty();
		case WebpagePackage.PICTURE__NUMBER:
			return number != NUMBER_EDEFAULT;
		case WebpagePackage.PICTURE__HASH:
			return hash != null && !hash.isEmpty();
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
		result.append(" (name: ");
		result.append(name);
		result.append(", information: ");
		result.append(information);
		result.append(", number: ");
		result.append(number);
		result.append(", hash: ");
		result.append(hash);
		result.append(')');
		return result.toString();
	}

} //PictureImpl
