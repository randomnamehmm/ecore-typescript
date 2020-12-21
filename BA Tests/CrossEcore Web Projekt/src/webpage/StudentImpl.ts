import {Set} from "ecore/Set";
import {ArticleBase} from "webpage/ArticleBase";
import {Category} from "webpage/Category";
import {CategoryBase} from "webpage/CategoryBase";
import {WebsiteBase} from "webpage/WebsiteBase";
import {Article} from "webpage/Article";
import {Website} from "webpage/Website";
import {StudentBase} from "webpage/StudentBase";
import {PersonBase} from "webpage/PersonBase";
import {Student} from "webpage/Student";
import {Person} from "webpage/Person";
/* import Ecore*/
export class StudentImpl
extends StudentBase
{
	public static allInstances_:Set<Student> = new Set<Student>();
	//implement your generated class here
}
