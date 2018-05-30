import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DialogflowService } from '@app/services';
import { MessageListComponent, MessageFormComponent, MessageItemComponent } from '@app/components';
import { ChatbotComponentComponent } from './components/chatbot-component/chatbot-component.component'
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActComponent } from './components/act/act.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



const route: Routes =   [{path:'',component:HomeComponent
}]
@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageFormComponent,
    MessageItemComponent,
    ChatbotComponentComponent,
    HomeComponent,
    ActComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(route),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})

 
   ],
  providers: [
    DialogflowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
