import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// import { Pipe, PipeTransform } from '@angular/core';
// import { Directive } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BoardsComponent } from './header/boards/boards.component';
import { HomeComponent } from './header/home/home.component';
import { RulesComponent } from './footer/rules/rules.component';
import { AboutComponent } from './footer/about/about.component';
import { ContactsComponent } from './footer/contacts/contacts.component';
import { LoginComponent } from './header/login/login.component';
import { CabinetComponent } from './header/cabinet/cabinet.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

import { BoardsService } from './services/boards.service';
import { UsersService } from './services/users.service';
import { CookieService } from './services/cookie.service';
import { CabinetService } from './services/cabinet.service';
import { TokenInterceptorService } from './services/token-interceptor.service';

import { AuthorizationGuard } from './guards/authorization.guard';
import { NotauthGuard } from './guards/notauth.guard';
import { PostsComponent } from './posts/posts.component';
import { BoardDetailsComponent } from './header/board-details/board-details.component';
import { BoardDetailService } from './services/board-detail.service';
import { AboutUserComponent } from './header/cabinet/about-user/about-user.component';
import { InviteuserComponent } from './header/cabinet/inviteuser/inviteuser.component';
import { MypostsComponent } from './header/cabinet/myposts/myposts.component';
import { MymentionsComponent } from './header/cabinet/mymentions/mymentions.component';
import { AdminComponent } from './header/cabinet/admin/admin.component';
import { ReportsComponent } from './header/cabinet/admin/reports/reports.component';
import { ManageboardsComponent } from './header/cabinet/admin/manageboards/manageboards.component';
import { ManageusersComponent } from './header/cabinet/admin/manageusers/manageusers.component';
import { RepliesComponent } from './replies/replies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BoardsComponent,
    HomeComponent,
    RulesComponent,
    AboutComponent,
    ContactsComponent,
    LoginComponent,
    CabinetComponent,
    PageNotFoundComponent,
    PostsComponent,
    BoardDetailsComponent,
    AboutUserComponent,
    InviteuserComponent,
    MypostsComponent,
    MymentionsComponent,
    AdminComponent,
    ReportsComponent,
    ManageboardsComponent,
    ManageusersComponent,
    RepliesComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [BoardsService,
              UsersService,
              BoardDetailService,
              CookieService,
              CabinetService,
              AuthorizationGuard,
              NotauthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
