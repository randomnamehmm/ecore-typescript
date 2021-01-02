/**
 */
package com.vogella.emf.webpage.model.webpage.impl;

import com.vogella.emf.webpage.model.webpage.Category;
import com.vogella.emf.webpage.model.webpage.Picture;
import com.vogella.emf.webpage.model.webpage.WebpagePackage;
import com.vogella.emf.webpage.model.webpage.Website;

import java.util.Collection;

import org.eclipse.emf.common.notify.Notification;
import org.eclipse.emf.common.notify.NotificationChain;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.InternalEObject;

import org.eclipse.emf.ecore.impl.ENotificationImpl;
import org.eclipse.emf.ecore.impl.MinimalEObjectImpl;

import org.eclipse.emf.ecore.util.EDataTypeUniqueEList;
import org.eclipse.emf.ecore.util.EObjectContainmentEList;
import org.eclipse.emf.ecore.util.InternalEList;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Website</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.WebsiteImpl#getName <em>Name</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.WebsiteImpl#getTitle <em>Title</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.WebsiteImpl#getDescription <em>Description</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.WebsiteImpl#getCategories <em>Categories</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.WebsiteImpl#getPictures <em>Pictures</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.WebsiteImpl#getNumber <em>Number</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.WebsiteImpl#getLinks <em>Links</em>}</li>
 * </ul>
 *
 * @generated
 */
public class WebsiteImpl extends MinimalEObjectImpl.Container implements Website {
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
	 * The default value of the '{@link #getTitle() <em>Title</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getTitle()
	 * @generated
	 * @ordered
	 */
	protected static final String TITLE_EDEFAULT = null;

	/**
	 * The cached value of the '{@link #getTitle() <em>Title</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getTitle()
	 * @generated
	 * @ordered
	 */
	protected String title = TITLE_EDEFAULT;

	/**
	 * The default value of the '{@link #getDescription() <em>Description</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getDescription()
	 * @generated
	 * @ordered
	 */
	protected static final String DESCRIPTION_EDEFAULT = null;

	/**
	 * The cached value of the '{@link #getDescription() <em>Description</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getDescription()
	 * @generated
	 * @ordered
	 */
	protected String description = DESCRIPTION_EDEFAULT;

	/**
	 * The cached value of the '{@link #getCategories() <em>Categories</em>}' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getCategories()
	 * @generated
	 * @ordered
	 */
	protected EList<Category> categories;

	/**
	 * The cached value of the '{@link #getPictures() <em>Pictures</em>}' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getPictures()
	 * @generated
	 * @ordered
	 */
	protected EList<Picture> pictures;

	/**
	 * The default value of the '{@link #getNumber() <em>Number</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getNumber()
	 * @generated
	 * @ordered
	 */
	protected static final double NUMBER_EDEFAULT = 0.0;

	/**
	 * The cached value of the '{@link #getNumber() <em>Number</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getNumber()
	 * @generated
	 * @ordered
	 */
	protected double number = NUMBER_EDEFAULT;

	/**
	 * The cached value of the '{@link #getLinks() <em>Links</em>}' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getLinks()
	 * @generated
	 * @ordered
	 */
	protected EList<String> links;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected WebsiteImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return WebpagePackage.Literals.WEBSITE;
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
			eNotify(new ENotificationImpl(this, Notification.SET, WebpagePackage.WEBSITE__NAME, oldName, name));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String getTitle() {
		return title;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setTitle(String newTitle) {
		String oldTitle = title;
		title = newTitle;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, WebpagePackage.WEBSITE__TITLE, oldTitle, title));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String getDescription() {
		return description;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setDescription(String newDescription) {
		String oldDescription = description;
		description = newDescription;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, WebpagePackage.WEBSITE__DESCRIPTION, oldDescription,
					description));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EList<Category> getCategories() {
		if (categories == null) {
			categories = new EObjectContainmentEList<Category>(Category.class, this,
					WebpagePackage.WEBSITE__CATEGORIES);
		}
		return categories;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EList<Picture> getPictures() {
		if (pictures == null) {
			pictures = new EObjectContainmentEList<Picture>(Picture.class, this, WebpagePackage.WEBSITE__PICTURES);
		}
		return pictures;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public double getNumber() {
		return number;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setNumber(double newNumber) {
		double oldNumber = number;
		number = newNumber;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, WebpagePackage.WEBSITE__NUMBER, oldNumber, number));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EList<String> getLinks() {
		if (links == null) {
			links = new EDataTypeUniqueEList<String>(String.class, this, WebpagePackage.WEBSITE__LINKS);
		}
		return links;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public NotificationChain eInverseRemove(InternalEObject otherEnd, int featureID, NotificationChain msgs) {
		switch (featureID) {
		case WebpagePackage.WEBSITE__CATEGORIES:
			return ((InternalEList<?>) getCategories()).basicRemove(otherEnd, msgs);
		case WebpagePackage.WEBSITE__PICTURES:
			return ((InternalEList<?>) getPictures()).basicRemove(otherEnd, msgs);
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
		case WebpagePackage.WEBSITE__NAME:
			return getName();
		case WebpagePackage.WEBSITE__TITLE:
			return getTitle();
		case WebpagePackage.WEBSITE__DESCRIPTION:
			return getDescription();
		case WebpagePackage.WEBSITE__CATEGORIES:
			return getCategories();
		case WebpagePackage.WEBSITE__PICTURES:
			return getPictures();
		case WebpagePackage.WEBSITE__NUMBER:
			return getNumber();
		case WebpagePackage.WEBSITE__LINKS:
			return getLinks();
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
		case WebpagePackage.WEBSITE__NAME:
			setName((String) newValue);
			return;
		case WebpagePackage.WEBSITE__TITLE:
			setTitle((String) newValue);
			return;
		case WebpagePackage.WEBSITE__DESCRIPTION:
			setDescription((String) newValue);
			return;
		case WebpagePackage.WEBSITE__CATEGORIES:
			getCategories().clear();
			getCategories().addAll((Collection<? extends Category>) newValue);
			return;
		case WebpagePackage.WEBSITE__PICTURES:
			getPictures().clear();
			getPictures().addAll((Collection<? extends Picture>) newValue);
			return;
		case WebpagePackage.WEBSITE__NUMBER:
			setNumber((Double) newValue);
			return;
		case WebpagePackage.WEBSITE__LINKS:
			getLinks().clear();
			getLinks().addAll((Collection<? extends String>) newValue);
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
		case WebpagePackage.WEBSITE__NAME:
			setName(NAME_EDEFAULT);
			return;
		case WebpagePackage.WEBSITE__TITLE:
			setTitle(TITLE_EDEFAULT);
			return;
		case WebpagePackage.WEBSITE__DESCRIPTION:
			setDescription(DESCRIPTION_EDEFAULT);
			return;
		case WebpagePackage.WEBSITE__CATEGORIES:
			getCategories().clear();
			return;
		case WebpagePackage.WEBSITE__PICTURES:
			getPictures().clear();
			return;
		case WebpagePackage.WEBSITE__NUMBER:
			setNumber(NUMBER_EDEFAULT);
			return;
		case WebpagePackage.WEBSITE__LINKS:
			getLinks().clear();
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
		case WebpagePackage.WEBSITE__NAME:
			return NAME_EDEFAULT == null ? name != null : !NAME_EDEFAULT.equals(name);
		case WebpagePackage.WEBSITE__TITLE:
			return TITLE_EDEFAULT == null ? title != null : !TITLE_EDEFAULT.equals(title);
		case WebpagePackage.WEBSITE__DESCRIPTION:
			return DESCRIPTION_EDEFAULT == null ? description != null : !DESCRIPTION_EDEFAULT.equals(description);
		case WebpagePackage.WEBSITE__CATEGORIES:
			return categories != null && !categories.isEmpty();
		case WebpagePackage.WEBSITE__PICTURES:
			return pictures != null && !pictures.isEmpty();
		case WebpagePackage.WEBSITE__NUMBER:
			return number != NUMBER_EDEFAULT;
		case WebpagePackage.WEBSITE__LINKS:
			return links != null && !links.isEmpty();
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
		result.append(", title: ");
		result.append(title);
		result.append(", description: ");
		result.append(description);
		result.append(", number: ");
		result.append(number);
		result.append(", links: ");
		result.append(links);
		result.append(')');
		return result.toString();
	}

} //WebsiteImpl
