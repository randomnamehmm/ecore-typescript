import {OrderedSet} from "ecore/OrderedSet";
import {InternalEObject} from "ecore/InternalEObject";

export interface Picture
extends InternalEObject

{
	name:string;
	
	information:OrderedSet<string>;
	number:number;
	
	hash:OrderedSet<boolean>;
	
	

}

