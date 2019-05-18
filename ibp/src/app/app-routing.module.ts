import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardsComponent } from './header/boards/boards.component';
import { HomeComponent } from './header/home/home.component';
import { LoginComponent } from './header/login/login.component';
import { RulesComponent } from './footer/rules/rules.component';
import { ContactsComponent } from './footer/contacts/contacts.component';
import { AboutComponent } from './footer/about/about.component';
import { CabinetComponent } from './header/cabinet/cabinet.component';
import { AuthorizationGuard } from './guards/authorization.guard';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { NotauthGuard } from './guards/notauth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { BoardDetailsComponent } from './header/board-details/board-details.component';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AboutUserComponent } from './header/cabinet/about-user/about-user.component';
import { InviteuserComponent } from './header/cabinet/inviteuser/inviteuser.component';
import { MymentionsComponent } from './header/cabinet/mymentions/mymentions.component';
import { MypostsComponent } from './header/cabinet/myposts/myposts.component';
import { AdminComponent } from './header/cabinet/admin/admin.component';
import { ReportsComponent } from './header/cabinet/admin/reports/reports.component';
import { ManageusersComponent } from './header/cabinet/admin/manageusers/manageusers.component';
import { ManageboardsComponent } from './header/cabinet/admin/manageboards/manageboards.component';
import { RepliesComponent } from './replies/replies.component';

const routes: Routes = [
  {path: '', component: BoardsComponent},
  // {path: 'boards', component: BoardsComponent},
  {path: 'boards/:short_name', component: BoardDetailsComponent},
  {path: 'boards/:board_index/createpost', component: PostsComponent},
  {path: 'boards/:board_index/:post_index/createreplies', component: RepliesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent, canActivate: [NotauthGuard]},
  {path: 'rules', component: RulesComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'me', component: CabinetComponent, canActivate: [AuthorizationGuard], children: [
    {path: 'info', component: AboutUserComponent},
    {path: 'invites', component: InviteuserComponent},
    {path: 'posts', component: MypostsComponent},
    {path: 'mentions', component: MymentionsComponent},
    {path: 'admin', children: [
      {path: 'reports', component: ReportsComponent},
      {path: 'boards', component: ManageboardsComponent},
      {path: 'users', component: ManageusersComponent},
    ]},
  ]},

  // {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
