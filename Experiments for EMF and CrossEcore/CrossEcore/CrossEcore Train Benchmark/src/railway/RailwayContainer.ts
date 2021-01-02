import {OrderedSet} from "ecore/OrderedSet";
import {InternalEObject} from "ecore/InternalEObject";
import {Semaphore} from "railway/Semaphore";
import {RailwayElement} from "railway/RailwayElement";
import {Route} from "railway/Route";

export interface RailwayContainer
extends InternalEObject

{
	
	invalids: OrderedSet<RailwayElement>;
	semaphores: OrderedSet<Semaphore>;
	routes: OrderedSet<Route>;
	

}

