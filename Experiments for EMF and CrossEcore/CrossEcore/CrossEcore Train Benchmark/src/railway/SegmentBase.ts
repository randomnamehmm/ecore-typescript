import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {TrackElementImpl} from "railway/TrackElementImpl";
import {RailwayPackageLiterals} from "railway/RailwayPackageLiterals";
import {Segment} from "railway/Segment";
		
			export class SegmentBase
			extends TrackElementImpl
			implements Segment
			{
				private _length:number = 0;
				get length():number{
					return this._length;
				}
				set length(value:number){
					this._length = value; 
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return SegmentBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case RailwayPackageLiterals.SEGMENT__ID:
							return this.id;
						case RailwayPackageLiterals.SEGMENT__SENSOR:
							return this.sensor;
						case RailwayPackageLiterals.SEGMENT__CONNECTS_TO:
							return this.connectsTo;
						case RailwayPackageLiterals.SEGMENT__LENGTH:
							return this.length;
					}
					//return this.eGetFromTrackElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case RailwayPackageLiterals.SEGMENT__LENGTH:
							this.length = <number> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
