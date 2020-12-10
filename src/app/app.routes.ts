import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';

export const ROUTES: Routes = [
    {path: '', component: MainComponent},
    {path: 'about', component: AboutComponent},
    {path: 'help', component: HelpComponent}
]
