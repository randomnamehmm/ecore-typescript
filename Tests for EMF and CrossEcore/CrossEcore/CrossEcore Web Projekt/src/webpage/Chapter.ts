import {OrderedSet} from "ecore/OrderedSet";
import {InternalEObject} from "ecore/InternalEObject";

export interface Chapter
extends InternalEObject

{
	
	title:OrderedSet<string>;
	subSection:boolean;
	
	letters:OrderedSet<string>;
	
	

}

