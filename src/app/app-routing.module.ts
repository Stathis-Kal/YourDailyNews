import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { NewsComponent } from './main-content/news/news.component';
import { AboutComponent } from './main-content/about/about.component';
import { SideNavComponent } from './toolbar/side-nav/side-nav.component';
import { HomeComponent } from './main-content/home.component';

const appRoutes: Routes = [
    { path: '', component: SideNavComponent,
      children: [
          { path: '', component: HomeComponent },
          { path: 'news', component: NewsComponent },
          { path: 'about', component: AboutComponent }
      ] },    
    { path: '**', redirectTo: '/'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}