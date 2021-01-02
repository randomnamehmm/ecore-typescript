import {EObject} from "ecore/EObject";
import {EPackage} from "ecore/EPackage";
import {SwitchPosition} from "railway/SwitchPosition";
import {Switch} from "ecore/Switch";
import {Switch as RWSwitch} from "railway/Switch";
import {RailwayContainer} from "railway/RailwayContainer";
import {TrackElement} from "railway/TrackElement";
import {RailwayPackageImpl} from "railway/RailwayPackageImpl";
import {Semaphore} from "railway/Semaphore";
import {RailwayPackage} from "railway/RailwayPackage";
import {RailwayElement} from "railway/RailwayElement";
import {Segment} from "railway/Segment";
import {Route} from "railway/Route";
import {Sensor} from "railway/Sensor";
export class RailwaySwitch<T> extends Switch<T> {
	protected static modelPackage:RailwayPackage;
	
	constructor(){
		super();
		if (RailwaySwitch.modelPackage == null) {
			RailwaySwitch.modelPackage = RailwayPackageImpl.eINSTANCE;
		}	
	}
	
	public isSwitchFor(ePackage:EPackage):boolean{
		return ePackage === RailwaySwitch.modelPackage;
	}
	
	public doSwitch(classifierID:number, theEObject:EObject):T {
		switch (classifierID) {
			case RailwayPackageImpl.SEGMENT: {
				let obj:Segment = <Segment>theEObject;
				let result:T = this.caseSegment(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case RailwayPackageImpl.TRACKELEMENT: {
				let obj:TrackElement = <TrackElement>theEObject;
				let result:T = this.caseTrackElement(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case RailwayPackageImpl.SWITCH: {
				let obj:RWSwitch = <RWSwitch>theEObject;
				let result:T = this.caseSwitch(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case RailwayPackageImpl.ROUTE: {
				let obj:Route = <Route>theEObject;
				let result:T = this.caseRoute(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case RailwayPackageImpl.SEMAPHORE: {
				let obj:Semaphore = <Semaphore>theEObject;
				let result:T = this.caseSemaphore(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case RailwayPackageImpl.SWITCHPOSITION: {
				let obj:SwitchPosition = <SwitchPosition>theEObject;
				let result:T = this.caseSwitchPosition(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case RailwayPackageImpl.RAILWAYELEMENT: {
				let obj:RailwayElement = <RailwayElement>theEObject;
				let result:T = this.caseRailwayElement(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case RailwayPackageImpl.SENSOR: {
				let obj:Sensor = <Sensor>theEObject;
				let result:T = this.caseSensor(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case RailwayPackageImpl.RAILWAYCONTAINER: {
				let obj:RailwayContainer = <RailwayContainer>theEObject;
				let result:T = this.caseRailwayContainer(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			default: return this.defaultCase(theEObject);
		}
	}
	
	
	public caseSegment(object:Segment):T {
		return null;
	}
	public caseTrackElement(object:TrackElement):T {
		return null;
	}
	public caseSwitch(object:RWSwitch):T {
		return null;
	}
	public caseRoute(object:Route):T {
		return null;
	}
	public caseSemaphore(object:Semaphore):T {
		return null;
	}
	public caseSwitchPosition(object:SwitchPosition):T {
		return null;
	}
	public caseRailwayElement(object:RailwayElement):T {
		return null;
	}
	public caseSensor(object:Sensor):T {
		return null;
	}
	public caseRailwayContainer(object:RailwayContainer):T {
		return null;
	}
	
}

