/**
 */
package com.vogella.emf.webpage.model.webpage.impl;

import com.vogella.emf.webpage.model.webpage.Article;
import com.vogella.emf.webpage.model.webpage.ArticleType;
import com.vogella.emf.webpage.model.webpage.Chapter;
import com.vogella.emf.webpage.model.webpage.Person;
import com.vogella.emf.webpage.model.webpage.Picture;
import com.vogella.emf.webpage.model.webpage.Source;
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
import org.eclipse.emf.ecore.util.EObjectContainmentEList;
import org.eclipse.emf.ecore.util.EObjectResolvingEList;
import org.eclipse.emf.ecore.util.EObjectWithInverseResolvingEList;
import org.eclipse.emf.ecore.util.InternalEList;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Article</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.ArticleImpl#getName <em>Name</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.ArticleImpl#getChapters <em>Chapters</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.ArticleImpl#getAuthors <em>Authors</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.ArticleImpl#getPicture <em>Picture</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.ArticleImpl#getArticletype <em>Articletype</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.ArticleImpl#getRelated <em>Related</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.ArticleImpl#getSources <em>Sources</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.ArticleImpl#getFlags <em>Flags</em>}</li>
 *   <li>{@link com.vogella.emf.webpage.model.webpage.impl.ArticleImpl#getNumber <em>Number</em>}</li>
 * </ul>
 *
 * @generated
 */
public class ArticleImpl extends MinimalEObjectImpl.Container implements Article {
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
	 * The cached value of the '{@link #getChapters() <em>Chapters</em>}' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getChapters()
	 * @generated
	 * @ordered
	 */
	protected EList<Chapter> chapters;

	/**
	 * The cached value of the '{@link #getAuthors() <em>Authors</em>}' reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getAuthors()
	 * @generated
	 * @ordered
	 */
	protected EList<Person> authors;

	/**
	 * The cached value of the '{@link #getPicture() <em>Picture</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getPicture()
	 * @generated
	 * @ordered
	 */
	protected Picture picture;

	/**
	 * The default value of the '{@link #getArticletype() <em>Articletype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getArticletype()
	 * @generated
	 * @ordered
	 */
	protected static final ArticleType ARTICLETYPE_EDEFAULT = ArticleType.REVIEW;

	/**
	 * The cached value of the '{@link #getArticletype() <em>Articletype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getArticletype()
	 * @generated
	 * @ordered
	 */
	protected ArticleType articletype = ARTICLETYPE_EDEFAULT;

	/**
	 * The cached value of the '{@link #getRelated() <em>Related</em>}' reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getRelated()
	 * @generated
	 * @ordered
	 */
	protected EList<Article> related;

	/**
	 * The cached value of the '{@link #getSources() <em>Sources</em>}' reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getSources()
	 * @generated
	 * @ordered
	 */
	protected EList<Source> sources;

	/**
	 * The cached value of the '{@link #getFlags() <em>Flags</em>}' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getFlags()
	 * @generated
	 * @ordered
	 */
	protected EList<Boolean> flags;

	/**
	 * The default value of the '{@link #getNumber() <em>Number</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getNumber()
	 * @generated
	 * @ordered
	 */
	protected static final float NUMBER_EDEFAULT = 0.0F;

	/**
	 * The cached value of the '{@link #getNumber() <em>Number</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getNumber()
	 * @generated
	 * @ordered
	 */
	protected float number = NUMBER_EDEFAULT;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected ArticleImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return WebpagePackage.Literals.ARTICLE;
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
			eNotify(new ENotificationImpl(this, Notification.SET, WebpagePackage.ARTICLE__NAME, oldName, name));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EList<Chapter> getChapters() {
		if (chapters == null) {
			chapters = new EObjectContainmentEList<Chapter>(Chapter.class, this, WebpagePackage.ARTICLE__CHAPTERS);
		}
		return chapters;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EList<Person> getAuthors() {
		if (authors == null) {
			authors = new EObjectWithInverseResolvingEList.ManyInverse<Person>(Person.class, this,
					WebpagePackage.ARTICLE__AUTHORS, WebpagePackage.PERSON__ARTICLES);
		}
		return authors;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Picture getPicture() {
		if (picture != null && picture.eIsProxy()) {
			InternalEObject oldPicture = (InternalEObject) picture;
			picture = (Picture) eResolveProxy(oldPicture);
			if (picture != oldPicture) {
				if (eNotificationRequired())
					eNotify(new ENotificationImpl(this, Notification.RESOLVE, WebpagePackage.ARTICLE__PICTURE,
							oldPicture, picture));
			}
		}
		return picture;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Picture basicGetPicture() {
		return picture;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setPicture(Picture newPicture) {
		Picture oldPicture = picture;
		picture = newPicture;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, WebpagePackage.ARTICLE__PICTURE, oldPicture,
					picture));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public ArticleType getArticletype() {
		return articletype;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setArticletype(ArticleType newArticletype) {
		ArticleType oldArticletype = articletype;
		articletype = newArticletype == null ? ARTICLETYPE_EDEFAULT : newArticletype;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, WebpagePackage.ARTICLE__ARTICLETYPE, oldArticletype,
					articletype));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EList<Article> getRelated() {
		if (related == null) {
			related = new EObjectResolvingEList<Article>(Article.class, this, WebpagePackage.ARTICLE__RELATED);
		}
		return related;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EList<Source> getSources() {
		if (sources == null) {
			sources = new EObjectResolvingEList<Source>(Source.class, this, WebpagePackage.ARTICLE__SOURCES);
		}
		return sources;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EList<Boolean> getFlags() {
		if (flags == null) {
			flags = new EDataTypeUniqueEList<Boolean>(Boolean.class, this, WebpagePackage.ARTICLE__FLAGS);
		}
		return flags;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public float getNumber() {
		return number;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setNumber(float newNumber) {
		float oldNumber = number;
		number = newNumber;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, WebpagePackage.ARTICLE__NUMBER, oldNumber, number));
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
		case WebpagePackage.ARTICLE__AUTHORS:
			return ((InternalEList<InternalEObject>) (InternalEList<?>) getAuthors()).basicAdd(otherEnd, msgs);
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
		case WebpagePackage.ARTICLE__CHAPTERS:
			return ((InternalEList<?>) getChapters()).basicRemove(otherEnd, msgs);
		case WebpagePackage.ARTICLE__AUTHORS:
			return ((InternalEList<?>) getAuthors()).basicRemove(otherEnd, msgs);
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
		case WebpagePackage.ARTICLE__NAME:
			return getName();
		case WebpagePackage.ARTICLE__CHAPTERS:
			return getChapters();
		case WebpagePackage.ARTICLE__AUTHORS:
			return getAuthors();
		case WebpagePackage.ARTICLE__PICTURE:
			if (resolve)
				return getPicture();
			return basicGetPicture();
		case WebpagePackage.ARTICLE__ARTICLETYPE:
			return getArticletype();
		case WebpagePackage.ARTICLE__RELATED:
			return getRelated();
		case WebpagePackage.ARTICLE__SOURCES:
			return getSources();
		case WebpagePackage.ARTICLE__FLAGS:
			return getFlags();
		case WebpagePackage.ARTICLE__NUMBER:
			return getNumber();
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
		case WebpagePackage.ARTICLE__NAME:
			setName((String) newValue);
			return;
		case WebpagePackage.ARTICLE__CHAPTERS:
			getChapters().clear();
			getChapters().addAll((Collection<? extends Chapter>) newValue);
			return;
		case WebpagePackage.ARTICLE__AUTHORS:
			getAuthors().clear();
			getAuthors().addAll((Collection<? extends Person>) newValue);
			return;
		case WebpagePackage.ARTICLE__PICTURE:
			setPicture((Picture) newValue);
			return;
		case WebpagePackage.ARTICLE__ARTICLETYPE:
			setArticletype((ArticleType) newValue);
			return;
		case WebpagePackage.ARTICLE__RELATED:
			getRelated().clear();
			getRelated().addAll((Collection<? extends Article>) newValue);
			return;
		case WebpagePackage.ARTICLE__SOURCES:
			getSources().clear();
			getSources().addAll((Collection<? extends Source>) newValue);
			return;
		case WebpagePackage.ARTICLE__FLAGS:
			getFlags().clear();
			getFlags().addAll((Collection<? extends Boolean>) newValue);
			return;
		case WebpagePackage.ARTICLE__NUMBER:
			setNumber((Float) newValue);
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
		case WebpagePackage.ARTICLE__NAME:
			setName(NAME_EDEFAULT);
			return;
		case WebpagePackage.ARTICLE__CHAPTERS:
			getChapters().clear();
			return;
		case WebpagePackage.ARTICLE__AUTHORS:
			getAuthors().clear();
			return;
		case WebpagePackage.ARTICLE__PICTURE:
			setPicture((Picture) null);
			return;
		case WebpagePackage.ARTICLE__ARTICLETYPE:
			setArticletype(ARTICLETYPE_EDEFAULT);
			return;
		case WebpagePackage.ARTICLE__RELATED:
			getRelated().clear();
			return;
		case WebpagePackage.ARTICLE__SOURCES:
			getSources().clear();
			return;
		case WebpagePackage.ARTICLE__FLAGS:
			getFlags().clear();
			return;
		case WebpagePackage.ARTICLE__NUMBER:
			setNumber(NUMBER_EDEFAULT);
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
		case WebpagePackage.ARTICLE__NAME:
			return NAME_EDEFAULT == null ? name != null : !NAME_EDEFAULT.equals(name);
		case WebpagePackage.ARTICLE__CHAPTERS:
			return chapters != null && !chapters.isEmpty();
		case WebpagePackage.ARTICLE__AUTHORS:
			return authors != null && !authors.isEmpty();
		case WebpagePackage.ARTICLE__PICTURE:
			return picture != null;
		case WebpagePackage.ARTICLE__ARTICLETYPE:
			return articletype != ARTICLETYPE_EDEFAULT;
		case WebpagePackage.ARTICLE__RELATED:
			return related != null && !related.isEmpty();
		case WebpagePackage.ARTICLE__SOURCES:
			return sources != null && !sources.isEmpty();
		case WebpagePackage.ARTICLE__FLAGS:
			return flags != null && !flags.isEmpty();
		case WebpagePackage.ARTICLE__NUMBER:
			return number != NUMBER_EDEFAULT;
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
		result.append(", articletype: ");
		result.append(articletype);
		result.append(", flags: ");
		result.append(flags);
		result.append(", number: ");
		result.append(number);
		result.append(')');
		return result.toString();
	}

} //ArticleImpl
