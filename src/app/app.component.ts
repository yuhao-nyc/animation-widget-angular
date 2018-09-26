import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageDetails = false
  pageStacked = true
  pageElastic = false

  showPageDetails() {
    this.pageDetails = true
    this.pageStacked = false
  }

  showStackedPage() {
    this.pageDetails = false
    this.pageStacked = true
    this.pageElastic = true
  }
  
}
