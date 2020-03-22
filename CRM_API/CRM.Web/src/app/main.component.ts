import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `<div style="float:left; width: 47%;">
                  <button style="float: right;" class="tip-ico tip-ico-primary">
                    <a routerLink="/crm">CRM</a>
                  </button>
                </div>
                <div>
                  <button class="tip-ico tip-ico-primary">
                    <a routerLink="/rvm">RVM</a>
                  </button>
                </div>
            <br/>
            <router-outlet></router-outlet>`,
  styles: [`.tip-ico {
                margin: 0 10px;
                border-radius: 3px;
                color: $white;
                @include center(60px, 60px);
                font-size: 30px;
                width: 300px;
                background-color: #fcb733;
                border: none;
                outline: none;
                &:active {
                    @include box-shadow( 0 2px 10px 0 rgba($black, .4) inset);
                }
            }
            .tip-ico-primary {
                @extend .bg-primary;
                @include box-shadow( 0 2px 10px 0 rgba($primary, .5));
            }
            .tip-ico-success {
                @extend .bg-success;
                @include box-shadow( 0 2px 10px 0 rgba($success, .5));
            }
            .tip-ico-danger {
                @extend .bg-danger;
                @include box-shadow( 0 2px 10px 0 rgba($danger, .5));
            }
            .tip-ico-warning {
                @extend .bg-warning;
                @include box-shadow( 0 2px 10px 0 rgba($warning, .5));
            }
            .tip-ico-info {
                @extend .bg-info;
                @include box-shadow( 0 2px 10px 0 rgba($info, .5));
            }`]
            
})
export class MainComponent {
}
