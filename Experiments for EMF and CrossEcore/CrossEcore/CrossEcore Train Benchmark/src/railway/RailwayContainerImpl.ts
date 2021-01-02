import {Set} from "ecore/Set";
import {SwitchPositionBase} from "railway/SwitchPositionBase";
import {RailwayContainer} from "railway/RailwayContainer";
import {SensorBase} from "railway/SensorBase";
import {Semaphore} from "railway/Semaphore";
import {RailwayContainerBase} from "railway/RailwayContainerBase";
import {RailwayElementBase} from "railway/RailwayElementBase";
import {Segment} from "railway/Segment";
import {SemaphoreBase} from "railway/SemaphoreBase";
import {SegmentBase} from "railway/SegmentBase";
import {TrackElementBase} from "railway/TrackElementBase";
import {RouteBase} from "railway/RouteBase";
import {SwitchPosition} from "railway/SwitchPosition";
import {SwitchBase} from "railway/SwitchBase";
import {Switch} from "railway/Switch";
import {TrackElement} from "railway/TrackElement";
import {RailwayElement} from "railway/RailwayElement";
import {Route} from "railway/Route";
import {Sensor} from "railway/Sensor";
/* import Ecore*/
export class RailwayContainerImpl
extends RailwayContainerBase
{
	public static allInstances_:Set<RailwayContainer> = new Set<RailwayContainer>();
	//implement your generated class here
}
