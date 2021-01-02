import {OrderedSet} from "ecore/OrderedSet";
import {SwitchPosition} from "railway/SwitchPosition";
import {Position} from "railway/Position";
import {TrackElement} from "railway/TrackElement";

export interface Switch
extends TrackElement

{
	currentPosition:Position;
	
	positions: OrderedSet<SwitchPosition>;
	

}

