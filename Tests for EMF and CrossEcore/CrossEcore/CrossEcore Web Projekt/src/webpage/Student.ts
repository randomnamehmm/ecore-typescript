import {OrderedSet} from "ecore/OrderedSet";
import {Person} from "webpage/Person";

export interface Student
extends Person

{
	matrikelnr:number;
	
	grades:OrderedSet<number>;
	
	

}

