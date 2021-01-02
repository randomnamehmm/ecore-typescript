import {OrderedSet} from "ecore/OrderedSet";
import {Set} from "ecore/Set";
import {InternalEObject} from "ecore/InternalEObject";
import {Article} from "webpage/Article";

export interface Person
extends InternalEObject

{
	
	name:OrderedSet<string>;
	surname:string;
	age:number;
	
	access_key:Set<string>;
	
	articles: OrderedSet<Article>;
	

}

