import {
  Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { rvmDropdown } from "./rvmDropdownmodel";
import { RVMService } from "./RVM.service";

declare var MediaRecorder: any;
@Component({
  selector: 'app-ringless',
  templateUrl: './RingLessVoice.component.html',
  styleUrls: ['./RingLessVoice.component.scss']
})

export class RingLessVoiceComponent implements OnInit {
  currentDate = new Date();
  fromNo: string;
  mediaRecorder: any;
  AudioUrl: any;
  toNo: any;
  chunks = [];
  audioFiles = [];
  errorMessage: string;
  public FilesList: rvmDropdown[];
  testinglist = [];
  selectedfile: any;


  constructor(
    private cd: ChangeDetectorRef,
    private dom: DomSanitizer,
    private _rvmService: RVMService
  ) {
    this.testinglist = [
      { key: "abc 1", value: "abc 1" },
      { key: "abc 2", value: "abc 2" }
    ];
  }
  ngOnInit() {
    this.getFiles();
    navigator.mediaDevices.getUserMedia({ audio: {} }).then(
      stream => {
        console.log(stream);
        this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder.onstop = e => {
          console.log("data available after MediaRecorder.stop() called.");
          var blob = new Blob(this.chunks, { type: "audio/ogg; codecs=opus" });
          this.chunks = [];
          var audioURL = URL.createObjectURL(blob);
          this.AudioUrl = audioURL;
          // audio.src = audioURL;
          this.audioFiles.push(this.dom.bypassSecurityTrustUrl(audioURL));
          console.log(audioURL);
          console.log("recorder stopped");
          this.cd.detectChanges();
        };
        this.mediaRecorder.ondataavailable = e => {
          this.chunks.push(e.data);
        };
      },
      err => {
        alert("Error capturing audio.");
      }
    );
  }
  startRecording() {
    this.mediaRecorder.start();
    console.log(this.mediaRecorder.state);
    console.log("recorder started");
  }
  stopRecording() {
    this.mediaRecorder.stop();
    console.log(this.mediaRecorder.state);
    this.AudioUrl = this.mediaRecorder.state;
    console.log("recorder stopped");
  }

  SendRVM() {
    var To = this.toNo;
    var URL = this.AudioUrl;
    this._rvmService.sendRVM(To, URL).subscribe(res => {
      console.log(res);
    });
  }

  getFiles() {
    this._rvmService.getFiles().subscribe(res => {
      console.log(res);
      this.FilesList = res;
      console.log(this.FilesList);
    });
  }
}
