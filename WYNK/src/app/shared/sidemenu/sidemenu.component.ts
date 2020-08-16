import { Component, OnInit, ElementRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CommonService } from '../common.service';
import { MatTableDataSource } from '@angular/material';

declare var $: any;

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.less']
})
export class SidemenuComponent implements OnInit {



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
  findhidden: boolean = false;
  medicalhidden: boolean = false;


  constructor(
              public datepipe: DatePipe, public el: ElementRef,
              private _formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {


    this.istotalhidden = false;
    this.isbtnhidden = true;
    this.isreghiden = false;
    this.isrefhiden = false;
    this.isinvhiden = false;
    this.isdochiden = false;
    this.phhidden = false;
    this.refhidden = false;
    this.findhidden = false;
    this.medicalhidden = false;
    this.ishiden = false;
   
  }

  Hiding() {
    //this.ngOnInit();
    this.istotalhidden = true;
    this.isbtnhidden = true;
    this.isreghiden = false;
    this.router.navigate(['']);
  }

  Mastershown() {
    this.isreghiden = true;
    this.istotalhidden = false;
    this.isbtnhidden = false;

  }

  registrationshown() {
    this.istotalhidden = false;
    this.phhidden = false;
    this.refhidden = false;
    this.findhidden = false;
    this.medicalhidden = false;
    this.isbtnhidden = false;
  }

  docotorshown() {
    this.istotalhidden = false;
    this.phhidden = false;
    this.refhidden = false;
    this.findhidden = false;
    this.medicalhidden = false;
    this.isbtnhidden = false;
  }


  ICDshown() {
    this.istotalhidden = false;
    this.phhidden = false;
    this.refhidden = false;
    this.findhidden = false;
    this.medicalhidden = false;
    this.isbtnhidden = false;
  }

  surgeshown() {
    this.istotalhidden = false;
    this.phhidden = false;
    this.refhidden = false;
    this.findhidden = false;
    this.medicalhidden = false;
    this.isbtnhidden = false;
  }
  reportshown() {
    this.istotalhidden = false;
    this.phhidden = false;
    this.refhidden = false;
    this.findhidden = false;
    this.medicalhidden = false;
    this.isbtnhidden = false;
  }

  usershown() {
    this.istotalhidden = false;
    this.phhidden = false;
    this.refhidden = false;
    this.findhidden = false;
    this.medicalhidden = false;
    this.isbtnhidden = false;
  }

  patienthistory() {
    this.phhidden = true;
    this.router.navigate(['']);
  }
  findingsform() {
    this.findhidden = true;
    this.router.navigate(['']);
  }

  refractionform() {
    this.refhidden = true;
    this.router.navigate(['']);
  }
  medicalprescriptionentry() {
    this.medicalhidden = true;
    this.router.navigate(['']);
  }

}
