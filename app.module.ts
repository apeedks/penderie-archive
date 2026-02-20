import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CKEditorModule } from 'ng2-ckeditor';
import {DbserviceService} from './services/dbservice.service';
import { AuthenticationService } from './services/authentication.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { AuthGuard } from './auth.guard';
import {AdminModule} from './admin/admin.module';
import {MyaccountModule} from './myaccount/myaccount.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './nav/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './nav/footer.component';
import {SlideshowModule} from 'ng-slideshow';
import {NgxPaginationModule} from 'ngx-pagination';
import { PageComponent } from './page/page.component';
import { FooterTemplatesComponent } from './footer-templates/footer-templates.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CookieService } from 'ngx-cookie-service';
import { PrimarynavComponent } from './widgets/primarynav/primarynav.component';
import { PreviewComponent } from './preview/preview.component';
import { TemplateComponent } from './template/template.component';
import {ScriptService} from "./services/script.service";
import { ThemeComponent } from './theme/theme.component';
import { ThemepreviewComponent } from './themepreview/themepreview.component';
import { LoginComponent } from './login/login.component';
import { ForgotUsernameComponent } from './forgotusername/forgotusername.component';
import { ForgotPasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { RegisterComponent } from './register/register.component';
import { VerifyComponent } from './verify/verify.component';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService }   from './translate/index';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { JasperoAlertsModule } from '@jaspero/ng2-alerts';
import { InnerheaderComponent } from './nav/innerheader.component';
import { InnerfooterComponent } from './nav/innerfooter.component';
/*import {SocialLoginModule,AuthServiceConfig,GoogleLoginProvider,FacebookLoginProvider,LinkedinLoginProvider} from 'ng4-social-login';*/
/*import {SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';*/
import { Angular2SocialLoginModule, AuthService }             from 'angular2-social-login';
import { FacebookModule }                        from 'ngx-facebook';
// import {SocialLoginModule,AuthServiceConfig,GoogleLoginProvider,FacebookLoginProvider,LinkedinLoginProvider} from 'ng4-social-login';
import { FineMaterialComponent } from './fine-material/fine-material.component';
import { SuperiarCraftmanshipComponent } from './superiar-craftmanship/superiar-craftmanship.component';
import { ArtofstyleingComponent } from './artofstyleing/artofstyleing.component';
import { BalancedLivingComponent } from './balanced-living/balanced-living.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ShareButtonsModule } from 'ngx-sharebuttons';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { MypenderieComponent } from './nav/mypenderie.component';
import { MemdashboardiconsComponent } from './nav/memdashboardicons.component';
import {OnboardwizardComponent } from './onboardwizard/onboardwizard.component';
import {SharenannouceComponent} from './sharenannouce/sharenannouce.component';
import { StoriesComponent } from './stories/stories.component';
import { StorydetComponent } from './stories/storydet/storydet.component';
import { LuxurypediaComponent } from './luxurypedia/luxurypedia.component';
import { LuxuryarticleComponent } from './luxurypedia/luxuryarticle/luxuryarticle.component';
import { LuxurythemeComponent } from './luxurypedia/luxurytheme/luxurytheme.component';
import { ThemenavComponent } from './widgets/themenav/themenav.component';
import { GenmenunavComponent } from './widgets/genmenunav/genmenunav.component';
import { LoungeComponent } from './lounge/lounge.component';
import { LoupeComponent } from './loupe/loupe.component';
import { ReviewProductsComponent } from './loupe/review-products/review-products.component';
import { ReviewProductComponent } from './loupe/review-product/review-product.component';
import { ReviewServiceComponent } from './loupe/review-service/review-service.component';
import { ReviewServicesComponent } from './loupe/review-services/review-services.component';
import { SecureurlPipe } from './secureurl.pipe';
import { SecurehtmlPipe } from './securehtml.pipe';
import {TooltipModule} from "ngx-tooltip";
import { TestingComponent } from './testing/testing.component';
import { DocumentationComponent } from './knowledge/documentation/documentation.component';
import { DetailComponent } from './knowledge/detail/detail.component';
import { UpdatesComponent } from './knowledge/updates/updates.component';
import { UpdatedetComponent } from './knowledge/updatepage/updatedet.component';
import { TutorialsComponent } from './knowledge/tutorials/tutorials.component';
import { FaqComponent } from './knowledge/faq/faq.component';
import { ShareboxComponent } from './widgets/sharebox/sharebox.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { LoupesliderComponent } from './widgets/loupeslider/loupeslider.component';
import { StoriessliderComponent } from './widgets/storiesslider/storiesslider.component';
import { MyDatePickerModule } from 'mydatepicker';
import { LuxurypediasliderComponent } from './widgets/luxurypediaslider/luxurypediaslider.component';
import { TrueluxurystoriessliderComponent } from './widgets/trueluxurystoriesslider/trueluxurystoriesslider.component';
import { MagazinesComponent } from './magazines/magazines.component';
import { ShowComponent } from './magazines/show/show.component';
import { MagazinepreComponent } from './magazines/magazinepre/magazinepre.component';
import { MagazineComponent } from './magazines/magazine/magazine.component';
import { StoryComponent } from './stories/story/story.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { ImageCropperModule } from 'ng2-img-cropper';
import { limitToPipe } from './pipe/limit.pipe';
import { EmojiPickerModule } from 'angular2-emoji-picker';
import { RecaptchaModule, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { MonthFilter} from './knowledge/updates/monthfilter.pipe';
import { CkEditorComponent } from './ckeditor.component';
import { ThemeFilterComponent } from './themefilter.component';
import { StatusFilterComponent } from './statusfilter.component';
import { IconFilterComponent } from './iconfilter.component';
import { UniquePipe } from './unique.pipe';
import { Unique1Pipe } from './unique1.pipe';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { JsonFilterByPipe } from './json-filter-by.pipe';
/*import { DatePickerModule } from "angular-io-datepicker";*/
/*import {DatepickerModule} from 'ngx-date-picker';     1722136574686974               */
/*

const CONFIG = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("787500977527-52oi41tvvg8af1r2vmmn9tjrmndi4ad5.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("2078558282375658")
  },
  {
    id: LinkedinLoginProvider.PROVIDER_ID,
    provider: new LinkedinLoginProvider('81jxgmxykq8p5e')
  }
]);

export function provideConfig() {
  return CONFIG;
}
*/

// const CONFIG = new AuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     // provider: new GoogleLoginProvider("787500977527-52oi41tvvg8af1r2vmmn9tjrmndi4ad5.apps.googleusercontent.com")
//     provider: new GoogleLoginProvider("767946714520-f5vlvlsmfhhe93k51s7ssdmeuipq05an.apps.googleusercontent.com")
//   },
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     // provider: new FacebookLoginProvider("2078558282375658")
//     provider: new FacebookLoginProvider("1780419275334741")
//   },
//   {
//     id: LinkedinLoginProvider.PROVIDER_ID,
//     // provider: new LinkedinLoginProvider('81jxgmxykq8p5e')
//     provider: new LinkedinLoginProvider('81pstufnkngayq')
//   }
// ], false);

// export function provideConfig() {
//   return CONFIG;
// }

let providers = {
    "google": {
        "clientId"    : "767946714520-f5vlvlsmfhhe93k51s7ssdmeuipq05an.apps.googleusercontent.com"
    },
    "linkedin": {
        "clientId"    : "81pstufnkngayq"
    },
    "facebook": {
        "clientId"    : "1780419275334741",
        "apiVersion"  : "2.10"
    }
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
	MenComponent,
	WomenComponent,
	NotfoundComponent,
	HeaderComponent,
	NavComponent,
	FooterComponent,
	PageComponent,
	FooterTemplatesComponent,
	ContactusComponent,
	PrimarynavComponent,
	PreviewComponent,
	TemplateComponent,
	ThemeComponent,
	ThemepreviewComponent,
  LoginComponent,
  ForgotUsernameComponent,
  ForgotPasswordComponent,
  ResetpassComponent,
	OnboardwizardComponent, 
	SharenannouceComponent,	
	RegisterComponent,
	VerifyComponent, 
	TranslatePipe, 
	SearchresultsComponent, 
	FaqComponent, 
	InvoiceComponent, 
	InnerheaderComponent, 
	InnerfooterComponent, 
	FineMaterialComponent, 
	SuperiarCraftmanshipComponent, 
	ArtofstyleingComponent, 
	BalancedLivingComponent, 
	KnowledgeComponent, 
	DetailComponent,
	MypenderieComponent, 
	MemdashboardiconsComponent, 
	StoriesComponent, 
	StorydetComponent,
	UpdatedetComponent,
	LuxurypediaComponent, 
	LuxuryarticleComponent, 
	LuxurythemeComponent, 
	ThemenavComponent, 
	GenmenunavComponent, 
	LoungeComponent, 
	LoupeComponent, 
	ReviewProductsComponent, 
	ReviewProductComponent, 
	ReviewServiceComponent, 
	ReviewServicesComponent, 
	SecureurlPipe,
	SecurehtmlPipe, 
	TestingComponent, 
	DocumentationComponent, 
	UpdatesComponent, 
	TutorialsComponent, 
	ShareboxComponent, 
	LoupesliderComponent, 
	StoriessliderComponent, 
	LuxurypediasliderComponent, 
	TrueluxurystoriessliderComponent, 
	MagazinesComponent, 
	ShowComponent,
	MagazineComponent,
	MagazinepreComponent,
	StoryComponent,
	limitToPipe,
	MonthFilter,
	CkEditorComponent,
	ThemeFilterComponent,
	IconFilterComponent,
	UniquePipe,
	Unique1Pipe,
	StatusFilterComponent,
	JsonFilterByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpModule,
	CKEditorModule,
	CommonModule,
	FormsModule,
	AdminModule,
	JasperoAlertsModule,
	MyaccountModule,
	AngularMultiSelectModule,
	SlideshowModule,
	TooltipModule,
    MyDatePickerModule,
	HttpClientModule,             // (Required) for share counts
    HttpClientJsonpModule,        // (Optional) for linkedIn and tumblr share counts
	NgxPaginationModule,
	ColorPickerModule,
	ImageCropperModule,
    ShareButtonsModule.forRoot(),
		EmojiPickerModule.forRoot(),
		RecaptchaModule.forRoot(),
	Angular2SocialLoginModule,
	FacebookModule.forRoot(),
	InfiniteScrollModule
	/*DatePickerModule*/
  ],
  providers: [
			  DbserviceService,
			  AuthGuard,
			  HeaderComponent,
			  NavComponent,
			  FooterComponent,
			  AuthenticationService,
			  CookieService,
			  ScriptService,
			  TRANSLATION_PROVIDERS, 
			  TranslateService,
			  // {
				 //  	provide: AuthServiceConfig,
     //  				useFactory: provideConfig
			  // }
			  AuthService
			],
  bootstrap: [AppComponent]
})
export class AppModule { }

Angular2SocialLoginModule.loadProvidersScripts(providers);