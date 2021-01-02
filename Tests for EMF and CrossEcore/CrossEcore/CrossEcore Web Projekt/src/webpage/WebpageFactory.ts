import {Category} from "webpage/Category";
import {Picture} from "webpage/Picture";
import {Article} from "webpage/Article";
import {Chapter} from "webpage/Chapter";
import {Website} from "webpage/Website";
import {AnimatedPicture} from "webpage/AnimatedPicture";
import {Student} from "webpage/Student";
import {Person} from "webpage/Person";
import {Source} from "webpage/Source";
import {EFactory} from "ecore/EFactory";

export interface WebpageFactory extends EFactory{
	createWebsite():Website;
	createCategory():Category;
	createArticle():Article;
	createPerson():Person;
	createStudent():Student;
	createChapter():Chapter;
	createPicture():Picture;
	createSource():Source;
	createAnimatedPicture():AnimatedPicture;
}
