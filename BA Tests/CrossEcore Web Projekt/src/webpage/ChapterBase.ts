import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {Chapter} from "webpage/Chapter";
import {WebpagePackageLiterals} from "webpage/WebpagePackageLiterals";
		
			export class ChapterBase
			extends BasicEObjectImpl
			implements Chapter
			{
				private _title:OrderedSet<string> = new OrderedSet<string>();
				get title():OrderedSet<string>{
					if(this._title===null){
						this._title = new OrderedSet<string>();
							
					}
					return this._title;
				}
				set title(value:OrderedSet<string>){
					this._title = value; 
				}
				private _subSection:boolean = false;
				get subSection():boolean{
					return this._subSection;
				}
				set subSection(value:boolean){
					this._subSection = value; 
				}
				private _letters:OrderedSet<string> = new OrderedSet<string>();
				get letters():OrderedSet<string>{
					if(this._letters===null){
						this._letters = new OrderedSet<string>();
							
					}
					return this._letters;
				}
				set letters(value:OrderedSet<string>){
					this._letters = value; 
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return ChapterBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case WebpagePackageLiterals.CHAPTER__TITLE:
							return this.title;
						case WebpagePackageLiterals.CHAPTER__SUB_SECTION:
							return this.subSection;
						case WebpagePackageLiterals.CHAPTER__LETTERS:
							return this.letters;
					}
					//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case WebpagePackageLiterals.CHAPTER__TITLE:
							this.title.clear();
							this.title.addAll(newValue);
							return;
						case WebpagePackageLiterals.CHAPTER__SUB_SECTION:
							this.subSection = <boolean> newValue;
							return;
						case WebpagePackageLiterals.CHAPTER__LETTERS:
							this.letters.clear();
							this.letters.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
