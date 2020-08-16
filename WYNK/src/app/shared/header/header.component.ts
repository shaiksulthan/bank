import { Component, OnInit, ElementRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material';

declare var $: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {


  title = 'WYNKWeb';
  ishideen: boolean = true;
  ishiden: boolean = true;

  istotalhidden: boolean = true;
  isbtnhidden: boolean = true;
  isreghiden: boolean = true;
  isrefhiden: boolean = true;
  isinvhiden: boolean = true;
  isdochiden: boolean = true;
  isHidden: boolean = false;
  isHidden1: boolean = false;
  phhidden: boolean = false;
  refhidden: boolean = false;
  medicalhidden: boolean = false;


  constructor() { }

  ngOnInit() {


  }

  file: File = null;
  url: string | ArrayBuffer = '';
  showUserIcon = true;
  showPatientImg = 'none';

  handlePatientImage(files: FileList) {

    debugger;

    if (files.length > 0) {
      if (files.item(0).size <= 102400) {
        this.file = files.item(0);
        if (this.file.type.startsWith('image')) {
          var reader = new FileReader();
          reader.readAsDataURL(this.file);
          reader.onload = (event) => {
            this.url = (<FileReader>event.target).result;
            this.showUserIcon = true;
            this.showPatientImg = 'block';
          }
        }

      }
    }
  }




  Logout() {
    window.localStorage.clear();

    window.location.href = window.location.href;

    window.location.reload(true);

    this.ishideen = true;
    this.ishiden = false;
    localStorage.clear();
  }

}



