import {OrderedSet} from "ecore/OrderedSet";
import {Set} from "ecore/Set";
import {InternalEObject} from "ecore/InternalEObject";
import {Category} from "webpage/Category";
import {Picture} from "webpage/Picture";

export interface Website
extends InternalEObject

{
	name:string;
	title:string;
	description:string;
	number:number;
	
	links:Set<string>;
	
	categories: OrderedSet<Category>;
	pictures: Set<Picture>;
	

}

