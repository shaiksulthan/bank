using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WYNK.Data.Model;
using WYNK.Data.Model.ViewModel;

namespace WYNK.Data.Repository.Implementation
{
    class Exceluploadrepo : RepositoryBase<AppointmentView>, IExceluploadrepo
    {
        private readonly WYNKContext _Wynkcontext;


        public Exceluploadrepo(WYNKContext context) : base(context)
        {
            _Wynkcontext = context;

        }

        public dynamic UpdateExceldata(AppointmentView UpdateExceldatas)
        {
            var registrationMaster = new AppointmentView();

            var newdate = new Bankservice();

            if(UpdateExceldatas.username == "Dayakar")
            {
                var totalbalance = WYNKContext.Bankservice.Where(x => x.userreferrncetype == "Userone").Select(x => x.AMount).ToList();

                newdate.AMount = "-"+(UpdateExceldatas.amount);
                
                newdate.UserName = UpdateExceldatas.username;
                newdate.userreferrncetype = "Userone";
                newdate.createddate = DateTime.Now;
                WYNKContext.Bankservice.Add(newdate);
                WYNKContext.SaveChanges();


                var newdates = new Bankservice();
                newdates.AMount =Convert.ToString((UpdateExceldatas.amount));
                newdates.UserName = "Sulthan";                
                newdates.userreferrncetype = "Usertwo";
                newdates.createddate = DateTime.Now;
                WYNKContext.Bankservice.Add(newdates);
                WYNKContext.SaveChanges();


            }

            if (UpdateExceldatas.username == "Sulthan")
            {
      
                newdate.AMount = "-" + (UpdateExceldatas.amount);

                newdate.UserName = UpdateExceldatas.username;
                newdate.userreferrncetype = "Usertwo";
                newdate.createddate = DateTime.Now;
                WYNKContext.Bankservice.Add(newdate);
                WYNKContext.SaveChanges();


                var newdates = new Bankservice();
                newdates.AMount = Convert.ToString((UpdateExceldatas.amount));
                newdates.UserName = "Dayakar";
                newdates.userreferrncetype = "Userone";
                newdates.createddate = DateTime.Now;
                WYNKContext.Bankservice.Add(newdates);
                WYNKContext.SaveChanges();


            }



            try
            {
                if (WYNKContext.SaveChanges() >= 0)
                    return new
                    {
                        Success = true,
                        Message = "Saved successfully",

                    };

            }
            catch (Exception ex)
            {
                Console.Write(ex);
            }
            return new
            {
                Success = false,
                Message = "some data are missing"
            };


        }


        public dynamic Getpaymentvalues()
        {
            var registrationMaster = new AppointmentView();
            registrationMaster.Usersdata = (from u in WYNKContext.Bankservice.Where(x => x.userreferrncetype == "Userone")
                                            select new Userdata
                                            {
                                                amount = u.AMount,
                                                username = u.UserName,
                                                Receiveddate =u.createddate,
                                            }).ToList();

            registrationMaster.Usersdatatwo = (from u in WYNKContext.Bankservice.Where(x => x.userreferrncetype == "Usertwo")
                                            select new Userdatatw
                                            {
                                                amount = u.AMount,
                                                username = u.UserName,
                                                Receiveddate = u.createddate,
                                            }).ToList();



            registrationMaster.useronetotalbalance = registrationMaster.Usersdata.Sum(x =>Convert.ToInt32(x.amount));
            registrationMaster.usertwototalbalance = registrationMaster.Usersdatatwo.Sum(x => Convert.ToInt32(x.amount));

            return registrationMaster;
        }

        }
    }














