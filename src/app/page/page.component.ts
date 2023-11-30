import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {
  @Input()
  title: string | undefined;

  @Input()
  subHeader: string | undefined;

  @Input()
  description: string | undefined;

  @Input()
  image: string | undefined;

  @Input()
  items: subItem[] | undefined;

  @Input()
  isLeftImage: boolean;

  @Input()
  upperSpace:boolean;

  constructor() {
    this.isLeftImage = true;
    this.upperSpace = false;
  }

  ngOnInit(): void {}
}

export interface subItem {
  title: string;
  description: descriptionItem[];
}

export interface descriptionItem {
  title:string;
  item: string[];
}
