export class WebpagePackageLiterals{
	public static WEBSITE:number = 0;
	public static WEBSITE_FEATURE_COUNT:number = 7;
	public static WEBSITE_OPERATION_COUNT:number = 0;
	
	public static WEBSITE__NAME:number = 0;
	public static WEBSITE__TITLE:number = 1;
	public static WEBSITE__DESCRIPTION:number = 2;
	public static WEBSITE__CATEGORIES:number = 3;
	public static WEBSITE__PICTURES:number = 4;
	public static WEBSITE__NUMBER:number = 5;
	public static WEBSITE__LINKS:number = 6;
	
	public static CATEGORY:number = 1;
	public static CATEGORY_FEATURE_COUNT:number = 3;
	public static CATEGORY_OPERATION_COUNT:number = 0;
	
	public static CATEGORY__NAME:number = 0;
	public static CATEGORY__ARTICLES:number = 1;
	public static CATEGORY__NUMBER:number = 2;
	
	public static ARTICLE:number = 2;
	public static ARTICLE_FEATURE_COUNT:number = 9;
	public static ARTICLE_OPERATION_COUNT:number = 0;
	
	public static ARTICLE__NAME:number = 0;
	public static ARTICLE__CHAPTERS:number = 1;
	public static ARTICLE__AUTHORS:number = 2;
	public static ARTICLE__PICTURE:number = 3;
	public static ARTICLE__ARTICLETYPE:number = 4;
	public static ARTICLE__RELATED:number = 5;
	public static ARTICLE__SOURCES:number = 6;
	public static ARTICLE__FLAGS:number = 7;
	public static ARTICLE__NUMBER:number = 8;
	
	public static PERSON:number = 4;
	public static PERSON_FEATURE_COUNT:number = 5;
	public static PERSON_OPERATION_COUNT:number = 0;
	
	public static PERSON__NAME:number = 0;
	public static PERSON__ARTICLES:number = 1;
	public static PERSON__SURNAME:number = 2;
	public static PERSON__AGE:number = 3;
	public static PERSON__ACCESS_KEY:number = 4;
	
	public static STUDENT:number = 5;
	public static STUDENT_FEATURE_COUNT:number = WebpagePackageLiterals.PERSON_FEATURE_COUNT + 2;
	public static STUDENT_OPERATION_COUNT:number = WebpagePackageLiterals.PERSON_OPERATION_COUNT + 0;
	
	public static STUDENT__NAME:number = 0;
	public static STUDENT__ARTICLES:number = 1;
	public static STUDENT__SURNAME:number = 2;
	public static STUDENT__AGE:number = 3;
	public static STUDENT__ACCESS_KEY:number = 4;
	public static STUDENT__MATRIKELNR:number = 5;
	public static STUDENT__GRADES:number = 6;
	
	public static CHAPTER:number = 6;
	public static CHAPTER_FEATURE_COUNT:number = 3;
	public static CHAPTER_OPERATION_COUNT:number = 0;
	
	public static CHAPTER__TITLE:number = 0;
	public static CHAPTER__SUB_SECTION:number = 1;
	public static CHAPTER__LETTERS:number = 2;
	
	public static PICTURE:number = 7;
	public static PICTURE_FEATURE_COUNT:number = 4;
	public static PICTURE_OPERATION_COUNT:number = 0;
	
	public static PICTURE__NAME:number = 0;
	public static PICTURE__INFORMATION:number = 1;
	public static PICTURE__NUMBER:number = 2;
	public static PICTURE__HASH:number = 3;
	
	public static SOURCE:number = 8;
	public static SOURCE_FEATURE_COUNT:number = 4;
	public static SOURCE_OPERATION_COUNT:number = 0;
	
	public static SOURCE__TITLE:number = 0;
	public static SOURCE__URL:number = 1;
	public static SOURCE__PAGE_NO:number = 2;
	public static SOURCE__AUTHORS:number = 3;
	
	public static ANIMATEDPICTURE:number = 9;
	public static ANIMATEDPICTURE_FEATURE_COUNT:number = WebpagePackageLiterals.PICTURE_FEATURE_COUNT + 1;
	public static ANIMATEDPICTURE_OPERATION_COUNT:number = WebpagePackageLiterals.PICTURE_OPERATION_COUNT + 0;
	
	public static ANIMATED_PICTURE__NAME:number = 0;
	public static ANIMATED_PICTURE__INFORMATION:number = 1;
	public static ANIMATED_PICTURE__NUMBER:number = 2;
	public static ANIMATED_PICTURE__HASH:number = 3;
	public static ANIMATED_PICTURE__REPEAT:number = 4;
	
	public static ARTICLETYPE:number = 3;
	
}
