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
		
			export class TrackElementBase
			extends RailwayElementImpl
			implements TrackElement
			{
				get sensor():Sensor{
				
					if (this.eContainerFeatureID() != RailwayPackageLiterals.TRACK_ELEMENT__SENSOR) return null;
					return this.eInternalContainer() as Sensor;
				}
				set sensor(value:Sensor) {
					if (value != this.eInternalContainer() as Sensor) {
						let msgs:NotificationChain = null;
						if (this.eInternalContainer() as Sensor != null){
							msgs = (this.eInternalContainer() as Sensor).eInverseRemove(this, RailwayPackageLiterals.SENSOR__ELEMENTS, /*TrackElement*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, RailwayPackageLiterals.SENSOR__ELEMENTS, /*TrackElement*/ null, msgs);
						}
						msgs = this.basicSetSensor(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,RailwayPackageLiterals.TRACK_ELEMENT__SENSOR , value, value));
					}
				}
				private _connectsTo:OrderedSet<TrackElement> = null;
				
				get connectsTo():OrderedSet<TrackElement>{
					if(this._connectsTo===null){
						this._connectsTo = new OrderedSet<TrackElement>(this, RailwayPackageLiterals.TRACK_ELEMENT__CONNECTS_TO, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - RailwayPackageLiterals.TRACK_ELEMENT__CONNECTS_TO);
							
					}
					return this._connectsTo;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return TrackElementBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case RailwayPackageLiterals.TRACK_ELEMENT__SENSOR:
							if (this.eInternalContainer() != null) {
								msgs = this.eBasicRemoveFromContainer(msgs);
							}
							return this.basicSetSensor(otherEnd as Sensor, msgs);
					}
					//return this.eInverseAddFromRailwayElement(otherEnd, featureID, msgs);
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				//public eInverseAddFromTrackElement = this.eInverseAdd;
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case RailwayPackageLiterals.TRACK_ELEMENT__SENSOR:
							return this.basicSetSensor(null, msgs);
					}
					//return this.eInverseRemoveFromRailwayElement(otherEnd, featureID, msgs);
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
				//public eInverseRemoveFromTrackElement = this.eInverseRemove;
			
				public basicSetSensor(newobj:Sensor, msgs:NotificationChain):NotificationChain {
						msgs = this.eBasicSetContainer(newobj, RailwayPackageLiterals.TRACK_ELEMENT__SENSOR, msgs);
						return msgs;
				}
				
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case RailwayPackageLiterals.TRACK_ELEMENT__ID:
							return this.id;
						case RailwayPackageLiterals.TRACK_ELEMENT__SENSOR:
							return this.sensor;
						case RailwayPackageLiterals.TRACK_ELEMENT__CONNECTS_TO:
							return this.connectsTo;
					}
					//return this.eGetFromRailwayElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case RailwayPackageLiterals.TRACK_ELEMENT__SENSOR:
							this.sensor = <Sensor> newValue;
							return;
						case RailwayPackageLiterals.TRACK_ELEMENT__CONNECTS_TO:
							this.connectsTo.clear();
							this.connectsTo.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
