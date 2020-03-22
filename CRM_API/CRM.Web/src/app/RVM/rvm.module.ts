import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { rvmRouting } from './rvm.routing';
import { RingLessVoiceComponent } from './ringLessVoice.component';
import { RVMService } from './RVM.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    rvmRouting,
  ],
  providers: [RVMService],
  declarations: [ RingLessVoiceComponent ],
})
export class RVMModule { }
