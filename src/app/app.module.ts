import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/includes/header/header.component';
import { FooterComponent } from './shared/includes/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { WorksComponent } from './pages/works/works.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { PostsComponent } from './pages/posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    WorksComponent,
    TeamComponent,
    ContactUsComponent,
    ServicesComponent,
    PartnersComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
