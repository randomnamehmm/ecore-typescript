import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {Set} from "ecore/Set";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {Picture} from "webpage/Picture";
import {Article} from "webpage/Article";
import {Chapter} from "webpage/Chapter";
import {WebpagePackageLiterals} from "webpage/WebpagePackageLiterals";
import {Person} from "webpage/Person";
import {Source} from "webpage/Source";
import {ArticleType} from "webpage/ArticleType";
		
			export class ArticleBase
			extends BasicEObjectImpl
			implements Article
			{
				private _name:string = '';
				get name():string{
					return this._name;
				}
				set name(value:string){
					this._name = value; 
				}
				private _articletype:ArticleType = ArticleType.REVIEW;
				get articletype():ArticleType{
					return this._articletype;
				}
				set articletype(value:ArticleType){
					this._articletype = value; 
				}
				private _flags:OrderedSet<boolean> = new OrderedSet<boolean>();
				get flags():OrderedSet<boolean>{
					if(this._flags===null){
						this._flags = new OrderedSet<boolean>();
							
					}
					return this._flags;
				}
				set flags(value:OrderedSet<boolean>){
					this._flags = value; 
				}
				private _number:number = 0.0;
				get number():number{
					return this._number;
				}
				set number(value:number){
					this._number = value; 
				}
				private _chapters:OrderedSet<Chapter> = null;
				
				get chapters():OrderedSet<Chapter>{
					if(this._chapters===null){
						this._chapters = new OrderedSet<Chapter>(this, WebpagePackageLiterals.ARTICLE__CHAPTERS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - WebpagePackageLiterals.ARTICLE__CHAPTERS);
							
					}
					return this._chapters;
					
				}
				
				
				private _authors:OrderedSet<Person> = null;
				
				get authors():OrderedSet<Person>{
					if(this._authors===null){
						this._authors = new OrderedSet<Person>(this, WebpagePackageLiterals.ARTICLE__AUTHORS, WebpagePackageLiterals.PERSON__ARTICLES);
							
					}
					return this._authors;
					
				}
				
				
				private _picture:Picture = null;
				get picture():Picture{
				
					return this._picture;
				}
				set picture(value:Picture) {
					let oldvalue = this._picture;
					this._picture = value;
					if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,WebpagePackageLiterals.ARTICLE__PICTURE , oldvalue, value));
					}
				}
				private _related:OrderedSet<Article> = null;
				
				get related():OrderedSet<Article>{
					if(this._related===null){
						this._related = new OrderedSet<Article>(this, WebpagePackageLiterals.ARTICLE__RELATED, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - WebpagePackageLiterals.ARTICLE__RELATED);
							
					}
					return this._related;
					
				}
				
				
				private _sources:Set<Source> = null;
				
				get sources():Set<Source>{
					if(this._sources===null){
						this._sources = new Set<Source>(this, WebpagePackageLiterals.ARTICLE__SOURCES, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - WebpagePackageLiterals.ARTICLE__SOURCES);
							
					}
					return this._sources;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return ArticleBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case WebpagePackageLiterals.ARTICLE__AUTHORS:
							return this.authors.basicAdd(otherEnd as Person, msgs);
					}
					//return this.eInverseAddFromBasicEObjectImpl(otherEnd, featureID, msgs);
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				//public eInverseAddFromArticle = this.eInverseAdd;
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case WebpagePackageLiterals.ARTICLE__AUTHORS:
							return this.authors.basicRemove(otherEnd as Person, msgs);
					}
					//return this.eInverseRemoveFromBasicEObjectImpl(otherEnd, featureID, msgs);
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
				//public eInverseRemoveFromArticle = this.eInverseRemove;
			
				public basicSetPicture(newobj:Picture, msgs:NotificationChain):NotificationChain {
					let oldobj = this._picture;
					this._picture = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, WebpagePackageLiterals.ARTICLE__PICTURE, oldobj, newobj);
						if (msgs == null){
							msgs = notification;
						}
						else{
							msgs.add(notification);
						}
					}
					return msgs;
				}
				
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case WebpagePackageLiterals.ARTICLE__NAME:
							return this.name;
						case WebpagePackageLiterals.ARTICLE__CHAPTERS:
							return this.chapters;
						case WebpagePackageLiterals.ARTICLE__AUTHORS:
							return this.authors;
						case WebpagePackageLiterals.ARTICLE__PICTURE:
							return this.picture;
						case WebpagePackageLiterals.ARTICLE__ARTICLETYPE:
							return this.articletype;
						case WebpagePackageLiterals.ARTICLE__RELATED:
							return this.related;
						case WebpagePackageLiterals.ARTICLE__SOURCES:
							return this.sources;
						case WebpagePackageLiterals.ARTICLE__FLAGS:
							return this.flags;
						case WebpagePackageLiterals.ARTICLE__NUMBER:
							return this.number;
					}
					//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case WebpagePackageLiterals.ARTICLE__NAME:
							this.name = <string> newValue;
							return;
						case WebpagePackageLiterals.ARTICLE__ARTICLETYPE:
							this.articletype = <ArticleType> newValue;
							return;
						case WebpagePackageLiterals.ARTICLE__FLAGS:
							this.flags.clear();
							this.flags.addAll(newValue);
							return;
						case WebpagePackageLiterals.ARTICLE__NUMBER:
							this.number = <number> newValue;
							return;
						case WebpagePackageLiterals.ARTICLE__CHAPTERS:
							this.chapters.clear();
							this.chapters.addAll(newValue);
							return;
						case WebpagePackageLiterals.ARTICLE__AUTHORS:
							this.authors.clear();
							this.authors.addAll(newValue);
							return;
						case WebpagePackageLiterals.ARTICLE__PICTURE:
							this.picture = <Picture> newValue;
							return;
						case WebpagePackageLiterals.ARTICLE__RELATED:
							this.related.clear();
							this.related.addAll(newValue);
							return;
						case WebpagePackageLiterals.ARTICLE__SOURCES:
							this.sources.clear();
							this.sources.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
