import {OrderedSet} from "ecore/OrderedSet";
import {Switch} from "railway/Switch";
import {Position} from "railway/Position";
import {RailwayElement} from "railway/RailwayElement";
import {Route} from "railway/Route";

export interface SwitchPosition
extends RailwayElement

{
	position:Position;
	
	switch:Switch;
	route:Route;
	

}

