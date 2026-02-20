import { NgModule } from '@angular/core';
import {AuthGuard} from './auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {AdminModule} from './admin/admin.module';
import {MyaccountModule} from './myaccount/myaccount.module';
import { PageComponent } from './page/page.component';
import { FooterTemplatesComponent } from './footer-templates/footer-templates.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PreviewComponent } from './preview/preview.component';
import { TemplateComponent } from './template/template.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemepreviewComponent } from './themepreview/themepreview.component';
import { LoginComponent } from './login/login.component';
import { ForgotUsernameComponent } from './forgotusername/forgotusername.component';
import { ForgotPasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { RegisterComponent } from './register/register.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { VerifyComponent } from './verify/verify.component';
import { FineMaterialComponent } from './fine-material/fine-material.component';
import { SuperiarCraftmanshipComponent } from './superiar-craftmanship/superiar-craftmanship.component';
import { ArtofstyleingComponent } from './artofstyleing/artofstyleing.component';
import { BalancedLivingComponent } from './balanced-living/balanced-living.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { SharenannouceComponent } from './sharenannouce/sharenannouce.component';
import { OnboardwizardComponent } from './onboardwizard/onboardwizard.component';
import { StoriesComponent } from './stories/stories.component';
import { StorydetComponent } from './stories/storydet/storydet.component';
import { LuxurypediaComponent } from './luxurypedia/luxurypedia.component';
import { LuxuryarticleComponent } from './luxurypedia/luxuryarticle/luxuryarticle.component';
import { LuxurythemeComponent } from './luxurypedia/luxurytheme/luxurytheme.component';
import { TestingComponent } from './testing/testing.component';
import { LoungeComponent } from './lounge/lounge.component';
import { LoupeComponent } from './loupe/loupe.component';
import { ReviewProductsComponent } from './loupe/review-products/review-products.component';
import { ReviewProductComponent } from './loupe/review-product/review-product.component';
import { ReviewServiceComponent } from './loupe/review-service/review-service.component';
import { ReviewServicesComponent } from './loupe/review-services/review-services.component';
import { DocumentationComponent } from './knowledge/documentation/documentation.component';
import { UpdatedetComponent } from './knowledge/updatepage/updatedet.component';
import { UpdatesComponent } from './knowledge/updates/updates.component';
import { TutorialsComponent } from './knowledge/tutorials/tutorials.component';
import { FaqComponent } from './knowledge/faq/faq.component';
import { DetailComponent } from './knowledge/detail/detail.component';
import { MagazinesComponent } from './magazines/magazines.component';
import { ShowComponent } from './magazines/show/show.component';
import { MagazineComponent } from './magazines/magazine/magazine.component';
import { StoryComponent } from './stories/story/story.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
	{ path: 'home', pathMatch: 'full', component: HomeComponent },
	{
        path: 'man',
        component: MenComponent,
        children: []
    },
	{
        path: 'women',
        component: WomenComponent,
        children: []
    },
	{
        path: 'knowledge',
        children: [
				   	{path: '',component: DetailComponent,pathMatch: 'prefix'},
				   	{path: ':type',component: KnowledgeComponent,pathMatch: 'prefix'},
					{path: 'faq/:type',component: FaqComponent,pathMatch: 'prefix'},
					{path: 'documentation/:type',component: DocumentationComponent,pathMatch: 'prefix'},
					{path: 'updates/:type',component: UpdatesComponent,pathMatch: 'prefix'},	
					{path: 'updates/:type/:updateid', component: UpdatedetComponent, pathMatch: 'prefix' },
					{path: 'tutorials/:type',component: TutorialsComponent,pathMatch: 'prefix'},
			]
    },
	{
        path: 'loupe',
        children: [
				   	{path: 'select',component: LoupeComponent,pathMatch: 'prefix'},
					{path: 'product/:reviewid',component: ReviewProductComponent,pathMatch: 'prefix'},
					{path: 'products',component: ReviewProductsComponent,pathMatch: 'prefix'},	
					{path: 'service/:reviewid',component: ReviewServiceComponent,pathMatch: 'prefix'},
					{path: 'services',component: ReviewServicesComponent,pathMatch: 'prefix'},
			]
    },
	
	{ path: 'testing', pathMatch: 'full', component: TestingComponent },
	{ path: 'lounge', pathMatch: 'full', component: LoungeComponent },
	{ path: ':visittype/magazines', pathMatch: 'full', component: MagazinesComponent },
	{ path: ':visittype/magazines/:theme', pathMatch: 'full', component: MagazinesComponent },
	{ path: ':visittype/magazines/show/:magid', pathMatch: 'full', component: ShowComponent },
	{ path: 'magazines/magazine/:magid', component: MagazineComponent,canActivate: [AuthGuard] },
	{path: 'myaccount/poststory', component: StoryComponent,canActivate: [AuthGuard] },
    {path: 'myaccount/editstory/:id',component: StoryComponent,canActivate: [AuthGuard]},
	{ path: ':visittype/luxurypedia', pathMatch: 'full', component: LuxurypediaComponent },
	{ path: ':visittype/luxurypedia/luxurypedia-theme/:theme', pathMatch: 'full', component: LuxurythemeComponent },
	{ path: 'luxurypedia-article/:theme/:articleid', pathMatch: 'full', component: LuxuryarticleComponent },
	{ path: 'stories', pathMatch: 'full', component: StoriesComponent },
	{ path: 'stories/:theme', pathMatch: 'full', component: StoriesComponent },
	{ path: 'story/:stroyid', pathMatch: 'full', component: StorydetComponent },
	{ path: 'template', pathMatch: 'full', component: TemplateComponent },
	{ path: 'page/:pageid', pathMatch: 'full', component: PageComponent },
	{ path: 'preview/:pageid', pathMatch: 'full', component: PreviewComponent },
	{ path: 'theme/:pageid', pathMatch: 'full', component: ThemeComponent },
	{ path: 'themepreview/:pageid', pathMatch: 'full', component: ThemepreviewComponent },
	{ path: 'footer-templates', pathMatch: 'full', component: FooterTemplatesComponent },
	{ path: 'contactus', pathMatch: 'full', component: ContactusComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'forgotusername', pathMatch: 'full', component: ForgotUsernameComponent },
  { path: 'forgotpassword', pathMatch: 'full', component: ForgotPasswordComponent },
  { path: 'resetpass/:resettoken',component: ResetpassComponent },
	{ path: 'register', pathMatch: 'full', component: RegisterComponent },
	{ path: 'searchresults', pathMatch: 'full', component: SearchresultsComponent },
	{ path: 'invoice', pathMatch: 'full', component: InvoiceComponent },
	{ path: 'fine-material', pathMatch: 'full', component: FineMaterialComponent },
	{ path: 'superiar-craftmanship', pathMatch: 'full', component: SuperiarCraftmanshipComponent },
	{ path: 'art-of-styling', pathMatch: 'full', component: ArtofstyleingComponent },
	{ path: 'balanced-living', pathMatch: 'full', component: BalancedLivingComponent },
	{ path: 'verify/:token', pathMatch: 'full', component: VerifyComponent },
	{path: 'onboardwizard',component: OnboardwizardComponent,canActivate: [AuthGuard]},
	{path: 'sharenannounce',component: SharenannouceComponent,canActivate: [AuthGuard]},
	{path: 'testing',component: TestingComponent,canActivate: [AuthGuard]},
	{path: '**',component: NotfoundComponent},
];

@NgModule({
  imports: [
	AdminModule,
	MyaccountModule,
	RouterModule.forRoot(routes)
  ],
  exports:[
	RouterModule	   
  ],
  declarations: []
})
export class AppRoutingModule { }
