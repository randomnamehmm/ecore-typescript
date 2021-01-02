import {OrderedSet} from "ecore/OrderedSet";
import {RailwayElement} from "railway/RailwayElement";
import {Sensor} from "railway/Sensor";

export interface TrackElement
extends RailwayElement

{
	
	sensor:Sensor;
	connectsTo: OrderedSet<TrackElement>;
	

}

