import {EClass} from "ecore/EClass";
import {EAttribute} from "ecore/EAttribute";
import {EEnum} from "ecore/EEnum";
import {EReference} from "ecore/EReference";
import {EPackage} from "ecore/EPackage";
export interface WebpagePackage extends EPackage {
	getWebsite():EClass;
	getWebsite_Categories():EReference;
	getWebsite_Pictures():EReference;
	
	getWebsite_Name():EAttribute;
	getWebsite_Title():EAttribute;
	getWebsite_Description():EAttribute;
	getWebsite_Number():EAttribute;
	getWebsite_Links():EAttribute;
	getCategory():EClass;
	getCategory_Articles():EReference;
	
	getCategory_Name():EAttribute;
	getCategory_Number():EAttribute;
	getArticle():EClass;
	getArticle_Chapters():EReference;
	getArticle_Authors():EReference;
	getArticle_Picture():EReference;
	getArticle_Related():EReference;
	getArticle_Sources():EReference;
	
	getArticle_Name():EAttribute;
	getArticle_Articletype():EAttribute;
	getArticle_Flags():EAttribute;
	getArticle_Number():EAttribute;
	getPerson():EClass;
	getPerson_Articles():EReference;
	
	getPerson_Name():EAttribute;
	getPerson_Surname():EAttribute;
	getPerson_Age():EAttribute;
	getPerson_Access_key():EAttribute;
	getStudent():EClass;
	
	getStudent_Matrikelnr():EAttribute;
	getStudent_Grades():EAttribute;
	getChapter():EClass;
	
	getChapter_Title():EAttribute;
	getChapter_SubSection():EAttribute;
	getChapter_Letters():EAttribute;
	getPicture():EClass;
	
	getPicture_Name():EAttribute;
	getPicture_Information():EAttribute;
	getPicture_Number():EAttribute;
	getPicture_Hash():EAttribute;
	getSource():EClass;
	
	getSource_Title():EAttribute;
	getSource_Url():EAttribute;
	getSource_Page_no():EAttribute;
	getSource_Authors():EAttribute;
	getAnimatedPicture():EClass;
	
	getAnimatedPicture_Repeat():EAttribute;
	getArticleType():EEnum;
}
