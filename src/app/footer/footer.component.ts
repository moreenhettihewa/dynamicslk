import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-footer',
    standalone : true,
    imports: [CommonModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent {

  @Input()
  footerContent: FooterData[] | undefined;

  constructor() {}

  ngOnInit(): void {
    this.footerContent = [
      {
        title: 'ADDRESS',
        data: ['NO: 1/3', '410/128 ', 'Bauddhaloka Mawatha', 'Colombo 07'],
      },
      {
        title: 'PHONE',
        data: ['+94718928743', '+94718928743', '+94718928743'],
      },
      {
        title: 'EMAIL',
        data: ['contact@dynamics.lk'],
      },
    ];
  }
}

export interface FooterData {
  title: string;
  data: string[];
}

