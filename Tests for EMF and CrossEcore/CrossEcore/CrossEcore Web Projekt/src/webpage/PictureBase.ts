import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {Picture} from "webpage/Picture";
import {WebpagePackageLiterals} from "webpage/WebpagePackageLiterals";
		
			export class PictureBase
			extends BasicEObjectImpl
			implements Picture
			{
				private _name:string = '';
				get name():string{
					return this._name;
				}
				set name(value:string){
					this._name = value; 
				}
				private _information:OrderedSet<string> = new OrderedSet<string>();
				get information():OrderedSet<string>{
					if(this._information===null){
						this._information = new OrderedSet<string>();
							
					}
					return this._information;
				}
				set information(value:OrderedSet<string>){
					this._information = value; 
				}
				private _number:number = 0;
				get number():number{
					return this._number;
				}
				set number(value:number){
					this._number = value; 
				}
				private _hash:OrderedSet<boolean> = new OrderedSet<boolean>();
				get hash():OrderedSet<boolean>{
					if(this._hash===null){
						this._hash = new OrderedSet<boolean>();
							
					}
					return this._hash;
				}
				set hash(value:OrderedSet<boolean>){
					this._hash = value; 
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return PictureBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case WebpagePackageLiterals.PICTURE__NAME:
							return this.name;
						case WebpagePackageLiterals.PICTURE__INFORMATION:
							return this.information;
						case WebpagePackageLiterals.PICTURE__NUMBER:
							return this.number;
						case WebpagePackageLiterals.PICTURE__HASH:
							return this.hash;
					}
					//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case WebpagePackageLiterals.PICTURE__NAME:
							this.name = <string> newValue;
							return;
						case WebpagePackageLiterals.PICTURE__INFORMATION:
							this.information.clear();
							this.information.addAll(newValue);
							return;
						case WebpagePackageLiterals.PICTURE__NUMBER:
							this.number = <number> newValue;
							return;
						case WebpagePackageLiterals.PICTURE__HASH:
							this.hash.clear();
							this.hash.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
