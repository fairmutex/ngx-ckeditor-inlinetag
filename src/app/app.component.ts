import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';


    content: string;
    saved:string = '';
    ckeConfig: any;

    constructor() {
    this.content = ``;
    this.saved ='';

    }
    
  ngOnInit() {

    this.ckeConfig = {
      allowedContent: true,
      extraPlugins: 'divarea,inlinetag',
      inlinetag: {
        types: ['Name', 'Surname', 'Date']        
      },
      forcePasteAsPlainText: false,
      pasteFromWordRemoveFontStyles: false,
      on: {

        instanceReady: function (evt) {
          console.log('on');

          var rule = {
            attributeNames: [
              [(/^data-cke-pa-on/), 'on'],
            ],
          };

          evt.editor.dataProcessor.dataFilter.addRules(rule, { applyToAll: true });

        }
      }


    };

  }

  onCkeChange($event: any): void {
    console.log("onChange");
    //this.log += new Date() + "<br />";
  }

}
