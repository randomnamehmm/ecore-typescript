import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {Set} from "ecore/Set";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {Category} from "webpage/Category";
import {Picture} from "webpage/Picture";
import {WebpagePackageLiterals} from "webpage/WebpagePackageLiterals";
import {Website} from "webpage/Website";
		
			export class WebsiteBase
			extends BasicEObjectImpl
			implements Website
			{
				private _name:string = '';
				get name():string{
					return this._name;
				}
				set name(value:string){
					this._name = value; 
				}
				private _title:string = '';
				get title():string{
					return this._title;
				}
				set title(value:string){
					this._title = value; 
				}
				private _description:string = '';
				get description():string{
					return this._description;
				}
				set description(value:string){
					this._description = value; 
				}
				private _number:number = 0.0;
				get number():number{
					return this._number;
				}
				set number(value:number){
					this._number = value; 
				}
				private _links:Set<string> = new Set<string>();
				get links():Set<string>{
					if(this._links===null){
						this._links = new Set<string>();
							
					}
					return this._links;
				}
				set links(value:Set<string>){
					this._links = value; 
				}
				private _categories:OrderedSet<Category> = null;
				
				get categories():OrderedSet<Category>{
					if(this._categories===null){
						this._categories = new OrderedSet<Category>(this, WebpagePackageLiterals.WEBSITE__CATEGORIES, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - WebpagePackageLiterals.WEBSITE__CATEGORIES);
							
					}
					return this._categories;
					
				}
				
				
				private _pictures:Set<Picture> = null;
				
				get pictures():Set<Picture>{
					if(this._pictures===null){
						this._pictures = new Set<Picture>(this, WebpagePackageLiterals.WEBSITE__PICTURES, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - WebpagePackageLiterals.WEBSITE__PICTURES);
							
					}
					return this._pictures;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return WebsiteBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case WebpagePackageLiterals.WEBSITE__NAME:
							return this.name;
						case WebpagePackageLiterals.WEBSITE__TITLE:
							return this.title;
						case WebpagePackageLiterals.WEBSITE__DESCRIPTION:
							return this.description;
						case WebpagePackageLiterals.WEBSITE__CATEGORIES:
							return this.categories;
						case WebpagePackageLiterals.WEBSITE__PICTURES:
							return this.pictures;
						case WebpagePackageLiterals.WEBSITE__NUMBER:
							return this.number;
						case WebpagePackageLiterals.WEBSITE__LINKS:
							return this.links;
					}
					//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case WebpagePackageLiterals.WEBSITE__NAME:
							this.name = <string> newValue;
							return;
						case WebpagePackageLiterals.WEBSITE__TITLE:
							this.title = <string> newValue;
							return;
						case WebpagePackageLiterals.WEBSITE__DESCRIPTION:
							this.description = <string> newValue;
							return;
						case WebpagePackageLiterals.WEBSITE__NUMBER:
							this.number = <number> newValue;
							return;
						case WebpagePackageLiterals.WEBSITE__LINKS:
							this.links.clear();
							this.links.addAll(newValue);
							return;
						case WebpagePackageLiterals.WEBSITE__CATEGORIES:
							this.categories.clear();
							this.categories.addAll(newValue);
							return;
						case WebpagePackageLiterals.WEBSITE__PICTURES:
							this.pictures.clear();
							this.pictures.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
