import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {RailwayPackageLiterals} from "railway/RailwayPackageLiterals";
import {RailwayElement} from "railway/RailwayElement";
		
			export class RailwayElementBase
			extends BasicEObjectImpl
			implements RailwayElement
			{
				private _id:number = 0;
				get id():number{
					return this._id;
				}
				set id(value:number){
					this._id = value; 
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return RailwayElementBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case RailwayPackageLiterals.RAILWAY_ELEMENT__ID:
							return this.id;
					}
					//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case RailwayPackageLiterals.RAILWAY_ELEMENT__ID:
							this.id = <number> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
