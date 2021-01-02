import { XmiResource } from "ecore/XmiResource";
import { WebpagePackage } from "webpage/WebpagePackage";
import { WebpagePackageImpl } from "webpage/WebpagePackageImpl";
import { WebpageFactory } from "webpage/WebpageFactory";
import { WebpageFactoryImpl } from "webpage/WebpageFactoryImpl";
import { Person } from "webpage/Person";
import { Student } from "webpage/Student";
import { Website } from "webpage/Website";
import { Picture } from "webpage/Picture";
import { Article } from "webpage/Article";
import { EObject } from "crossecore/src/EObject";
import { Source } from "webpage/Source";
import { Chapter } from "webpage/Chapter";
import { Category } from "webpage/Category";
import { ArticleType } from "webpage/ArticleType";
import { assert, expect } from "chai";
import { PersonImpl } from "webpage/PersonImpl";
import { SourceImpl } from "webpage/SourceImpl";
import { StudentImpl } from "webpage/StudentImpl";
import { PictureImpl } from "webpage/PictureImpl";
import { ArticleImpl } from "webpage/ArticleImpl";
import { WebsiteImpl } from "webpage/WebsiteImpl";
import { ChapterImpl } from "webpage/ChapterImpl";

var webpage : WebpagePackage = WebpagePackageImpl.eINSTANCE;
var factory : WebpageFactory = WebpageFactoryImpl.eINSTANCE;
let eobjects:Array<EObject> = [];

describe('XmiResource', function() {
    describe('save', function() {
        it('Can save an EObject to XMI', function() {
            eobjects = [];
            let person:Person = factory.createPerson();

            eobjects.push(person);
            let xmi1:string = saveToXMI(eobjects);
            console.log("Save1");
            console.log(xmi1);
            assert.notEqual(xmi1, "");
        });

        it('Can save an EObject with a single string attribute to XMI', function() {
            eobjects = [];
            let person:Person = factory.createPerson();
            person.surname = "Surname";

            eobjects.push(person);
            let xmi2:string = saveToXMI(eobjects);
            console.log("Save2");
            console.log(xmi2);
            assert.notEqual(xmi2, "");
        });

        it('Can save an EOBject with a list of strings as an attribute to XMI', function() {
            eobjects = [];
            let source:Source = factory.createSource();
            source.authors.add("Author1");
            source.authors.add("Author2");

            eobjects.push(source);
            let xmi3:string = saveToXMI(eobjects);
            console.log("Save3");
            console.log(xmi3);
            assert.notEqual(xmi3, "");
        });

        it('Can save an EOBject with a short attribute to XMI', function() {
            eobjects = [];
            let person:Person = factory.createPerson();
            person.age = 27;

            eobjects.push(person);
            let xmi4:string = saveToXMI(eobjects);
            console.log("Save4");
            console.log(xmi4);
            assert.notEqual(xmi4, "");
        });

        it('Can save an EObject with a long attribute to XMI', function() {
            eobjects = [];
            let student:Student = factory.createStudent();
            student.matrikelnr = 123;

            eobjects.push(student);
            let xmi5:string = saveToXMI(eobjects);
            console.log("Save5");
            console.log(xmi5);
            assert.notEqual(xmi5, "");
        });

        it('Can save an EObject with an int attribute to XMI', function() {
            eobjects = [];
            let picture:Picture = factory.createPicture();
            picture.number = 123;

            eobjects.push(picture);
            let xmi6:string = saveToXMI(eobjects);
            console.log("Save6");
            console.log(xmi6);
            assert.notEqual(xmi6, "");
        });

        it('Can save an EObject with a list of int as an attribute to XMI', function() {
            eobjects = [];
            let source:Source = factory.createSource();
            source.page_no.add(-1);
            source.page_no.add(2);

            eobjects.push(source);
            let xmi7:string = saveToXMI(eobjects);
            console.log("Save7");
            console.log(xmi7);
            assert.notEqual(xmi7, "");
        });

        it('Can save an EObject with a float attribute to XMI', function() {
            eobjects = [];
            let article:Article = factory.createArticle();
            article.number = 1.2;
            let picture:Picture = factory.createPicture();
            article.picture = picture;
            let person:Person = factory.createPerson();
            article.authors.add(person);

            eobjects.push(article);
            eobjects.push(picture);
            eobjects.push(person);
            let xmi8:string = saveToXMI(eobjects);
            console.log("Save8");
            console.log(xmi8);
            assert.notEqual(xmi8, "");
        });

        it('Can save an EObject with a list of float as an attribute to XMI', function() {
            eobjects = [];
            let student:Student = factory.createStudent();
            student.grades.add(-2.0);
            student.grades.add(2.3);

            eobjects.push(student);
            let xmi9:string = saveToXMI(eobjects);
            console.log("Save9");
            console.log(xmi9);
            assert.notEqual(xmi9, "");
        });

        it('Can save an EObject with a double attribute to XMI', function() {
            eobjects = [];
            let website:Website = factory.createWebsite();
            website.number = 1.0;
            let picture:Picture = factory.createPicture();
            website.pictures.add(picture);

            eobjects.push(website);
            let xmi10:string = saveToXMI(eobjects);
            console.log("Save10");
            console.log(xmi10);
            assert.notEqual(xmi10, "");
        });

        it('Can save an EObject with a list of char as an attribute to XMI', function() {
            eobjects = [];
            let person:Person = factory.createPerson();
            person.access_key.add('a');
            person.access_key.add('b');

            eobjects.push(person);
            let xmi11:string = saveToXMI(eobjects);
            console.log("Save11");
            console.log(xmi11);
            assert.notEqual(xmi11, "");
        });

        it('Can save an EObject with a boolean attribute to XMI', function() {
            eobjects = [];
            let chapter:Chapter = factory.createChapter();
            chapter.subSection = true;

            eobjects.push(chapter);
            let xmi12:string = saveToXMI(eobjects);
            console.log("Save12");
            console.log(xmi12);
            assert.notEqual(xmi12, "");
        });

        it('Can save an EObject with a list of boolean as an attribute to XMI', function() {
            eobjects = [];
            let picture:Picture = factory.createPicture();
            picture.hash.add(true);
            picture.hash.add(false);

            eobjects.push(picture);
            let xmi13:string = saveToXMI(eobjects);
            console.log("Save13");
            console.log(xmi13);
            assert.notEqual(xmi13, "");
        });

        it('Can save an EObject with an enum attribute to XMI', function() {
            eobjects = [];
            let article:Article = factory.createArticle();
            let picture:Picture = factory.createPicture();
            let person:Person = factory.createPerson();
            article.picture = picture;
            article.articletype = ArticleType.STUDY;
            article.authors.add(person);

            eobjects.push(article);
            eobjects.push(picture);
            eobjects.push(person);
            let xmi14:string = saveToXMI(eobjects);
            console.log("Save14");
            console.log(xmi14);
            assert.notEqual(xmi14, "");
        });

        it('Can save an EObject with a single containment relationship to XMI', function() {
            eobjects = [];
            let website:Website = factory.createWebsite();
            let picture:Picture = factory.createPicture();
            website.pictures.add(picture);

            eobjects.push(website);
            let xmi15:string = saveToXMI(eobjects);
            console.log("Save15");
            console.log(xmi15);
            assert.notEqual(xmi15, "");
        });

        it('Can save an EObject with multiple containment relationships to XMI', function() {
            eobjects = [];
            let website:Website = factory.createWebsite();
            let picture:Picture = factory.createPicture();
            let category:Category = factory.createCategory();
            let category2:Category = factory.createCategory();
            website.pictures.add(picture);
		    website.categories.add(category);
            website.categories.add(category2);
            
            eobjects.push(website);
            let xmi16:string = saveToXMI(eobjects);
            console.log("Save16");
            console.log(xmi16);
            assert.notEqual(xmi16, "");
        });

        it('Can save an EObject with a single reference to XMI', function() {
            eobjects = [];
            let article:Article = factory.createArticle();
            let picture:Picture = factory.createPicture();
            let person:Person = factory.createPerson();
            article.picture = picture;
            article.authors.add(person);

            eobjects.push(article);
            eobjects.push(picture);
            eobjects.push(person);
            let xmi17:string = saveToXMI(eobjects);
            console.log("Save17");
            console.log(xmi17);
            assert.notEqual(xmi17, "");
        });

        it('Can save an EObject with multiple references to XMI', function() {
            eobjects = [];
            let article:Article = factory.createArticle();
            let picture:Picture = factory.createPicture();
            let person:Person = factory.createPerson();
            let source:Source = factory.createSource();
            let source2:Source = factory.createSource();
            article.picture = picture;
            article.authors.add(person);
            article.sources.add(source);
            article.sources.add(source2);

            eobjects.push(article);
            eobjects.push(picture);
            eobjects.push(person);
            eobjects.push(source);
            eobjects.push(source2);
            let xmi18:string = saveToXMI(eobjects);
            console.log("Save18");
            console.log(xmi18);
            assert.notEqual(xmi18, "");
        });

        it('Can save an EObject with a single bidirectional reference to XMI', function() {
            eobjects = [];
            let article:Article = factory.createArticle();
            let picture:Picture = factory.createPicture();
            let student:Student = factory.createStudent();
            article.picture = picture;
            article.authors.add(student);
            student.articles.add(article);
            
            eobjects.push(article);
            eobjects.push(picture);
            eobjects.push(student);
            let xmi19:string = saveToXMI(eobjects);
            console.log("Save19");
            console.log(xmi19);
            assert.notEqual(xmi19, "");
        });

        it('Can save an EObject with multiple bidirectional references to XMI', function() {
            eobjects = [];
            let article:Article = factory.createArticle();
            let article2:Article = factory.createArticle();
            let picture:Picture = factory.createPicture();
            article.picture = picture;
            article2.picture = picture;
            let person:Person = factory.createPerson();
            let student:Student = factory.createStudent();
            article.authors.add(person);
            article.authors.add(student);
            article2.authors.add(student);
            person.articles.add(article);
            student.articles.add(article);
            student.articles.add(article2);
            
            eobjects.push(article);
            eobjects.push(article2);
            eobjects.push(picture);
            eobjects.push(person);
            eobjects.push(student);
            let xmi20:string = saveToXMI(eobjects);
            console.log("Save20");
            console.log(xmi20);
            assert.notEqual(xmi20, "");
        });

        it('Can save an EObject with multiple references to objects of same class to XMI', function() {
            eobjects = [];
            let article:Article = factory.createArticle();
            let article2:Article = factory.createArticle();
            let article3:Article = factory.createArticle();
            let person:Person = factory.createPerson();
            let picture:Picture = factory.createPicture();
            article.picture = picture;
            article2.picture = picture;
            article3.picture = picture;
            article.authors.add(person);
            article2.authors.add(person);
            article3.authors.add(person);
            article.related.add(article2);
            article.related.add(article3);
            
            eobjects.push(article);
            eobjects.push(article2);
            eobjects.push(article3);
            eobjects.push(person);
            eobjects.push(picture);
            let xmi21:string = saveToXMI(eobjects);
            console.log("Save21");
            console.log(xmi21);
            assert.notEqual(xmi21, "");
        });

        it('Can save an EObject with a reference to itself to XMI', function() {
            eobjects = [];
            let article:Article = factory.createArticle();
            let picture:Picture = factory.createPicture();
            let person:Person = factory.createPerson();
            article.picture = picture;
            article.related.add(article);
            article.authors.add(person);
            
            eobjects.push(article);
            eobjects.push(picture);
            eobjects.push(person);
            let xmi22:string = saveToXMI(eobjects);
            console.log("Save22");
            console.log(xmi22);
            assert.notEqual(xmi22, "");
        });

        it('Can detect an incorrect attribute multiplicity when saving', function() {
            eobjects = [];
            let person:Person = factory.createPerson();
            for (let i = 0; i < 257; i++) {
                person.access_key.add(String.fromCharCode(i));
            }
            
            eobjects.push(person);
            let xmi23:string = saveToXMI(eobjects);
            console.log("Save23");
            console.log(xmi23);
            assert.equal(xmi23, "");
        });

        it('Can detect an incorrect reference multiplicity when saving', function() {
            eobjects = [];
            let article:Article = factory.createArticle();

            eobjects.push(article);
            let xmi24:string = saveToXMI(eobjects);
            console.log("Save24");
            console.log(xmi24);
            assert.equal(xmi24, "");
        });

        it('Can detect an incorrect containment multiplicity when saving', function() {
            eobjects = [];
            let website:Website = factory.createWebsite();

            eobjects.push(website);
            let xmi25:string = saveToXMI(eobjects);
            console.log("Save25");
            console.log(xmi25);
            assert.equal(xmi25, "");
        });

        it('Can detect and correct an incorrect bidirectional reference when saving', function() {
            eobjects = [];
            let article:Article = factory.createArticle();
            let article2:Article = factory.createArticle();
            let person:Person = factory.createPerson();
            let person2:Person = factory.createPerson();
            let picture:Picture = factory.createPicture();
            article.picture = picture;
            article2.picture = picture;
            article.authors.add(person);
            article2.authors.add(person2);
            person.articles.add(article2);
            person2.articles.add(article);
            
            eobjects.push(article);
            eobjects.push(article2);
            eobjects.push(picture);
            eobjects.push(person);
            eobjects.push(person2);
            let xmi26:string = saveToXMI(eobjects);
            console.log("Save26");
            console.log(xmi26);
            assert.notEqual(xmi26, "");
        });

        it('Can detect a missing reference when saving', function() {
            eobjects = [];
            let person:Person = factory.createPerson();
            let article:Article = factory.createArticle();
            let picture:Picture = factory.createPicture();
            article.picture = picture;
            person.articles.add(article);
            article.authors.add(person);
            
            eobjects.push(person);
            eobjects.push(picture);
            let xmi27:string = saveToXMI(eobjects);
            console.log("Save27");
            console.log(xmi27);
            assert.equal(xmi27, "");
        });

        it('Can detect an EObject being within multiple containments when saving', function() {
            eobjects = [];
            let website:Website = factory.createWebsite();
            let website2:Website = factory.createWebsite();
            let picture:Picture = factory.createPicture();
            website.pictures.add(picture);
            website2.pictures.add(picture);
            
            eobjects.push(website);
            eobjects.push(website2);
            let xmi28:string = saveToXMI(eobjects);
            console.log("Save28");
            console.log(xmi28);
            assert.equal(xmi28, "");
        });

        it('Can detect an EObject being in a containment and outside of it when saving', function() {
            eobjects = [];
            let website:Website = factory.createWebsite();
            let picture:Picture = factory.createPicture();
            website.pictures.add(picture);
            
            eobjects.push(website);
            eobjects.push(picture);
            let xmi29:string = saveToXMI(eobjects);
            console.log("Save29");
            console.log(xmi29);
            assert.equal(xmi29, "");
        });

        it('Can detect the same EObject being serialized multiple times when saving', function() {
            eobjects = [];
            let student:Student = factory.createStudent();
		
            eobjects.push(student);
            eobjects.push(student);
            let xmi30:string = saveToXMI(eobjects);
            console.log("Save30");
            console.log(xmi30);
            assert.notEqual(xmi30, "");
        });

        it('Can detect the same EObject being contained multiple times when saving', function() {
            eobjects = [];
            let website:Website = factory.createWebsite();
            let picture:Picture = factory.createPicture();
            website.pictures.add(picture);
            website.pictures.add(picture);
            
            eobjects.push(website);
            let xmi31:string = saveToXMI(eobjects);
            console.log("Save31");
            console.log(xmi31);
            assert.notEqual(xmi31, "");
        });

        it('Can detect the same EObject being referenced multiple times when saving', function() {
            eobjects = [];
            let article:Article = factory.createArticle();
            let picture:Picture = factory.createPicture();
            let person:Person = factory.createPerson();
            article.picture = picture;
            article.authors.add(person);
            let source:Source = factory.createSource();
            article.sources.add(source);
            article.sources.add(source);
            
            eobjects.push(article);
            eobjects.push(picture);
            eobjects.push(source);
            eobjects.push(person);
            let xmi32:string = saveToXMI(eobjects);
            console.log("Save32");
            console.log(xmi32);
            assert.notEqual(xmi32, "");
        });

        it('Can save an inherited class', function() {
            eobjects = [];
            let student:Person = factory.createStudent();
            student.age = 29;
            
            eobjects.push(student);
            let xmi33:string = saveToXMI(eobjects);
            console.log("Save33");
            console.log(xmi33);
            assert.notEqual(xmi33, "");
        });

        it('Can save special float values', function() {
            eobjects = [];
            let article:Article = factory.createArticle();
            let article2:Article = factory.createArticle();
            let article3:Article = factory.createArticle();
            let picture:Picture = factory.createPicture();
            let person:Person = factory.createPerson();
            article.authors.add(person);
            article2.authors.add(person);
            article3.authors.add(person);
            article.picture = picture;
            article2.picture = picture;
            article3.picture = picture;
            article.number = Number.NaN;
            article2.number = Number.NEGATIVE_INFINITY;
            article3.number = Number.POSITIVE_INFINITY;
            
            eobjects.push(article);
            eobjects.push(article2);
            eobjects.push(article3);
            eobjects.push(picture);
            eobjects.push(person);
            let xmi35:string = saveToXMI(eobjects);
            console.log("Save35");
            console.log(xmi35);
            assert.notEqual(xmi35, "");
        });

        it('Can save special double values', function() {
            eobjects = [];
            let website:Website = factory.createWebsite();
            let website2:Website = factory.createWebsite();
            let website3:Website = factory.createWebsite();
            let picture:Picture = factory.createPicture();
            let picture2:Picture = factory.createPicture();
            let picture3:Picture = factory.createPicture();
            website.pictures.add(picture);
            website2.pictures.add(picture2);
            website3.pictures.add(picture3);
            website.number = Number.NaN;
            website2.number = Number.NEGATIVE_INFINITY;
            website3.number = Number.POSITIVE_INFINITY;
            
            eobjects.push(website);
            eobjects.push(website2);
            eobjects.push(website3);
            let xmi36:string = saveToXMI(eobjects);
            console.log("Save36");
            console.log(xmi36);
            assert.notEqual(xmi36, "");
        });

        /*
        it('', function() {
            eobjects = [];
            
        });
        */

    });







    describe('load', function() {
        it('Can load an EObject from XMI', function() {
            let t1:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<webpage:Person xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OV7VADWJEeu78Z-yboWG0Q\"/>";
            let result1 = loadFromXMI(t1);
            console.log("Load1");
            console.log(result1);
            assert.isNotNull(result1);
        });

        it('Can load an EObject with a single string attribute from XMI', function() {
            let t2:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<webpage:Person xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OVda8DWJEeu78Z-yboWG0Q\" surname=\"Surname\"/>";
            let result2 = loadFromXMI(t2);
            console.log("Load2");
            console.log(result2);
            assert.isNotNull(result2);
        });

        it('Can load an EObject with a list of string as an attribute from XMI', function() {
            let t3:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<webpage:Source xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OV-YUDWJEeu78Z-yboWG0Q\">\r\n" + 
            "  <authors>Author1</authors>\r\n" + 
            "  <authors>Author2</authors>\r\n" + 
            "</webpage:Source>";
            let result3 = loadFromXMI(t3);
            console.log("Load3");
            console.log(result3);
            assert.isNotNull(result3);
        });

        it('Can load an EObject with a single short attribute from XMI', function() {
            let t4:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<webpage:Person xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OVugsDWJEeu78Z-yboWG0Q\" age=\"27\"/>";
            let result4 = loadFromXMI(t4);
            console.log("Load4");
            console.log(result4);
            assert.isNotNull(result4);
        });

        it('Can load an EObject with a single long attribute from XMI', function() {
            let t5:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<webpage:Student xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OU1v4DWJEeu78Z-yboWG0Q\" matrikelnr=\"123\"/>";
            let result5 = loadFromXMI(t5);
            console.log("Load5");
            console.log(result5);
            assert.isNotNull(result5);
        });

        it('Can load an EObject with single int attribute from XMI', function() {
            let t6:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<webpage:Picture xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OVcM0DWJEeu78Z-yboWG0Q\" number=\"123\"/>";
            let result6 = loadFromXMI(t6);
            console.log("Load6");
            console.log(result6);
            assert.isNotNull(result6);
        });

        it('Can load an EObject with a list of int as an attribute from XMI', function() {
            let t7:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<webpage:Source xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OWTIcDWJEeu78Z-yboWG0Q\">\r\n" + 
            "  <page_no>-1</page_no>\r\n" + 
            "  <page_no>2</page_no>\r\n" + 
            "</webpage:Source>";
            let result7 = loadFromXMI(t7);
            console.log("Load7");
            console.log(result7);
            assert.isNotNull(result7);
        });

        it('Can load an EObject with a single float attribute from XMI', function() {
            let t8:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
            "  <webpage:Article xmi:id=\"_OV8jIDWJEeu78Z-yboWG0Q\" authors=\"_OV8jIjWJEeu78Z-yboWG0Q\" picture=\"_OV8jITWJEeu78Z-yboWG0Q\" number=\"1.2\"/>\r\n" + 
            "  <webpage:Picture xmi:id=\"_OV8jITWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Person xmi:id=\"_OV8jIjWJEeu78Z-yboWG0Q\" articles=\"_OV8jIDWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "</xmi:XMI>";
            let result8 = loadFromXMI(t8);
            console.log("Load8");
            console.log(result8);
            assert.isNotNull(result8);
        });

        it('Can load an EObject with a list of float as an attribute from XMI', function() {
            let t9:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<webpage:Student xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OVHcsDWJEeu78Z-yboWG0Q\">\r\n" + 
            "  <grades>-2.0</grades>\r\n" + 
            "  <grades>2.3</grades>\r\n" + 
            "</webpage:Student>";
            let result9 = loadFromXMI(t9);
            console.log("Load9");
            console.log(result9);
            assert.isNotNull(result9);
        });

        it('Can load an EObject with a single double attribute from XMI', function() {
            let t10:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<webpage:Website xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OWDQ0DWJEeu78Z-yboWG0Q\" number=\"1.0\">\r\n" + 
            "  <pictures xmi:id=\"_OWDQ0TWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "</webpage:Website>";
            let result10 = loadFromXMI(t10);
            console.log("Load10");
            console.log(result10);
            assert.isNotNull(result10);
        });

        it('Can load an EObject with a list of char as an attribute from XMI', function() {
            let t11:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<webpage:Person xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OVsrgDWJEeu78Z-yboWG0Q\">\r\n" + 
            "  <access_key>97</access_key>\r\n" + 
            "  <access_key>98</access_key>\r\n" + 
            "</webpage:Person>";
            let result11 = loadFromXMI(t11);
            console.log("Load11");
            console.log(result11);
            assert.isNotNull(result11);
        });

        it('Can load an EObject with a single boolean attribute from XMI', function() {
            let t12:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<webpage:Chapter xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OVJ48DWJEeu78Z-yboWG0Q\" subSection=\"true\"/>";
            let result12 = loadFromXMI(t12);
            console.log("Load12");
            console.log(result12);
            assert.isNotNull(result12);
        });

        it('Can load an EObject with a list of boolean as an attribute from XMI', function() {
            let t13:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<webpage:Picture xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OVepEDWJEeu78Z-yboWG0Q\">\r\n" + 
            "  <hash>true</hash>\r\n" + 
            "  <hash>false</hash>\r\n" + 
            "</webpage:Picture>";
            let result13 = loadFromXMI(t13);
            console.log("Load13");
            console.log(result13);
            assert.isNotNull(result13);
        });

        it('Can load an EObject with an enum attribute from XMI', function() {
            let t14:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
            "  <webpage:Article xmi:id=\"_OWQsMDWJEeu78Z-yboWG0Q\" authors=\"_OWQsMjWJEeu78Z-yboWG0Q\" picture=\"_OWQsMTWJEeu78Z-yboWG0Q\" articletype=\"STUDY\"/>\r\n" + 
            "  <webpage:Picture xmi:id=\"_OWQsMTWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Person xmi:id=\"_OWQsMjWJEeu78Z-yboWG0Q\" articles=\"_OWQsMDWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "</xmi:XMI>";
            let result14 = loadFromXMI(t14);
            console.log("Load14");
            console.log(result14);
            assert.isNotNull(result14);
        });

        it('Can load an EObject with a single containment from XMI', function() {
            let t15:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<webpage:Website xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OVq2UDWJEeu78Z-yboWG0Q\">\r\n" + 
            "  <pictures xmi:id=\"_OVq2UTWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "</webpage:Website>";
            let result15 = loadFromXMI(t15);
            console.log("Load15");
            console.log(result15);
            assert.isNotNull(result15);
        });

        it('Can load an EObject with multiple containments from XMI', function() {
            let t16:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<webpage:Website xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_OVw88DWJEeu78Z-yboWG0Q\">\r\n" + 
            "  <categories xmi:id=\"_OVw88TWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <categories xmi:id=\"_OVw88jWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <pictures xmi:id=\"_OVw88zWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "</webpage:Website>";
            let result16 = loadFromXMI(t16);
            console.log("Load16");
            console.log(result16);
            assert.isNotNull(result16);
        });

        it('Can load an EObject with a single reference from XMI', function() {
            let t17:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
            "  <webpage:Article xmi:id=\"_OVWtQDWJEeu78Z-yboWG0Q\" authors=\"_OVWtQjWJEeu78Z-yboWG0Q\" picture=\"_OVWtQTWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Picture xmi:id=\"_OVWtQTWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Person xmi:id=\"_OVWtQjWJEeu78Z-yboWG0Q\" articles=\"_OVWtQDWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "</xmi:XMI>";
            let result17 = loadFromXMI(t17);
            console.log("Load17");
            console.log(result17);
            assert.isNotNull(result17);
        });

        it('Can load an EObject with multiple references from XMI', function() {
            let t18:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
            "  <webpage:Article xmi:id=\"_OWIwYDWJEeu78Z-yboWG0Q\" authors=\"_OWIwYjWJEeu78Z-yboWG0Q\" picture=\"_OWIwYTWJEeu78Z-yboWG0Q\" sources=\"_OWIwYzWJEeu78Z-yboWG0Q _OWIwZDWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Picture xmi:id=\"_OWIwYTWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Person xmi:id=\"_OWIwYjWJEeu78Z-yboWG0Q\" articles=\"_OWIwYDWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Source xmi:id=\"_OWIwYzWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Source xmi:id=\"_OWIwZDWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "</xmi:XMI>";
            let result18 = loadFromXMI(t18);
            console.log("Load18");
            console.log(result18);
            assert.isNotNull(result18);
        });

        it('Can load an EObject with a single bidirectional reference from XMI', function() {
            let t19:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
            "  <webpage:Article xmi:id=\"_OWG7MDWJEeu78Z-yboWG0Q\" authors=\"_OWG7MjWJEeu78Z-yboWG0Q\" picture=\"_OWG7MTWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Picture xmi:id=\"_OWG7MTWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Student xmi:id=\"_OWG7MjWJEeu78Z-yboWG0Q\" articles=\"_OWG7MDWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "</xmi:XMI>";
            let result19 = loadFromXMI(t19);
            console.log("Load19");
            console.log(result19);
            assert.isNotNull(result19);
        });

        it('Can load an EObject with multiple bidirectional references from XMI', function() {
            let t20:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
            "  <webpage:Article xmi:id=\"_OWLMoDWJEeu78Z-yboWG0Q\" authors=\"_OWLMozWJEeu78Z-yboWG0Q _OWLMpDWJEeu78Z-yboWG0Q\" picture=\"_OWLMojWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Article xmi:id=\"_OWLMoTWJEeu78Z-yboWG0Q\" authors=\"_OWLMpDWJEeu78Z-yboWG0Q\" picture=\"_OWLMojWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Picture xmi:id=\"_OWLMojWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Person xmi:id=\"_OWLMozWJEeu78Z-yboWG0Q\" articles=\"_OWLMoDWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Student xmi:id=\"_OWLMpDWJEeu78Z-yboWG0Q\" articles=\"_OWLMoDWJEeu78Z-yboWG0Q _OWLMoTWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "</xmi:XMI>";
            let result20 = loadFromXMI(t20);
            console.log("Load20");
            console.log(result20);
            assert.isNotNull(result20);
        });

        it('Can load an EObject with several references to the same object type from XMI', function() {
            let t21:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
            "  <webpage:Article xmi:id=\"_OV5f0DWJEeu78Z-yboWG0Q\" authors=\"_OV5f1DWJEeu78Z-yboWG0Q\" picture=\"_OV5f0zWJEeu78Z-yboWG0Q\" related=\"_OV5f0TWJEeu78Z-yboWG0Q _OV5f0jWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Article xmi:id=\"_OV5f0TWJEeu78Z-yboWG0Q\" authors=\"_OV5f1DWJEeu78Z-yboWG0Q\" picture=\"_OV5f0zWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Article xmi:id=\"_OV5f0jWJEeu78Z-yboWG0Q\" authors=\"_OV5f1DWJEeu78Z-yboWG0Q\" picture=\"_OV5f0zWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Picture xmi:id=\"_OV5f0zWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Person xmi:id=\"_OV5f1DWJEeu78Z-yboWG0Q\" articles=\"_OV5f0DWJEeu78Z-yboWG0Q _OV5f0TWJEeu78Z-yboWG0Q _OV5f0jWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "</xmi:XMI>";
            let result21 = loadFromXMI(t21);
            console.log("Load21");
            console.log(result21);
            assert.isNotNull(result21);
        });

        it('Can load an EObject with a reference to iself from XMI', function() {
            let t22:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
            "  <webpage:Article xmi:id=\"_OV_mcDWJEeu78Z-yboWG0Q\" authors=\"_OV_mcjWJEeu78Z-yboWG0Q\" picture=\"_OV_mcTWJEeu78Z-yboWG0Q\" related=\"_OV_mcDWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Picture xmi:id=\"_OV_mcTWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Person xmi:id=\"_OV_mcjWJEeu78Z-yboWG0Q\" articles=\"_OV_mcDWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "</xmi:XMI>";
            let result22 = loadFromXMI(t22);
            console.log("Load22");
            console.log(result22);
            assert.isNotNull(result22);
        });

        it('Can detect an incorrect attribute multiplicity when loading from XMI', function() {
            let t23:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<webpage:Person xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_7pU58DTuEeuvNaUlYvhjsA\">\r\n" + 
            "<access_key>0</access_key><access_key>1</access_key><access_key>2</access_key><access_key>3</access_key><access_key>4</access_key><access_key>5</access_key><access_key>6</access_key><access_key>7</access_key><access_key>8</access_key><access_key>9</access_key><access_key>10</access_key><access_key>11</access_key><access_key>12</access_key><access_key>13</access_key><access_key>14</access_key><access_key>15</access_key><access_key>16</access_key><access_key>17</access_key><access_key>18</access_key><access_key>19</access_key><access_key>20</access_key><access_key>21</access_key><access_key>22</access_key><access_key>23</access_key><access_key>24</access_key><access_key>25</access_key><access_key>26</access_key><access_key>27</access_key><access_key>28</access_key><access_key>29</access_key><access_key>30</access_key><access_key>31</access_key><access_key>32</access_key><access_key>33</access_key><access_key>34</access_key><access_key>35</access_key><access_key>36</access_key><access_key>37</access_key><access_key>38</access_key><access_key>39</access_key><access_key>40</access_key><access_key>41</access_key><access_key>42</access_key><access_key>43</access_key><access_key>44</access_key><access_key>45</access_key><access_key>46</access_key><access_key>47</access_key><access_key>48</access_key><access_key>49</access_key><access_key>50</access_key><access_key>51</access_key><access_key>52</access_key><access_key>53</access_key><access_key>54</access_key><access_key>55</access_key><access_key>56</access_key><access_key>57</access_key><access_key>58</access_key><access_key>59</access_key><access_key>60</access_key><access_key>61</access_key><access_key>62</access_key><access_key>63</access_key><access_key>64</access_key><access_key>65</access_key><access_key>66</access_key><access_key>67</access_key><access_key>68</access_key><access_key>69</access_key><access_key>70</access_key><access_key>71</access_key><access_key>72</access_key><access_key>73</access_key><access_key>74</access_key><access_key>75</access_key><access_key>76</access_key><access_key>77</access_key><access_key>78</access_key><access_key>79</access_key><access_key>80</access_key><access_key>81</access_key><access_key>82</access_key><access_key>83</access_key><access_key>84</access_key><access_key>85</access_key><access_key>86</access_key><access_key>87</access_key><access_key>88</access_key><access_key>89</access_key><access_key>90</access_key><access_key>91</access_key><access_key>92</access_key><access_key>93</access_key><access_key>94</access_key><access_key>95</access_key><access_key>96</access_key><access_key>97</access_key><access_key>98</access_key><access_key>99</access_key><access_key>100</access_key><access_key>101</access_key><access_key>102</access_key><access_key>103</access_key><access_key>104</access_key><access_key>105</access_key><access_key>106</access_key><access_key>107</access_key><access_key>108</access_key><access_key>109</access_key><access_key>110</access_key><access_key>111</access_key><access_key>112</access_key><access_key>113</access_key><access_key>114</access_key><access_key>115</access_key><access_key>116</access_key><access_key>117</access_key><access_key>118</access_key><access_key>119</access_key><access_key>120</access_key><access_key>121</access_key><access_key>122</access_key><access_key>123</access_key><access_key>124</access_key><access_key>125</access_key><access_key>126</access_key><access_key>127</access_key><access_key>128</access_key><access_key>129</access_key><access_key>130</access_key><access_key>131</access_key><access_key>132</access_key><access_key>133</access_key><access_key>134</access_key><access_key>135</access_key><access_key>136</access_key><access_key>137</access_key><access_key>138</access_key><access_key>139</access_key><access_key>140</access_key><access_key>141</access_key><access_key>142</access_key><access_key>143</access_key><access_key>144</access_key><access_key>145</access_key><access_key>146</access_key><access_key>147</access_key><access_key>148</access_key><access_key>149</access_key><access_key>150</access_key><access_key>151</access_key><access_key>152</access_key><access_key>153</access_key><access_key>154</access_key><access_key>155</access_key><access_key>156</access_key><access_key>157</access_key><access_key>158</access_key><access_key>159</access_key><access_key>160</access_key><access_key>161</access_key><access_key>162</access_key><access_key>163</access_key><access_key>164</access_key><access_key>165</access_key><access_key>166</access_key><access_key>167</access_key><access_key>168</access_key><access_key>169</access_key><access_key>170</access_key><access_key>171</access_key><access_key>172</access_key><access_key>173</access_key><access_key>174</access_key><access_key>175</access_key><access_key>176</access_key><access_key>177</access_key><access_key>178</access_key><access_key>179</access_key><access_key>180</access_key><access_key>181</access_key><access_key>182</access_key><access_key>183</access_key><access_key>184</access_key><access_key>185</access_key><access_key>186</access_key><access_key>187</access_key><access_key>188</access_key><access_key>189</access_key><access_key>190</access_key><access_key>191</access_key><access_key>192</access_key><access_key>193</access_key><access_key>194</access_key><access_key>195</access_key><access_key>196</access_key><access_key>197</access_key><access_key>198</access_key><access_key>199</access_key><access_key>200</access_key><access_key>201</access_key><access_key>202</access_key><access_key>203</access_key><access_key>204</access_key><access_key>205</access_key><access_key>206</access_key><access_key>207</access_key><access_key>208</access_key><access_key>209</access_key><access_key>210</access_key><access_key>211</access_key><access_key>212</access_key><access_key>213</access_key><access_key>214</access_key><access_key>215</access_key><access_key>216</access_key><access_key>217</access_key><access_key>218</access_key><access_key>219</access_key><access_key>220</access_key><access_key>221</access_key><access_key>222</access_key><access_key>223</access_key><access_key>224</access_key><access_key>225</access_key><access_key>226</access_key><access_key>227</access_key><access_key>228</access_key><access_key>229</access_key><access_key>230</access_key><access_key>231</access_key><access_key>232</access_key><access_key>233</access_key><access_key>234</access_key><access_key>235</access_key><access_key>236</access_key><access_key>237</access_key><access_key>238</access_key><access_key>239</access_key><access_key>240</access_key><access_key>241</access_key><access_key>242</access_key><access_key>243</access_key><access_key>244</access_key><access_key>245</access_key><access_key>246</access_key><access_key>247</access_key><access_key>248</access_key><access_key>249</access_key><access_key>250</access_key><access_key>251</access_key><access_key>252</access_key><access_key>253</access_key><access_key>254</access_key><access_key>255</access_key><access_key>256</access_key>\r\n" + 
            "</webpage:Person>";
            let result23 = loadFromXMI(t23);
            console.log("Load23");
            console.log(result23);
            assert.isNull(result23);
        });

        it('Can detect an incorrect reference multiplicity when loading from XMI', function() {
            let t24:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<webpage:Article xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_r8XHQDTtEeuSVPhUdMjQ3Q\"/>";
            let result24 = loadFromXMI(t24);
            console.log("Load24");
            console.log(result24);
            assert.isNull(result24);
        });

        it('Can detect an incorrect containment multiplicity when loading from XMI', function() {
            let t25:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<webpage:Website xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_X4UNUDTxEeuFys6VEc4WOg\"/>";
            let result25 = loadFromXMI(t25);
            console.log("Load25");
            console.log(result25);
            assert.isNull(result25);
        });

        it('Can detect an incorrect bidirectional reference when loading from XMI', function() {
            let t26:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
            "  <webpage:Article xmi:id=\"_OVmk4DWJEeu78Z-yboWG0Q\" authors=\"_OVmk4zWJEeu78Z-yboWG0Q\" picture=\"_OVmk4jWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Article xmi:id=\"_OVmk4TWJEeu78Z-yboWG0Q\" picture=\"_OVmk4jWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Picture xmi:id=\"_OVmk4jWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Person xmi:id=\"_OVmk4zWJEeu78Z-yboWG0Q\" articles=\"_OVmk4TWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Person xmi:id=\"_OVmk5DWJEeu78Z-yboWG0Q\" articles=\"_OVmk4DWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "</xmi:XMI>";
            let result26 = loadFromXMI(t26);
            console.log("Load26");
            console.log(result26);
            assert.isNull(result26);
        });

        it('Can detect a missing reference when loading from XMI', function() {
            let t27:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
            "  <webpage:Person xmi:id=\"_CI7L4DT1EeuJqahhVh2ivw\" articles=\"_TEST4jT1EeuJqahhVh2ivw\"/>\r\n" + 
            "  <webpage:Picture xmi:id=\"_CI7L4TT1EeuJqahhVh2ivw\"/>\r\n" + 
            "</xmi:XMI>";
            let result27 = loadFromXMI(t27);
            console.log("Load27");
            console.log(result27);
            assert.isNull(result27);
        });

        it('Can detect the same EObject being contained in several other EObjects when loading from XMI', function() {
            let t28:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
            "  <webpage:Website xmi:id=\"_Ea1OADT-Eeuy-6z-kXSK-w\">\r\n" + 
            "    <pictures xmi:id=\"_Ea1OATT-Eeuy-6z-kXSK-w\"/>\r\n" + 
            "  </webpage:Website>\r\n" + 
            "  <webpage:Website xmi:id=\"_Ea1OAjT-Eeuy-6z-kXSK-w\">\r\n" + 
            "    <pictures xmi:id=\"_Ea1OATT-Eeuy-6z-kXSK-w\"/>\r\n" + 
            "  </webpage:Website>\r\n" + 
            "</xmi:XMI>";
            let result28 = loadFromXMI(t28);
            console.log("Load28");
            console.log(result28);
            assert.isNotNull(result28);
        });

        it('Can detect an EObject being both contained and separate when loading from XMI', function() {
            let t29:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
            "  <webpage:Website xmi:id=\"_YEcKQDWgEeuiRLkt8tJQnA\">\r\n" + 
            "      <pictures xmi:id=\"_YEcKQTWgEeuiRLkt8tJQnA\"/>\r\n" + 
            "  </webpage:Website>\r\n" + 
            "  <webpage:Picture xmi:id=\"_YEcKQTWgEeuiRLkt8tJQnA\"/>\r\n" + 
            "</xmi:XMI>";
            let result29 = loadFromXMI(t29);
            console.log("Load29");
            console.log(result29);
            assert.isNotNull(result29);
        });

        it('Can detect an EObject being loaded multiple times when loading from XMI', function() {
            let t30:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
            "  <webpage:Student xmi:id=\"_tPFc8DT5EeuAP8PgtQG7XA\"/>\r\n" + 
            "  <webpage:Student xmi:id=\"_tPFc8DT5EeuAP8PgtQG7XA\"/>\r\n" + 
            "</xmi:XMI>";
            let result30 = loadFromXMI(t30);
            console.log("Load30");
            console.log(result30);
            assert.isNotNull(result30);
        });

        it('Can detect the same EObject being contained multiple times when loading from XMI', function() {
            let t31:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<webpage:Website xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_BumjMDT8EeuC0ILVHZfbng\">\r\n" + 
            "  <pictures xmi:id=\"_BunKQDT8EeuC0ILVHZfbng\"/>\r\n" + 
            "  <pictures xmi:id=\"_BunKQDT8EeuC0ILVHZfbng\"/>\r\n" + 
            "</webpage:Website>";
            let result31 = loadFromXMI(t31);
            console.log("Load31");
            console.log(result31);
            assert.isNotNull(result31);
        });

        it('Can detect the same EObject being referenced multiple times when loading from XMI', function() {
            let t32:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
            "  <webpage:Article xmi:id=\"_2Yq9kDV7EeulSerH-1v9sA\" authors=\"_2Yq9kzV7EeulSerH-1v9sA\" picture=\"_2Yq9kTV7EeulSerH-1v9sA _2Yq9kTV7EeulSerH-1v9sA _2Yq9kTV7EeulSerH-1v9sA\" sources=\"_2Yq9kjV7EeulSerH-1v9sA _2Yq9kjV7EeulSerH-1v9sA\"/>\r\n" + 
            "  <webpage:Picture xmi:id=\"_2Yq9kTV7EeulSerH-1v9sA\"/>\r\n" + 
            "  <webpage:Source xmi:id=\"_2Yq9kjV7EeulSerH-1v9sA\"/>\r\n" + 
            "  <webpage:Person xmi:id=\"_2Yq9kzV7EeulSerH-1v9sA\" articles=\"_2Yq9kDV7EeulSerH-1v9sA\"/>\r\n" + 
            "</xmi:XMI>";
            let result32 = loadFromXMI(t32);
            console.log("Load32");
            console.log(result32);
            assert.isNotNull(result32);
        });

        it('Can load an inherited EObject from XMI', function() {
            let t33:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<webpage:Student xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_NnTn0DUCEeur7KrFr2pF2A\" age=\"29\" matrikelnr=\"123\"/>";
            let result33 = loadFromXMI(t33);
            console.log("Load33");
            console.log(result33);
            assert.isNotNull(result33);
        });

        it('Can detect non existent attributes being loaded from XMI', function() {
            let t34:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<webpage:Person xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_NnTn0DUCEeur7KrFr2pF2A\" age=\"29\" memes=\"1\" matrikelnr=\"123\"/>";
            let result34 = loadFromXMI(t34);
            console.log("Load34");
            console.log(result34);
            // nicht-existierende Attribute werden einfach ignoriert, ist okay
            assert.isNull(result34);
        });

        it('Can load special float values from XMI', function() {
            let t35:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
            "  <webpage:Article xmi:id=\"_OWfVsDWJEeu78Z-yboWG0Q\" authors=\"_OWfVtDWJEeu78Z-yboWG0Q\" picture=\"_OWfVszWJEeu78Z-yboWG0Q\" number=\"NaN\"/>\r\n" + 
            "  <webpage:Article xmi:id=\"_OWfVsTWJEeu78Z-yboWG0Q\" authors=\"_OWfVtDWJEeu78Z-yboWG0Q\" picture=\"_OWfVszWJEeu78Z-yboWG0Q\" number=\"-Infinity\"/>\r\n" + 
            "  <webpage:Article xmi:id=\"_OWfVsjWJEeu78Z-yboWG0Q\" authors=\"_OWfVtDWJEeu78Z-yboWG0Q\" picture=\"_OWfVszWJEeu78Z-yboWG0Q\" number=\"Infinity\"/>\r\n" + 
            "  <webpage:Picture xmi:id=\"_OWfVszWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Person xmi:id=\"_OWfVtDWJEeu78Z-yboWG0Q\" articles=\"_OWfVsDWJEeu78Z-yboWG0Q _OWfVsTWJEeu78Z-yboWG0Q _OWfVsjWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "</xmi:XMI>";
            let result35 = loadFromXMI(t35);
            console.log("Load35");
            console.log(result35);
            assert.isNotNull(result35);
        });
 
        it('Can load special double values from XMI', function() {
            let t36:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
            "  <webpage:Website xmi:id=\"_OWEe8DWJEeu78Z-yboWG0Q\" number=\"NaN\">\r\n" + 
            "    <pictures xmi:id=\"_OWEe8TWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  </webpage:Website>\r\n" + 
            "  <webpage:Website xmi:id=\"_OWEe8jWJEeu78Z-yboWG0Q\" number=\"-Infinity\">\r\n" + 
            "    <pictures xmi:id=\"_OWEe8zWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  </webpage:Website>\r\n" + 
            "  <webpage:Website xmi:id=\"_OWEe9DWJEeu78Z-yboWG0Q\" number=\"Infinity\">\r\n" + 
            "    <pictures xmi:id=\"_OWEe9TWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  </webpage:Website>\r\n" + 
            "</xmi:XMI>";
            let result36 = loadFromXMI(t36);
            console.log("Load36");
            console.log(result36);
            assert.isNotNull(result36);
        });

        it('Can detect the wrong EObject reference type when loading from XMI', function() {
            let t37:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
            "  <webpage:Article xmi:id=\"_OVWtQDWJEeu78Z-yboWG0Q\" authors=\"_OVWtQjWJEeu78Z-yboWG0Q _OVWtQTWJEeu78Z-yboWG0Q\" picture=\"_OVWtQTWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Picture xmi:id=\"_OVWtQTWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "  <webpage:Person xmi:id=\"_OVWtQjWJEeu78Z-yboWG0Q\" articles=\"_OVWtQDWJEeu78Z-yboWG0Q\"/>\r\n" + 
            "</xmi:XMI>";
            let result37 = loadFromXMI(t37);
            console.log("Load37");
            console.log(result37);
            assert.isNull(result37);
        });

        it('Can detect the wrong EObject containment type when loading from XMI', function() {
            let t38:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<webpage:Website xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_tPRqMDT5EeuAP8PgtQG7XA\">\r\n" + 
            "  <pictures xmi:id=\"_tPRqMTT5EeuAP8PgtQG7XA\"/>\r\n" +
            "  <memes xmi:id=\"_memeMTT5EeuAP8PgtQG7XA\"/>\r\n" +
            "</webpage:Website>";
            let result38 = loadFromXMI(t38);
            console.log("Load38");
            console.log(result38);
            // ist okay, da Attribut memes nicht beachtet wird
            assert.isNull(result38);
        });

        it('Can detect the wrong attribute type when loading from XMI', function() {
            let t39:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<webpage:Chapter xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_tPBykDT5EeuAP8PgtQG7XA\" subSection=\"yes\"/>";
            let result39 = loadFromXMI(t39);
            console.log("Load39");
            console.log(result39);
            assert.isNull(result39);
        });

        it('Can detect the wrong containment inheritance type when loading from XMI', function() {
            let t42:string = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<webpage:Website xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_BumjMDT8EeuC0ILVHZfbng\">\r\n" + 
            "  <pictures xmi:type=\"webpage:Picture\" xmi:id=\"_BunKQDT8EeuC0ILVHZfbng\" repeat=\"true\"/>\r\n" + 
            "  <pictures xmi:type=\"webpage:AnimatedPicture\" xmi:id=\"_CunDQDT8EeuC0ILVHZfbng\" repeat=\"true\"/>\r\n" + 
            "</webpage:Website>";
            let result42 = loadFromXMI(t42);
            assert.isNull(result42);
        });

    });







    describe('save/load and compare', function() {
        it('Can save/load and compare an EObject to XMI', function() {
            eobjects = [];
            let person:Person = factory.createPerson();

            eobjects.push(person);
            let xmi1:string = saveToXMI(eobjects);
            let instance1 = loadFromXMI(xmi1);
            let test:boolean = instance1[0] instanceof PersonImpl;
            assert.isTrue(test);
        });

        it('Can save/load and compare an EObject with a single string attribute to XMI', function() {
            eobjects = [];
            let person:Person = factory.createPerson();
            person.surname = "Surname";

            eobjects.push(person);
            let xmi2:string = saveToXMI(eobjects);
            let instance2 = loadFromXMI(xmi2);
            let test:boolean = instance2[0] instanceof PersonImpl 
                && (instance2[0] as PersonImpl).surname === "Surname"; 
            assert.isTrue(test);
        });

        it('Can save/load and compare an EOBject with a list of strings as an attribute to XMI', function() {
            eobjects = [];
            let source:Source = factory.createSource();
            source.authors.add("Author1");
            source.authors.add("Author2");

            eobjects.push(source);
            let xmi3:string = saveToXMI(eobjects);
            let instance3 = loadFromXMI(xmi3);
            let test:boolean = instance3[0] instanceof SourceImpl
				&& (instance3[0] as SourceImpl).authors.containsX("Author1") 
				&& (instance3[0] as SourceImpl).authors.containsX("Author2");
		    assert.isTrue(test);
        });

        it('Can save/load and compare an EOBject with a short attribute to XMI', function() {
            eobjects = [];
            let person:Person = factory.createPerson();
            person.age = 27;

            eobjects.push(person);
            let xmi4:string = saveToXMI(eobjects);
            let instance4 = loadFromXMI(xmi4);
            let test:boolean = instance4[0] instanceof PersonImpl 
                && (instance4[0] as PersonImpl).age === 27;
            assert.isTrue(test);
        });

        it('Can save/load and compare an EObject with a long attribute to XMI', function() {
            eobjects = [];
            let student:Student = factory.createStudent();
            student.matrikelnr = 123;

            eobjects.push(student);
            let xmi5:string = saveToXMI(eobjects);
            let instance5 = loadFromXMI(xmi5);
            let test:boolean = instance5[0] instanceof StudentImpl
                && (instance5[0] as StudentImpl).matrikelnr === 123;
            assert.isTrue(test);
        });

        it('Can save/load and compare an EObject with an int attribute to XMI', function() {
            eobjects = [];
            let picture:Picture = factory.createPicture();
            picture.number = 123;

            eobjects.push(picture);
            let xmi6:string = saveToXMI(eobjects);
            let instance6 = loadFromXMI(xmi6);
            let test:boolean = instance6[0] instanceof PictureImpl
                && (instance6[0] as PictureImpl).number === 123;
            assert.isTrue(test);
        });

        it('Can save/load and compare an EObject with a list of int as an attribute to XMI', function() {
            eobjects = [];
            let source:Source = factory.createSource();
            source.page_no.add(-1);
            source.page_no.add(2);

            eobjects.push(source);
            let xmi7:string = saveToXMI(eobjects);
            let instance7 = loadFromXMI(xmi7);
            let test:boolean = instance7[0] instanceof SourceImpl
                && (instance7[0] as SourceImpl).page_no.containsX(-1)
                && (instance7[0] as SourceImpl).page_no.containsX(2);
            assert.isTrue(test);
        });

        it('Can save/load and compare an EObject with a float attribute to XMI', function() {
            eobjects = [];
            let article:Article = factory.createArticle();
            article.number = 1.2;
            let picture:Picture = factory.createPicture();
            article.picture = picture;
            let person:Person = factory.createPerson();
            article.authors.add(person);

            eobjects.push(article);
            eobjects.push(picture);
            eobjects.push(person);
            let xmi8:string = saveToXMI(eobjects);
            let instance8 = loadFromXMI(xmi8);
            let test:boolean = instance8[0] instanceof ArticleImpl
				&& (instance8[0] as ArticleImpl).number === 1.2;
		    assert.isTrue(test);
        });

        it('Can save/load and compare an EObject with a list of float as an attribute to XMI', function() {
            eobjects = [];
            let student:Student = factory.createStudent();
            student.grades.add(-2.0);
            student.grades.add(2.3);

            eobjects.push(student);
            let xmi9:string = saveToXMI(eobjects);
            let instance9 = loadFromXMI(xmi9);
            let test:boolean = instance9[0] instanceof StudentImpl
                && (instance9[0] as StudentImpl).grades.containsX(-2.0)
                && (instance9[0] as StudentImpl).grades.containsX(2.3);
            assert.isTrue(test);
        });

        it('Can save/load and compare an EObject with a double attribute to XMI', function() {
            eobjects = [];
            let website:Website = factory.createWebsite();
            website.number = 1.0;
            let picture:Picture = factory.createPicture();
            website.pictures.add(picture);

            eobjects.push(website);
            let xmi10:string = saveToXMI(eobjects);
            let instance10 = loadFromXMI(xmi10);
            let test:boolean = instance10[0] instanceof WebsiteImpl
                && (instance10[0] as WebsiteImpl).number === 1.0;
            assert.isTrue(test);
        });

        it('Can save/load and compare an EObject with a list of char as an attribute to XMI', function() {
            eobjects = [];
            let person:Person = factory.createPerson();
            person.access_key.add('a');
            person.access_key.add('b');

            eobjects.push(person);
            let xmi11:string = saveToXMI(eobjects);
            let instance11 = loadFromXMI(xmi11);
            let test:boolean = instance11[0] instanceof PersonImpl
                && (instance11[0] as PersonImpl).access_key.containsX('a')
                && (instance11[0] as PersonImpl).access_key.containsX('b');
            assert.isTrue(test);
        });

        it('Can save/load and compare an EObject with a boolean attribute to XMI', function() {
            eobjects = [];
            let chapter:Chapter = factory.createChapter();
            chapter.subSection = true;

            eobjects.push(chapter);
            let xmi12:string = saveToXMI(eobjects);
            let instance12 = loadFromXMI(xmi12);
            let test:boolean = instance12[0] instanceof ChapterImpl 
            && (instance12[0] as ChapterImpl).subSection === true;
            assert.isTrue(test);
        });

        it('Can save/load and compare an EObject with a list of boolean as an attribute to XMI', function() {
            eobjects = [];
            let picture:Picture = factory.createPicture();
            picture.hash.add(true);
            picture.hash.add(false);

            eobjects.push(picture);
            let xmi13:string = saveToXMI(eobjects);
            let instance13 = loadFromXMI(xmi13);
            let test:boolean = instance13[0] instanceof PictureImpl
                && (instance13[0] as PictureImpl).hash.containsX(true)
                && (instance13[0] as PictureImpl).hash.containsX(false);
            assert.isTrue(test);
        });

        it('Can save/load and compare an EObject with an enum attribute to XMI', function() {
            eobjects = [];
            let article:Article = factory.createArticle();
            let picture:Picture = factory.createPicture();
            let person:Person = factory.createPerson();
            article.picture = picture;
            article.articletype = ArticleType.STUDY;
            article.authors.add(person);

            eobjects.push(article);
            eobjects.push(picture);
            eobjects.push(person);
            let xmi14:string = saveToXMI(eobjects);
            let instance14 = loadFromXMI(xmi14);
            let test:boolean = instance14[0] instanceof ArticleImpl
                && (instance14[0] as ArticleImpl).articletype === ArticleType.STUDY;
            assert.isTrue(test);
        });

        it('Can save/load and compare an EObject with a single containment relationship to XMI', function() {
            eobjects = [];
            let website:Website = factory.createWebsite();
            let picture:Picture = factory.createPicture();
            website.pictures.add(picture);

            eobjects.push(website);
            let xmi15:string = saveToXMI(eobjects);
            let instance15 = loadFromXMI(xmi15);
            let test:boolean = instance15[0] instanceof WebsiteImpl
                && (instance15[0] as WebsiteImpl).pictures.size() == 1;
            assert.isTrue(test);
        });

        it('Can save/load and compare an EObject with multiple containment relationships to XMI', function() {
            eobjects = [];
            let website:Website = factory.createWebsite();
            let picture:Picture = factory.createPicture();
            let category:Category = factory.createCategory();
            let category2:Category = factory.createCategory();
            website.pictures.add(picture);
		    website.categories.add(category);
            website.categories.add(category2);
            
            eobjects.push(website);
            let xmi16:string = saveToXMI(eobjects);
            let instance16 = loadFromXMI(xmi16);
            let test:boolean = instance16[0] instanceof WebsiteImpl
                && (instance16[0] as WebsiteImpl).categories.size() == 2;
            assert.isTrue(test);
        });

        it('Can save/load and compare an EObject with a single reference to XMI', function() {
            eobjects = [];
            let article:Article = factory.createArticle();
            let picture:Picture = factory.createPicture();
            let person:Person = factory.createPerson();
            article.picture = picture;
            article.authors.add(person);

            eobjects.push(article);
            eobjects.push(picture);
            eobjects.push(person);
            let xmi17:string = saveToXMI(eobjects);
            let instance17 = loadFromXMI(xmi17);
            let test:boolean = instance17[0] instanceof ArticleImpl
                && (instance17[0] as ArticleImpl).authors.size() == 1;
            assert.isTrue(test);
        });

        it('Can save/load and compare an EObject with multiple references to XMI', function() {
            eobjects = [];
            let article:Article = factory.createArticle();
            let picture:Picture = factory.createPicture();
            let person:Person = factory.createPerson();
            let source:Source = factory.createSource();
            let source2:Source = factory.createSource();
            article.picture = picture;
            article.authors.add(person);
            article.sources.add(source);
            article.sources.add(source2);

            eobjects.push(article);
            eobjects.push(picture);
            eobjects.push(person);
            eobjects.push(source);
            eobjects.push(source2);
            let xmi18:string = saveToXMI(eobjects);
            let instance18 = loadFromXMI(xmi18);
            let test:boolean = instance18[0] instanceof ArticleImpl
                && (instance18[0] as ArticleImpl).sources.size() == 2 ;
            assert.isTrue(test);
        });

        it('Can save/load and compare an EObject with a single bidirectional reference to XMI', function() {
            eobjects = [];
            let article:Article = factory.createArticle();
            let picture:Picture = factory.createPicture();
            let student:Student = factory.createStudent();
            article.picture = picture;
            article.authors.add(student);
            student.articles.add(article);
            
            eobjects.push(article);
            eobjects.push(picture);
            eobjects.push(student);
            let xmi19:string = saveToXMI(eobjects);
            let instance19 = loadFromXMI(xmi19);
            let test:boolean = instance19[0] instanceof ArticleImpl
                && (instance19[0] as ArticleImpl).authors.size() == 1 
                && instance19[2] instanceof StudentImpl 
                && (instance19[2] as StudentImpl).articles.size() == 1;
            assert.isTrue(test);
        });

        it('Can save/load and compare an EObject with multiple bidirectional references to XMI', function() {
            eobjects = [];
            let article:Article = factory.createArticle();
            let article2:Article = factory.createArticle();
            let picture:Picture = factory.createPicture();
            article.picture = picture;
            article2.picture = picture;
            let person:Person = factory.createPerson();
            let student:Student = factory.createStudent();
            article.authors.add(person);
            article.authors.add(student);
            article2.authors.add(student);
            person.articles.add(article);
            student.articles.add(article);
            student.articles.add(article2);
            
            eobjects.push(article);
            eobjects.push(article2);
            eobjects.push(picture);
            eobjects.push(person);
            eobjects.push(student);
            let xmi20:string = saveToXMI(eobjects);
            let instance20 = loadFromXMI(xmi20);
            let test:boolean = instance20[0] instanceof ArticleImpl
                && (instance20[0] as ArticleImpl).authors.size() == 2
                && instance20[4] instanceof StudentImpl
                && (instance20[4] as StudentImpl).articles.size() == 2;
            assert.isTrue(test);
        });

        it('Can save/load and compare an EObject with multiple references to objects of same class to XMI', function() {
            eobjects = [];
            let article:Article = factory.createArticle();
            let article2:Article = factory.createArticle();
            let article3:Article = factory.createArticle();
            let person:Person = factory.createPerson();
            let picture:Picture = factory.createPicture();
            article.picture = picture;
            article2.picture = picture;
            article3.picture = picture;
            article.authors.add(person);
            article2.authors.add(person);
            article3.authors.add(person);
            article.related.add(article2);
            article.related.add(article3);
            
            eobjects.push(article);
            eobjects.push(article2);
            eobjects.push(article3);
            eobjects.push(person);
            eobjects.push(picture);
            let xmi21:string = saveToXMI(eobjects);
            let instance21 = loadFromXMI(xmi21);
            let test:boolean = instance21[0] instanceof ArticleImpl
                && (instance21[0] as ArticleImpl).related.size() == 2
                && (instance21[0] as ArticleImpl).related[0] instanceof ArticleImpl
                && (instance21[0] as ArticleImpl).related[1] instanceof ArticleImpl;
            assert.isTrue(test);
        });

        it('Can save/load and compare an EObject with a reference to itself to XMI', function() {
            eobjects = [];
            let article:Article = factory.createArticle();
            let picture:Picture = factory.createPicture();
            let person:Person = factory.createPerson();
            article.name = "test";
            article.picture = picture;
            article.related.add(article);
            article.authors.add(person);
            
            eobjects.push(article);
            eobjects.push(picture);
            eobjects.push(person);
            let xmi22:string = saveToXMI(eobjects);
            let instance22 = loadFromXMI(xmi22);
            let test:boolean = instance22[0] instanceof ArticleImpl
                && (instance22[0] as ArticleImpl).related.size() == 1
                && (instance22[0] as ArticleImpl).related[0] instanceof ArticleImpl
                && (instance22[0] as ArticleImpl).related[0].name === "test";
            assert.isTrue(test);
        });

        it('Can detect and correct an incorrect bidirectional reference when saving/loading and comparing', function() {
            eobjects = [];
            let article:Article = factory.createArticle();
            let article2:Article = factory.createArticle();
            let person:Person = factory.createPerson();
            let person2:Person = factory.createPerson();
            let picture:Picture = factory.createPicture();
            article.picture = picture;
            article2.picture = picture;
            article.authors.add(person);
            article2.authors.add(person2);
            person.articles.add(article2);
            person2.articles.add(article);
            
            eobjects.push(article);
            eobjects.push(article2);
            eobjects.push(picture);
            eobjects.push(person);
            eobjects.push(person2);
            let xmi26:string = saveToXMI(eobjects);
            let instance26 = loadFromXMI(xmi26);
            let test:boolean = instance26[0] instanceof ArticleImpl
                && (instance26[0] as ArticleImpl).authors.size() == 2
                && instance26[1] instanceof ArticleImpl
                && (instance26[1] as ArticleImpl).authors.size() == 2
                && instance26[3] instanceof PersonImpl
                && (instance26[3] as PersonImpl).articles.size() == 2
                && instance26[4] instanceof PersonImpl
                && (instance26[4] as PersonImpl).articles.size() == 2;
            assert.isTrue(test);
        });

        it('Can detect the same EObject being serialized multiple times when saving/loading and comparing', function() {
            eobjects = [];
            let student:Student = factory.createStudent();
		
            eobjects.push(student);
            eobjects.push(student);
            let xmi30:string = saveToXMI(eobjects);
            let instance30 = loadFromXMI(xmi30);
            let test:boolean = instance30.length == 1;
            assert.isTrue(test);
        });

        it('Can detect the same EObject being contained multiple times when saving/loading', function() {
            eobjects = [];
            let website:Website = factory.createWebsite();
            let picture:Picture = factory.createPicture();
            website.pictures.add(picture);
            website.pictures.add(picture);
            
            eobjects.push(website);
            let xmi31:string = saveToXMI(eobjects);
            let instance31 = loadFromXMI(xmi31);
            let test:boolean = instance31[0] instanceof WebsiteImpl
                && (instance31[0] as WebsiteImpl).pictures.size() == 1;
            assert.isTrue(test);
        });

        it('Can detect the same EObject being referenced multiple times when saving/loading', function() {
            eobjects = [];
            let article:Article = factory.createArticle();
            let picture:Picture = factory.createPicture();
            let person:Person = factory.createPerson();
            article.picture = picture;
            article.authors.add(person);
            let source:Source = factory.createSource();
            article.sources.add(source);
            article.sources.add(source);
            
            eobjects.push(article);
            eobjects.push(picture);
            eobjects.push(source);
            eobjects.push(person);
            let xmi32:string = saveToXMI(eobjects);
            let instance32 = loadFromXMI(xmi32);
            let test:boolean = instance32[0] instanceof ArticleImpl
                && (instance32[0] as ArticleImpl).sources.size() == 1;
            assert.isTrue(test);
        });

        it('Can save/load and compare an inherited class', function() {
            eobjects = [];
            let student:Person = factory.createStudent();
            student.age = 29;
            
            eobjects.push(student);
            let xmi33:string = saveToXMI(eobjects);
            let instance33 = loadFromXMI(xmi33);
            let test:boolean = instance33[0] instanceof StudentImpl
                && (instance33[0] as StudentImpl).age === 29;
            assert.isTrue(test);
        });

        it('Can save/load and compare special float values', function() {
            eobjects = [];
            let article:Article = factory.createArticle();
            let article2:Article = factory.createArticle();
            let article3:Article = factory.createArticle();
            let picture:Picture = factory.createPicture();
            let person:Person = factory.createPerson();
            article.authors.add(person);
            article2.authors.add(person);
            article3.authors.add(person);
            article.picture = picture;
            article2.picture = picture;
            article3.picture = picture;
            article.number = Number.NaN;
            article2.number = Number.NEGATIVE_INFINITY;
            article3.number = Number.POSITIVE_INFINITY;
            
            eobjects.push(article);
            eobjects.push(article2);
            eobjects.push(article3);
            eobjects.push(picture);
            eobjects.push(person);
            let xmi35:string = saveToXMI(eobjects);
            let instance35 = loadFromXMI(xmi35);
            let test:boolean = instance35[0] instanceof ArticleImpl 
                && Number.isNaN((instance35[0] as ArticleImpl).number)
                && instance35[1] instanceof ArticleImpl 
                && !Number.isFinite((instance35[1] as ArticleImpl).number)
                && instance35[2] instanceof ArticleImpl 
                && !Number.isFinite((instance35[2] as ArticleImpl).number);
            assert.isTrue(test);
        });

        it('Can save/load and compare special double values', function() {
            eobjects = [];
            let website:Website = factory.createWebsite();
            let website2:Website = factory.createWebsite();
            let website3:Website = factory.createWebsite();
            let picture:Picture = factory.createPicture();
            let picture2:Picture = factory.createPicture();
            let picture3:Picture = factory.createPicture();
            website.pictures.add(picture);
            website2.pictures.add(picture2);
            website3.pictures.add(picture3);
            website.number = Number.NaN;
            website2.number = Number.NEGATIVE_INFINITY;
            website3.number = Number.POSITIVE_INFINITY;
            
            eobjects.push(website);
            eobjects.push(website2);
            eobjects.push(website3);
            let xmi36:string = saveToXMI(eobjects);
            let instance36 = loadFromXMI(xmi36);
            let test:boolean = instance36[0] instanceof WebsiteImpl
                && Number.isNaN((instance36[0] as WebsiteImpl).number)
                && instance36[1] instanceof WebsiteImpl
                && !Number.isFinite((instance36[1] as WebsiteImpl).number)
                && instance36[2] instanceof WebsiteImpl
                && !Number.isFinite((instance36[2] as WebsiteImpl).number);
            assert.isTrue(test);
        });

        it('Can save/load and compare the ordering of a list as an attribute', function() {
            eobjects = [];
            let article:Article = factory.createArticle();
            let article2:Article = factory.createArticle();
            let article3:Article = factory.createArticle();
            let article4:Article = factory.createArticle();
            let person:Person = factory.createPerson();
            let picture:Picture = factory.createPicture();
            article.authors.add(person);
            article2.authors.add(person);
            article3.authors.add(person);
            article4.authors.add(person);
            article.picture = picture;
            article2.picture = picture;
            article3.picture = picture;
            article4.picture = picture;
            article.name = "a1";
            article2.name = "a2";
            article3.name = "a3";
            article4.name = "a4";
            article.related.add(article2);
            article.related.add(article3);
            article.related.add(article4);
            
            eobjects.push(article);
            eobjects.push(article2);
            eobjects.push(article3);
            eobjects.push(article4);
            eobjects.push(person);
            eobjects.push(picture);
            let xmi40:string = saveToXMI(eobjects);
            let instance = loadFromXMI(xmi40);
            
            let test:boolean = instance[0] instanceof ArticleImpl
                    && (instance[0] as ArticleImpl).related.at(0).name === "a2"
                    && (instance[0] as ArticleImpl).related.at(1).name === "a3"
                    && (instance[0] as ArticleImpl).related.at(2).name === "a4";
            assert.isTrue(test);
        });

        it('Can save/load and compare a large long number', function() {
            eobjects = [];
            let student:Student = factory.createStudent();
            student.matrikelnr = 435510489098620210;
            
            eobjects.push(student);
            let xmi41:string = saveToXMI(eobjects);
            let instance:EObject[] = loadFromXMI(xmi41);
            
            let test:boolean = instance[0] instanceof StudentImpl
                    && (instance[0] as StudentImpl).matrikelnr === 435510489098620210;
            assert.isTrue(test);
        });

        it('Can save/load and compare the ordering of a list of references', function() {
            eobjects = [];
            let article:Article = factory.createArticle();
            let picture:Picture = factory.createPicture();
            article.picture = picture;
            article.name = "x";
            let person:Person = factory.createPerson();
            let person2:Person = factory.createPerson();
            let person3:Person = factory.createPerson();
            person.surname = "a";
            person2.surname = "b";
            person3.surname = "c";
            article.authors.add(person);
            article.authors.add(person2);
            article.authors.add(person3);
            person.articles.add(article);
            person2.articles.add(article);
            person3.articles.add(article);
            
            eobjects.push(article);
            eobjects.push(picture);
            eobjects.push(person3);
            eobjects.push(person);
            eobjects.push(person2);
            let xmi43:string = saveToXMI(eobjects);
            let instance = loadFromXMI(xmi43);
            
            let test:boolean = instance[0] instanceof ArticleImpl
                    && instance[1] instanceof PictureImpl
                    && instance[2] instanceof PersonImpl
                    && instance[3] instanceof PersonImpl
                    && instance[4] instanceof PersonImpl
                    && (instance[0] as ArticleImpl).authors[0].surname === "a"
                    && (instance[0] as ArticleImpl).authors[1].surname === "b"
                    && (instance[0] as ArticleImpl).authors[2].surname === "c"
                    && (instance[2] as PersonImpl).articles[0].name === "x"
                    && (instance[3] as PersonImpl).articles[0].name === "x"
                    && (instance[4] as PersonImpl).articles[0].name === "x";
            assert.isTrue(test);
        });

        it('Can save/load and compare the ordering of containments', function() {
            eobjects = [];
            let website = factory.createWebsite();
            let picture = factory.createPicture();
            let picture2 = factory.createPicture();
            let picture3 = factory.createPicture();
            picture.name = "a";
            picture2.name = "b";
            picture3.name = "c";
            website.pictures.add(picture);
            website.pictures.add(picture2);
            website.pictures.add(picture3);
            
            eobjects.push(website);
            let xmi44 = saveToXMI(eobjects);
            let instance = loadFromXMI(xmi44);
            
            let test = instance[0] instanceof WebsiteImpl
                    && (instance[0] as WebsiteImpl).pictures[0].name === "a"
                    && (instance[0] as WebsiteImpl).pictures[1].name === "b"
                    && (instance[0] as WebsiteImpl).pictures[2].name === "c";
            assert.isTrue(test);
        });

    });






    describe('load/save and compare', function() {

        it('test load/save and compare single EObject', function() {
            let t1 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Person xmi:id=\"1cf6b631-cac9-4d39-a08f-300ecf2f361d\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\"/>";
            let instance = loadFromXMI(t1);
            let xmi = saveToXMI(instance);
            let instance1 = loadFromXMI(xmi);
            let test:boolean = instance1[0] instanceof PersonImpl;
            assert.isTrue(test);
        });

        it('test load/save and compare single string attribute', function() {
            let t2 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Person xmi:id=\"09664bdb-d6e0-494e-b2ab-044797b61604\" surname=\"Surname\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\"/>";
                let instance = loadFromXMI(t2);
                let xmi = saveToXMI(instance);
                let instance2 = loadFromXMI(xmi);
                let test:boolean = instance2[0] instanceof PersonImpl 
                    && (instance2[0] as PersonImpl).surname === "Surname"; 
                assert.isTrue(test);
        });

        it('test load/save and compare list of string as attribute', function() {
            let t3 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Source xmi:id=\"647c11b6-2132-4f6f-e69b-d88aa7d03f8d\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <authors>Author1</authors>\r\n" + 
				"    <authors>Author2</authors>\r\n" + 
				"</webpage:Source>";
                let instance = loadFromXMI(t3);
                let xmi = saveToXMI(instance);
                let instance3 = loadFromXMI(xmi);
                let test:boolean = instance3[0] instanceof SourceImpl
                    && (instance3[0] as SourceImpl).authors.containsX("Author1") 
                    && (instance3[0] as SourceImpl).authors.containsX("Author2");
                assert.isTrue(test);
        });

        it('test load/save and compare single short attribute', function() {
            let t4 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<webpage:Person xmi:id=\"3da2fc8d-a0cd-4f17-b691-6c2a8922e941\" age=\"27\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\"/>";
            let instance = loadFromXMI(t4);
            let xmi = saveToXMI(instance);
            let instance4 = loadFromXMI(xmi);
            let test:boolean = instance4[0] instanceof PersonImpl 
                && (instance4[0] as PersonImpl).age === 27;
            assert.isTrue(test);
        });

        it('test load/save and compare single long attribute', function() {
            let t5 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Student xmi:id=\"06fe7e6d-4109-4c9d-9c10-34b1812e301a\" matrikelnr=\"123\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\"/>";
                let instance = loadFromXMI(t5);
                let xmi = saveToXMI(instance);
                let instance5 = loadFromXMI(xmi);
                let test:boolean = instance5[0] instanceof StudentImpl
                    && (instance5[0] as StudentImpl).matrikelnr === 123;
                assert.isTrue(test);
        });

        it('test load/save and compare single int attribute', function() {
            let t6 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Picture xmi:id=\"a35104bb-65f8-4129-a057-c78b09d481a7\" number=\"123\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\"/>";
                let instance = loadFromXMI(t6);
                let xmi = saveToXMI(instance);
                let instance6 = loadFromXMI(xmi);
                let test:boolean = instance6[0] instanceof PictureImpl
                    && (instance6[0] as PictureImpl).number === 123;
                assert.isTrue(test);
        });

        it('test load/save and compare list of int as an attribute', function() {
            let t7 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Source xmi:id=\"d9c206d0-2cf4-44f2-a9a1-54357d398c18\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <page_no>-1</page_no>\r\n" + 
				"    <page_no>2</page_no>\r\n" + 
				"</webpage:Source>";
                let instance = loadFromXMI(t7);
                let xmi = saveToXMI(instance);
                let instance7 = loadFromXMI(xmi);
                let test:boolean = instance7[0] instanceof SourceImpl
                    && (instance7[0] as SourceImpl).page_no.containsX(-1)
                    && (instance7[0] as SourceImpl).page_no.containsX(2);
                assert.isTrue(test);
        });

        it('test load/save and compare single float attribute', function() {
            let t8 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <webpage:Article xmi:id=\"333ba83c-3a58-466d-b443-7130fda04462\" number=\"1.2\" authors=\"1ec56f4e-0108-4de1-ae79-6ec4706e8916\" picture=\"64926fe7-fbdb-48dd-f399-51516d5e0391\"/>\r\n" + 
				"    <webpage:Picture xmi:id=\"64926fe7-fbdb-48dd-f399-51516d5e0391\"/>\r\n" + 
				"    <webpage:Person xmi:id=\"1ec56f4e-0108-4de1-ae79-6ec4706e8916\" articles=\"333ba83c-3a58-466d-b443-7130fda04462\"/>\r\n" + 
				"</xmi:XMI>";
                let instance = loadFromXMI(t8);
                let xmi = saveToXMI(instance);
                let instance8 = loadFromXMI(xmi);
                let test:boolean = instance8[0] instanceof ArticleImpl
                    && (instance8[0] as ArticleImpl).number === 1.2;
                assert.isTrue(test);
        });

        it('test load/save and compare list of float as an attribute', function() {
            let t9 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Student xmi:id=\"26d956b3-90c5-4f67-e9ee-b7f399142aef\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <grades>-2</grades>\r\n" + 
				"    <grades>2.3</grades>\r\n" + 
				"</webpage:Student>";
                let instance = loadFromXMI(t9);
                let xmi = saveToXMI(instance);
                let instance9 = loadFromXMI(xmi);
                let test:boolean = instance9[0] instanceof StudentImpl
                    && (instance9[0] as StudentImpl).grades.containsX(-2.0)
                    && (instance9[0] as StudentImpl).grades.containsX(2.3);
                assert.isTrue(test);
        });

        it('test load/save and compare single double attribute', function() {
            let t10 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Website xmi:id=\"ff8309dc-8c76-4c8d-e4fc-f09a05e24631\" number=\"1\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <pictures xmi:id=\"1ffd1279-8862-459c-9661-890419bd1aff\"/>\r\n" + 
				"</webpage:Website>";
                let instance = loadFromXMI(t10);
                let xmi = saveToXMI(instance);
                let instance10 = loadFromXMI(xmi);
                let test:boolean = instance10[0] instanceof WebsiteImpl
                    && (instance10[0] as WebsiteImpl).number === 1.0;
                assert.isTrue(test);
        });

        it('test load/save and compare list of char as an atrribute', function() {
            let t11 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Person xmi:id=\"0bc874d8-28c5-48a3-ba5d-3b569547399e\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <access_key>97</access_key>\r\n" + 
				"    <access_key>98</access_key>\r\n" + 
				"</webpage:Person>";
                let instance = loadFromXMI(t11);
                let xmi = saveToXMI(instance);
                let instance11 = loadFromXMI(xmi);
                let test:boolean = instance11[0] instanceof PersonImpl
                    && (instance11[0] as PersonImpl).access_key.containsX('a')
                    && (instance11[0] as PersonImpl).access_key.containsX('b');
                assert.isTrue(test);
        });

        it('test load/save and compare boolean attribute', function() {
            let t12 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Chapter xmi:id=\"676a9b23-44e9-4d9e-fe8f-d7d814bbff92\" subSection=\"true\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\"/>";
                let instance = loadFromXMI(t12);
                let xmi = saveToXMI(instance);
                let instance12 = loadFromXMI(xmi);
                let test:boolean = instance12[0] instanceof ChapterImpl 
                && (instance12[0] as ChapterImpl).subSection === true;
                assert.isTrue(test);
        });

        it('test load/save and compare list of boolean as an attribute', function() {
            let t13 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Picture xmi:id=\"ecff830e-d343-4bce-ab6c-2b3dc0c473db\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <hash>true</hash>\r\n" + 
				"    <hash>false</hash>\r\n" + 
				"</webpage:Picture>";
                let instance = loadFromXMI(t13);
                let xmi = saveToXMI(instance);
                let instance13 = loadFromXMI(xmi);
                let test:boolean = instance13[0] instanceof PictureImpl
                    && (instance13[0] as PictureImpl).hash.containsX(true)
                    && (instance13[0] as PictureImpl).hash.containsX(false);
                assert.isTrue(test);
        });

        it('test load/save and compare enum attribute', function() {
            let t14 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <webpage:Article xmi:id=\"1421bb6d-f18e-4268-da06-e8bf346856d2\" articletype=\"STUDY\" authors=\"7c0e6673-2bf2-430a-e8b0-05a1cb29c0ad\" picture=\"c6cb7159-b814-470c-aea4-ec1bc1694a4d\"/>\r\n" + 
				"    <webpage:Picture xmi:id=\"c6cb7159-b814-470c-aea4-ec1bc1694a4d\"/>\r\n" + 
				"    <webpage:Person xmi:id=\"7c0e6673-2bf2-430a-e8b0-05a1cb29c0ad\" articles=\"1421bb6d-f18e-4268-da06-e8bf346856d2\"/>\r\n" + 
				"</xmi:XMI>";
                let instance = loadFromXMI(t14);
                let xmi = saveToXMI(instance);
                let instance14 = loadFromXMI(xmi);
                let test:boolean = instance14[0] instanceof ArticleImpl
                    && (instance14[0] as ArticleImpl).articletype === ArticleType.STUDY;
                assert.isTrue(test);
        });

        it('test load/save and compare single containment', function() {
            let t15 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Website xmi:id=\"fd6e2095-2115-464c-d629-433533965348\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <pictures xmi:id=\"c002f044-3bdf-47cf-c309-13a7a5a9e40e\"/>\r\n" + 
				"</webpage:Website>";
                let instance = loadFromXMI(t15);
                let xmi = saveToXMI(instance);
                let instance15 = loadFromXMI(xmi);
                let test:boolean = instance15[0] instanceof WebsiteImpl
                    && (instance15[0] as WebsiteImpl).pictures.size() == 1;
                assert.isTrue(test);
        });

        it('test load/save and compare multiple containments', function() {
            let t16 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Website xmi:id=\"bbb65d82-d73d-4609-8d27-866d22ed196d\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <categories xmi:id=\"704fc979-7ea8-4e52-ed28-0c49a21118bf\"/>\r\n" + 
				"    <categories xmi:id=\"387f83a6-342c-46ed-afff-9efc985f2b3a\"/>\r\n" + 
				"    <pictures xmi:id=\"545cb65a-ebd4-44f3-f27b-97cfcef963c4\"/>\r\n" + 
				"</webpage:Website>";
                let instance = loadFromXMI(t16);
                let xmi = saveToXMI(instance);
                let instance16 = loadFromXMI(xmi);
                let test:boolean = instance16[0] instanceof WebsiteImpl
                    && (instance16[0] as WebsiteImpl).categories.size() == 2;
                assert.isTrue(test);
        });

        it('test load/save and compare single reference', function() {
            let t17 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <webpage:Article xmi:id=\"9e407b40-ba5d-45a6-8047-68cb69068113\" authors=\"fd610df5-4962-4014-d21c-dc68df97f583\" picture=\"e7e4e6a1-7e93-4bf1-f2f5-6a6b3f52c553\"/>\r\n" + 
				"    <webpage:Picture xmi:id=\"e7e4e6a1-7e93-4bf1-f2f5-6a6b3f52c553\"/>\r\n" + 
				"    <webpage:Person xmi:id=\"fd610df5-4962-4014-d21c-dc68df97f583\" articles=\"9e407b40-ba5d-45a6-8047-68cb69068113\"/>\r\n" + 
				"</xmi:XMI>";
                let instance = loadFromXMI(t17);
                let xmi = saveToXMI(instance);
                let instance17 = loadFromXMI(xmi);
                let test:boolean = instance17[0] instanceof ArticleImpl
                    && (instance17[0] as ArticleImpl).authors.size() == 1;
                assert.isTrue(test);
        });

        it('test load/save and compare multiple references', function() {
            let t18 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <webpage:Article xmi:id=\"cc39a545-0ec1-46ce-f61f-44ed189c3990\" authors=\"715f5cbc-0cb6-4cf6-bb5e-857a0daab469\" picture=\"5fd076af-fba3-4f06-d3ef-94ea79a7fbe3\" sources=\"de196a6f-74b4-49c1-f710-18ff8a47e293 989b1f83-4fb6-418e-9b88-b74bd60d6939\"/>\r\n" + 
				"    <webpage:Picture xmi:id=\"5fd076af-fba3-4f06-d3ef-94ea79a7fbe3\"/>\r\n" + 
				"    <webpage:Person xmi:id=\"715f5cbc-0cb6-4cf6-bb5e-857a0daab469\" articles=\"cc39a545-0ec1-46ce-f61f-44ed189c3990\"/>\r\n" + 
				"    <webpage:Source xmi:id=\"de196a6f-74b4-49c1-f710-18ff8a47e293\"/>\r\n" + 
				"    <webpage:Source xmi:id=\"989b1f83-4fb6-418e-9b88-b74bd60d6939\"/>\r\n" + 
				"</xmi:XMI>";
                let instance = loadFromXMI(t18);
                let xmi = saveToXMI(instance);
                let instance18 = loadFromXMI(xmi);
                let test:boolean = instance18[0] instanceof ArticleImpl
                    && (instance18[0] as ArticleImpl).sources.size() == 2 ;
                assert.isTrue(test);
        });

        it('test load/save and compare single bidirectional reference', function() {
            let t19 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <webpage:Article xmi:id=\"ff5066f8-9f96-4e15-debb-c19c71d9aa39\" authors=\"1810fd44-1644-4a6e-8534-0f547c01e30b\" picture=\"84570dc3-28e7-4667-d8d8-02e4fb2e9bc6\"/>\r\n" + 
				"    <webpage:Picture xmi:id=\"84570dc3-28e7-4667-d8d8-02e4fb2e9bc6\"/>\r\n" + 
				"    <webpage:Student xmi:id=\"1810fd44-1644-4a6e-8534-0f547c01e30b\" articles=\"ff5066f8-9f96-4e15-debb-c19c71d9aa39\"/>\r\n" + 
				"</xmi:XMI>";
                let instance = loadFromXMI(t19);
                let xmi = saveToXMI(instance);
                let instance19 = loadFromXMI(xmi);
                let test:boolean = instance19[0] instanceof ArticleImpl
                    && (instance19[0] as ArticleImpl).authors.size() == 1 
                    && instance19[2] instanceof StudentImpl 
                    && (instance19[2] as StudentImpl).articles.size() == 1;
                assert.isTrue(test);
        });

        it('test load/save and compare multiple bidirectional references', function() {
            let t20 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <webpage:Article xmi:id=\"7dae9211-3a7e-4b52-af74-9203505a3844\" authors=\"d33d5859-cdb2-490a-cfef-068b2dcf47d2 991bab0f-8c72-4a55-ca3f-45449141dd4a\" picture=\"2d831061-11fa-4c55-b88b-eed339cfa15d\"/>\r\n" + 
				"    <webpage:Article xmi:id=\"2334bf2b-e1b9-4113-aa3e-e6a38f98b39d\" authors=\"991bab0f-8c72-4a55-ca3f-45449141dd4a\" picture=\"2d831061-11fa-4c55-b88b-eed339cfa15d\"/>\r\n" + 
				"    <webpage:Picture xmi:id=\"2d831061-11fa-4c55-b88b-eed339cfa15d\"/>\r\n" + 
				"    <webpage:Person xmi:id=\"d33d5859-cdb2-490a-cfef-068b2dcf47d2\" articles=\"7dae9211-3a7e-4b52-af74-9203505a3844\"/>\r\n" + 
				"    <webpage:Student xmi:id=\"991bab0f-8c72-4a55-ca3f-45449141dd4a\" articles=\"7dae9211-3a7e-4b52-af74-9203505a3844 2334bf2b-e1b9-4113-aa3e-e6a38f98b39d\"/>\r\n" + 
				"</xmi:XMI>";
                let instance = loadFromXMI(t20);
                let xmi = saveToXMI(instance);
                let instance20 = loadFromXMI(xmi);
                let test:boolean = instance20[0] instanceof ArticleImpl
                    && (instance20[0] as ArticleImpl).authors.size() == 2
                    && instance20[4] instanceof StudentImpl
                    && (instance20[4] as StudentImpl).articles.size() == 2;
                assert.isTrue(test);
        });

        it('test load/save and compare multiple reference to EObjects of same type', function() {
            let t21 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <webpage:Article xmi:id=\"8f418e8d-5f61-47af-d954-b2e7b3796276\" authors=\"126dec12-fab8-4065-9967-0cc86f16547a\" picture=\"3c31c2f1-f0bb-42ab-a882-079b7ec82377\" related=\"02cd90b2-b4d1-4b6f-9ee4-8c68dbaae362 95b21118-320c-4272-c831-422799917568\"/>\r\n" + 
				"    <webpage:Article xmi:id=\"02cd90b2-b4d1-4b6f-9ee4-8c68dbaae362\" authors=\"126dec12-fab8-4065-9967-0cc86f16547a\" picture=\"3c31c2f1-f0bb-42ab-a882-079b7ec82377\"/>\r\n" + 
				"    <webpage:Article xmi:id=\"95b21118-320c-4272-c831-422799917568\" authors=\"126dec12-fab8-4065-9967-0cc86f16547a\" picture=\"3c31c2f1-f0bb-42ab-a882-079b7ec82377\"/>\r\n" + 
				"    <webpage:Person xmi:id=\"126dec12-fab8-4065-9967-0cc86f16547a\" articles=\"8f418e8d-5f61-47af-d954-b2e7b3796276 02cd90b2-b4d1-4b6f-9ee4-8c68dbaae362 95b21118-320c-4272-c831-422799917568\"/>\r\n" + 
				"    <webpage:Picture xmi:id=\"3c31c2f1-f0bb-42ab-a882-079b7ec82377\"/>\r\n" + 
				"</xmi:XMI>";
                let instance = loadFromXMI(t21);
                let xmi = saveToXMI(instance);
                let instance21 = loadFromXMI(xmi);
                let test:boolean = instance21[0] instanceof ArticleImpl
                    && (instance21[0] as ArticleImpl).related.size() == 2
                    && (instance21[0] as ArticleImpl).related[0] instanceof ArticleImpl
                    && (instance21[0] as ArticleImpl).related[1] instanceof ArticleImpl;
                assert.isTrue(test);
        });

        it('test load/save and compare self reference', function() {
            let t22 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <webpage:Article xmi:id=\"9bcf1685-cf81-4709-a19b-8768241c0a70\" name =\"test\" authors=\"9c4323ef-2ee9-4157-ca39-ed8f70e505f9\" picture=\"90cf7c3a-37aa-4d2f-af0a-d8b55349c9e0\" related=\"9bcf1685-cf81-4709-a19b-8768241c0a70\"/>\r\n" + 
				"    <webpage:Picture xmi:id=\"90cf7c3a-37aa-4d2f-af0a-d8b55349c9e0\"/>\r\n" + 
				"    <webpage:Person xmi:id=\"9c4323ef-2ee9-4157-ca39-ed8f70e505f9\" articles=\"9bcf1685-cf81-4709-a19b-8768241c0a70\"/>\r\n" + 
				"</xmi:XMI>";
                let instance = loadFromXMI(t22);
                let xmi = saveToXMI(instance);
                let instance22 = loadFromXMI(xmi);
                let test:boolean = instance22[0] instanceof ArticleImpl
                    && (instance22[0] as ArticleImpl).related.size() == 1
                    && (instance22[0] as ArticleImpl).related[0] instanceof ArticleImpl
                    && (instance22[0] as ArticleImpl).related[0].name === "test";
                assert.isTrue(test);
        });

        it('test load/save and compare multiple EObject containment', function() {
            let t28 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Website xmi:id=\"_Ea1OADT-Eeuy-6z-kXSK-w\">\r\n" + 
				"    <pictures xmi:id=\"_Ea1OATT-Eeuy-6z-kXSK-w\"/>\r\n" + 
				"  </webpage:Website>\r\n" + 
				"  <webpage:Website xmi:id=\"_Ea1OAjT-Eeuy-6z-kXSK-w\">\r\n" + 
				"    <pictures xmi:id=\"_Ea1OATT-Eeuy-6z-kXSK-w\"/>\r\n" + 
				"  </webpage:Website>\r\n" + 
				"</xmi:XMI>";
                let instance = loadFromXMI(t28);
                let xmi = saveToXMI(instance);
                let instance28 = loadFromXMI(xmi);
                let test:boolean = instance28[0] instanceof WebsiteImpl
				    && (instance28[0] as WebsiteImpl).pictures.size() == 1
				    && (instance28[0] as WebsiteImpl).pictures.size() == 1;
		        assert.isTrue(test);
        });

        it('test load/save and compare containment and separate', function() {
            let t29 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Website xmi:id=\"_YEcKQDWgEeuiRLkt8tJQnA\">\r\n" + 
				"      <pictures xmi:id=\"_YEcKQTWgEeuiRLkt8tJQnA\"/>\r\n" + 
				"  </webpage:Website>\r\n" + 
				"  <webpage:Picture xmi:id=\"_YEcKQTWgEeuiRLkt8tJQnA\"/>\r\n" + 
				"</xmi:XMI>";
                let instance = loadFromXMI(t29);
                let xmi = saveToXMI(instance);
                let instance29 = loadFromXMI(xmi);
                let test:boolean = instance29[0] instanceof WebsiteImpl
				    && instance29[1] instanceof PictureImpl
				    && (instance29[0] as WebsiteImpl).pictures.size() == 1;
		        assert.isTrue(test);
        });

        it('test load/save and compare multiple same EObject', function() {
            let t30 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Student xmi:id=\"_tPFc8DT5EeuAP8PgtQG7XA\"/>\r\n" + 
				"  <webpage:Student xmi:id=\"_tPFc8DT5EeuAP8PgtQG7XA\"/>\r\n" + 
				"</xmi:XMI>";;
                let instance = loadFromXMI(t30);
                let xmi = saveToXMI(instance);
                let instance30 = loadFromXMI(xmi);
                let test:boolean = instance30.length == 1;
                assert.isFalse(test);
        });

        it('test load/save and compare multiple same containment', function() {
            let t31 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Website xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_BumjMDT8EeuC0ILVHZfbng\">\r\n" + 
				"  <pictures xmi:id=\"_BunKQDT8EeuC0ILVHZfbng\"/>\r\n" + 
				"  <pictures xmi:id=\"_BunKQDT8EeuC0ILVHZfbng\"/>\r\n" + 
				"</webpage:Website>";
                let instance = loadFromXMI(t31);
                let xmi = saveToXMI(instance);
                let instance31 = loadFromXMI(xmi);
                let test:boolean = instance31[0] instanceof WebsiteImpl
                    && (instance31[0] as WebsiteImpl).pictures.size() == 1;
                assert.isFalse(test);
        });

        it('test load/save and compare multiple same reference', function() {
            let t32 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"  <webpage:Article xmi:id=\"_2Yq9kDV7EeulSerH-1v9sA\" authors=\"_2Yq9kzV7EeulSerH-1v9sA\" picture=\"_2Yq9kTV7EeulSerH-1v9sA _2Yq9kTV7EeulSerH-1v9sA _2Yq9kTV7EeulSerH-1v9sA\" sources=\"_2Yq9kjV7EeulSerH-1v9sA _2Yq9kjV7EeulSerH-1v9sA\"/>\r\n" + 
				"  <webpage:Picture xmi:id=\"_2Yq9kTV7EeulSerH-1v9sA\"/>\r\n" + 
				"  <webpage:Source xmi:id=\"_2Yq9kjV7EeulSerH-1v9sA\"/>\r\n" + 
				"  <webpage:Person xmi:id=\"_2Yq9kzV7EeulSerH-1v9sA\" articles=\"_2Yq9kDV7EeulSerH-1v9sA\"/>\r\n" + 
				"</xmi:XMI>";
                let instance = loadFromXMI(t32);
                let xmi = saveToXMI(instance);
                let instance32 = loadFromXMI(xmi);
                let test:boolean = instance32[0] instanceof ArticleImpl
                    && (instance32[0] as ArticleImpl).sources.size() == 1;
                assert.isFalse(test);
        });

        it('test load/save and compare inheritance', function() {
            let t33 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<webpage:Student xmi:id=\"56250b3e-41b1-44af-cf0d-94af281da067\" age=\"29\" xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\"/>";
                let instance = loadFromXMI(t33);
                let xmi = saveToXMI(instance);
                let instance33 = loadFromXMI(xmi);
                let test:boolean = instance33[0] instanceof StudentImpl
                    && (instance33[0] as StudentImpl).age === 29;
                assert.isTrue(test);
        });

        it('test load/save and compare special values float', function() {
            let t35 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
				"<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
				"    <webpage:Article xmi:id=\"5243dba2-9e25-4ae1-9623-c3f844704928\" number=\"NaN\" authors=\"327e47c5-dad2-4e5b-8650-f41954ffb2b8\" picture=\"bc9d3114-32c1-4040-8657-7762f1c9e6f9\"/>\r\n" + 
				"    <webpage:Article xmi:id=\"c90d6531-ad68-4b3c-f763-3b3b704611ec\" number=\"-Infinity\" authors=\"327e47c5-dad2-4e5b-8650-f41954ffb2b8\" picture=\"bc9d3114-32c1-4040-8657-7762f1c9e6f9\"/>\r\n" + 
				"    <webpage:Article xmi:id=\"fa7c127f-7291-40c5-9cf3-a0dbf40987a1\" number=\"Infinity\" authors=\"327e47c5-dad2-4e5b-8650-f41954ffb2b8\" picture=\"bc9d3114-32c1-4040-8657-7762f1c9e6f9\"/>\r\n" + 
				"    <webpage:Picture xmi:id=\"bc9d3114-32c1-4040-8657-7762f1c9e6f9\"/>\r\n" + 
				"    <webpage:Person xmi:id=\"327e47c5-dad2-4e5b-8650-f41954ffb2b8\" articles=\"5243dba2-9e25-4ae1-9623-c3f844704928 c90d6531-ad68-4b3c-f763-3b3b704611ec fa7c127f-7291-40c5-9cf3-a0dbf40987a1\"/>\r\n" + 
				"</xmi:XMI>";
                let instance = loadFromXMI(t35);
                let xmi = saveToXMI(instance);
                let instance35 = loadFromXMI(xmi);
                let test:boolean = instance35[0] instanceof ArticleImpl 
                    && Number.isNaN((instance35[0] as ArticleImpl).number)
                    && instance35[1] instanceof ArticleImpl 
                    && !Number.isFinite((instance35[1] as ArticleImpl).number)
                    && instance35[2] instanceof ArticleImpl 
                    && !Number.isFinite((instance35[2] as ArticleImpl).number);
                assert.isTrue(test);
        });

        it('test load/save and compare special values double', function() {
            let t36 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
            "    <webpage:Website xmi:id=\"17c35e46-a28e-4271-ffb6-bc2fd63a3983\" number=\"NaN\">\r\n" + 
            "        <pictures xmi:id=\"8e29074e-ea39-4252-f2d0-810c7fad6c17\"/>\r\n" + 
            "    </webpage:Website>\r\n" + 
            "    <webpage:Website xmi:id=\"8cacf1ac-257b-4ff2-b261-5f1dc987effe\" number=\"-Infinity\">\r\n" + 
            "        <pictures xmi:id=\"2e0452f6-14ed-4631-8df3-1275aedd28f0\"/>\r\n" + 
            "    </webpage:Website>\r\n" + 
            "    <webpage:Website xmi:id=\"69ca85a0-8ef2-41c0-ee21-2c914b4bf606\" number=\"Infinity\">\r\n" + 
            "        <pictures xmi:id=\"69c4a0d5-f3b5-4cf0-988b-fd660df0122a\"/>\r\n" + 
            "    </webpage:Website>\r\n" + 
            "</xmi:XMI>";
            let instance = loadFromXMI(t36);
            let xmi = saveToXMI(instance);
            let instance36 = loadFromXMI(xmi);
            let test:boolean = instance36[0] instanceof WebsiteImpl
                && Number.isNaN((instance36[0] as WebsiteImpl).number)
                && instance36[1] instanceof WebsiteImpl
                && !Number.isFinite((instance36[1] as WebsiteImpl).number)
                && instance36[2] instanceof WebsiteImpl
                && !Number.isFinite((instance36[2] as WebsiteImpl).number);
            assert.isTrue(test);
        });

        it('Can load/save and compare the ordering of a list as an attribute', function() {
            let t40 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
            "  <webpage:Article xmi:id=\"_4WuC0DflEeufmvup1OnXvg\" name=\"a1\" authors=\"_4WuC1DflEeufmvup1OnXvg\" picture=\"_4WuC1TflEeufmvup1OnXvg\" related=\"_4WuC0TflEeufmvup1OnXvg _4WuC0jflEeufmvup1OnXvg _4WuC0zflEeufmvup1OnXvg\"/>\r\n" + 
            "  <webpage:Article xmi:id=\"_4WuC0TflEeufmvup1OnXvg\" name=\"a2\" authors=\"_4WuC1DflEeufmvup1OnXvg\" picture=\"_4WuC1TflEeufmvup1OnXvg\"/>\r\n" + 
            "  <webpage:Article xmi:id=\"_4WuC0jflEeufmvup1OnXvg\" name=\"a3\" authors=\"_4WuC1DflEeufmvup1OnXvg\" picture=\"_4WuC1TflEeufmvup1OnXvg\"/>\r\n" + 
            "  <webpage:Article xmi:id=\"_4WuC0zflEeufmvup1OnXvg\" name=\"a4\" authors=\"_4WuC1DflEeufmvup1OnXvg\" picture=\"_4WuC1TflEeufmvup1OnXvg\"/>\r\n" + 
            "  <webpage:Person xmi:id=\"_4WuC1DflEeufmvup1OnXvg\" articles=\"_4WuC0DflEeufmvup1OnXvg _4WuC0TflEeufmvup1OnXvg _4WuC0jflEeufmvup1OnXvg _4WuC0zflEeufmvup1OnXvg\"/>\r\n" + 
            "  <webpage:Picture xmi:id=\"_4WuC1TflEeufmvup1OnXvg\"/>\r\n" + 
            "</xmi:XMI>";
            let instance = loadFromXMI(t40);
            let xmi = saveToXMI(instance);
            let instance40 = loadFromXMI(xmi);
            let test:boolean = instance40[0] instanceof ArticleImpl
                    && (instance40[0] as ArticleImpl).related.at(0).name === "a2"
                    && (instance40[0] as ArticleImpl).related.at(1).name === "a3"
                    && (instance40[0] as ArticleImpl).related.at(2).name === "a4";
            assert.isTrue(test);
        });

        it('Can load/save and compare the ordering of a list of references', function() {
            let t43 = "<xmi:XMI xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\">\r\n" + 
            "  <webpage:Article xmi:id=\"_OkKS8EI6EeuEic2tK4l2WA\" name=\"x\" authors=\"_OkKS80I6EeuEic2tK4l2WA _OkKS9EI6EeuEic2tK4l2WA _OkKS8kI6EeuEic2tK4l2WA\" picture=\"_OkKS8UI6EeuEic2tK4l2WA\"/>\r\n" + 
            "  <webpage:Picture xmi:id=\"_OkKS8UI6EeuEic2tK4l2WA\"/>\r\n" + 
            "  <webpage:Person xmi:id=\"_OkKS8kI6EeuEic2tK4l2WA\" articles=\"_OkKS8EI6EeuEic2tK4l2WA\" surname=\"c\"/>\r\n" + 
            "  <webpage:Person xmi:id=\"_OkKS80I6EeuEic2tK4l2WA\" articles=\"_OkKS8EI6EeuEic2tK4l2WA\" surname=\"a\"/>\r\n" + 
            "  <webpage:Person xmi:id=\"_OkKS9EI6EeuEic2tK4l2WA\" articles=\"_OkKS8EI6EeuEic2tK4l2WA\" surname=\"b\"/>\r\n" + 
            "</xmi:XMI>";
            let instance = loadFromXMI(t43);
            let xmi = saveToXMI(instance);
            let instance43 = loadFromXMI(xmi);
            let test:boolean = instance43[0] instanceof ArticleImpl
            && instance43[1] instanceof PictureImpl
            && instance43[2] instanceof PersonImpl
            && instance43[3] instanceof PersonImpl
            && instance43[4] instanceof PersonImpl
            && (instance43[0] as ArticleImpl).authors[0].surname === "a"
            && (instance43[0] as ArticleImpl).authors[1].surname === "b"
            && (instance43[0] as ArticleImpl).authors[2].surname === "c"
            && (instance43[2] as PersonImpl).articles[0].name === "x"
            && (instance43[3] as PersonImpl).articles[0].name === "x"
            && (instance43[4] as PersonImpl).articles[0].name === "x";
            assert.isTrue(test);
        });

        it('Can load/save and compare the ordering of containments', function() {
            let t44 = "<?xml version=\"1.0\" encoding=\"ASCII\"?>\r\n" + 
            "<webpage:Website xmi:version=\"2.0\" xmlns:xmi=\"http://www.omg.org/XMI\" xmlns:webpage=\"http://www.xmibypeterfollowingthetutoria.ls/webpage\" xmi:id=\"_4mb6kEI9EeuUBrV7JMdYJA\">\r\n" + 
            "  <pictures xmi:type=\"webpage:Picture\" xmi:id=\"_4mb6kUI9EeuUBrV7JMdYJA\" name=\"a\"/>\r\n" + 
            "  <pictures xmi:type=\"webpage:Picture\" xmi:id=\"_4mb6kkI9EeuUBrV7JMdYJA\" name=\"b\"/>\r\n" + 
            "  <pictures xmi:type=\"webpage:Picture\" xmi:id=\"_4mb6k0I9EeuUBrV7JMdYJA\" name=\"c\"/>\r\n" + 
            "</webpage:Website>";
            let instance = loadFromXMI(t44);
            let xmi = saveToXMI(instance);
            let instance44 = loadFromXMI(xmi);
            let test = instance44[0] instanceof WebsiteImpl
            && (instance44[0] as WebsiteImpl).pictures[0].name === "a"
            && (instance44[0] as WebsiteImpl).pictures[1].name === "b"
            && (instance44[0] as WebsiteImpl).pictures[2].name === "c";
            assert.isTrue(test);
        });

    });









    describe('Test complex Ecore instance saving', function() {
        it('Test complex instance', function() {
            eobjects = [];
            let website:Website = factory.createWebsite();
            let website2:Website = factory.createWebsite();
            let category:Category = factory.createCategory();
            let category2:Category = factory.createCategory();
            let article:Article = factory.createArticle();
            let article2:Article = factory.createArticle();
            let article3:Article = factory.createArticle();
            let picture:Picture = factory.createPicture();
            let picture2:Picture = factory.createPicture();
            let picture3:Picture = factory.createPicture();
            let chapter:Chapter = factory.createChapter();
            let chapter2:Chapter = factory.createChapter();
            let chapter3:Chapter = factory.createChapter();
            let source1:Source = factory.createSource();
            let source2:Source = factory.createSource();
            let source3:Source = factory.createSource();
            let person:Person = factory.createPerson();
            let student:Student = factory.createStudent();
    
            website.name = "website";
            website.title = "website title";
            website.description = "website description";
            website.number = 1.0;
            website.links.add("www.google.de");
            website.links.add("www.kit.edu");
            website2.name = "website2";
            website2.title = "website title2";
            website2.description = "website description2";
            website2.number = 2.0;
            website2.links.add("www.facebook.de");
    
            category.name = "category";
            category.number = 1;
            category2.name = "category2";
            category2.number = 2;
    
            article.name = "article";
            article.articletype = ArticleType.STUDY;
            article.flags.add(true);
            article.flags.add(false);
            article.number = 1.0;
            article2.name = "article2";
            article2.articletype = ArticleType.REVIEW;
            article2.flags.add(true);
            article2.number = 2.0;
            article3.name = "article3";
            article3.articletype = ArticleType.REVIEW;
    
            picture.name = "picture";
            picture.information.add('a');
            picture.information.add('b');
            picture.information.add('c');
            picture.number = 1;
            picture.hash.add(true);
            picture.hash.add(false);
            picture2.name = "picture2";
            picture2.information.add('x');
            picture2.information.add('y');
            picture2.information.add('z');
            picture2.number = 2;
            picture2.hash.add(true);
            picture3.name = "picture3";
            picture3.information.add('w');
            picture3.number = 3;
    
            chapter.title.add("Title");
            chapter.title.add("Subtitle");
            chapter.subSection = false;
            chapter.letters.add('l');
            chapter.letters.add('e');
            chapter.letters.add('t');
            chapter2.title.add("Title2");
            chapter2.title.add("Subtitle2");
            chapter2.subSection = false;
            chapter2.letters.add('w');
            chapter2.letters.add('o');
            chapter2.letters.add('r');
            chapter2.letters.add('d');
            chapter3.title.add("Title3");
            chapter3.letters.add('y');
    
            source1.title = "source";
            source1.url = "source url";
            source1.authors.add("This was once");
            source1.authors.add("revealed to me");
            source1.authors.add("in a dream");
            source1.page_no.add(1);
            source1.page_no.add(2);
            source2.title = "source2";
            source2.url = "source url2";
            source2.authors.add("I was there");
            source2.authors.add("3000 years ago");
            source2.page_no.add(3);
            source3.title = "source3";
            source3.url = "source url3";
            source3.authors.add("Dude trust me");
            source3.page_no.add(7);
    
            person.name.add("Erster Vorname");
            person.name.add("Zweiter Vorname");
            person.surname = "Nachname";
            person.age = 28;
            person.access_key.add('a');
            person.access_key.add('e');
            person.access_key.add('s');
        
            student.name.add("Peter");
            student.name.add("Christos");
            student.surname = "Digas";
            student.age = 24;
            student.access_key.add('t');
            student.access_key.add('f');
            student.matrikelnr = 1780794;
            student.grades.add(2.0);
            student.grades.add(2.3);
            student.grades.add(2.7);
            
            article.authors.add(person);
            article.authors.add(student);
            article.sources.add(source1);
            article.chapters.add(chapter);
            article.picture = picture;
            article.related.add(article2);
            article2.authors.add(student);
            article2.sources.add(source2);
            article2.sources.add(source3);
            article2.chapters.add(chapter2);
            article2.picture = picture2;
            article2.related.add(article);
            article3.authors.add(student);
            article3.sources.add(source2);
            article3.chapters.add(chapter3);
            article3.picture = picture3;
            article3.related.add(article2);
            person.articles.add(article);
            student.articles.add(article);
            student.articles.add(article2);
            student.articles.add(article3);
            category.articles.add(article);
            category.articles.add(article2);
            category2.articles.add(article3);
            website.pictures.add(picture);
            website.pictures.add(picture2);
            website.categories.add(category);
            website2.pictures.add(picture3);
            website2.categories.add(category2);

            eobjects.push(website2);
            eobjects.push(person);
            eobjects.push(website);
            eobjects.push(student);
            eobjects.push(source1);
            eobjects.push(source2);
            eobjects.push(source3);
            let xmi_full:string = saveToXMI(eobjects);
            console.log(xmi_full);
            let instance = loadFromXMI(xmi_full);
            let test:boolean = testInstance(instance);
            assert.isTrue(test);
        });

        it('Test complex ecore instance loading', function() {
            let xmi_emf:string = `<?xml version="1.0" encoding="ASCII"?>
            <xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:webpage="http://www.xmibypeterfollowingthetutoria.ls/webpage">
              <webpage:Website xmi:id="_NnUR8DQdEeuIrKb3NleqKQ" name="website2" title="website title2" description="website description2" number="2.0">
                <categories xmi:id="_NnU5ADQdEeuIrKb3NleqKQ" name="category2" number="2">
                  <articles xmi:id="_NnU5ATQdEeuIrKb3NleqKQ" name="article3" authors="_NnU5DTQdEeuIrKb3NleqKQ" picture="_NnU5AzQdEeuIrKb3NleqKQ" related="_NnU5CTQdEeuIrKb3NleqKQ" sources="_NnU5DzQdEeuIrKb3NleqKQ">
                    <chapters xmi:id="_NnU5AjQdEeuIrKb3NleqKQ">
                      <title>Title3</title>
                      <letters>121</letters>
                    </chapters>
                  </articles>
                </categories>
                <pictures xmi:id="_NnU5AzQdEeuIrKb3NleqKQ" name="picture3" number="3">
                  <information>119</information>
                </pictures>
                <links>www.facebook.de</links>
              </webpage:Website>
              <webpage:Person xmi:id="_NnU5BDQdEeuIrKb3NleqKQ" articles="_NnU5BzQdEeuIrKb3NleqKQ" surname="Nachname" age="28">
                <name>Erster Vorname</name>
                <name>Zweiter Vorname</name>
                <access_key>97</access_key>
                <access_key>101</access_key>
                <access_key>115</access_key>
              </webpage:Person>
              <webpage:Website xmi:id="_NnU5BTQdEeuIrKb3NleqKQ" name="website" title="website title" description="website description" number="1.0">
                <categories xmi:id="_NnU5BjQdEeuIrKb3NleqKQ" name="category" number="1">
                  <articles xmi:id="_NnU5BzQdEeuIrKb3NleqKQ" name="article" authors="_NnU5BDQdEeuIrKb3NleqKQ _NnU5DTQdEeuIrKb3NleqKQ" picture="_NnU5CzQdEeuIrKb3NleqKQ" articletype="STUDY" related="_NnU5CTQdEeuIrKb3NleqKQ" sources="_NnU5DjQdEeuIrKb3NleqKQ" number="1.0">
                    <chapters xmi:id="_NnU5CDQdEeuIrKb3NleqKQ">
                      <title>Title</title>
                      <title>Subtitle</title>
                      <letters>108</letters>
                      <letters>101</letters>
                      <letters>116</letters>
                    </chapters>
                    <flags>true</flags>
                    <flags>false</flags>
                  </articles>
                  <articles xmi:id="_NnU5CTQdEeuIrKb3NleqKQ" name="article2" authors="_NnU5DTQdEeuIrKb3NleqKQ" picture="_NnU5DDQdEeuIrKb3NleqKQ" related="_NnU5BzQdEeuIrKb3NleqKQ" sources="_NnU5DzQdEeuIrKb3NleqKQ _NnU5EDQdEeuIrKb3NleqKQ" number="2.0">
                    <chapters xmi:id="_NnU5CjQdEeuIrKb3NleqKQ">
                      <title>Title2</title>
                      <title>Subtitle2</title>
                      <letters>119</letters>
                      <letters>111</letters>
                      <letters>114</letters>
                      <letters>100</letters>
                    </chapters>
                    <flags>true</flags>
                  </articles>
                </categories>
                <pictures xmi:id="_NnU5CzQdEeuIrKb3NleqKQ" name="picture" number="1">
                  <information>97</information>
                  <information>98</information>
                  <information>99</information>
                  <hash>true</hash>
                  <hash>false</hash>
                </pictures>
                <pictures xmi:id="_NnU5DDQdEeuIrKb3NleqKQ" name="picture2" number="2">
                  <information>120</information>
                  <information>121</information>
                  <information>122</information>
                  <hash>true</hash>
                </pictures>
                <links>www.google.de</links>
                <links>www.kit.edu</links>
              </webpage:Website>
              <webpage:Student xmi:id="_NnU5DTQdEeuIrKb3NleqKQ" articles="_NnU5BzQdEeuIrKb3NleqKQ _NnU5CTQdEeuIrKb3NleqKQ _NnU5ATQdEeuIrKb3NleqKQ" surname="Digas" age="24" matrikelnr="1780794">
                <name>Peter</name>
                <name>Christos</name>
                <access_key>116</access_key>
                <access_key>102</access_key>
                <grades>2.0</grades>
                <grades>2.3</grades>
                <grades>2.7</grades>
              </webpage:Student>
              <webpage:Source xmi:id="_NnU5DjQdEeuIrKb3NleqKQ" title="source" url="source url">
                <page_no>1</page_no>
                <page_no>2</page_no>
                <authors>This was once</authors>
                <authors>revealed to me</authors>
                <authors>in a dream</authors>
              </webpage:Source>
              <webpage:Source xmi:id="_NnU5DzQdEeuIrKb3NleqKQ" title="source2" url="source url2">
                <page_no>3</page_no>
                <authors>I was there</authors>
                <authors>3000 years ago</authors>
              </webpage:Source>
              <webpage:Source xmi:id="_NnU5EDQdEeuIrKb3NleqKQ" title="source3" url="source url3">
                <page_no>7</page_no>
                <authors>Dude trust me</authors>
              </webpage:Source>
            </xmi:XMI>`;
            let instance = loadFromXMI(xmi_emf);
            console.log(instance);
            let test = testInstance(instance);
            assert.isTrue(test);
        });
    });


});



function saveToXMI(ecore_instance_to_serialize: Array<EObject> /*, URL: string*/):string {
    let xmiResource = new XmiResource(webpage, factory, new DOMParser());
    return xmiResource.save(ecore_instance_to_serialize);
}

function loadFromXMI(xmi: string /*URL: string*/):EObject[] {
    let xmiResource = new XmiResource(webpage, factory, new DOMParser());
    return xmiResource.load(xmi);
};

function testInstance(instance:EObject[]):boolean {
    return instance[0] instanceof WebsiteImpl
    && instance[1] instanceof PersonImpl
    && instance[2] instanceof WebsiteImpl
    && instance[3] instanceof StudentImpl
    && instance[4] instanceof SourceImpl
    && instance[5] instanceof SourceImpl
    && instance[6] instanceof SourceImpl

    && (instance[0] as WebsiteImpl).name === "website2"
    && (instance[0] as WebsiteImpl).title === "website title2"
    && (instance[0] as WebsiteImpl).description === "website description2"
    && (instance[0] as WebsiteImpl).number === 2.0
    && (instance[0] as WebsiteImpl).links.containsX("www.facebook.de")
    && (instance[1] as PersonImpl).name.containsX("Erster Vorname")
    && (instance[1] as PersonImpl).name.containsX("Zweiter Vorname")
    && (instance[1] as PersonImpl).surname === "Nachname"
    && (instance[1] as PersonImpl).age === 28
    && (instance[1] as PersonImpl).access_key.containsX('a')
    && (instance[1] as PersonImpl).access_key.containsX('e')
    && (instance[1] as PersonImpl).access_key.containsX('s')
    && (instance[2] as WebsiteImpl).name === "website"
    && (instance[2] as WebsiteImpl).title === "website title"
    && (instance[2] as WebsiteImpl).description === "website description"
    && (instance[2] as WebsiteImpl).number === 1.0
    && (instance[2] as WebsiteImpl).links.containsX("www.google.de")
    && (instance[2] as WebsiteImpl).links.containsX("www.kit.edu")
    && (instance[3] as StudentImpl).name.containsX("Peter")
    && (instance[3] as StudentImpl).name.containsX("Christos")
    && (instance[3] as StudentImpl).surname === "Digas"
    && (instance[3] as StudentImpl).age === 24
    && (instance[3] as StudentImpl).access_key.containsX('t')
    && (instance[3] as StudentImpl).access_key.containsX('f')
    && (instance[3] as StudentImpl).matrikelnr === 1780794
    && (instance[3] as StudentImpl).grades.containsX(2.0)
    && (instance[3] as StudentImpl).grades.containsX(2.3)
    && (instance[3] as StudentImpl).grades.containsX(2.7)
    && (instance[4] as SourceImpl).title === "source"
    && (instance[4] as SourceImpl).url === "source url"
    && (instance[4] as SourceImpl).authors.containsX("This was once")
    && (instance[4] as SourceImpl).authors.containsX("revealed to me")
    && (instance[4] as SourceImpl).authors.containsX("in a dream")
    && (instance[4] as SourceImpl).page_no.containsX(1)
    && (instance[4] as SourceImpl).page_no.containsX(2)
    && (instance[5] as SourceImpl).title === "source2"
    && (instance[5] as SourceImpl).url === "source url2"
    && (instance[5] as SourceImpl).authors.containsX("I was there")
    && (instance[5] as SourceImpl).authors.containsX("3000 years ago")
    && (instance[5] as SourceImpl).page_no.containsX(3)
    && (instance[6] as SourceImpl).title === "source3"
    && (instance[6] as SourceImpl).url === "source url3"
    && (instance[6] as SourceImpl).authors.containsX("Dude trust me")
    && (instance[6] as SourceImpl).page_no.containsX(7)

    && (instance[0] as WebsiteImpl).categories[0].name === "category2"
    && (instance[0] as WebsiteImpl).categories[0].number === 2
    && (instance[0] as WebsiteImpl).pictures[0].name === "picture3"
    && (instance[0] as WebsiteImpl).pictures[0].information.containsX('w')
    && (instance[0] as WebsiteImpl).pictures[0].number === 3
    && (instance[2] as WebsiteImpl).categories[0].name === "category"
    && (instance[2] as WebsiteImpl).categories[0].number === 1
    && (instance[2] as WebsiteImpl).pictures[0].name === "picture"
    && (instance[2] as WebsiteImpl).pictures[0].information.containsX('a')
    && (instance[2] as WebsiteImpl).pictures[0].information.containsX('b')
    && (instance[2] as WebsiteImpl).pictures[0].information.containsX('c')
    && (instance[2] as WebsiteImpl).pictures[0].number === 1
    && (instance[2] as WebsiteImpl).pictures[0].hash.containsX(true)
    && (instance[2] as WebsiteImpl).pictures[0].hash.containsX(false)
    && (instance[2] as WebsiteImpl).pictures[1].name === "picture2"
    && (instance[2] as WebsiteImpl).pictures[1].information.containsX('x')
    && (instance[2] as WebsiteImpl).pictures[1].information.containsX('y')
    && (instance[2] as WebsiteImpl).pictures[1].information.containsX('z')
    && (instance[2] as WebsiteImpl).pictures[1].number === 2
    && (instance[2] as WebsiteImpl).pictures[1].hash.containsX(true)

    && (instance[0] as WebsiteImpl).categories[0].articles[0].name === "article3"
    && (instance[0] as WebsiteImpl).categories[0].articles[0].articletype === ArticleType.REVIEW
    && (instance[2] as WebsiteImpl).categories[0].articles[0].name === "article"
    && (instance[2] as WebsiteImpl).categories[0].articles[0].articletype === ArticleType.STUDY
    && (instance[2] as WebsiteImpl).categories[0].articles[0].flags.containsX(true)
    && (instance[2] as WebsiteImpl).categories[0].articles[0].flags.containsX(false)
    && (instance[2] as WebsiteImpl).categories[0].articles[0].number === 1.0
    && (instance[2] as WebsiteImpl).categories[0].articles[1].name === "article2"
    && (instance[2] as WebsiteImpl).categories[0].articles[1].articletype === ArticleType.REVIEW
    && (instance[2] as WebsiteImpl).categories[0].articles[1].flags.containsX(true)
    && (instance[2] as WebsiteImpl).categories[0].articles[1].number === 2.0
    
    && (instance[0] as WebsiteImpl).categories[0].articles[0].chapters[0].title.containsX("Title3")
    && (instance[0] as WebsiteImpl).categories[0].articles[0].chapters[0].letters.containsX('y')
    && (instance[2] as WebsiteImpl).categories[0].articles[0].chapters[0].title.containsX("Title")
    && (instance[2] as WebsiteImpl).categories[0].articles[0].chapters[0].title.containsX("Subtitle")
    && (instance[2] as WebsiteImpl).categories[0].articles[0].chapters[0].subSection === false
    && (instance[2] as WebsiteImpl).categories[0].articles[0].chapters[0].letters.containsX('l')
    && (instance[2] as WebsiteImpl).categories[0].articles[0].chapters[0].letters.containsX('e')
    && (instance[2] as WebsiteImpl).categories[0].articles[0].chapters[0].letters.containsX('t')
    && (instance[2] as WebsiteImpl).categories[0].articles[1].chapters[0].title.containsX("Title2")
    && (instance[2] as WebsiteImpl).categories[0].articles[1].chapters[0].title.containsX("Subtitle2")
    && (instance[2] as WebsiteImpl).categories[0].articles[1].chapters[0].subSection === false
    && (instance[2] as WebsiteImpl).categories[0].articles[1].chapters[0].letters.containsX('w')
    && (instance[2] as WebsiteImpl).categories[0].articles[1].chapters[0].letters.containsX('o')
    && (instance[2] as WebsiteImpl).categories[0].articles[1].chapters[0].letters.containsX('r')
    && (instance[2] as WebsiteImpl).categories[0].articles[1].chapters[0].letters.containsX('d')
    
    && (instance[0] as WebsiteImpl).categories[0].articles[0].authors[0].surname === "Digas"
    && (instance[0] as WebsiteImpl).categories[0].articles[0].sources[0].title === "source2"
    && (instance[0] as WebsiteImpl).categories[0].articles[0].picture.name === "picture3"
    && (instance[0] as WebsiteImpl).categories[0].articles[0].related[0].name === "article2"
    && (instance[2] as WebsiteImpl).categories[0].articles[0].authors[0].surname === "Nachname"
    && (instance[2] as WebsiteImpl).categories[0].articles[0].authors[1].surname === "Digas"
    && (instance[2] as WebsiteImpl).categories[0].articles[0].sources[0].title === "source"
    && (instance[2] as WebsiteImpl).categories[0].articles[0].picture.name === "picture"
    && (instance[2] as WebsiteImpl).categories[0].articles[0].related[0].name === "article2"
    && (instance[2] as WebsiteImpl).categories[0].articles[1].authors[0].surname === "Digas"
    && (instance[2] as WebsiteImpl).categories[0].articles[1].sources[0].title === "source2"
    && (instance[2] as WebsiteImpl).categories[0].articles[1].sources[1].title === "source3"
    && (instance[2] as WebsiteImpl).categories[0].articles[1].picture.name === "picture2"
    && (instance[2] as WebsiteImpl).categories[0].articles[1].related[0].name === "article"
    && (instance[1] as PersonImpl).articles.filter(e => e.name === "article").length === 1
    && (instance[3] as StudentImpl).articles.filter(e => e.name === "article").length === 1
    && (instance[3] as StudentImpl).articles.filter(e => e.name === "article2").length === 1
    && (instance[3] as StudentImpl).articles.filter(e => e.name === "article3").length === 1
}