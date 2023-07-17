import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FaqComponent } from './pages/faq/faq.component';
import { SpeakerComponent } from './pages/speaker/speaker.component';

const routes: Routes = [
  {path: '', component: HomeComponent, title: "KINFLIP"},
  {path: 'faq', component: FaqComponent, title: "FAQ - KINFLIP"},
  {path: 'speaker', component: SpeakerComponent, title: "Register - KINFLIP"},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
