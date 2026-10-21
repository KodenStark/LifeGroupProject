import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Events } from './pages/events/events';
import { Contact } from './pages/contact/contact';


export const routes: Routes = [
    {path: '', component: Home, title: 'The Brotherhood'},
    {path: 'about', component: About, title: 'About | The Brotherhood'},
    {path: 'events', component: Events, title: 'Events | The Brotherhood'},
    {path: 'contact', component: Contact, title: 'Join Us | The Brotherhood'},
    {path: '**', redirectTo: ''},
];
