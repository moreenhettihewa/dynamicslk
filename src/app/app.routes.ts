import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { PageComponent } from './page/page.component';


export const routes: Routes = [
    {
      path: '', component: MainComponent
    },
    {
      path: 'footer',
      component: FooterComponent
    }, {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'sample',
      component: PageComponent
    },
    { path: '**', redirectTo: '' }
  ];