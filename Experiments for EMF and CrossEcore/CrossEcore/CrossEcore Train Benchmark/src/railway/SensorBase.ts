import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {TrackElement} from "railway/TrackElement";
import {RailwayPackageLiterals} from "railway/RailwayPackageLiterals";
import {RailwayElementImpl} from "railway/RailwayElementImpl";
import {Sensor} from "railway/Sensor";
		
			export class SensorBase
			extends RailwayElementImpl
			implements Sensor
			{
				private _elements:OrderedSet<TrackElement> = null;
				
				get elements():OrderedSet<TrackElement>{
					if(this._elements===null){
						this._elements = new OrderedSet<TrackElement>(this, RailwayPackageLiterals.SENSOR__ELEMENTS, RailwayPackageLiterals.TRACK_ELEMENT__SENSOR);
							
					}
					return this._elements;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return SensorBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case RailwayPackageLiterals.SENSOR__ELEMENTS:
							return this.elements.basicAdd(otherEnd as TrackElement, msgs);
					}
					//return this.eInverseAddFromRailwayElement(otherEnd, featureID, msgs);
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				//public eInverseAddFromSensor = this.eInverseAdd;
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case RailwayPackageLiterals.SENSOR__ELEMENTS:
							return this.elements.basicRemove(otherEnd as TrackElement, msgs);
					}
					//return this.eInverseRemoveFromRailwayElement(otherEnd, featureID, msgs);
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
				//public eInverseRemoveFromSensor = this.eInverseRemove;
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case RailwayPackageLiterals.SENSOR__ID:
							return this.id;
						case RailwayPackageLiterals.SENSOR__ELEMENTS:
							return this.elements;
					}
					//return this.eGetFromRailwayElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case RailwayPackageLiterals.SENSOR__ELEMENTS:
							this.elements.clear();
							this.elements.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
