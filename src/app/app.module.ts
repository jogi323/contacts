import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SpeechModule } from 'ngx-speech';

import { AppComponent } from './app.component';
import { VoiceRecognitionComponent } from './components/voice-recognition/voice-recognition.component';


@NgModule({
  declarations: [
    AppComponent,
    VoiceRecognitionComponent
  ],
  imports: [
    BrowserModule,
    SpeechModule
  ],
  providers: [ 
    { provide: 'SPEECH_LANG', useValue: 'en-US' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
