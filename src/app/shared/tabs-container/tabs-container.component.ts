import {
  Component,
  ContentChildrenDecorator,
  ContentChildren,
  OnInit,
  AfterContentInit,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> =
    new QueryList();

  ngAfterContentInit() {
    // console.log(this.tabs);
    const activeTabs = this.tabs?.filter((tab) => tab.active); //should contain only one

    if (!activeTabs || activeTabs.length == 0) {
      this.selectTab(this.tabs!.first);
    }
  }
  selectTab(tab: TabComponent) {
    this.tabs?.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;
    return false; //stop default behaviour
  }
}
