import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {Category} from "webpage/Category";
import {Article} from "webpage/Article";
import {WebpagePackageLiterals} from "webpage/WebpagePackageLiterals";
		
			export class CategoryBase
			extends BasicEObjectImpl
			implements Category
			{
				private _name:string = '';
				get name():string{
					return this._name;
				}
				set name(value:string){
					this._name = value; 
				}
				private _number:number = 0;
				get number():number{
					return this._number;
				}
				set number(value:number){
					this._number = value; 
				}
				private _articles:OrderedSet<Article> = null;
				
				get articles():OrderedSet<Article>{
					if(this._articles===null){
						this._articles = new OrderedSet<Article>(this, WebpagePackageLiterals.CATEGORY__ARTICLES, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - WebpagePackageLiterals.CATEGORY__ARTICLES);
							
					}
					return this._articles;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return CategoryBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case WebpagePackageLiterals.CATEGORY__NAME:
							return this.name;
						case WebpagePackageLiterals.CATEGORY__ARTICLES:
							return this.articles;
						case WebpagePackageLiterals.CATEGORY__NUMBER:
							return this.number;
					}
					//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case WebpagePackageLiterals.CATEGORY__NAME:
							this.name = <string> newValue;
							return;
						case WebpagePackageLiterals.CATEGORY__NUMBER:
							this.number = <number> newValue;
							return;
						case WebpagePackageLiterals.CATEGORY__ARTICLES:
							this.articles.clear();
							this.articles.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
