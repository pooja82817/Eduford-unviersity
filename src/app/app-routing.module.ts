import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { CourseComponent } from './components/course/course.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/home",
    pathMatch:"full"
  },
  {
    path:'home',
    component:HomepageComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"course",
    component:CourseComponent
  },
  {
    path:"blog",
    component:BlogComponent
  },
  {
    path:"contact",
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // {scrollPositionRestoration:'enabled'}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
