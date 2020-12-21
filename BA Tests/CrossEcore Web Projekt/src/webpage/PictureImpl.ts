import {Set} from "ecore/Set";
import {ArticleBase} from "webpage/ArticleBase";
import {Category} from "webpage/Category";
import {CategoryBase} from "webpage/CategoryBase";
import {Article} from "webpage/Article";
import {Chapter} from "webpage/Chapter";
import {Website} from "webpage/Website";
import {PictureBase} from "webpage/PictureBase";
import {ChapterBase} from "webpage/ChapterBase";
import {Student} from "webpage/Student";
import {Picture} from "webpage/Picture";
import {WebsiteBase} from "webpage/WebsiteBase";
import {StudentBase} from "webpage/StudentBase";
import {PersonBase} from "webpage/PersonBase";
import {Person} from "webpage/Person";
/* import Ecore*/
export class PictureImpl
extends PictureBase
{
	public static allInstances_:Set<Picture> = new Set<Picture>();
	//implement your generated class here
}
