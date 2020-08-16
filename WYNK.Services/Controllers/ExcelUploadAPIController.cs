using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Threading;
using WYNK.Data.Repository;
using WYNK.Data.Common;
using WYNK.Data.Model.ViewModel;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;


namespace WYNK.Services.Controllers
{
    [Route("[controller]")]
    public class ExcelUploadAPIController : ControllerBase
    {
        private IRepositoryWrapper _repoWrapper;

        public ExcelUploadAPIController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpPost("UpdateExceldata")]
        public dynamic UpdateExceldata([FromBody] AppointmentView UpdateExceldatas)
        {
            return _repoWrapper.Exceluploadreposs.UpdateExceldata(UpdateExceldatas);
        }




        [HttpGet("Getpaymentvalues")]
        public dynamic Getpaymentvalues()
        {
            return _repoWrapper.Exceluploadreposs.Getpaymentvalues();
        }



    }
}