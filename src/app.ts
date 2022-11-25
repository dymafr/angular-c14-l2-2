import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'my-app',
  template: `
  <p>{{ phrase | slice:0:21 | uppercase }}.</p>
  `
})

export class AppComponent {
  constructor() {}
  
  public phrase = "Ma très longue phrase que j'aimerais raccourcir et mettre en majuscules en utilisant des pipes"

}

@NgModule({
  imports: [ 
    BrowserModule
  ],
  declarations: [ 
    AppComponent
  ],
  bootstrap: [ AppComponent ] 
})
export class AppModule {}