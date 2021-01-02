export class RailwayPackageLiterals{
	public static RAILWAYELEMENT:number = 6;
	public static RAILWAYELEMENT_FEATURE_COUNT:number = 1;
	public static RAILWAYELEMENT_OPERATION_COUNT:number = 0;
	
	public static RAILWAY_ELEMENT__ID:number = 0;
	
	public static TRACKELEMENT:number = 1;
	public static TRACKELEMENT_FEATURE_COUNT:number = RailwayPackageLiterals.RAILWAYELEMENT_FEATURE_COUNT + 2;
	public static TRACKELEMENT_OPERATION_COUNT:number = RailwayPackageLiterals.RAILWAYELEMENT_OPERATION_COUNT + 0;
	
	public static TRACK_ELEMENT__ID:number = 0;
	public static TRACK_ELEMENT__SENSOR:number = 1;
	public static TRACK_ELEMENT__CONNECTS_TO:number = 2;
	
	public static SEGMENT:number = 0;
	public static SEGMENT_FEATURE_COUNT:number = RailwayPackageLiterals.TRACKELEMENT_FEATURE_COUNT + 1;
	public static SEGMENT_OPERATION_COUNT:number = RailwayPackageLiterals.TRACKELEMENT_OPERATION_COUNT + 0;
	
	public static SEGMENT__ID:number = 0;
	public static SEGMENT__SENSOR:number = 1;
	public static SEGMENT__CONNECTS_TO:number = 2;
	public static SEGMENT__LENGTH:number = 3;
	
	public static SWITCH:number = 2;
	public static SWITCH_FEATURE_COUNT:number = RailwayPackageLiterals.TRACKELEMENT_FEATURE_COUNT + 2;
	public static SWITCH_OPERATION_COUNT:number = RailwayPackageLiterals.TRACKELEMENT_OPERATION_COUNT + 0;
	
	public static SWITCH__ID:number = 0;
	public static SWITCH__SENSOR:number = 1;
	public static SWITCH__CONNECTS_TO:number = 2;
	public static SWITCH__CURRENT_POSITION:number = 3;
	public static SWITCH__POSITIONS:number = 4;
	
	public static ROUTE:number = 3;
	public static ROUTE_FEATURE_COUNT:number = RailwayPackageLiterals.RAILWAYELEMENT_FEATURE_COUNT + 4;
	public static ROUTE_OPERATION_COUNT:number = RailwayPackageLiterals.RAILWAYELEMENT_OPERATION_COUNT + 0;
	
	public static ROUTE__ID:number = 0;
	public static ROUTE__ENTRY:number = 1;
	public static ROUTE__FOLLOWS:number = 2;
	public static ROUTE__EXIT:number = 3;
	public static ROUTE__DEFINED_BY:number = 4;
	
	public static SEMAPHORE:number = 4;
	public static SEMAPHORE_FEATURE_COUNT:number = RailwayPackageLiterals.RAILWAYELEMENT_FEATURE_COUNT + 1;
	public static SEMAPHORE_OPERATION_COUNT:number = RailwayPackageLiterals.RAILWAYELEMENT_OPERATION_COUNT + 0;
	
	public static SEMAPHORE__ID:number = 0;
	public static SEMAPHORE__SIGNAL:number = 1;
	
	public static SWITCHPOSITION:number = 5;
	public static SWITCHPOSITION_FEATURE_COUNT:number = RailwayPackageLiterals.RAILWAYELEMENT_FEATURE_COUNT + 3;
	public static SWITCHPOSITION_OPERATION_COUNT:number = RailwayPackageLiterals.RAILWAYELEMENT_OPERATION_COUNT + 0;
	
	public static SWITCH_POSITION__ID:number = 0;
	public static SWITCH_POSITION__SWITCH:number = 1;
	public static SWITCH_POSITION__POSITION:number = 2;
	public static SWITCH_POSITION__ROUTE:number = 3;
	
	public static SENSOR:number = 7;
	public static SENSOR_FEATURE_COUNT:number = RailwayPackageLiterals.RAILWAYELEMENT_FEATURE_COUNT + 1;
	public static SENSOR_OPERATION_COUNT:number = RailwayPackageLiterals.RAILWAYELEMENT_OPERATION_COUNT + 0;
	
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
	
}
