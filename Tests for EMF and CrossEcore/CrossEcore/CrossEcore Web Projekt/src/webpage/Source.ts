import {OrderedSet} from "ecore/OrderedSet";
import {Set} from "ecore/Set";
import {InternalEObject} from "ecore/InternalEObject";

export interface Source
extends InternalEObject

{
	title:string;
	url:string;
	
	page_no:OrderedSet<number>;
	
	authors:Set<string>;
	
	

}

