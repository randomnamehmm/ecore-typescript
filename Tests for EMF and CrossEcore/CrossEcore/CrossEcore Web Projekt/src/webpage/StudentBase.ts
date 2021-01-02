import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {PersonImpl} from "webpage/PersonImpl";
import {WebpagePackageLiterals} from "webpage/WebpagePackageLiterals";
import {Student} from "webpage/Student";
		
			export class StudentBase
			extends PersonImpl
			implements Student
			{
				private _matrikelnr:number = 0;
				get matrikelnr():number{
					return this._matrikelnr;
				}
				set matrikelnr(value:number){
					this._matrikelnr = value; 
				}
				private _grades:OrderedSet<number> = new OrderedSet<number>();
				get grades():OrderedSet<number>{
					if(this._grades===null){
						this._grades = new OrderedSet<number>();
							
					}
					return this._grades;
				}
				set grades(value:OrderedSet<number>){
					this._grades = value; 
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return StudentBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case WebpagePackageLiterals.STUDENT__NAME:
							return this.name;
						case WebpagePackageLiterals.STUDENT__ARTICLES:
							return this.articles;
						case WebpagePackageLiterals.STUDENT__SURNAME:
							return this.surname;
						case WebpagePackageLiterals.STUDENT__AGE:
							return this.age;
						case WebpagePackageLiterals.STUDENT__ACCESS_KEY:
							return this.access_key;
						case WebpagePackageLiterals.STUDENT__MATRIKELNR:
							return this.matrikelnr;
						case WebpagePackageLiterals.STUDENT__GRADES:
							return this.grades;
					}
					//return this.eGetFromPerson(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case WebpagePackageLiterals.STUDENT__MATRIKELNR:
							this.matrikelnr = <number> newValue;
							return;
						case WebpagePackageLiterals.STUDENT__GRADES:
							this.grades.clear();
							this.grades.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
