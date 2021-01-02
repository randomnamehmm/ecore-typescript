/**
 */
package com.vogella.emf.webpage.model.webpage.impl;

import com.vogella.emf.webpage.model.webpage.Student;
import com.vogella.emf.webpage.model.webpage.WebpagePackage;

import java.util.Collection;

import org.eclipse.emf.common.notify.Notification;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.ENotificationImpl;

import org.eclipse.emf.ecore.util.EDataTypeUniqueEList;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Student</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.StudentImpl#getMatrikelnr <em>Matrikelnr</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.StudentImpl#getGrades <em>Grades</em>}</li>
 * </ul>
 *
 * @generated
 */
public class StudentImpl extends PersonImpl implements Student {
	/**
	 * The default value of the '{@link #getMatrikelnr() <em>Matrikelnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getMatrikelnr()
	 * @generated
	 * @ordered
	 */
	protected static final long MATRIKELNR_EDEFAULT = 0L;

	/**
	 * The cached value of the '{@link #getMatrikelnr() <em>Matrikelnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getMatrikelnr()
	 * @generated
	 * @ordered
	 */
	protected long matrikelnr = MATRIKELNR_EDEFAULT;

	/**
	 * The cached value of the '{@link #getGrades() <em>Grades</em>}' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getGrades()
	 * @generated
	 * @ordered
	 */
	protected EList<Float> grades;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected StudentImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return WebpagePackage.Literals.STUDENT;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public long getMatrikelnr() {
		return matrikelnr;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setMatrikelnr(long newMatrikelnr) {
		long oldMatrikelnr = matrikelnr;
		matrikelnr = newMatrikelnr;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, WebpagePackage.STUDENT__MATRIKELNR, oldMatrikelnr,
					matrikelnr));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EList<Float> getGrades() {
		if (grades == null) {
			grades = new EDataTypeUniqueEList<Float>(Float.class, this, WebpagePackage.STUDENT__GRADES);
		}
		return grades;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object eGet(int featureID, boolean resolve, boolean coreType) {
		switch (featureID) {
		case WebpagePackage.STUDENT__MATRIKELNR:
			return getMatrikelnr();
		case WebpagePackage.STUDENT__GRADES:
			return getGrades();
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
		case WebpagePackage.STUDENT__MATRIKELNR:
			setMatrikelnr((Long) newValue);
			return;
		case WebpagePackage.STUDENT__GRADES:
			getGrades().clear();
			getGrades().addAll((Collection<? extends Float>) newValue);
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
		case WebpagePackage.STUDENT__MATRIKELNR:
			setMatrikelnr(MATRIKELNR_EDEFAULT);
			return;
		case WebpagePackage.STUDENT__GRADES:
			getGrades().clear();
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
		case WebpagePackage.STUDENT__MATRIKELNR:
			return matrikelnr != MATRIKELNR_EDEFAULT;
		case WebpagePackage.STUDENT__GRADES:
			return grades != null && !grades.isEmpty();
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
		result.append(" (matrikelnr: ");
		result.append(matrikelnr);
		result.append(", grades: ");
		result.append(grades);
		result.append(')');
		return result.toString();
	}

} //StudentImpl
