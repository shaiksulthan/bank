
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using WYNK.Data.Model;

namespace WYNK.Data.Repository.Implementation
{
    public class RepositoryWrapper : IRepositoryWrapper
    {
        private WYNKContext _Wynkcontext;

        private IExceluploadrepo _Exceluploadreposs;
       

        public RepositoryWrapper(WYNKContext context)
        {
            _Wynkcontext = context;

        }


        public IExceluploadrepo Exceluploadreposs
        {
            get
            {
                if (_Exceluploadreposs == null)
                {
                    _Exceluploadreposs = new Exceluploadrepo(_Wynkcontext);

                }

                return _Exceluploadreposs;

            }
        }


    }

}