import {EFactoryImpl} from "ecore/EFactoryImpl";
import {EClass} from "ecore/EClass";
import {EDataType} from "ecore/EDataType";
import {EObject} from "ecore/EObject";
import {AllInstances} from "ecore/AllInstances";
import {RouteImpl} from "railway/RouteImpl";
import {RailwayContainer} from "railway/RailwayContainer";
import {RailwayContainerImpl} from "railway/RailwayContainerImpl";
import {Position} from "railway/Position";
import {RailwayFactory} from "railway/RailwayFactory";
import {TrackElementImpl} from "railway/TrackElementImpl";
import {RailwayPackageImpl} from "railway/RailwayPackageImpl";
import {SensorImpl} from "railway/SensorImpl";
import {SegmentImpl} from "railway/SegmentImpl";
import {Semaphore} from "railway/Semaphore";
import {SwitchImpl} from "railway/SwitchImpl";
import {SwitchPositionImpl} from "railway/SwitchPositionImpl";
import {Segment} from "railway/Segment";
import {SwitchPosition} from "railway/SwitchPosition";
import {Signal} from "railway/Signal";
import {Switch} from "railway/Switch";
import {TrackElement} from "railway/TrackElement";
import {SemaphoreImpl} from "railway/SemaphoreImpl";
import {RailwayElement} from "railway/RailwayElement";
import {Route} from "railway/Route";
import {RailwayElementImpl} from "railway/RailwayElementImpl";
import {Sensor} from "railway/Sensor";
export class RailwayFactoryImpl extends EFactoryImpl implements RailwayFactory{
	public static eINSTANCE : RailwayFactory = RailwayFactoryImpl.init();
	public static init() : RailwayFactory 
	{
		return new RailwayFactoryImpl();
	}
	
	public createSegment = () : Segment => {
		let theSegment = new SegmentImpl();
		
		AllInstances.INSTANCE.put(theSegment, "Segment");
		
		return theSegment;
	}
	public createTrackElement = () : TrackElement => {
		let theTrackElement = new TrackElementImpl();
		
		AllInstances.INSTANCE.put(theTrackElement, "TrackElement");
		
		return theTrackElement;
	}
	public createSwitch = () : Switch => {
		let theSwitch = new SwitchImpl();
		
		AllInstances.INSTANCE.put(theSwitch, "Switch");
		
		return theSwitch;
	}
	public createRoute = () : Route => {
		let theRoute = new RouteImpl();
		
		AllInstances.INSTANCE.put(theRoute, "Route");
		
		return theRoute;
	}
	public createSemaphore = () : Semaphore => {
		let theSemaphore = new SemaphoreImpl();
		
		AllInstances.INSTANCE.put(theSemaphore, "Semaphore");
		
		return theSemaphore;
	}
	public createSwitchPosition = () : SwitchPosition => {
		let theSwitchPosition = new SwitchPositionImpl();
		
		AllInstances.INSTANCE.put(theSwitchPosition, "SwitchPosition");
		
		return theSwitchPosition;
	}
	public createRailwayElement = () : RailwayElement => {
		let theRailwayElement = new RailwayElementImpl();
		
		AllInstances.INSTANCE.put(theRailwayElement, "RailwayElement");
		
		return theRailwayElement;
	}
	public createSensor = () : Sensor => {
		let theSensor = new SensorImpl();
		
		AllInstances.INSTANCE.put(theSensor, "Sensor");
		
		return theSensor;
	}
	public createRailwayContainer = () : RailwayContainer => {
		let theRailwayContainer = new RailwayContainerImpl();
		
		AllInstances.INSTANCE.put(theRailwayContainer, "RailwayContainer");
		
		return theRailwayContainer;
	}
	
	public create(eClass:EClass):EObject {
		switch (eClass.getClassifierID()) {
			case RailwayPackageImpl.SEGMENT: return this.createSegment();
			case RailwayPackageImpl.SWITCH: return this.createSwitch();
			case RailwayPackageImpl.ROUTE: return this.createRoute();
			case RailwayPackageImpl.SEMAPHORE: return this.createSemaphore();
			case RailwayPackageImpl.SWITCHPOSITION: return this.createSwitchPosition();
			case RailwayPackageImpl.SENSOR: return this.createSensor();
			case RailwayPackageImpl.RAILWAYCONTAINER: return this.createRailwayContainer();
			default:
				throw new Error("The class '" + eClass.name + "' is not a valid classifier");
		}
	}
	
	
	public createFromString(eDataType:EDataType, initialValue:string):any {
		switch (eDataType.getClassifierID()) {
		case RailwayPackageImpl.SIGNAL:
			return this.createSignalFromString(eDataType, initialValue);
		case RailwayPackageImpl.POSITION:
			return this.createPositionFromString(eDataType, initialValue);
		default:
			throw new Error("The datatype '" + eDataType.name + "' is not a valid classifier");
		}
	}
	
	public convertToString(eDataType:EDataType, instanceValue:any):string {
		switch (eDataType.getClassifierID()) {
		case RailwayPackageImpl.SIGNAL:
			return this.convertSignalToString(eDataType, instanceValue);
		case RailwayPackageImpl.POSITION:
			return this.convertPositionToString(eDataType, instanceValue);
		default:
			throw new Error("The datatype '" + eDataType.name + "' is not a valid classifier");
		}
	}
	
	
	public createSignalFromString(eDataType:EDataType, initialValue:string):Signal {
		let result:Signal = Signal.get_string(initialValue);
		if (result == null)
			throw new Error(
	                        "The value '" + initialValue + "' is not a valid enumerator of '" + eDataType.name + "'");
		return result;
	}
	
	public convertSignalToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : instanceValue.toString();
	}
	public createPositionFromString(eDataType:EDataType, initialValue:string):Position {
		let result:Position = Position.get_string(initialValue);
		if (result == null)
			throw new Error(
	                        "The value '" + initialValue + "' is not a valid enumerator of '" + eDataType.name + "'");
		return result;
	}
	
	public convertPositionToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : instanceValue.toString();
	}
}
