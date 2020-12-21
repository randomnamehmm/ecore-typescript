import {OrderedSet} from "ecore/OrderedSet";
import {InternalEObject} from "ecore/InternalEObject";
import {Article} from "webpage/Article";

export interface Category
extends InternalEObject

{
	name:string;
	number:number;
	
	articles: OrderedSet<Article>;
	

}

