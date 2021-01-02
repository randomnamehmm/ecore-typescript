import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {SwitchPosition} from "railway/SwitchPosition";
import {RailwayPackageLiterals} from "railway/RailwayPackageLiterals";
import {Semaphore} from "railway/Semaphore";
import {RailwayElementImpl} from "railway/RailwayElementImpl";
import {Route} from "railway/Route";
import {Sensor} from "railway/Sensor";
		
			export class RouteBase
			extends RailwayElementImpl
			implements Route
			{
				private _entry:Semaphore = null;
				get entry():Semaphore{
				
					return this._entry;
				}
				set entry(value:Semaphore) {
					let oldvalue = this._entry;
					this._entry = value;
					if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,RailwayPackageLiterals.ROUTE__ENTRY , oldvalue, value));
					}
				}
				private _follows:OrderedSet<SwitchPosition> = null;
				
				get follows():OrderedSet<SwitchPosition>{
					if(this._follows===null){
						this._follows = new OrderedSet<SwitchPosition>(this, RailwayPackageLiterals.ROUTE__FOLLOWS, RailwayPackageLiterals.SWITCH_POSITION__ROUTE);
							
					}
					return this._follows;
					
				}
				
				
				private _exit:Semaphore = null;
				get exit():Semaphore{
				
					return this._exit;
				}
				set exit(value:Semaphore) {
					let oldvalue = this._exit;
					this._exit = value;
					if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,RailwayPackageLiterals.ROUTE__EXIT , oldvalue, value));
					}
				}
				private _definedBy:OrderedSet<Sensor> = null;
				
				get definedBy():OrderedSet<Sensor>{
					if(this._definedBy===null){
						this._definedBy = new OrderedSet<Sensor>(this, RailwayPackageLiterals.ROUTE__DEFINED_BY, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - RailwayPackageLiterals.ROUTE__DEFINED_BY);
							
					}
					return this._definedBy;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return RouteBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case RailwayPackageLiterals.ROUTE__FOLLOWS:
							return this.follows.basicAdd(otherEnd as SwitchPosition, msgs);
					}
					//return this.eInverseAddFromRailwayElement(otherEnd, featureID, msgs);
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				//public eInverseAddFromRoute = this.eInverseAdd;
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case RailwayPackageLiterals.ROUTE__FOLLOWS:
							return this.follows.basicRemove(otherEnd as SwitchPosition, msgs);
					}
					//return this.eInverseRemoveFromRailwayElement(otherEnd, featureID, msgs);
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
				//public eInverseRemoveFromRoute = this.eInverseRemove;
			
				public basicSetEntry(newobj:Semaphore, msgs:NotificationChain):NotificationChain {
					let oldobj = this._entry;
					this._entry = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, RailwayPackageLiterals.ROUTE__ENTRY, oldobj, newobj);
						if (msgs == null){
							msgs = notification;
						}
						else{
							msgs.add(notification);
						}
					}
					return msgs;
				}
				public basicSetExit(newobj:Semaphore, msgs:NotificationChain):NotificationChain {
					let oldobj = this._exit;
					this._exit = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, RailwayPackageLiterals.ROUTE__EXIT, oldobj, newobj);
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
						case RailwayPackageLiterals.ROUTE__ID:
							return this.id;
						case RailwayPackageLiterals.ROUTE__ENTRY:
							return this.entry;
						case RailwayPackageLiterals.ROUTE__FOLLOWS:
							return this.follows;
						case RailwayPackageLiterals.ROUTE__EXIT:
							return this.exit;
						case RailwayPackageLiterals.ROUTE__DEFINED_BY:
							return this.definedBy;
					}
					//return this.eGetFromRailwayElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case RailwayPackageLiterals.ROUTE__ENTRY:
							this.entry = <Semaphore> newValue;
							return;
						case RailwayPackageLiterals.ROUTE__FOLLOWS:
							this.follows.clear();
							this.follows.addAll(newValue);
							return;
						case RailwayPackageLiterals.ROUTE__EXIT:
							this.exit = <Semaphore> newValue;
							return;
						case RailwayPackageLiterals.ROUTE__DEFINED_BY:
							this.definedBy.clear();
							this.definedBy.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
