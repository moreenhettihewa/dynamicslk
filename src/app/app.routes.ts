import { Routes } from '@angular/router';
import { Main } from './main/main';
import { Footer } from './footer/footer';
import { About } from './about/about';
import { Page } from './page/page';


export const routes: Routes = [
    {
      path: '', component: Main
    },
    {
      path: 'footer',
      component: Footer
    }, {
      path: 'about',
      component: About
    },
    {
      path: 'sample',
      component: Page
    },
    { path: '**', redirectTo: '' }
  ];