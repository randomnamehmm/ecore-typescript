import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {Set} from "ecore/Set";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {WebpagePackageLiterals} from "webpage/WebpagePackageLiterals";
import {Source} from "webpage/Source";
		
			export class SourceBase
			extends BasicEObjectImpl
			implements Source
			{
				private _title:string = '';
				get title():string{
					return this._title;
				}
				set title(value:string){
					this._title = value; 
				}
				private _url:string = '';
				get url():string{
					return this._url;
				}
				set url(value:string){
					this._url = value; 
				}
				private _page_no:OrderedSet<number> = new OrderedSet<number>();
				get page_no():OrderedSet<number>{
					if(this._page_no===null){
						this._page_no = new OrderedSet<number>();
							
					}
					return this._page_no;
				}
				set page_no(value:OrderedSet<number>){
					this._page_no = value; 
				}
				private _authors:Set<string> = new Set<string>();
				get authors():Set<string>{
					if(this._authors===null){
						this._authors = new Set<string>();
							
					}
					return this._authors;
				}
				set authors(value:Set<string>){
					this._authors = value; 
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return SourceBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case WebpagePackageLiterals.SOURCE__TITLE:
							return this.title;
						case WebpagePackageLiterals.SOURCE__URL:
							return this.url;
						case WebpagePackageLiterals.SOURCE__PAGE_NO:
							return this.page_no;
						case WebpagePackageLiterals.SOURCE__AUTHORS:
							return this.authors;
					}
					//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case WebpagePackageLiterals.SOURCE__TITLE:
							this.title = <string> newValue;
							return;
						case WebpagePackageLiterals.SOURCE__URL:
							this.url = <string> newValue;
							return;
						case WebpagePackageLiterals.SOURCE__PAGE_NO:
							this.page_no.clear();
							this.page_no.addAll(newValue);
							return;
						case WebpagePackageLiterals.SOURCE__AUTHORS:
							this.authors.clear();
							this.authors.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
