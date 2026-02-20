import { Component, OnInit,AfterViewChecked } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TranslateService } from './translate';
import $ from 'jquery';
import { Location } from '@angular/common';
import { EmojiPickerOptions } from 'angular2-emoji-picker';
import { EmojiPickerAppleSheetLocator } from 'angular2-emoji-picker/lib-dist/sheets';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewChecked {
	title = 'app';
	public translatedText: string;
	public supportedLangs: any[];
	constructor(private emojiPickerOptions: EmojiPickerOptions, private cookieService: CookieService,private _translate: TranslateService,private router: Router, private location: Location) {
		localStorage.setItem('currlang',"en");
		router.events.subscribe((event: RouterEvent) => {
		  this.navigationInterceptor(event)
		});
		this.emojiPickerOptions.setEmojiSheet({
	      	url: 'sheet_apple_32.png',
	      	locator: EmojiPickerAppleSheetLocator
	    });
	}
	showloader(status)
	{
		if(status)
			$(".myloaderdiv").css('display','block');
		else
			$(".myloaderdiv").css('display','none');
	}
	navigationInterceptor(event: RouterEvent): void {
		if (event instanceof NavigationStart) {
			this.showloader(true);
		}
		if (event instanceof NavigationEnd) {
			this.showloader(false);
		}

		// Set loading state to false in both of the below events to hide the spinner in case a request fails
		if (event instanceof NavigationCancel) {
			this.showloader(false);
		}
		if (event instanceof NavigationError) {
			this.showloader(false);
		}
	}
	ngAfterViewChecked()
	{
		$(".firsttimeloader").css("display","none");
	}
	ngOnInit()
	{

		let currlang = localStorage.getItem('currlang');
		this.supportedLangs = [	{ display: 'English', value: 'en' }	];
		this.selectLang(currlang);
		/*localStorage.setItem('apiurl',"http://localhost/penderie/api/public/");
		localStorage.setItem('baseurl',"http://localhost/penderie/");*/
		localStorage.setItem('apiurl',"https://demo.penderie.com/api/public/");

		//live
		localStorage.setItem('baseurl',"https://demo.penderie.com/api/public/");
		localStorage.setItem('basewebsiteurl',"https://demo.penderie.com/api/public/");

		/* 
		//local 
		localStorage.setItem('baseurl',"http://localhost:4200/");
		localStorage.setItem('basewebsiteurl',"http://localhost:4200/");
		*/
		/*localStorage.setItem('apiurl',"api/public/");
		localStorage.setItem('baseurl',"http://penderie.com/newsite/");
		localStorage.setItem('basewebsiteurl',"http://penderie.com/newsite/");*/

		/*localStorage.setItem('apiurl',"api/public/");
		localStorage.setItem('baseurl',"http://appictech.com/penderie/");
		localStorage.setItem('basewebsiteurl',"http://appictech.com/penderie/");*/

		//Current selected section theme
		let sectiontheme:string = this.cookieService.get('sectiontheme')?this.cookieService.get('sectiontheme'):"-";;
		localStorage.setItem('sectiontheme',sectiontheme);

		//Current selected visitor gender type
		// let visittype:string = this.cookieService.get('visittype')?this.cookieService.get('visittype'):"Women";
		let str = this.location.path();
		// console.log(str);
		let visittype:string = this.cookieService.get('visittype');
		if((visittype == null || visittype == '') && str.indexOf("page/terms-policies") == -1){
			this.router.navigate(['/']);
		}else{
			localStorage.setItem('visittype',visittype);
		}
		let checklogginUserData = localStorage.getItem('user');
		if(checklogginUserData){
			let checklogginUserJSONData = JSON.parse(checklogginUserData);
			if(checklogginUserJSONData.usertype=="Admin" && str.indexOf("admin") == -1 && str.indexOf("mprofile") == -1 && str.indexOf("preview") == -1){
				// if (str.indexOf("admin") == -1){
					this.router.navigate(['admin/dashboard']);
				// } 
			}
		}
		
	}

	isCurrentLang(lang: string)
	{
        return lang === this._translate.currentLang;
    }

    selectLang(lang: string)
	{
        this._translate.use(lang);
        this.refreshText();
    }

    refreshText()
	{
        this.translatedText = this._translate.instant('hello world');
    }
}
