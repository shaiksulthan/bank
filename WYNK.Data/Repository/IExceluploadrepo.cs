using System;
using System.Collections.Generic;
using System.Text;
using WYNK.Data.Model.ViewModel;

namespace WYNK.Data.Repository
{
    public interface IExceluploadrepo : IRepositoryBase<AppointmentView>
    {
        dynamic UpdateExceldata(AppointmentView UpdateExceldatas);
        dynamic Getpaymentvalues();
    }
}