import {OrderedSet} from "ecore/OrderedSet";
import {SwitchPosition} from "railway/SwitchPosition";
import {Semaphore} from "railway/Semaphore";
import {RailwayElement} from "railway/RailwayElement";
import {Sensor} from "railway/Sensor";

export interface Route
extends RailwayElement

{
	
	entry:Semaphore;
	follows: OrderedSet<SwitchPosition>;
	exit:Semaphore;
	definedBy: OrderedSet<Sensor>;
	

}

