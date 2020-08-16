using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WYNK.Data.Model
{
   public class Bankservice
    {
        [Key]
        public int ID { get; set; }
        public string UserName { get; set; }
        public string AMount { get; set; }
        public string userreferrncetype { get; set; }
        public DateTime createddate { get; set; }
        
    }
}
