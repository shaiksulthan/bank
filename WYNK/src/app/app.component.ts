import { Component, ElementRef, ChangeDetectorRef, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CommonService } from './shared/common.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import Swal from 'sweetalert2'
//import { BnNgIdleService } from 'bn-ng-idle';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalDirective } from 'ngx-bootstrap/modal'; 
import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {


  constructor(private router: Router, ) {}
 
  ngOnInit() {

    this.router.navigate(["Test"]);


  }


  backdrop = 'none';
  modalCommon = 'none';
  modalCommonDialogWidth = '300px';
  modalCommonTitle = '';
  modalCommonBody = '';
  showModalCommonYesNo = false;
  showModalCommonOk = false;
  modalCommonClose() {
    this.backdrop = 'none';
    this.modalCommon = 'none';
  }
  modalCommonYes = function () { }
  modalCommonNo = function () { }
  modalCommonOk = function () { }
  modalCommonReset = function () {

    this.backdrop = 'none';
    this.modalCommon = 'none';
    this.modalCommonDialogWidth = '300px';
    this.modalCommonTitle = '';
    this.modalCommonBody = '';
    this.showModalCommonYesNo = false;
    this.showModalCommonOk = false;
    this.modalCommonYes = function () { }
    this.modalCommonNo = function () { }
    this.modalCommonOk = function () { }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      }



