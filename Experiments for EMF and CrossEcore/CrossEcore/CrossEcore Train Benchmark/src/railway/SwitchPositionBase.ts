import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {SwitchPosition} from "railway/SwitchPosition";
import {Switch} from "railway/Switch";
import {Position} from "railway/Position";
import {RailwayPackageLiterals} from "railway/RailwayPackageLiterals";
import {RailwayElementImpl} from "railway/RailwayElementImpl";
import {Route} from "railway/Route";
		
			export class SwitchPositionBase
			extends RailwayElementImpl
			implements SwitchPosition
			{
				private _position:Position = Position.FAILURE;
				get position():Position{
					return this._position;
				}
				set position(value:Position){
					this._position = value; 
				}
				private _switch:Switch = null;
				get switch():Switch{
				
					return this._switch;
				}
				set switch(value:Switch) {
					if (value != this._switch) {
						let msgs:NotificationChain = null;
						if (this._switch != null){
							msgs = (this._switch).eInverseRemove(this, RailwayPackageLiterals.SWITCH__POSITIONS, /*SwitchPosition*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, RailwayPackageLiterals.SWITCH__POSITIONS, /*SwitchPosition*/ null, msgs);
						}
						msgs = this.basicSetSwitch(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,RailwayPackageLiterals.SWITCH_POSITION__SWITCH , value, value));
					}
				}
				get route():Route{
				
					if (this.eContainerFeatureID() != RailwayPackageLiterals.SWITCH_POSITION__ROUTE) return null;
					return this.eInternalContainer() as Route;
				}
				set route(value:Route) {
					if (value != this.eInternalContainer() as Route) {
						let msgs:NotificationChain = null;
						if (this.eInternalContainer() as Route != null){
							msgs = (this.eInternalContainer() as Route).eInverseRemove(this, RailwayPackageLiterals.ROUTE__FOLLOWS, /*SwitchPosition*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, RailwayPackageLiterals.ROUTE__FOLLOWS, /*SwitchPosition*/ null, msgs);
						}
						msgs = this.basicSetRoute(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,RailwayPackageLiterals.SWITCH_POSITION__ROUTE , value, value));
					}
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return SwitchPositionBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case RailwayPackageLiterals.SWITCH_POSITION__ROUTE:
							if (this.eInternalContainer() != null) {
								msgs = this.eBasicRemoveFromContainer(msgs);
							}
							return this.basicSetRoute(otherEnd as Route, msgs);
						case RailwayPackageLiterals.SWITCH_POSITION__SWITCH:
							if (this._switch != null){
								msgs = this._switch.eInverseRemove(this, RailwayPackageLiterals.SWITCH_POSITION__SWITCH, /*Switch*/ null, msgs);
							}
							return this.basicSetSwitch(otherEnd as Switch, msgs);
					}
					//return this.eInverseAddFromRailwayElement(otherEnd, featureID, msgs);
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				//public eInverseAddFromSwitchPosition = this.eInverseAdd;
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case RailwayPackageLiterals.SWITCH_POSITION__ROUTE:
							return this.basicSetRoute(null, msgs);
						case RailwayPackageLiterals.SWITCH_POSITION__SWITCH:
							return this.basicSetSwitch(null, msgs);
					}
					//return this.eInverseRemoveFromRailwayElement(otherEnd, featureID, msgs);
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
				//public eInverseRemoveFromSwitchPosition = this.eInverseRemove;
			
				public basicSetRoute(newobj:Route, msgs:NotificationChain):NotificationChain {
						msgs = this.eBasicSetContainer(newobj, RailwayPackageLiterals.SWITCH_POSITION__ROUTE, msgs);
						return msgs;
				}
				public basicSetSwitch(newobj:Switch, msgs:NotificationChain):NotificationChain {
					let oldobj = this._switch;
					this._switch = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, RailwayPackageLiterals.SWITCH_POSITION__SWITCH, oldobj, newobj);
						if (msgs == null){
							msgs = notification;
						}
						else{
							msgs.add(notification);
						}
					}
					return msgs;
				}
				
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case RailwayPackageLiterals.SWITCH_POSITION__ID:
							return this.id;
						case RailwayPackageLiterals.SWITCH_POSITION__SWITCH:
							return this.switch;
						case RailwayPackageLiterals.SWITCH_POSITION__POSITION:
							return this.position;
						case RailwayPackageLiterals.SWITCH_POSITION__ROUTE:
							return this.route;
					}
					//return this.eGetFromRailwayElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case RailwayPackageLiterals.SWITCH_POSITION__POSITION:
							this.position = <Position> newValue;
							return;
						case RailwayPackageLiterals.SWITCH_POSITION__SWITCH:
							this.switch = <Switch> newValue;
							return;
						case RailwayPackageLiterals.SWITCH_POSITION__ROUTE:
							this.route = <Route> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
