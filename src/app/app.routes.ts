import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ActivetasksComponent } from './activetasks/activetasks.component';
import { DeactivetasksComponent } from './deactivetasks/deactivetasks.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'activetasks',component:ActivetasksComponent},
    {path:'deactivetasks',component:DeactivetasksComponent}

];
