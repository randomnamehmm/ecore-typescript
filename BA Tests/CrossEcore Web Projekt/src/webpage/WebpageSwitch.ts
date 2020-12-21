import {Switch} from "ecore/Switch";
import {EObject} from "ecore/EObject";
import {EPackage} from "ecore/EPackage";
import {WebpagePackage} from "webpage/WebpagePackage";
import {Category} from "webpage/Category";
import {WebpagePackageImpl} from "webpage/WebpagePackageImpl";
import {Picture} from "webpage/Picture";
import {Article} from "webpage/Article";
import {Chapter} from "webpage/Chapter";
import {Website} from "webpage/Website";
import {AnimatedPicture} from "webpage/AnimatedPicture";
import {Student} from "webpage/Student";
import {Person} from "webpage/Person";
import {Source} from "webpage/Source";
export class WebpageSwitch<T> extends Switch<T> {
	protected static modelPackage:WebpagePackage;
	
	constructor(){
		super();
		if (WebpageSwitch.modelPackage == null) {
			WebpageSwitch.modelPackage = WebpagePackageImpl.eINSTANCE;
		}	
	}
	
	public isSwitchFor(ePackage:EPackage):boolean{
		return ePackage === WebpageSwitch.modelPackage;
	}
	
	public doSwitch(classifierID:number, theEObject:EObject):T {
		switch (classifierID) {
			case WebpagePackageImpl.WEBSITE: {
				let obj:Website = <Website>theEObject;
				let result:T = this.caseWebsite(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case WebpagePackageImpl.CATEGORY: {
				let obj:Category = <Category>theEObject;
				let result:T = this.caseCategory(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case WebpagePackageImpl.ARTICLE: {
				let obj:Article = <Article>theEObject;
				let result:T = this.caseArticle(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case WebpagePackageImpl.PERSON: {
				let obj:Person = <Person>theEObject;
				let result:T = this.casePerson(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case WebpagePackageImpl.STUDENT: {
				let obj:Student = <Student>theEObject;
				let result:T = this.caseStudent(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case WebpagePackageImpl.CHAPTER: {
				let obj:Chapter = <Chapter>theEObject;
				let result:T = this.caseChapter(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case WebpagePackageImpl.PICTURE: {
				let obj:Picture = <Picture>theEObject;
				let result:T = this.casePicture(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case WebpagePackageImpl.SOURCE: {
				let obj:Source = <Source>theEObject;
				let result:T = this.caseSource(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case WebpagePackageImpl.ANIMATEDPICTURE: {
				let obj:AnimatedPicture = <AnimatedPicture>theEObject;
				let result:T = this.caseAnimatedPicture(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			default: return this.defaultCase(theEObject);
		}
	}
	
	
	public caseWebsite(object:Website):T {
		return null;
	}
	public caseCategory(object:Category):T {
		return null;
	}
	public caseArticle(object:Article):T {
		return null;
	}
	public casePerson(object:Person):T {
		return null;
	}
	public caseStudent(object:Student):T {
		return null;
	}
	public caseChapter(object:Chapter):T {
		return null;
	}
	public casePicture(object:Picture):T {
		return null;
	}
	public caseSource(object:Source):T {
		return null;
	}
	public caseAnimatedPicture(object:AnimatedPicture):T {
		return null;
	}
	
}

