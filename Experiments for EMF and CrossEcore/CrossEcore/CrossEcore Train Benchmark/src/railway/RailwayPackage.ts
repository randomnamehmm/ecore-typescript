import {EClass} from "ecore/EClass";
import {EAttribute} from "ecore/EAttribute";
import {EEnum} from "ecore/EEnum";
import {EReference} from "ecore/EReference";
import {EPackage} from "ecore/EPackage";
export interface RailwayPackage extends EPackage {
	getRailwayElement():EClass;
	
	getRailwayElement_Id():EAttribute;
	getTrackElement():EClass;
	getTrackElement_Sensor():EReference;
	getTrackElement_ConnectsTo():EReference;
	
	getSegment():EClass;
	
	getSegment_Length():EAttribute;
	getSwitch():EClass;
	getSwitch_Positions():EReference;
	
	getSwitch_CurrentPosition():EAttribute;
	getRoute():EClass;
	getRoute_Entry():EReference;
	getRoute_Follows():EReference;
	getRoute_Exit():EReference;
	getRoute_DefinedBy():EReference;
	
	getSemaphore():EClass;
	
	getSemaphore_Signal():EAttribute;
	getSwitchPosition():EClass;
	getSwitchPosition_Switch():EReference;
	getSwitchPosition_Route():EReference;
	
	getSwitchPosition_Position():EAttribute;
	getSensor():EClass;
	getSensor_Elements():EReference;
	
	getRailwayContainer():EClass;
	getRailwayContainer_Invalids():EReference;
	getRailwayContainer_Semaphores():EReference;
	getRailwayContainer_Routes():EReference;
	
	getSignal():EEnum;
	getPosition():EEnum;
}
