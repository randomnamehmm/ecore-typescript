import {OrderedSet} from "ecore/OrderedSet";
import {TrackElement} from "railway/TrackElement";
import {RailwayElement} from "railway/RailwayElement";

export interface Sensor
extends RailwayElement

{
	
	elements: OrderedSet<TrackElement>;
	

}

