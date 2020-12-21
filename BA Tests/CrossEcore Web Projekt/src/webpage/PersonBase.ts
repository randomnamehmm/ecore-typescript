import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {Set} from "ecore/Set";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {Article} from "webpage/Article";
import {WebpagePackageLiterals} from "webpage/WebpagePackageLiterals";
import {Person} from "webpage/Person";
		
			export class PersonBase
			extends BasicEObjectImpl
			implements Person
			{
				private _name:OrderedSet<string> = new OrderedSet<string>();
				get name():OrderedSet<string>{
					if(this._name===null){
						this._name = new OrderedSet<string>();
							
					}
					return this._name;
				}
				set name(value:OrderedSet<string>){
					this._name = value; 
				}
				private _surname:string = '';
				get surname():string{
					return this._surname;
				}
				set surname(value:string){
					this._surname = value; 
				}
				private _age:number = 0;
				get age():number{
					return this._age;
				}
				set age(value:number){
					this._age = value; 
				}
				private _access_key:Set<string> = new Set<string>();
				get access_key():Set<string>{
					if(this._access_key===null){
						this._access_key = new Set<string>();
							
					}
					return this._access_key;
				}
				set access_key(value:Set<string>){
					this._access_key = value; 
				}
				private _articles:OrderedSet<Article> = null;
				
				get articles():OrderedSet<Article>{
					if(this._articles===null){
						this._articles = new OrderedSet<Article>(this, WebpagePackageLiterals.PERSON__ARTICLES, WebpagePackageLiterals.ARTICLE__AUTHORS);
							
					}
					return this._articles;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return PersonBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case WebpagePackageLiterals.PERSON__ARTICLES:
							return this.articles.basicAdd(otherEnd as Article, msgs);
					}
					//return this.eInverseAddFromBasicEObjectImpl(otherEnd, featureID, msgs);
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				//public eInverseAddFromPerson = this.eInverseAdd;
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case WebpagePackageLiterals.PERSON__ARTICLES:
							return this.articles.basicRemove(otherEnd as Article, msgs);
					}
					//return this.eInverseRemoveFromBasicEObjectImpl(otherEnd, featureID, msgs);
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
				//public eInverseRemoveFromPerson = this.eInverseRemove;
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case WebpagePackageLiterals.PERSON__NAME:
							return this.name;
						case WebpagePackageLiterals.PERSON__ARTICLES:
							return this.articles;
						case WebpagePackageLiterals.PERSON__SURNAME:
							return this.surname;
						case WebpagePackageLiterals.PERSON__AGE:
							return this.age;
						case WebpagePackageLiterals.PERSON__ACCESS_KEY:
							return this.access_key;
					}
					//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case WebpagePackageLiterals.PERSON__NAME:
							this.name.clear();
							this.name.addAll(newValue);
							return;
						case WebpagePackageLiterals.PERSON__SURNAME:
							this.surname = <string> newValue;
							return;
						case WebpagePackageLiterals.PERSON__AGE:
							this.age = <number> newValue;
							return;
						case WebpagePackageLiterals.PERSON__ACCESS_KEY:
							this.access_key.clear();
							this.access_key.addAll(newValue);
							return;
						case WebpagePackageLiterals.PERSON__ARTICLES:
							this.articles.clear();
							this.articles.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
