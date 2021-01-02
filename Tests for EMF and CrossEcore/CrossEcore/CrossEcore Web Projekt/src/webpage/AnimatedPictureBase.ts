import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {PictureImpl} from "webpage/PictureImpl";
import {WebpagePackageLiterals} from "webpage/WebpagePackageLiterals";
import {AnimatedPicture} from "webpage/AnimatedPicture";
		
			export class AnimatedPictureBase
			extends PictureImpl
			implements AnimatedPicture
			{
				private _repeat:boolean = false;
				get repeat():boolean{
					return this._repeat;
				}
				set repeat(value:boolean){
					this._repeat = value; 
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return AnimatedPictureBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case WebpagePackageLiterals.ANIMATED_PICTURE__NAME:
							return this.name;
						case WebpagePackageLiterals.ANIMATED_PICTURE__INFORMATION:
							return this.information;
						case WebpagePackageLiterals.ANIMATED_PICTURE__NUMBER:
							return this.number;
						case WebpagePackageLiterals.ANIMATED_PICTURE__HASH:
							return this.hash;
						case WebpagePackageLiterals.ANIMATED_PICTURE__REPEAT:
							return this.repeat;
					}
					//return this.eGetFromPicture(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case WebpagePackageLiterals.ANIMATED_PICTURE__REPEAT:
							this.repeat = <boolean> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
