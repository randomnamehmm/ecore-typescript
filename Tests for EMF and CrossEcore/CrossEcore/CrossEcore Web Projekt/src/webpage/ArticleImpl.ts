import {Set} from "ecore/Set";
import {ArticleBase} from "webpage/ArticleBase";
import {Category} from "webpage/Category";
import {CategoryBase} from "webpage/CategoryBase";
import {WebsiteBase} from "webpage/WebsiteBase";
import {Article} from "webpage/Article";
import {Website} from "webpage/Website";
/* import Ecore*/
export class ArticleImpl
extends ArticleBase
{
	public static allInstances_:Set<Article> = new Set<Article>();
	//implement your generated class here
}
