import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import translate from 'google-translate-open-api';
import CountryData from 'country-data'
import { CommonService } from '../../shared/common.service';
import { AppointmentView } from '../../Models/ViewModels/Regmaster';
import Swal from 'sweetalert2';
 
  declare var jQuery;

@Component({
  selector: 'app-testone',
  templateUrl: './testone.component.html',
  styleUrls: ['./testone.component.less']
})
export class TestoneComponent implements OnInit {

  constructor(public commonService: CommonService<AppointmentView>,) { }

  ngOnInit() {
    debugger;
    this.commonService.getListOfData('ExcelUploadAPI/Getpaymentvalues').subscribe(data => {
      debugger;
      this.oneusersdate = data.Usersdata;
      this.otwousersdate = data.Usersdatatwo;

      this.oneusersdatebalance = data.useronetotalbalance;
      this.otwousersdatebalance = data.usertwototalbalance;

      localStorage.setItem("Fullbalance", this.oneusersdatebalance);
      localStorage.setItem("Fullbalanceuser", this.otwousersdatebalance);
      
    });


    this.Uesrnameone = "Dayakar";
    this.Uesrnametwo = "Sulthan";

  }
  oneusersdatebalance;
  otwousersdatebalance;
  oneusersdate;
  otwousersdate;
  Uesrnametwo;
  Uesrnameone;
  M_userone;
  M_useroneamount;
  M_usertwo;
  M_usertwoamount;
  M_Fullbalance;
  Sendusee(data) {
    debugger;


    if (data == "Dayakar") {
      if (localStorage.getItem("Fullbalance") != "0" && this.M_useroneamount <= localStorage.getItem("Fullbalance")) {

        this.commonService.data = new AppointmentView();
        this.commonService.data.username = this.Uesrnameone;
        this.commonService.data.amount = this.M_useroneamount;
        this.commonService.postData('ExcelUploadAPI/UpdateExceldata', this.commonService.data)

          .subscribe(data => {
            if (data.Success == true) {
              this.M_useroneamount = null;
              Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Amount Transfered Successfully',
                showConfirmButton: false,
                timer: 2000
              });
              this.ngOnInit();
            }

            else {
              Swal.fire({
                position: 'center',
                type: 'warning',
                title: 'Something Wrong',
                showConfirmButton: false,
                timer: 2000
              });
            }

          });
      } else {
        Swal.fire({
          position: 'center',
          type: 'warning',
          title: 'Amount is Exceeding',
          showConfirmButton: false,
          timer: 2000
        });
      }
    } else {

        this.commonService.data = new AppointmentView();
        this.commonService.data.username = this.Uesrnametwo;
        this.commonService.data.amount = this.M_usertwoamount;
        this.commonService.postData('ExcelUploadAPI/UpdateExceldata', this.commonService.data)

          .subscribe(data => {
            if (data.Success == true) {
              this.M_usertwoamount = null;
              Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Amount Transfered Successfully',
                showConfirmButton: false,
                timer: 2000
              });
              this.ngOnInit();
            }

            else {
              Swal.fire({
                position: 'center',
                type: 'warning',
                title: 'Something Wrong',
                showConfirmButton: false,
                timer: 2000
              });
            }

          });
   
    }



  }

}
