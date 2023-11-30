import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { PageComponent } from '../page/page.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, PageComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  currentId: number = 1;
  headerVisible:boolean = false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // this.headerVisible = true;
   
    if(window.pageYOffset > 100 && window.pageYOffset <=900){

      document.getElementById("video")!.style.opacity = ( window.pageYOffset -100) * (80-100) /800  + 100 +'%';
      document.getElementById("video")!.style.filter= "blur("+( window.pageYOffset -100) * (10-0) /800 + "px)";

    }


  }

  // design data
  designTitle = 'DESIGN';
  designSubHeader = 'We will design for you.';
  designDescription =
    'Engineering design is an amazing combination both artistic and technical perfection. It is the first stage of bringing a idea into reality. We provide unrivalled world class engineering design services.';
  designItems = [
    {
      title: 'Product Design.',
      description: [
        {
          title: 'Conceptual Design',
          item: [
            'Design Sketches',
            'Morphological Analysis',
            'Concept Drawings',
            'Concept 3D Models',
          ],
        },
        {
          title: 'Detailed Design',
          item: [
            'Design Calculations',
            '3D Modeling',
            'Component Selection',
            'Detailed 2D Drawings',
          ],
        },
      ],
    },
    {
      title: 'Automation and Machine Design.',
      description: [
        { title: 'System Concultations and Repairs', item: [] },
        { title: 'Custom Machines and Automations', item: [] },
      ],
    },
    {
      title: 'Electrical and Electronics.',
      description: [
        { title: 'Embedded System Design', item: [] },
        { title: 'Analog and Digital System Design', item: [] },
        {
          title: 'Circuit Design with CAD based Circuit Simulations',
          item: [],
        },
      ],
    },
    {
      title: 'Graphics and Animation Design.',
      description: [
        {
          title: 'Marketing Material of Products',
          item: ['Flyers', 'Banners', 'Booklets'],
        },
        { title: 'Product Animations', item: [] },
      ],
    },
  ];

  // simulation data
  simulationTitle = 'SIMULATION';
  simulationSubHeader = 'We will simulate for you.';
  simulationDescription =
    'Simulation modeling solves real world problems safely and efficiently in a virtual environment. Across industries and disciplines, simulations provide valuable solutions by giving insight into complex systems.';

  simulationItems = [
    {
      title: 'Structural and Impact.',
      description: [
        {
          title: 'Structural Simulations using Finite Element Analysis (FEA)',
          item: [],
        },
        { title: 'Topological Optimizations of Components', item: [] },
        {
          title: 'Impact Simulations using Explicit Dynamic Methods',
          item: [],
        },
      ],
    },

    {
      title: 'Computational Fluid Dynamics (CFD)',
      description: [
        {
          title: 'Hydrodynamic and Aerodynamic Simulations',
          item: [],
        },
        {
          title: 'Multiphase Simulations',
          item: [],
        },
        {
          title: 'Particle Dynamics and Mass Transfer Simulations',
          item: [],
        },
      ],
    },

    {
      title: 'Heat Transfer',
      description: [
        {
          title: 'Building Envolpe Simulations',
          item: [],
        },
        {
          title: 'Heat Transfer of Machine Components',
          item: [],
        },
        {
          title: 'Thermal Energy Storages',
          item: [],
        },
      ],
    },

    {
      title: 'Custom Numerical Computations',
      description: [
        {
          title:
            'It is a long established fact that a reader will be distracted by the readable content of a page.',
          item: [],
        },
      ],
    },
  ];

  // development data
  developTitle = 'DEVELOPMENT';
  developSubHeader = 'We will develop for you.';
  developDescription =
    'We ensure that the end result is extraordinary; a practical design, effective for manufacturing and market ready in every aspect from colour, material and finish. A solid foundation on which high performance solutions are engineered with innovative functionalities, high impact visual stimuli and ultra-responsive user experiences that are optimal for tomorrow’s world.';
  developItems = [
    {
      title: '3D printing and Resin Casting.',
      description:[
        {
          title:
            'It is a long established fact that a reader will be distracted by the readable content of a page.',
          item: [],
        },
      ]    },
    {
      title: 'Composite part Manufacturing.',
      description:
      [
        {
          title:
            'It is a long established fact that a reader will be distracted by the readable content of a page.',
          item: [],
        },
      ]    },
    {
      title: 'Manual and CNC Machining.',
      description:
      [
        {
          title:
            'It is a long established fact that a reader will be distracted by the readable content of a page.',
          item: [],
        },
      ]    },
    {
      title: 'Assembly and Testing.',
      description:
      [
        {
          title:
            'It is a long established fact that a reader will be distracted by the readable content of a page.',
          item: [],
        },
      ]    },
  ];

  // TODO about data

  // TODO client data

  constructor() {}

  ngOnInit(): void {}

  goToHome(){
    this.currentId = 1;
  }
  goToDesign(){
    this.currentId = 2;
  }
  goToSimulation(){
    this.currentId = 3;
  }
  goToDevelopment(){
    this.currentId = 4;
  }
  goToAbout(){
    this.currentId = 5;
  }
  goToContact(){
    this.currentId = 6;
  }

  getClassActive(id: number){
    if( this.currentId == id){
      return "active";
      // return "";
    }else{
      return "";
    }
  }
}
