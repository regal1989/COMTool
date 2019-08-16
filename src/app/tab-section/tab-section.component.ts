import { Component, OnInit, ViewEncapsulation, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AdDirective } from '../ad.directive';
import { CreatePageComponent } from '../create-page/create-page.component';
import { SearchPageComponent } from '../search-page/search-page.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { ManagePageComponent } from '../manage-page/manage-page.component';
import { TabsService } from '../tabs.service';

export interface tabrow {
    title: string,
    value: string;
}

@Component({
  selector: 'app-tab-section',
  templateUrl: './tab-section.component.html',
  styleUrls: ['./tab-section.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabSectionComponent implements OnInit {
  tabBackgroundColor:string;
  links: tabrow[] = [
    {"title":"Home","value":"Home"},
    {"title":"Search","value":"Search"},
    {"title":"Create","value":"Create"},
    {"title":"Manage","value":"Manage"}
  ];
  activeLink = this.links[2];
  background = '';
  @ViewChild(AdDirective) adPage: AdDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private tabService: TabsService) {
    this.tabBackgroundColor = 'primary'
   }

  ngOnInit() {
    this.tabService.getTabs()
      .subscribe((data: tabrow[]) => this.links = data);
    this.loadComponent(CreatePageComponent, 'data');
  }

  openPage(selectedLink) {
    this.activeLink = selectedLink; 
      switch(selectedLink) { 
        case "Home": { 
            this.loadComponent(HomePageComponent, 'data');
            break; 
        } 
        case "Search": { 
            this.loadComponent(SearchPageComponent, 'data'); 
            break; 
        } 
        case "Create": {
            this.loadComponent(CreatePageComponent, 'data');
            break;    
        } 
        case "Manage": { 
            this.loadComponent(ManagePageComponent, 'data');
            break; 
        }  
        default: { 
            console.log("Invalid choice"); 
            break;              
        } 
      }
  }

  loadComponent(selectedCompnent, fieldname) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(selectedCompnent);
    let viewContainerRef = this.adPage.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    /* pass data to selected component*/
    componentRef.instance[fieldname] = '';
    componentRef.changeDetectorRef.detectChanges();
  }

}
