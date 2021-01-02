import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {SwitchPosition} from "railway/SwitchPosition";
import {Switch} from "railway/Switch";
import {Position} from "railway/Position";
import {TrackElementImpl} from "railway/TrackElementImpl";
import {RailwayPackageLiterals} from "railway/RailwayPackageLiterals";
		
			export class SwitchBase
			extends TrackElementImpl
			implements Switch
			{
				private _currentPosition:Position = Position.FAILURE;
				get currentPosition():Position{
					return this._currentPosition;
				}
				set currentPosition(value:Position){
					this._currentPosition = value; 
				}
				private _positions:OrderedSet<SwitchPosition> = null;
				
				get positions():OrderedSet<SwitchPosition>{
					if(this._positions===null){
						this._positions = new OrderedSet<SwitchPosition>(this, RailwayPackageLiterals.SWITCH__POSITIONS, RailwayPackageLiterals.SWITCH_POSITION__SWITCH);
							
					}
					return this._positions;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return SwitchBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case RailwayPackageLiterals.SWITCH__POSITIONS:
							return this.positions.basicAdd(otherEnd as SwitchPosition, msgs);
					}
					//return this.eInverseAddFromTrackElement(otherEnd, featureID, msgs);
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				//public eInverseAddFromSwitch = this.eInverseAdd;
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case RailwayPackageLiterals.SWITCH__POSITIONS:
							return this.positions.basicRemove(otherEnd as SwitchPosition, msgs);
					}
					//return this.eInverseRemoveFromTrackElement(otherEnd, featureID, msgs);
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
				//public eInverseRemoveFromSwitch = this.eInverseRemove;
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case RailwayPackageLiterals.SWITCH__ID:
							return this.id;
						case RailwayPackageLiterals.SWITCH__SENSOR:
							return this.sensor;
						case RailwayPackageLiterals.SWITCH__CONNECTS_TO:
							return this.connectsTo;
						case RailwayPackageLiterals.SWITCH__CURRENT_POSITION:
							return this.currentPosition;
						case RailwayPackageLiterals.SWITCH__POSITIONS:
							return this.positions;
					}
					//return this.eGetFromTrackElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case RailwayPackageLiterals.SWITCH__CURRENT_POSITION:
							this.currentPosition = <Position> newValue;
							return;
						case RailwayPackageLiterals.SWITCH__POSITIONS:
							this.positions.clear();
							this.positions.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
