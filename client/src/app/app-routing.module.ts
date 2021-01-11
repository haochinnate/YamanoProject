import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompareComponent } from './car/compare/compare.component';
import { ManufacturerListComponent } from './car/db/manufacturer-list/manufacturer-list.component';
import { FindComponent } from './car/find/find.component';
import { NewsComponent } from './car/news/news.component';
import { PttformatComponent } from './car/pttformat/pttformat.component';
import { ListsComponent } from './course/lists/lists.component';
import { MemberDetailComponent } from './course/members/member-detail/member-detail.component';
import { MemberListComponent } from './course/members/member-list/member-list.component';
import { MessagesComponent } from './course/messages/messages.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
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
  {path: 'car/db', component: ManufacturerListComponent},
  {path: 'car/find', component: FindComponent},
  {path: 'car/news', component: NewsComponent},
  {path: 'car/compare', component: CompareComponent},
  {path: 'car/pttformat', component: PttformatComponent},
  {path: 'errors', component: TestErrorsComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  // wildcard route, return back to home
  {path: '**', component: NotFoundComponent, pathMatch: 'full'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
