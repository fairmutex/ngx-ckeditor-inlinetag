import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SanitizeHtmlPipe } from './sanitizeHtml.pipe';

import { AppComponent } from './app.component';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  imports:      [ BrowserModule,CKEditorModule, FormsModule ],
  declarations: [ AppComponent, SanitizeHtmlPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
