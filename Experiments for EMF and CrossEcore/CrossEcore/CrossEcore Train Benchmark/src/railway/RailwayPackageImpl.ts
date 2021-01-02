import {EFactory} from "ecore/EFactory";
import {EPackageImpl} from "ecore/EPackageImpl";
import {EClass} from "ecore/EClass";
import {EAttribute} from "ecore/EAttribute";
import {EcorePackageImpl} from "ecore/EcorePackageImpl";
import {EOperation} from "ecore/EOperation";
import {EEnum} from "ecore/EEnum";
import {EcoreFactoryImpl} from "ecore/EcoreFactoryImpl";
import {EReference} from "ecore/EReference";
import {SwitchPositionBase} from "railway/SwitchPositionBase";
import {RouteImpl} from "railway/RouteImpl";
import {RailwayContainerImpl} from "railway/RailwayContainerImpl";
import {SensorBase} from "railway/SensorBase";
import {TrackElementImpl} from "railway/TrackElementImpl";
import {SensorImpl} from "railway/SensorImpl";
import {RailwayContainerBase} from "railway/RailwayContainerBase";
import {SegmentImpl} from "railway/SegmentImpl";
import {RailwayPackage} from "railway/RailwayPackage";
import {SwitchImpl} from "railway/SwitchImpl";
import {SwitchPositionImpl} from "railway/SwitchPositionImpl";
import {SemaphoreBase} from "railway/SemaphoreBase";
import {RailwayElementBase} from "railway/RailwayElementBase";
import {SegmentBase} from "railway/SegmentBase";
import {TrackElementBase} from "railway/TrackElementBase";
import {RouteBase} from "railway/RouteBase";
import {SwitchBase} from "railway/SwitchBase";
import {SemaphoreImpl} from "railway/SemaphoreImpl";
import {RailwayElementImpl} from "railway/RailwayElementImpl";
export class RailwayPackageImpl extends EPackageImpl implements RailwayPackage{
		public static eNAME:string = "railway";
		
		public static eNS_URI:string = "http://www.semanticweb.org/ontologies/2015/ttc/trainbenchmark";
		
		public static eNS_PREFIX:string = "hu.bme.mit.trainbenchmark";
		
		
		
		/*
		constructor(){
			//no private constructors in TypeScript
			super(RailwayPackageImpl.eNS_URI, RailwayFactoryImpl.eINSTANCE as any as EFactory);
		}
		*/
		
		public static init():RailwayPackage
		{

	        // Obtain or create and register package
	        let theRailwayPackage = new RailwayPackageImpl();
	        theRailwayPackage.ecorePackage = EcorePackageImpl.eINSTANCE;
	        theRailwayPackage.ecoreFactory = EcoreFactoryImpl.eINSTANCE;
	
	        // Create package meta-data objects
	        theRailwayPackage.createPackageContents();
	
	        // Initialize created meta-data
	        theRailwayPackage.initializePackageContents();

	        return theRailwayPackage;
        }
        
        private isCreated:boolean = false;
        
        public createPackageContents = ():void =>
        {
            if (this.isCreated) return;
            this.isCreated = true;
			this.SegmentEClass = this.createEClass(RailwayPackageImpl.SEGMENT);
			SegmentBase.eStaticClass = this.SegmentEClass;
			this.createEAttribute(this.SegmentEClass, RailwayPackageImpl.SEGMENT__LENGTH);
			this.TrackElementEClass = this.createEClass(RailwayPackageImpl.TRACKELEMENT);
			TrackElementBase.eStaticClass = this.TrackElementEClass;
			this.createEReference(this.TrackElementEClass, RailwayPackageImpl.TRACK_ELEMENT__SENSOR);
			this.createEReference(this.TrackElementEClass, RailwayPackageImpl.TRACK_ELEMENT__CONNECTS_TO);
			this.SwitchEClass = this.createEClass(RailwayPackageImpl.SWITCH);
			SwitchBase.eStaticClass = this.SwitchEClass;
			this.createEAttribute(this.SwitchEClass, RailwayPackageImpl.SWITCH__CURRENT_POSITION);
			this.createEReference(this.SwitchEClass, RailwayPackageImpl.SWITCH__POSITIONS);
			this.RouteEClass = this.createEClass(RailwayPackageImpl.ROUTE);
			RouteBase.eStaticClass = this.RouteEClass;
			this.createEReference(this.RouteEClass, RailwayPackageImpl.ROUTE__ENTRY);
			this.createEReference(this.RouteEClass, RailwayPackageImpl.ROUTE__FOLLOWS);
			this.createEReference(this.RouteEClass, RailwayPackageImpl.ROUTE__EXIT);
			this.createEReference(this.RouteEClass, RailwayPackageImpl.ROUTE__DEFINED_BY);
			this.SemaphoreEClass = this.createEClass(RailwayPackageImpl.SEMAPHORE);
			SemaphoreBase.eStaticClass = this.SemaphoreEClass;
			this.createEAttribute(this.SemaphoreEClass, RailwayPackageImpl.SEMAPHORE__SIGNAL);
			this.SwitchPositionEClass = this.createEClass(RailwayPackageImpl.SWITCHPOSITION);
			SwitchPositionBase.eStaticClass = this.SwitchPositionEClass;
			this.createEReference(this.SwitchPositionEClass, RailwayPackageImpl.SWITCH_POSITION__SWITCH);
			this.createEAttribute(this.SwitchPositionEClass, RailwayPackageImpl.SWITCH_POSITION__POSITION);
			this.createEReference(this.SwitchPositionEClass, RailwayPackageImpl.SWITCH_POSITION__ROUTE);
			this.RailwayElementEClass = this.createEClass(RailwayPackageImpl.RAILWAYELEMENT);
			RailwayElementBase.eStaticClass = this.RailwayElementEClass;
			this.createEAttribute(this.RailwayElementEClass, RailwayPackageImpl.RAILWAY_ELEMENT__ID);
			this.SensorEClass = this.createEClass(RailwayPackageImpl.SENSOR);
			SensorBase.eStaticClass = this.SensorEClass;
			this.createEReference(this.SensorEClass, RailwayPackageImpl.SENSOR__ELEMENTS);
			this.RailwayContainerEClass = this.createEClass(RailwayPackageImpl.RAILWAYCONTAINER);
			RailwayContainerBase.eStaticClass = this.RailwayContainerEClass;
			this.createEReference(this.RailwayContainerEClass, RailwayPackageImpl.RAILWAY_CONTAINER__INVALIDS);
			this.createEReference(this.RailwayContainerEClass, RailwayPackageImpl.RAILWAY_CONTAINER__SEMAPHORES);
			this.createEReference(this.RailwayContainerEClass, RailwayPackageImpl.RAILWAY_CONTAINER__ROUTES);
			
			this.SignalEEnum = this.createEEnum(RailwayPackageImpl.SIGNAL);
			this.PositionEEnum = this.createEEnum(RailwayPackageImpl.POSITION);
			
        }
        private isInitialized:boolean = false;
        public initializePackageContents=():void =>
        {
            if (this.isInitialized) return;
            this.isInitialized = true;
            // Initialize package
            this.name = RailwayPackageImpl.eNAME;
            this.nsPrefix = RailwayPackageImpl.eNS_PREFIX;
            this.nsURI = RailwayPackageImpl.eNS_URI;

			
			this.SegmentEClass.eSuperTypes.add(this.getTrackElement());
			
			this.TrackElementEClass.eSuperTypes.add(this.getRailwayElement());
			
			this.SwitchEClass.eSuperTypes.add(this.getTrackElement());
			
			this.RouteEClass.eSuperTypes.add(this.getRailwayElement());
			
			this.SemaphoreEClass.eSuperTypes.add(this.getRailwayElement());
			
			this.SwitchPositionEClass.eSuperTypes.add(this.getRailwayElement());
			
			
			this.SensorEClass.eSuperTypes.add(this.getRailwayElement());
			
			var op:EOperation = null;
			
			this.initEClass(
			this.SegmentEClass,
			SegmentImpl, 
			"Segment", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getSegment_Length(), 
				this.ecorePackage.getEInt(), 
				"length", 
				"0", 
				1, 
				1, 
				SegmentImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			
			this.initEClass(
			this.TrackElementEClass,
			TrackElementImpl, 
			"TrackElement", 
			EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			
			this.initEReference(
				this.getTrackElement_Sensor(),
				this.getSensor(), 
				this.getSensor_Elements(), 
				"sensor", 
				null, 
				0, 
				1, 
				TrackElementImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getTrackElement_ConnectsTo(),
				this.getTrackElement(), 
				null, 
				"connectsTo", 
				null, 
				0, 
				-1, 
				TrackElementImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			this.initEClass(
			this.SwitchEClass,
			SwitchImpl, 
			"Switch", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getSwitch_CurrentPosition(), 
				this.getPosition(), 
				"currentPosition", 
				"FAILURE", 
				1, 
				1, 
				SwitchImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			this.initEReference(
				this.getSwitch_Positions(),
				this.getSwitchPosition(), 
				this.getSwitchPosition_Switch(), 
				"positions", 
				null, 
				0, 
				-1, 
				SwitchImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			this.initEClass(
			this.RouteEClass,
			RouteImpl, 
			"Route", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			
			this.initEReference(
				this.getRoute_Entry(),
				this.getSemaphore(), 
				null, 
				"entry", 
				null, 
				1, 
				1, 
				RouteImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getRoute_Follows(),
				this.getSwitchPosition(), 
				this.getSwitchPosition_Route(), 
				"follows", 
				null, 
				0, 
				-1, 
				RouteImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getRoute_Exit(),
				this.getSemaphore(), 
				null, 
				"exit", 
				null, 
				1, 
				1, 
				RouteImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getRoute_DefinedBy(),
				this.getSensor(), 
				null, 
				"definedBy", 
				null, 
				2, 
				-1, 
				RouteImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			this.initEClass(
			this.SemaphoreEClass,
			SemaphoreImpl, 
			"Semaphore", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getSemaphore_Signal(), 
				this.getSignal(), 
				"signal", 
				"FAILURE", 
				1, 
				1, 
				SemaphoreImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			
			this.initEClass(
			this.SwitchPositionEClass,
			SwitchPositionImpl, 
			"SwitchPosition", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getSwitchPosition_Position(), 
				this.getPosition(), 
				"position", 
				"FAILURE", 
				1, 
				1, 
				SwitchPositionImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			this.initEReference(
				this.getSwitchPosition_Switch(),
				this.getSwitch(), 
				this.getSwitch_Positions(), 
				"switch", 
				null, 
				1, 
				1, 
				SwitchPositionImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getSwitchPosition_Route(),
				this.getRoute(), 
				this.getRoute_Follows(), 
				"route", 
				null, 
				1, 
				1, 
				SwitchPositionImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			this.initEClass(
			this.RailwayElementEClass,
			RailwayElementImpl, 
			"RailwayElement", 
			EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getRailwayElement_Id(), 
				this.ecorePackage.getEInt(), 
				"id", 
				"0", 
				0, 
				1, 
				RailwayElementImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			
			this.initEClass(
			this.SensorEClass,
			SensorImpl, 
			"Sensor", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			
			this.initEReference(
				this.getSensor_Elements(),
				this.getTrackElement(), 
				this.getTrackElement_Sensor(), 
				"elements", 
				null, 
				0, 
				-1, 
				SensorImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			this.initEClass(
			this.RailwayContainerEClass,
			RailwayContainerImpl, 
			"RailwayContainer", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			
			this.initEReference(
				this.getRailwayContainer_Invalids(),
				this.getRailwayElement(), 
				null, 
				"invalids", 
				null, 
				0, 
				-1, 
				RailwayContainerImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getRailwayContainer_Semaphores(),
				this.getSemaphore(), 
				null, 
				"semaphores", 
				null, 
				0, 
				-1, 
				RailwayContainerImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getRailwayContainer_Routes(),
				this.getRoute(), 
				null, 
				"routes", 
				null, 
				0, 
				-1, 
				RailwayContainerImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			// this.initEDataType(this.SignalEDataType, null, "Signal", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			// this.initEDataType(this.PositionEDataType, null, "Position", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			this.initEEnum(this.SignalEEnum, null, "Signal");
			this.initEEnum(this.PositionEEnum, null, "Position");
			
        }
		
		
		private SegmentEClass:EClass = null;
		private TrackElementEClass:EClass = null;
		private SwitchEClass:EClass = null;
		private RouteEClass:EClass = null;
		private SemaphoreEClass:EClass = null;
		private SwitchPositionEClass:EClass = null;
		private RailwayElementEClass:EClass = null;
		private SensorEClass:EClass = null;
		private RailwayContainerEClass:EClass = null;
		
		
		private SignalEEnum:EEnum = null;
		private PositionEEnum:EEnum = null;
		
		
		
		public static RAILWAYELEMENT:number = 6;
		public static RAILWAYELEMENT_FEATURE_COUNT:number = 1;
		public static RAILWAYELEMENT_OPERATION_COUNT:number = 0;
		
		public static RAILWAY_ELEMENT__ID:number = 0;
		
		public static TRACKELEMENT:number = 1;
		public static TRACKELEMENT_FEATURE_COUNT:number = RailwayPackageImpl.RAILWAYELEMENT_FEATURE_COUNT + 2;
		public static TRACKELEMENT_OPERATION_COUNT:number = RailwayPackageImpl.RAILWAYELEMENT_OPERATION_COUNT + 0;
		
		public static TRACK_ELEMENT__ID:number = 0;
		public static TRACK_ELEMENT__SENSOR:number = 1;
		public static TRACK_ELEMENT__CONNECTS_TO:number = 2;
		
		public static SEGMENT:number = 0;
		public static SEGMENT_FEATURE_COUNT:number = RailwayPackageImpl.TRACKELEMENT_FEATURE_COUNT + 1;
		public static SEGMENT_OPERATION_COUNT:number = RailwayPackageImpl.TRACKELEMENT_OPERATION_COUNT + 0;
		
		public static SEGMENT__ID:number = 0;
		public static SEGMENT__SENSOR:number = 1;
		public static SEGMENT__CONNECTS_TO:number = 2;
		public static SEGMENT__LENGTH:number = 3;
		
		public static SWITCH:number = 2;
		public static SWITCH_FEATURE_COUNT:number = RailwayPackageImpl.TRACKELEMENT_FEATURE_COUNT + 2;
		public static SWITCH_OPERATION_COUNT:number = RailwayPackageImpl.TRACKELEMENT_OPERATION_COUNT + 0;
		
		public static SWITCH__ID:number = 0;
		public static SWITCH__SENSOR:number = 1;
		public static SWITCH__CONNECTS_TO:number = 2;
		public static SWITCH__CURRENT_POSITION:number = 3;
		public static SWITCH__POSITIONS:number = 4;
		
		public static ROUTE:number = 3;
		public static ROUTE_FEATURE_COUNT:number = RailwayPackageImpl.RAILWAYELEMENT_FEATURE_COUNT + 4;
		public static ROUTE_OPERATION_COUNT:number = RailwayPackageImpl.RAILWAYELEMENT_OPERATION_COUNT + 0;
		
		public static ROUTE__ID:number = 0;
		public static ROUTE__ENTRY:number = 1;
		public static ROUTE__FOLLOWS:number = 2;
		public static ROUTE__EXIT:number = 3;
		public static ROUTE__DEFINED_BY:number = 4;
		
		public static SEMAPHORE:number = 4;
		public static SEMAPHORE_FEATURE_COUNT:number = RailwayPackageImpl.RAILWAYELEMENT_FEATURE_COUNT + 1;
		public static SEMAPHORE_OPERATION_COUNT:number = RailwayPackageImpl.RAILWAYELEMENT_OPERATION_COUNT + 0;
		
		public static SEMAPHORE__ID:number = 0;
		public static SEMAPHORE__SIGNAL:number = 1;
		
		public static SWITCHPOSITION:number = 5;
		public static SWITCHPOSITION_FEATURE_COUNT:number = RailwayPackageImpl.RAILWAYELEMENT_FEATURE_COUNT + 3;
		public static SWITCHPOSITION_OPERATION_COUNT:number = RailwayPackageImpl.RAILWAYELEMENT_OPERATION_COUNT + 0;
		
		public static SWITCH_POSITION__ID:number = 0;
		public static SWITCH_POSITION__SWITCH:number = 1;
		public static SWITCH_POSITION__POSITION:number = 2;
		public static SWITCH_POSITION__ROUTE:number = 3;
		
		public static SENSOR:number = 7;
		public static SENSOR_FEATURE_COUNT:number = RailwayPackageImpl.RAILWAYELEMENT_FEATURE_COUNT + 1;
		public static SENSOR_OPERATION_COUNT:number = RailwayPackageImpl.RAILWAYELEMENT_OPERATION_COUNT + 0;
		
		public static SENSOR__ID:number = 0;
		public static SENSOR__ELEMENTS:number = 1;
		
		public static RAILWAYCONTAINER:number = 10;
		public static RAILWAYCONTAINER_FEATURE_COUNT:number = 3;
		public static RAILWAYCONTAINER_OPERATION_COUNT:number = 0;
		
		public static RAILWAY_CONTAINER__INVALIDS:number = 0;
		public static RAILWAY_CONTAINER__SEMAPHORES:number = 1;
		public static RAILWAY_CONTAINER__ROUTES:number = 2;
		
		public static SIGNAL:number = 8;
		
		public static POSITION:number = 9;
		
		
		/*Important: Call init() AFTER metaobject ids have been assigned.*/
		public static eINSTANCE:RailwayPackage = RailwayPackageImpl.init();
		
		
		public getRailwayElement=():EClass=>{return this.RailwayElementEClass;}
		
		public getRailwayElement_Id=():EAttribute=>{return <EAttribute> this.RailwayElementEClass.eStructuralFeatures.at(0);}
		public getTrackElement=():EClass=>{return this.TrackElementEClass;}
		
		public getTrackElement_Sensor=():EReference=>{return <EReference> this.TrackElementEClass.eStructuralFeatures.at(0);}
		public getTrackElement_ConnectsTo=():EReference=>{return <EReference> this.TrackElementEClass.eStructuralFeatures.at(1);}
		public getSegment=():EClass=>{return this.SegmentEClass;}
		
		public getSegment_Length=():EAttribute=>{return <EAttribute> this.SegmentEClass.eStructuralFeatures.at(0);}
		public getSwitch=():EClass=>{return this.SwitchEClass;}
		
		public getSwitch_CurrentPosition=():EAttribute=>{return <EAttribute> this.SwitchEClass.eStructuralFeatures.at(0);}
		public getSwitch_Positions=():EReference=>{return <EReference> this.SwitchEClass.eStructuralFeatures.at(1);}
		public getRoute=():EClass=>{return this.RouteEClass;}
		
		public getRoute_Entry=():EReference=>{return <EReference> this.RouteEClass.eStructuralFeatures.at(0);}
		public getRoute_Follows=():EReference=>{return <EReference> this.RouteEClass.eStructuralFeatures.at(1);}
		public getRoute_Exit=():EReference=>{return <EReference> this.RouteEClass.eStructuralFeatures.at(2);}
		public getRoute_DefinedBy=():EReference=>{return <EReference> this.RouteEClass.eStructuralFeatures.at(3);}
		public getSemaphore=():EClass=>{return this.SemaphoreEClass;}
		
		public getSemaphore_Signal=():EAttribute=>{return <EAttribute> this.SemaphoreEClass.eStructuralFeatures.at(0);}
		public getSwitchPosition=():EClass=>{return this.SwitchPositionEClass;}
		
		public getSwitchPosition_Switch=():EReference=>{return <EReference> this.SwitchPositionEClass.eStructuralFeatures.at(0);}
		public getSwitchPosition_Position=():EAttribute=>{return <EAttribute> this.SwitchPositionEClass.eStructuralFeatures.at(1);}
		public getSwitchPosition_Route=():EReference=>{return <EReference> this.SwitchPositionEClass.eStructuralFeatures.at(2);}
		public getSensor=():EClass=>{return this.SensorEClass;}
		
		public getSensor_Elements=():EReference=>{return <EReference> this.SensorEClass.eStructuralFeatures.at(0);}
		public getRailwayContainer=():EClass=>{return this.RailwayContainerEClass;}
		
		public getRailwayContainer_Invalids=():EReference=>{return <EReference> this.RailwayContainerEClass.eStructuralFeatures.at(0);}
		public getRailwayContainer_Semaphores=():EReference=>{return <EReference> this.RailwayContainerEClass.eStructuralFeatures.at(1);}
		public getRailwayContainer_Routes=():EReference=>{return <EReference> this.RailwayContainerEClass.eStructuralFeatures.at(2);}
		public getSignal=():EEnum=>{return this.SignalEEnum;}
		public getPosition=():EEnum=>{return this.PositionEEnum;}
		
		/*
		public static Literals = {
			SEGMENT: RailwayPackageImpl.eINSTANCE.getSegment(), 
			
			TRACKELEMENT: RailwayPackageImpl.eINSTANCE.getTrackElement(), 
			
			SWITCH: RailwayPackageImpl.eINSTANCE.getSwitch(), 
			
			ROUTE: RailwayPackageImpl.eINSTANCE.getRoute(), 
			
			SEMAPHORE: RailwayPackageImpl.eINSTANCE.getSemaphore(), 
			
			SWITCHPOSITION: RailwayPackageImpl.eINSTANCE.getSwitchPosition(), 
			
			RAILWAYELEMENT: RailwayPackageImpl.eINSTANCE.getRailwayElement(), 
			
			SENSOR: RailwayPackageImpl.eINSTANCE.getSensor(), 
			
			SIGNAL: RailwayPackageImpl.eINSTANCE.getSignal(), 
			POSITION: RailwayPackageImpl.eINSTANCE.getPosition(), 
			RAILWAYCONTAINER: RailwayPackageImpl.eINSTANCE.getRailwayContainer(), 
			
			RAILWAY_ELEMENT__ID: RailwayPackageImpl.eINSTANCE.getRailwayElement_Id(), 
			TRACK_ELEMENT__SENSOR: RailwayPackageImpl.eINSTANCE.getTrackElement_Sensor(), 
			TRACK_ELEMENT__CONNECTS_TO: RailwayPackageImpl.eINSTANCE.getTrackElement_ConnectsTo(), 
			SEGMENT__LENGTH: RailwayPackageImpl.eINSTANCE.getSegment_Length(), 
			SWITCH__CURRENT_POSITION: RailwayPackageImpl.eINSTANCE.getSwitch_CurrentPosition(), 
			SWITCH__POSITIONS: RailwayPackageImpl.eINSTANCE.getSwitch_Positions(), 
			ROUTE__ENTRY: RailwayPackageImpl.eINSTANCE.getRoute_Entry(), 
			ROUTE__FOLLOWS: RailwayPackageImpl.eINSTANCE.getRoute_Follows(), 
			ROUTE__EXIT: RailwayPackageImpl.eINSTANCE.getRoute_Exit(), 
			ROUTE__DEFINED_BY: RailwayPackageImpl.eINSTANCE.getRoute_DefinedBy(), 
			SEMAPHORE__SIGNAL: RailwayPackageImpl.eINSTANCE.getSemaphore_Signal(), 
			SWITCH_POSITION__SWITCH: RailwayPackageImpl.eINSTANCE.getSwitchPosition_Switch(), 
			SWITCH_POSITION__POSITION: RailwayPackageImpl.eINSTANCE.getSwitchPosition_Position(), 
			SWITCH_POSITION__ROUTE: RailwayPackageImpl.eINSTANCE.getSwitchPosition_Route(), 
			SENSOR__ELEMENTS: RailwayPackageImpl.eINSTANCE.getSensor_Elements(), 
			RAILWAY_CONTAINER__INVALIDS: RailwayPackageImpl.eINSTANCE.getRailwayContainer_Invalids(), 
			RAILWAY_CONTAINER__SEMAPHORES: RailwayPackageImpl.eINSTANCE.getRailwayContainer_Semaphores(), 
			RAILWAY_CONTAINER__ROUTES: RailwayPackageImpl.eINSTANCE.getRailwayContainer_Routes(), 
			SIGNAL: RailwayPackageImpl.eINSTANCE.getSignal(), 
			POSITION: RailwayPackageImpl.eINSTANCE.getPosition()
		}
		*/
		

 
}
