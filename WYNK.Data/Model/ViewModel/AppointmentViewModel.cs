using System;
using System.Collections.Generic;
using System.Text;

namespace WYNK.Data.Model.ViewModel
{
    public class AppointmentView
    {

        public string username { get; set; }
        public string amount { get; set; }
        //public string mname { get; set; }
       public Bankservice GetBankservice { get; set; }

         public ICollection<Userdata> Usersdata { get; set; }
        public ICollection<Userdatatw> Usersdatatwo { get; set; }



        public int useronetotalbalance { get; set; }
        public int usertwototalbalance { get; set; }
    }


    public class Userdata
    {

        public string username { get; set; }
        public string amount { get; set; }
        public DateTime Receiveddate { get; set; }
        
    }

    public class Userdatatw
    {

        public string username { get; set; }
        public string amount { get; set; }
        public DateTime Receiveddate { get; set; }

    }

}
