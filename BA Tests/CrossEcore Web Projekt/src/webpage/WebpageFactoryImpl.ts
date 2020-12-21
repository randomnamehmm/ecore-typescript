import {EFactoryImpl} from "ecore/EFactoryImpl";
import {EClass} from "ecore/EClass";
import {EDataType} from "ecore/EDataType";
import {EObject} from "ecore/EObject";
import {AllInstances} from "ecore/AllInstances";
import {StudentImpl} from "webpage/StudentImpl";
import {Category} from "webpage/Category";
import {WebsiteImpl} from "webpage/WebsiteImpl";
import {Article} from "webpage/Article";
import {AnimatedPictureImpl} from "webpage/AnimatedPictureImpl";
import {Chapter} from "webpage/Chapter";
import {Website} from "webpage/Website";
import {AnimatedPicture} from "webpage/AnimatedPicture";
import {Student} from "webpage/Student";
import {Source} from "webpage/Source";
import {WebpageFactory} from "webpage/WebpageFactory";
import {CategoryImpl} from "webpage/CategoryImpl";
import {WebpagePackageImpl} from "webpage/WebpagePackageImpl";
import {PictureImpl} from "webpage/PictureImpl";
import {PersonImpl} from "webpage/PersonImpl";
import {ChapterImpl} from "webpage/ChapterImpl";
import {Picture} from "webpage/Picture";
import {SourceImpl} from "webpage/SourceImpl";
import {Person} from "webpage/Person";
import {ArticleImpl} from "webpage/ArticleImpl";
import {ArticleType} from "webpage/ArticleType";
export class WebpageFactoryImpl extends EFactoryImpl implements WebpageFactory{
	public static eINSTANCE : WebpageFactory = WebpageFactoryImpl.init();
	public static init() : WebpageFactory 
	{
		return new WebpageFactoryImpl();
	}
	
	public createWebsite = () : Website => {
		let theWebsite = new WebsiteImpl();
		
		AllInstances.INSTANCE.put(theWebsite, "Website");
		
		return theWebsite;
	}
	public createCategory = () : Category => {
		let theCategory = new CategoryImpl();
		
		AllInstances.INSTANCE.put(theCategory, "Category");
		
		return theCategory;
	}
	public createArticle = () : Article => {
		let theArticle = new ArticleImpl();
		
		AllInstances.INSTANCE.put(theArticle, "Article");
		
		return theArticle;
	}
	public createPerson = () : Person => {
		let thePerson = new PersonImpl();
		
		AllInstances.INSTANCE.put(thePerson, "Person");
		
		return thePerson;
	}
	public createStudent = () : Student => {
		let theStudent = new StudentImpl();
		
		AllInstances.INSTANCE.put(theStudent, "Student");
		
		return theStudent;
	}
	public createChapter = () : Chapter => {
		let theChapter = new ChapterImpl();
		
		AllInstances.INSTANCE.put(theChapter, "Chapter");
		
		return theChapter;
	}
	public createPicture = () : Picture => {
		let thePicture = new PictureImpl();
		
		AllInstances.INSTANCE.put(thePicture, "Picture");
		
		return thePicture;
	}
	public createSource = () : Source => {
		let theSource = new SourceImpl();
		
		AllInstances.INSTANCE.put(theSource, "Source");
		
		return theSource;
	}
	public createAnimatedPicture = () : AnimatedPicture => {
		let theAnimatedPicture = new AnimatedPictureImpl();
		
		AllInstances.INSTANCE.put(theAnimatedPicture, "AnimatedPicture");
		
		return theAnimatedPicture;
	}
	
	public create(eClass:EClass):EObject {
		switch (eClass.getClassifierID()) {
			case WebpagePackageImpl.WEBSITE: return this.createWebsite();
			case WebpagePackageImpl.CATEGORY: return this.createCategory();
			case WebpagePackageImpl.ARTICLE: return this.createArticle();
			case WebpagePackageImpl.PERSON: return this.createPerson();
			case WebpagePackageImpl.STUDENT: return this.createStudent();
			case WebpagePackageImpl.CHAPTER: return this.createChapter();
			case WebpagePackageImpl.PICTURE: return this.createPicture();
			case WebpagePackageImpl.SOURCE: return this.createSource();
			case WebpagePackageImpl.ANIMATEDPICTURE: return this.createAnimatedPicture();
			default:
				throw new Error("The class '" + eClass.name + "' is not a valid classifier");
		}
	}
	
	
	public createFromString(eDataType:EDataType, initialValue:string):any {
		switch (eDataType.getClassifierID()) {
		case WebpagePackageImpl.ARTICLETYPE:
			return this.createArticleTypeFromString(eDataType, initialValue);
		default:
			throw new Error("The datatype '" + eDataType.name + "' is not a valid classifier");
		}
	}
	
	public convertToString(eDataType:EDataType, instanceValue:any):string {
		switch (eDataType.getClassifierID()) {
		case WebpagePackageImpl.ARTICLETYPE:
			return this.convertArticleTypeToString(eDataType, instanceValue);
		default:
			throw new Error("The datatype '" + eDataType.name + "' is not a valid classifier");
		}
	}
	
	
	public createArticleTypeFromString(eDataType:EDataType, initialValue:string):ArticleType {
		let result:ArticleType = ArticleType.get_string(initialValue);
		if (result == null)
			throw new Error(
	                        "The value '" + initialValue + "' is not a valid enumerator of '" + eDataType.name + "'");
		return result;
	}
	
	public convertArticleTypeToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : instanceValue.toString();
	}
}
