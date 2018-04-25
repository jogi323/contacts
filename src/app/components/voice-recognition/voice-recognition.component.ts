import { Component, OnInit } from '@angular/core';
import { SpeechService } from 'ngx-speech';

@Component({
  selector: 'app-voice-recognition',
  templateUrl: './voice-recognition.component.html',
  styleUrls: ['./voice-recognition.component.css']
})
export class VoiceRecognitionComponent implements OnInit {

  msg = '';

  constructor(public speech: SpeechService) {

  }

  ngOnInit() {
      
  }

  getVoice(){
    this.speech.start();
      this.speech.message.subscribe(msg => {
        this.msg = msg.message;
        if(this.msg.length){
          this.speech.stop();
        }
    });
  }
}
