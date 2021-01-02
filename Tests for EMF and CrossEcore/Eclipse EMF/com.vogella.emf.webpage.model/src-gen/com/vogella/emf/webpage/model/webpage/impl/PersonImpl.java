/**
 */
package com.vogella.emf.webpage.model.webpage.impl;

import com.vogella.emf.webpage.model.webpage.Article;
import com.vogella.emf.webpage.model.webpage.Person;
import com.vogella.emf.webpage.model.webpage.WebpagePackage;

import java.util.Collection;

import org.eclipse.emf.common.notify.Notification;
import org.eclipse.emf.common.notify.NotificationChain;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.InternalEObject;

import org.eclipse.emf.ecore.impl.ENotificationImpl;
import org.eclipse.emf.ecore.impl.MinimalEObjectImpl;

import org.eclipse.emf.ecore.util.EDataTypeUniqueEList;
import org.eclipse.emf.ecore.util.EObjectWithInverseResolvingEList;
import org.eclipse.emf.ecore.util.InternalEList;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Person</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.PersonImpl#getName <em>Name</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.PersonImpl#getArticles <em>Articles</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.PersonImpl#getSurname <em>Surname</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.PersonImpl#getAge <em>Age</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.PersonImpl#getAccess_key <em>Access key</em>}</li>
 * </ul>
 *
 * @generated
 */
public class PersonImpl extends MinimalEObjectImpl.Container implements Person {
	/**
	 * The cached value of the '{@link #getName() <em>Name</em>}' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getName()
	 * @generated
	 * @ordered
	 */
	protected EList<String> name;

	/**
	 * The cached value of the '{@link #getArticles() <em>Articles</em>}' reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getArticles()
	 * @generated
	 * @ordered
	 */
	protected EList<Article> articles;

	/**
	 * The default value of the '{@link #getSurname() <em>Surname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getSurname()
	 * @generated
	 * @ordered
	 */
	protected static final String SURNAME_EDEFAULT = null;

	/**
	 * The cached value of the '{@link #getSurname() <em>Surname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getSurname()
	 * @generated
	 * @ordered
	 */
	protected String surname = SURNAME_EDEFAULT;

	/**
	 * The default value of the '{@link #getAge() <em>Age</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getAge()
	 * @generated
	 * @ordered
	 */
	protected static final short AGE_EDEFAULT = 0;

	/**
	 * The cached value of the '{@link #getAge() <em>Age</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getAge()
	 * @generated
	 * @ordered
	 */
	protected short age = AGE_EDEFAULT;

	/**
	 * The cached value of the '{@link #getAccess_key() <em>Access key</em>}' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getAccess_key()
	 * @generated
	 * @ordered
	 */
	protected EList<Character> access_key;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected PersonImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return WebpagePackage.Literals.PERSON;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EList<String> getName() {
		if (name == null) {
			name = new EDataTypeUniqueEList<String>(String.class, this, WebpagePackage.PERSON__NAME);
		}
		return name;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EList<Article> getArticles() {
		if (articles == null) {
			articles = new EObjectWithInverseResolvingEList.ManyInverse<Article>(Article.class, this,
					WebpagePackage.PERSON__ARTICLES, WebpagePackage.ARTICLE__AUTHORS);
		}
		return articles;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String getSurname() {
		return surname;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setSurname(String newSurname) {
		String oldSurname = surname;
		surname = newSurname;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, WebpagePackage.PERSON__SURNAME, oldSurname, surname));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public short getAge() {
		return age;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setAge(short newAge) {
		short oldAge = age;
		age = newAge;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, WebpagePackage.PERSON__AGE, oldAge, age));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EList<Character> getAccess_key() {
		if (access_key == null) {
			access_key = new EDataTypeUniqueEList<Character>(Character.class, this, WebpagePackage.PERSON__ACCESS_KEY);
		}
		return access_key;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	@Override
	public NotificationChain eInverseAdd(InternalEObject otherEnd, int featureID, NotificationChain msgs) {
		switch (featureID) {
		case WebpagePackage.PERSON__ARTICLES:
			return ((InternalEList<InternalEObject>) (InternalEList<?>) getArticles()).basicAdd(otherEnd, msgs);
		}
		return super.eInverseAdd(otherEnd, featureID, msgs);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public NotificationChain eInverseRemove(InternalEObject otherEnd, int featureID, NotificationChain msgs) {
		switch (featureID) {
		case WebpagePackage.PERSON__ARTICLES:
			return ((InternalEList<?>) getArticles()).basicRemove(otherEnd, msgs);
		}
		return super.eInverseRemove(otherEnd, featureID, msgs);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object eGet(int featureID, boolean resolve, boolean coreType) {
		switch (featureID) {
		case WebpagePackage.PERSON__NAME:
			return getName();
		case WebpagePackage.PERSON__ARTICLES:
			return getArticles();
		case WebpagePackage.PERSON__SURNAME:
			return getSurname();
		case WebpagePackage.PERSON__AGE:
			return getAge();
		case WebpagePackage.PERSON__ACCESS_KEY:
			return getAccess_key();
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
		case WebpagePackage.PERSON__NAME:
			getName().clear();
			getName().addAll((Collection<? extends String>) newValue);
			return;
		case WebpagePackage.PERSON__ARTICLES:
			getArticles().clear();
			getArticles().addAll((Collection<? extends Article>) newValue);
			return;
		case WebpagePackage.PERSON__SURNAME:
			setSurname((String) newValue);
			return;
		case WebpagePackage.PERSON__AGE:
			setAge((Short) newValue);
			return;
		case WebpagePackage.PERSON__ACCESS_KEY:
			getAccess_key().clear();
			getAccess_key().addAll((Collection<? extends Character>) newValue);
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
		case WebpagePackage.PERSON__NAME:
			getName().clear();
			return;
		case WebpagePackage.PERSON__ARTICLES:
			getArticles().clear();
			return;
		case WebpagePackage.PERSON__SURNAME:
			setSurname(SURNAME_EDEFAULT);
			return;
		case WebpagePackage.PERSON__AGE:
			setAge(AGE_EDEFAULT);
			return;
		case WebpagePackage.PERSON__ACCESS_KEY:
			getAccess_key().clear();
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
		case WebpagePackage.PERSON__NAME:
			return name != null && !name.isEmpty();
		case WebpagePackage.PERSON__ARTICLES:
			return articles != null && !articles.isEmpty();
		case WebpagePackage.PERSON__SURNAME:
			return SURNAME_EDEFAULT == null ? surname != null : !SURNAME_EDEFAULT.equals(surname);
		case WebpagePackage.PERSON__AGE:
			return age != AGE_EDEFAULT;
		case WebpagePackage.PERSON__ACCESS_KEY:
			return access_key != null && !access_key.isEmpty();
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
		result.append(", surname: ");
		result.append(surname);
		result.append(", age: ");
		result.append(age);
		result.append(", access_key: ");
		result.append(access_key);
		result.append(')');
		return result.toString();
	}

} //PersonImpl
