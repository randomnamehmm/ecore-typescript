import {OrderedSet} from "ecore/OrderedSet";
import {Set} from "ecore/Set";
import {InternalEObject} from "ecore/InternalEObject";
import {Picture} from "webpage/Picture";
import {Chapter} from "webpage/Chapter";
import {Person} from "webpage/Person";
import {Source} from "webpage/Source";
import {ArticleType} from "webpage/ArticleType";

export interface Article
extends InternalEObject

{
	name:string;
	articletype:ArticleType;
	
	flags:OrderedSet<boolean>;
	number:number;
	
	chapters: OrderedSet<Chapter>;
	authors: OrderedSet<Person>;
	picture:Picture;
	related: OrderedSet<Article>;
	sources: Set<Source>;
	

}

