import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {Signal} from "railway/Signal";
import {RailwayPackageLiterals} from "railway/RailwayPackageLiterals";
import {Semaphore} from "railway/Semaphore";
import {RailwayElementImpl} from "railway/RailwayElementImpl";
		
			export class SemaphoreBase
			extends RailwayElementImpl
			implements Semaphore
			{
				private _signal:Signal = Signal.FAILURE;
				get signal():Signal{
					return this._signal;
				}
				set signal(value:Signal){
					this._signal = value; 
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return SemaphoreBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case RailwayPackageLiterals.SEMAPHORE__ID:
							return this.id;
						case RailwayPackageLiterals.SEMAPHORE__SIGNAL:
							return this.signal;
					}
					//return this.eGetFromRailwayElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case RailwayPackageLiterals.SEMAPHORE__SIGNAL:
							this.signal = <Signal> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
