import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsComponent } from './course/lists/lists.component';
import { MemberDetailComponent } from './course/members/member-detail/member-detail.component';
import { MemberListComponent } from './course/members/member-list/member-list.component';
import { MessagesComponent } from './course/messages/messages.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';

// use this array to provide the routes that we tell Angular about
const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'course/members', component: MemberListComponent},
      {path: 'course/members/:id', component: MemberDetailComponent},
      {path: 'course/lists', component: ListsComponent},
      {path: 'course/messages', component: MessagesComponent},
    ]
  },
  // wildcard route, return back to home
  {path: 'errors', component: TestErrorsComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
