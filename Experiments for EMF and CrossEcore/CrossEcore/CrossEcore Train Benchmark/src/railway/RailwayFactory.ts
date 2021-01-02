import {SwitchPosition} from "railway/SwitchPosition";
import {Switch} from "railway/Switch";
import {RailwayContainer} from "railway/RailwayContainer";
import {TrackElement} from "railway/TrackElement";
import {Semaphore} from "railway/Semaphore";
import {RailwayElement} from "railway/RailwayElement";
import {Segment} from "railway/Segment";
import {Route} from "railway/Route";
import {Sensor} from "railway/Sensor";
import {EFactory} from "ecore/EFactory";
export interface RailwayFactory extends EFactory{
	createSegment():Segment;
	createTrackElement():TrackElement;
	createSwitch():Switch;
	createRoute():Route;
	createSemaphore():Semaphore;
	createSwitchPosition():SwitchPosition;
	createRailwayElement():RailwayElement;
	createSensor():Sensor;
	createRailwayContainer():RailwayContainer;
}
