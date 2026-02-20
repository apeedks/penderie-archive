import { Component, OnInit, ViewChild , EventEmitter, Input, OnChanges} from '@angular/core';
@Component({
    selector: 'app-iconfilter',
    template: `<div class="media-left" *ngIf="iconimage != ''">
    				<a class="carosual_theme_icon" routerLink="/{{visittype}}/luxurypedia/luxurypedia-theme/{{theme}}">
	    				<img class="icon-normal" [src]="iconimage" alt="icon"/>
						<img class="icon-hover" [src]="iconhover" alt="icon"/>
						<img class="redicon"  [src]="iconredicon" alt="icon"/>
    				</a>
				</div> 
	        	<span class="carosual_theme_icon_name" *ngIf="name"><a class="hovercolor" routerLink="/{{visittype | lowercase}}/luxurypedia/luxurypedia-theme/{{theme}}">{{theme}}</a></span>`,
    providers: []
})
export class IconFilterComponent implements OnInit {
		public items = [];
		@Input() theme:any;
		visittype = '';
		@Input() name:boolean = false;
		icon:any = ['head-icon1.png','head-icon2.png','head-icon3.png','head-icon4.png','head-icon5.png'];
		iconimage:string = '';
		iconhover:string = '';
		iconredicon:string = '';
		tmptheme:string;
	constructor(){
	    this.visittype = localStorage.getItem('visittype');
	}
	
	ngOnInit() { 
		if(this.theme != this.tmptheme){
			this.tmptheme = this.theme; 
			switch (this.theme) {
	            case ('The True Luxury'):
	                this.iconimage ='assets/img/head-icon1.png';
	                this.iconhover ='assets/img/img-r1.png';
	                this.iconredicon ='assets/img/img-inn-4.png';
	                break;
	            case ('Fine Material'):
	                this.iconimage ='assets/img/head-icon1.png';
	                this.iconhover ='assets/img/img-r1.png';
	                this.iconredicon ='assets/img/img-inn4.png';
	                break;
	            case ('Superior Craftsmanship'):
	                this.iconimage ='assets/img/head-icon2.png';
	                this.iconhover ='assets/img/img-r2.png';
	                this.iconredicon ='assets/img/img-inn3.png';
	                break;
	            case ('Art of Styling'):
	                this.iconimage ='assets/img/head-icon3.png';
	                this.iconhover ='assets/img/img-r3.png';
	                this.iconredicon ='assets/img/img-inn2.png';
	                break;
	            case ('Balanced Living'):
	                this.iconimage ='assets/img/head-icon4.png';
	                this.iconhover ='assets/img/img-r4.png';
	                this.iconredicon ='assets/img/img-inn1.png';
	                break;
	        }
     	}
	    
    }

	}	
	
	