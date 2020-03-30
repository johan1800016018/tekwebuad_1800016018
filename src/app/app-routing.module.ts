import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './page/home/home.component';
import {StudentComponent} from './page/student/student.component';
import { TeacherComponent } from './page/teacher/teacher.component';


const routes: Routes=[
{
path :'home',
component :HomeComponent
},

{ 
path :'student',
component :StudentComponent
},
{
	path :'teacher',
	component : TeacherComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
