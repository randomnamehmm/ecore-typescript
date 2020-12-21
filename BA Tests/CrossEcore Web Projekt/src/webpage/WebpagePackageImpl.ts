import {EFactory} from "ecore/EFactory";
import {EPackageImpl} from "ecore/EPackageImpl";
import {EClass} from "ecore/EClass";
import {EAttribute} from "ecore/EAttribute";
import {EcorePackageImpl} from "ecore/EcorePackageImpl";
import {EOperation} from "ecore/EOperation";
import {EEnum} from "ecore/EEnum";
import {EcoreFactoryImpl} from "ecore/EcoreFactoryImpl";
import {EReference} from "ecore/EReference";
import {ArticleBase} from "webpage/ArticleBase";
import {StudentImpl} from "webpage/StudentImpl";
import {CategoryBase} from "webpage/CategoryBase";
import {WebsiteImpl} from "webpage/WebsiteImpl";
import {SourceBase} from "webpage/SourceBase";
import {AnimatedPictureImpl} from "webpage/AnimatedPictureImpl";
import {PictureBase} from "webpage/PictureBase";
import {ChapterBase} from "webpage/ChapterBase";
import {CategoryImpl} from "webpage/CategoryImpl";
import {WebpagePackage} from "webpage/WebpagePackage";
import {PictureImpl} from "webpage/PictureImpl";
import {AnimatedPictureBase} from "webpage/AnimatedPictureBase";
import {PersonImpl} from "webpage/PersonImpl";
import {ChapterImpl} from "webpage/ChapterImpl";
import {SourceImpl} from "webpage/SourceImpl";
import {WebsiteBase} from "webpage/WebsiteBase";
import {StudentBase} from "webpage/StudentBase";
import {PersonBase} from "webpage/PersonBase";
import {ArticleImpl} from "webpage/ArticleImpl";
export class WebpagePackageImpl extends EPackageImpl implements WebpagePackage{
		public static eNAME:string = "webpage";
		
		public static eNS_URI:string = "http://www.xmibypeterfollowingthetutoria.ls/webpage";
		
		public static eNS_PREFIX:string = "webpage";
		
		
		
		/*
		constructor(){
			//no private constructors in TypeScript
			super(WebpagePackageImpl.eNS_URI, WebpageFactoryImpl.eINSTANCE as any as EFactory);
		}
		*/
		
		public static init():WebpagePackage
		{

	        // Obtain or create and register package
	        let theWebpagePackage = new WebpagePackageImpl();
	        theWebpagePackage.ecorePackage = EcorePackageImpl.eINSTANCE;
	        theWebpagePackage.ecoreFactory = EcoreFactoryImpl.eINSTANCE;
	
	        // Create package meta-data objects
	        theWebpagePackage.createPackageContents();
	
	        // Initialize created meta-data
	        theWebpagePackage.initializePackageContents();

	        return theWebpagePackage;
        }
        
        private isCreated:boolean = false;
        
        public createPackageContents = ():void =>
        {
            if (this.isCreated) return;
            this.isCreated = true;
			this.WebsiteEClass = this.createEClass(WebpagePackageImpl.WEBSITE);
			WebsiteBase.eStaticClass = this.WebsiteEClass;
			this.createEAttribute(this.WebsiteEClass, WebpagePackageImpl.WEBSITE__NAME);
			this.createEAttribute(this.WebsiteEClass, WebpagePackageImpl.WEBSITE__TITLE);
			this.createEAttribute(this.WebsiteEClass, WebpagePackageImpl.WEBSITE__DESCRIPTION);
			this.createEReference(this.WebsiteEClass, WebpagePackageImpl.WEBSITE__CATEGORIES);
			this.createEReference(this.WebsiteEClass, WebpagePackageImpl.WEBSITE__PICTURES);
			this.createEAttribute(this.WebsiteEClass, WebpagePackageImpl.WEBSITE__NUMBER);
			this.createEAttribute(this.WebsiteEClass, WebpagePackageImpl.WEBSITE__LINKS);
			this.CategoryEClass = this.createEClass(WebpagePackageImpl.CATEGORY);
			CategoryBase.eStaticClass = this.CategoryEClass;
			this.createEAttribute(this.CategoryEClass, WebpagePackageImpl.CATEGORY__NAME);
			this.createEReference(this.CategoryEClass, WebpagePackageImpl.CATEGORY__ARTICLES);
			this.createEAttribute(this.CategoryEClass, WebpagePackageImpl.CATEGORY__NUMBER);
			this.ArticleEClass = this.createEClass(WebpagePackageImpl.ARTICLE);
			ArticleBase.eStaticClass = this.ArticleEClass;
			this.createEAttribute(this.ArticleEClass, WebpagePackageImpl.ARTICLE__NAME);
			this.createEReference(this.ArticleEClass, WebpagePackageImpl.ARTICLE__CHAPTERS);
			this.createEReference(this.ArticleEClass, WebpagePackageImpl.ARTICLE__AUTHORS);
			this.createEReference(this.ArticleEClass, WebpagePackageImpl.ARTICLE__PICTURE);
			this.createEAttribute(this.ArticleEClass, WebpagePackageImpl.ARTICLE__ARTICLETYPE);
			this.createEReference(this.ArticleEClass, WebpagePackageImpl.ARTICLE__RELATED);
			this.createEReference(this.ArticleEClass, WebpagePackageImpl.ARTICLE__SOURCES);
			this.createEAttribute(this.ArticleEClass, WebpagePackageImpl.ARTICLE__FLAGS);
			this.createEAttribute(this.ArticleEClass, WebpagePackageImpl.ARTICLE__NUMBER);
			this.PersonEClass = this.createEClass(WebpagePackageImpl.PERSON);
			PersonBase.eStaticClass = this.PersonEClass;
			this.createEAttribute(this.PersonEClass, WebpagePackageImpl.PERSON__NAME);
			this.createEReference(this.PersonEClass, WebpagePackageImpl.PERSON__ARTICLES);
			this.createEAttribute(this.PersonEClass, WebpagePackageImpl.PERSON__SURNAME);
			this.createEAttribute(this.PersonEClass, WebpagePackageImpl.PERSON__AGE);
			this.createEAttribute(this.PersonEClass, WebpagePackageImpl.PERSON__ACCESS_KEY);
			this.StudentEClass = this.createEClass(WebpagePackageImpl.STUDENT);
			StudentBase.eStaticClass = this.StudentEClass;
			this.createEAttribute(this.StudentEClass, WebpagePackageImpl.STUDENT__MATRIKELNR);
			this.createEAttribute(this.StudentEClass, WebpagePackageImpl.STUDENT__GRADES);
			this.ChapterEClass = this.createEClass(WebpagePackageImpl.CHAPTER);
			ChapterBase.eStaticClass = this.ChapterEClass;
			this.createEAttribute(this.ChapterEClass, WebpagePackageImpl.CHAPTER__TITLE);
			this.createEAttribute(this.ChapterEClass, WebpagePackageImpl.CHAPTER__SUB_SECTION);
			this.createEAttribute(this.ChapterEClass, WebpagePackageImpl.CHAPTER__LETTERS);
			this.PictureEClass = this.createEClass(WebpagePackageImpl.PICTURE);
			PictureBase.eStaticClass = this.PictureEClass;
			this.createEAttribute(this.PictureEClass, WebpagePackageImpl.PICTURE__NAME);
			this.createEAttribute(this.PictureEClass, WebpagePackageImpl.PICTURE__INFORMATION);
			this.createEAttribute(this.PictureEClass, WebpagePackageImpl.PICTURE__NUMBER);
			this.createEAttribute(this.PictureEClass, WebpagePackageImpl.PICTURE__HASH);
			this.SourceEClass = this.createEClass(WebpagePackageImpl.SOURCE);
			SourceBase.eStaticClass = this.SourceEClass;
			this.createEAttribute(this.SourceEClass, WebpagePackageImpl.SOURCE__TITLE);
			this.createEAttribute(this.SourceEClass, WebpagePackageImpl.SOURCE__URL);
			this.createEAttribute(this.SourceEClass, WebpagePackageImpl.SOURCE__PAGE_NO);
			this.createEAttribute(this.SourceEClass, WebpagePackageImpl.SOURCE__AUTHORS);
			this.AnimatedPictureEClass = this.createEClass(WebpagePackageImpl.ANIMATEDPICTURE);
			AnimatedPictureBase.eStaticClass = this.AnimatedPictureEClass;
			this.createEAttribute(this.AnimatedPictureEClass, WebpagePackageImpl.ANIMATED_PICTURE__REPEAT);
			
			this.ArticleTypeEEnum = this.createEEnum(WebpagePackageImpl.ARTICLETYPE);
			
        }
        private isInitialized:boolean = false;
        public initializePackageContents=():void =>
        {
            if (this.isInitialized) return;
            this.isInitialized = true;
            // Initialize package
            this.name = WebpagePackageImpl.eNAME;
            this.nsPrefix = WebpagePackageImpl.eNS_PREFIX;
            this.nsURI = WebpagePackageImpl.eNS_URI;

			
			
			
			
			
			this.StudentEClass.eSuperTypes.add(this.getPerson());
			
			
			
			
			this.AnimatedPictureEClass.eSuperTypes.add(this.getPicture());
			var op:EOperation = null;
			
			this.initEClass(
			this.WebsiteEClass,
			WebsiteImpl, 
			"Website", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getWebsite_Name(), 
				this.ecorePackage.getEString(), 
				"name", 
				null, 
				0, 
				1, 
				WebsiteImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getWebsite_Title(), 
				this.ecorePackage.getEString(), 
				"title", 
				null, 
				0, 
				1, 
				WebsiteImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getWebsite_Description(), 
				this.ecorePackage.getEString(), 
				"description", 
				null, 
				0, 
				1, 
				WebsiteImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getWebsite_Number(), 
				this.ecorePackage.getEDouble(), 
				"number", 
				"0.0", 
				0, 
				1, 
				WebsiteImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getWebsite_Links(), 
				this.ecorePackage.getEString(), 
				"links", 
				null, 
				0, 
				-1, 
				WebsiteImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				!EPackageImpl.IS_ORDERED);
			
			this.initEReference(
				this.getWebsite_Categories(),
				this.getCategory(), 
				null, 
				"categories", 
				null, 
				0, 
				-1, 
				WebsiteImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getWebsite_Pictures(),
				this.getPicture(), 
				null, 
				"pictures", 
				null, 
				1, 
				-1, 
				WebsiteImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				!EPackageImpl.IS_ORDERED);
			
			
			
			this.initEClass(
			this.CategoryEClass,
			CategoryImpl, 
			"Category", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getCategory_Name(), 
				this.ecorePackage.getEString(), 
				"name", 
				null, 
				0, 
				1, 
				CategoryImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getCategory_Number(), 
				this.ecorePackage.getEShort(), 
				"number", 
				"0", 
				0, 
				1, 
				CategoryImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			this.initEReference(
				this.getCategory_Articles(),
				this.getArticle(), 
				null, 
				"articles", 
				null, 
				0, 
				-1, 
				CategoryImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			this.initEClass(
			this.ArticleEClass,
			ArticleImpl, 
			"Article", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getArticle_Name(), 
				this.ecorePackage.getEString(), 
				"name", 
				null, 
				0, 
				1, 
				ArticleImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getArticle_Articletype(), 
				this.getArticleType(), 
				"articletype", 
				"REVIEW", 
				0, 
				1, 
				ArticleImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getArticle_Flags(), 
				this.ecorePackage.getEBoolean(), 
				"flags", 
				null, 
				0, 
				-1, 
				ArticleImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getArticle_Number(), 
				this.ecorePackage.getEFloat(), 
				"number", 
				"0.0", 
				0, 
				1, 
				ArticleImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			this.initEReference(
				this.getArticle_Chapters(),
				this.getChapter(), 
				null, 
				"chapters", 
				null, 
				0, 
				-1, 
				ArticleImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getArticle_Authors(),
				this.getPerson(), 
				this.getPerson_Articles(), 
				"authors", 
				null, 
				1, 
				-1, 
				ArticleImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getArticle_Picture(),
				this.getPicture(), 
				null, 
				"picture", 
				null, 
				1, 
				1, 
				ArticleImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getArticle_Related(),
				this.getArticle(), 
				null, 
				"related", 
				null, 
				0, 
				-1, 
				ArticleImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getArticle_Sources(),
				this.getSource(), 
				null, 
				"sources", 
				null, 
				0, 
				-1, 
				ArticleImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				!EPackageImpl.IS_ORDERED);
			
			
			
			this.initEClass(
			this.PersonEClass,
			PersonImpl, 
			"Person", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getPerson_Name(), 
				this.ecorePackage.getEString(), 
				"name", 
				null, 
				0, 
				-1, 
				PersonImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getPerson_Surname(), 
				this.ecorePackage.getEString(), 
				"surname", 
				null, 
				0, 
				1, 
				PersonImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getPerson_Age(), 
				this.ecorePackage.getEShort(), 
				"age", 
				"0", 
				0, 
				1, 
				PersonImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getPerson_Access_key(), 
				this.ecorePackage.getEChar(), 
				"access_key", 
				null, 
				0, 
				256, 
				PersonImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				!EPackageImpl.IS_ORDERED);
			
			this.initEReference(
				this.getPerson_Articles(),
				this.getArticle(), 
				this.getArticle_Authors(), 
				"articles", 
				null, 
				0, 
				-1, 
				PersonImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			this.initEClass(
			this.StudentEClass,
			StudentImpl, 
			"Student", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getStudent_Matrikelnr(), 
				this.ecorePackage.getELong(), 
				"matrikelnr", 
				"0", 
				0, 
				1, 
				StudentImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getStudent_Grades(), 
				this.ecorePackage.getEFloat(), 
				"grades", 
				null, 
				0, 
				-1, 
				StudentImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			
			this.initEClass(
			this.ChapterEClass,
			ChapterImpl, 
			"Chapter", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getChapter_Title(), 
				this.ecorePackage.getEString(), 
				"title", 
				null, 
				0, 
				-1, 
				ChapterImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getChapter_SubSection(), 
				this.ecorePackage.getEBoolean(), 
				"subSection", 
				"false", 
				0, 
				1, 
				ChapterImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getChapter_Letters(), 
				this.ecorePackage.getEChar(), 
				"letters", 
				null, 
				0, 
				-1, 
				ChapterImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			
			this.initEClass(
			this.PictureEClass,
			PictureImpl, 
			"Picture", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getPicture_Name(), 
				this.ecorePackage.getEString(), 
				"name", 
				null, 
				0, 
				1, 
				PictureImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getPicture_Information(), 
				this.ecorePackage.getEChar(), 
				"information", 
				null, 
				0, 
				-1, 
				PictureImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getPicture_Number(), 
				this.ecorePackage.getEInt(), 
				"number", 
				"0", 
				0, 
				1, 
				PictureImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getPicture_Hash(), 
				this.ecorePackage.getEBoolean(), 
				"hash", 
				null, 
				0, 
				-1, 
				PictureImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			
			this.initEClass(
			this.SourceEClass,
			SourceImpl, 
			"Source", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getSource_Title(), 
				this.ecorePackage.getEString(), 
				"title", 
				null, 
				0, 
				1, 
				SourceImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getSource_Url(), 
				this.ecorePackage.getEString(), 
				"url", 
				null, 
				0, 
				1, 
				SourceImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getSource_Page_no(), 
				this.ecorePackage.getEInt(), 
				"page_no", 
				null, 
				0, 
				-1, 
				SourceImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getSource_Authors(), 
				this.ecorePackage.getEString(), 
				"authors", 
				null, 
				0, 
				-1, 
				SourceImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				!EPackageImpl.IS_ORDERED);
			
			
			
			
			this.initEClass(
			this.AnimatedPictureEClass,
			AnimatedPictureImpl, 
			"AnimatedPicture", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getAnimatedPicture_Repeat(), 
				this.ecorePackage.getEBoolean(), 
				"repeat", 
				"false", 
				0, 
				1, 
				AnimatedPictureImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			
			// this.initEDataType(this.ArticleTypeEDataType, null, "ArticleType", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			this.initEEnum(this.ArticleTypeEEnum, null, "ArticleType");
			
        }
		
		
		private WebsiteEClass:EClass = null;
		private CategoryEClass:EClass = null;
		private ArticleEClass:EClass = null;
		private PersonEClass:EClass = null;
		private StudentEClass:EClass = null;
		private ChapterEClass:EClass = null;
		private PictureEClass:EClass = null;
		private SourceEClass:EClass = null;
		private AnimatedPictureEClass:EClass = null;
		
		
		private ArticleTypeEEnum:EEnum = null;
		
		
		
		public static WEBSITE:number = 0;
		public static WEBSITE_FEATURE_COUNT:number = 7;
		public static WEBSITE_OPERATION_COUNT:number = 0;
		
		public static WEBSITE__NAME:number = 0;
		public static WEBSITE__TITLE:number = 1;
		public static WEBSITE__DESCRIPTION:number = 2;
		public static WEBSITE__CATEGORIES:number = 3;
		public static WEBSITE__PICTURES:number = 4;
		public static WEBSITE__NUMBER:number = 5;
		public static WEBSITE__LINKS:number = 6;
		
		public static CATEGORY:number = 1;
		public static CATEGORY_FEATURE_COUNT:number = 3;
		public static CATEGORY_OPERATION_COUNT:number = 0;
		
		public static CATEGORY__NAME:number = 0;
		public static CATEGORY__ARTICLES:number = 1;
		public static CATEGORY__NUMBER:number = 2;
		
		public static ARTICLE:number = 2;
		public static ARTICLE_FEATURE_COUNT:number = 9;
		public static ARTICLE_OPERATION_COUNT:number = 0;
		
		public static ARTICLE__NAME:number = 0;
		public static ARTICLE__CHAPTERS:number = 1;
		public static ARTICLE__AUTHORS:number = 2;
		public static ARTICLE__PICTURE:number = 3;
		public static ARTICLE__ARTICLETYPE:number = 4;
		public static ARTICLE__RELATED:number = 5;
		public static ARTICLE__SOURCES:number = 6;
		public static ARTICLE__FLAGS:number = 7;
		public static ARTICLE__NUMBER:number = 8;
		
		public static PERSON:number = 4;
		public static PERSON_FEATURE_COUNT:number = 5;
		public static PERSON_OPERATION_COUNT:number = 0;
		
		public static PERSON__NAME:number = 0;
		public static PERSON__ARTICLES:number = 1;
		public static PERSON__SURNAME:number = 2;
		public static PERSON__AGE:number = 3;
		public static PERSON__ACCESS_KEY:number = 4;
		
		public static STUDENT:number = 5;
		public static STUDENT_FEATURE_COUNT:number = WebpagePackageImpl.PERSON_FEATURE_COUNT + 2;
		public static STUDENT_OPERATION_COUNT:number = WebpagePackageImpl.PERSON_OPERATION_COUNT + 0;
		
		public static STUDENT__NAME:number = 0;
		public static STUDENT__ARTICLES:number = 1;
		public static STUDENT__SURNAME:number = 2;
		public static STUDENT__AGE:number = 3;
		public static STUDENT__ACCESS_KEY:number = 4;
		public static STUDENT__MATRIKELNR:number = 5;
		public static STUDENT__GRADES:number = 6;
		
		public static CHAPTER:number = 6;
		public static CHAPTER_FEATURE_COUNT:number = 3;
		public static CHAPTER_OPERATION_COUNT:number = 0;
		
		public static CHAPTER__TITLE:number = 0;
		public static CHAPTER__SUB_SECTION:number = 1;
		public static CHAPTER__LETTERS:number = 2;
		
		public static PICTURE:number = 7;
		public static PICTURE_FEATURE_COUNT:number = 4;
		public static PICTURE_OPERATION_COUNT:number = 0;
		
		public static PICTURE__NAME:number = 0;
		public static PICTURE__INFORMATION:number = 1;
		public static PICTURE__NUMBER:number = 2;
		public static PICTURE__HASH:number = 3;
		
		public static SOURCE:number = 8;
		public static SOURCE_FEATURE_COUNT:number = 4;
		public static SOURCE_OPERATION_COUNT:number = 0;
		
		public static SOURCE__TITLE:number = 0;
		public static SOURCE__URL:number = 1;
		public static SOURCE__PAGE_NO:number = 2;
		public static SOURCE__AUTHORS:number = 3;
		
		public static ANIMATEDPICTURE:number = 9;
		public static ANIMATEDPICTURE_FEATURE_COUNT:number = WebpagePackageImpl.PICTURE_FEATURE_COUNT + 1;
		public static ANIMATEDPICTURE_OPERATION_COUNT:number = WebpagePackageImpl.PICTURE_OPERATION_COUNT + 0;
		
		public static ANIMATED_PICTURE__NAME:number = 0;
		public static ANIMATED_PICTURE__INFORMATION:number = 1;
		public static ANIMATED_PICTURE__NUMBER:number = 2;
		public static ANIMATED_PICTURE__HASH:number = 3;
		public static ANIMATED_PICTURE__REPEAT:number = 4;
		
		public static ARTICLETYPE:number = 3;
		
		
		/*Important: Call init() AFTER metaobject ids have been assigned.*/
		public static eINSTANCE:WebpagePackage = WebpagePackageImpl.init();
		
		
		public getWebsite=():EClass=>{return this.WebsiteEClass;}
		
		public getWebsite_Name=():EAttribute=>{return <EAttribute> this.WebsiteEClass.eStructuralFeatures.at(0);}
		public getWebsite_Title=():EAttribute=>{return <EAttribute> this.WebsiteEClass.eStructuralFeatures.at(1);}
		public getWebsite_Description=():EAttribute=>{return <EAttribute> this.WebsiteEClass.eStructuralFeatures.at(2);}
		public getWebsite_Categories=():EReference=>{return <EReference> this.WebsiteEClass.eStructuralFeatures.at(3);}
		public getWebsite_Pictures=():EReference=>{return <EReference> this.WebsiteEClass.eStructuralFeatures.at(4);}
		public getWebsite_Number=():EAttribute=>{return <EAttribute> this.WebsiteEClass.eStructuralFeatures.at(5);}
		public getWebsite_Links=():EAttribute=>{return <EAttribute> this.WebsiteEClass.eStructuralFeatures.at(6);}
		public getCategory=():EClass=>{return this.CategoryEClass;}
		
		public getCategory_Name=():EAttribute=>{return <EAttribute> this.CategoryEClass.eStructuralFeatures.at(0);}
		public getCategory_Articles=():EReference=>{return <EReference> this.CategoryEClass.eStructuralFeatures.at(1);}
		public getCategory_Number=():EAttribute=>{return <EAttribute> this.CategoryEClass.eStructuralFeatures.at(2);}
		public getArticle=():EClass=>{return this.ArticleEClass;}
		
		public getArticle_Name=():EAttribute=>{return <EAttribute> this.ArticleEClass.eStructuralFeatures.at(0);}
		public getArticle_Chapters=():EReference=>{return <EReference> this.ArticleEClass.eStructuralFeatures.at(1);}
		public getArticle_Authors=():EReference=>{return <EReference> this.ArticleEClass.eStructuralFeatures.at(2);}
		public getArticle_Picture=():EReference=>{return <EReference> this.ArticleEClass.eStructuralFeatures.at(3);}
		public getArticle_Articletype=():EAttribute=>{return <EAttribute> this.ArticleEClass.eStructuralFeatures.at(4);}
		public getArticle_Related=():EReference=>{return <EReference> this.ArticleEClass.eStructuralFeatures.at(5);}
		public getArticle_Sources=():EReference=>{return <EReference> this.ArticleEClass.eStructuralFeatures.at(6);}
		public getArticle_Flags=():EAttribute=>{return <EAttribute> this.ArticleEClass.eStructuralFeatures.at(7);}
		public getArticle_Number=():EAttribute=>{return <EAttribute> this.ArticleEClass.eStructuralFeatures.at(8);}
		public getPerson=():EClass=>{return this.PersonEClass;}
		
		public getPerson_Name=():EAttribute=>{return <EAttribute> this.PersonEClass.eStructuralFeatures.at(0);}
		public getPerson_Articles=():EReference=>{return <EReference> this.PersonEClass.eStructuralFeatures.at(1);}
		public getPerson_Surname=():EAttribute=>{return <EAttribute> this.PersonEClass.eStructuralFeatures.at(2);}
		public getPerson_Age=():EAttribute=>{return <EAttribute> this.PersonEClass.eStructuralFeatures.at(3);}
		public getPerson_Access_key=():EAttribute=>{return <EAttribute> this.PersonEClass.eStructuralFeatures.at(4);}
		public getStudent=():EClass=>{return this.StudentEClass;}
		
		public getStudent_Matrikelnr=():EAttribute=>{return <EAttribute> this.StudentEClass.eStructuralFeatures.at(0);}
		public getStudent_Grades=():EAttribute=>{return <EAttribute> this.StudentEClass.eStructuralFeatures.at(1);}
		public getChapter=():EClass=>{return this.ChapterEClass;}
		
		public getChapter_Title=():EAttribute=>{return <EAttribute> this.ChapterEClass.eStructuralFeatures.at(0);}
		public getChapter_SubSection=():EAttribute=>{return <EAttribute> this.ChapterEClass.eStructuralFeatures.at(1);}
		public getChapter_Letters=():EAttribute=>{return <EAttribute> this.ChapterEClass.eStructuralFeatures.at(2);}
		public getPicture=():EClass=>{return this.PictureEClass;}
		
		public getPicture_Name=():EAttribute=>{return <EAttribute> this.PictureEClass.eStructuralFeatures.at(0);}
		public getPicture_Information=():EAttribute=>{return <EAttribute> this.PictureEClass.eStructuralFeatures.at(1);}
		public getPicture_Number=():EAttribute=>{return <EAttribute> this.PictureEClass.eStructuralFeatures.at(2);}
		public getPicture_Hash=():EAttribute=>{return <EAttribute> this.PictureEClass.eStructuralFeatures.at(3);}
		public getSource=():EClass=>{return this.SourceEClass;}
		
		public getSource_Title=():EAttribute=>{return <EAttribute> this.SourceEClass.eStructuralFeatures.at(0);}
		public getSource_Url=():EAttribute=>{return <EAttribute> this.SourceEClass.eStructuralFeatures.at(1);}
		public getSource_Page_no=():EAttribute=>{return <EAttribute> this.SourceEClass.eStructuralFeatures.at(2);}
		public getSource_Authors=():EAttribute=>{return <EAttribute> this.SourceEClass.eStructuralFeatures.at(3);}
		public getAnimatedPicture=():EClass=>{return this.AnimatedPictureEClass;}
		
		public getAnimatedPicture_Repeat=():EAttribute=>{return <EAttribute> this.AnimatedPictureEClass.eStructuralFeatures.at(0);}
		public getArticleType=():EEnum=>{return this.ArticleTypeEEnum;}
		
		/*
		public static Literals = {
			WEBSITE: WebpagePackageImpl.eINSTANCE.getWebsite(), 
			
			CATEGORY: WebpagePackageImpl.eINSTANCE.getCategory(), 
			
			ARTICLE: WebpagePackageImpl.eINSTANCE.getArticle(), 
			
			ARTICLETYPE: WebpagePackageImpl.eINSTANCE.getArticleType(), 
			PERSON: WebpagePackageImpl.eINSTANCE.getPerson(), 
			
			STUDENT: WebpagePackageImpl.eINSTANCE.getStudent(), 
			
			CHAPTER: WebpagePackageImpl.eINSTANCE.getChapter(), 
			
			PICTURE: WebpagePackageImpl.eINSTANCE.getPicture(), 
			
			SOURCE: WebpagePackageImpl.eINSTANCE.getSource(), 
			
			ANIMATEDPICTURE: WebpagePackageImpl.eINSTANCE.getAnimatedPicture(), 
			
			WEBSITE__NAME: WebpagePackageImpl.eINSTANCE.getWebsite_Name(), 
			WEBSITE__TITLE: WebpagePackageImpl.eINSTANCE.getWebsite_Title(), 
			WEBSITE__DESCRIPTION: WebpagePackageImpl.eINSTANCE.getWebsite_Description(), 
			WEBSITE__CATEGORIES: WebpagePackageImpl.eINSTANCE.getWebsite_Categories(), 
			WEBSITE__PICTURES: WebpagePackageImpl.eINSTANCE.getWebsite_Pictures(), 
			WEBSITE__NUMBER: WebpagePackageImpl.eINSTANCE.getWebsite_Number(), 
			WEBSITE__LINKS: WebpagePackageImpl.eINSTANCE.getWebsite_Links(), 
			CATEGORY__NAME: WebpagePackageImpl.eINSTANCE.getCategory_Name(), 
			CATEGORY__ARTICLES: WebpagePackageImpl.eINSTANCE.getCategory_Articles(), 
			CATEGORY__NUMBER: WebpagePackageImpl.eINSTANCE.getCategory_Number(), 
			ARTICLE__NAME: WebpagePackageImpl.eINSTANCE.getArticle_Name(), 
			ARTICLE__CHAPTERS: WebpagePackageImpl.eINSTANCE.getArticle_Chapters(), 
			ARTICLE__AUTHORS: WebpagePackageImpl.eINSTANCE.getArticle_Authors(), 
			ARTICLE__PICTURE: WebpagePackageImpl.eINSTANCE.getArticle_Picture(), 
			ARTICLE__ARTICLETYPE: WebpagePackageImpl.eINSTANCE.getArticle_Articletype(), 
			ARTICLE__RELATED: WebpagePackageImpl.eINSTANCE.getArticle_Related(), 
			ARTICLE__SOURCES: WebpagePackageImpl.eINSTANCE.getArticle_Sources(), 
			ARTICLE__FLAGS: WebpagePackageImpl.eINSTANCE.getArticle_Flags(), 
			ARTICLE__NUMBER: WebpagePackageImpl.eINSTANCE.getArticle_Number(), 
			PERSON__NAME: WebpagePackageImpl.eINSTANCE.getPerson_Name(), 
			PERSON__ARTICLES: WebpagePackageImpl.eINSTANCE.getPerson_Articles(), 
			PERSON__SURNAME: WebpagePackageImpl.eINSTANCE.getPerson_Surname(), 
			PERSON__AGE: WebpagePackageImpl.eINSTANCE.getPerson_Age(), 
			PERSON__ACCESS_KEY: WebpagePackageImpl.eINSTANCE.getPerson_Access_key(), 
			STUDENT__MATRIKELNR: WebpagePackageImpl.eINSTANCE.getStudent_Matrikelnr(), 
			STUDENT__GRADES: WebpagePackageImpl.eINSTANCE.getStudent_Grades(), 
			CHAPTER__TITLE: WebpagePackageImpl.eINSTANCE.getChapter_Title(), 
			CHAPTER__SUB_SECTION: WebpagePackageImpl.eINSTANCE.getChapter_SubSection(), 
			CHAPTER__LETTERS: WebpagePackageImpl.eINSTANCE.getChapter_Letters(), 
			PICTURE__NAME: WebpagePackageImpl.eINSTANCE.getPicture_Name(), 
			PICTURE__INFORMATION: WebpagePackageImpl.eINSTANCE.getPicture_Information(), 
			PICTURE__NUMBER: WebpagePackageImpl.eINSTANCE.getPicture_Number(), 
			PICTURE__HASH: WebpagePackageImpl.eINSTANCE.getPicture_Hash(), 
			SOURCE__TITLE: WebpagePackageImpl.eINSTANCE.getSource_Title(), 
			SOURCE__URL: WebpagePackageImpl.eINSTANCE.getSource_Url(), 
			SOURCE__PAGE_NO: WebpagePackageImpl.eINSTANCE.getSource_Page_no(), 
			SOURCE__AUTHORS: WebpagePackageImpl.eINSTANCE.getSource_Authors(), 
			ANIMATED_PICTURE__REPEAT: WebpagePackageImpl.eINSTANCE.getAnimatedPicture_Repeat(), 
			ARTICLETYPE: WebpagePackageImpl.eINSTANCE.getArticleType()
		}
		*/
		

 
}
