import {Set} from "ecore/Set";
import {ArticleBase} from "webpage/ArticleBase";
import {Category} from "webpage/Category";
import {CategoryBase} from "webpage/CategoryBase";
import {WebsiteBase} from "webpage/WebsiteBase";
import {Article} from "webpage/Article";
import {Website} from "webpage/Website";
import {PersonBase} from "webpage/PersonBase";
import {Person} from "webpage/Person";
/* import Ecore*/
export class PersonImpl
extends PersonBase
{
	public static allInstances_:Set<Person> = new Set<Person>();
	//implement your generated class here
}
