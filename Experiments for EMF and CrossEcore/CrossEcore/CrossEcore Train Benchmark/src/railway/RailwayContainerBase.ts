import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {RailwayContainer} from "railway/RailwayContainer";
import {RailwayPackageLiterals} from "railway/RailwayPackageLiterals";
import {Semaphore} from "railway/Semaphore";
import {RailwayElement} from "railway/RailwayElement";
import {Route} from "railway/Route";
		
			export class RailwayContainerBase
			extends BasicEObjectImpl
			implements RailwayContainer
			{
				private _invalids:OrderedSet<RailwayElement> = null;
				
				get invalids():OrderedSet<RailwayElement>{
					if(this._invalids===null){
						this._invalids = new OrderedSet<RailwayElement>(this, RailwayPackageLiterals.RAILWAY_CONTAINER__INVALIDS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - RailwayPackageLiterals.RAILWAY_CONTAINER__INVALIDS);
							
					}
					return this._invalids;
					
				}
				
				
				private _semaphores:OrderedSet<Semaphore> = null;
				
				get semaphores():OrderedSet<Semaphore>{
					if(this._semaphores===null){
						this._semaphores = new OrderedSet<Semaphore>(this, RailwayPackageLiterals.RAILWAY_CONTAINER__SEMAPHORES, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - RailwayPackageLiterals.RAILWAY_CONTAINER__SEMAPHORES);
							
					}
					return this._semaphores;
					
				}
				
				
				private _routes:OrderedSet<Route> = null;
				
				get routes():OrderedSet<Route>{
					if(this._routes===null){
						this._routes = new OrderedSet<Route>(this, RailwayPackageLiterals.RAILWAY_CONTAINER__ROUTES, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - RailwayPackageLiterals.RAILWAY_CONTAINER__ROUTES);
							
					}
					return this._routes;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return RailwayContainerBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case RailwayPackageLiterals.RAILWAY_CONTAINER__INVALIDS:
							return this.invalids;
						case RailwayPackageLiterals.RAILWAY_CONTAINER__SEMAPHORES:
							return this.semaphores;
						case RailwayPackageLiterals.RAILWAY_CONTAINER__ROUTES:
							return this.routes;
					}
					//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case RailwayPackageLiterals.RAILWAY_CONTAINER__INVALIDS:
							this.invalids.clear();
							this.invalids.addAll(newValue);
							return;
						case RailwayPackageLiterals.RAILWAY_CONTAINER__SEMAPHORES:
							this.semaphores.clear();
							this.semaphores.addAll(newValue);
							return;
						case RailwayPackageLiterals.RAILWAY_CONTAINER__ROUTES:
							this.routes.clear();
							this.routes.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
