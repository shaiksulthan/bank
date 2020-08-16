using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace WYNK.Helpers
{
    public static class PasswordEncodeandDecode
    {

        public static string EncodePasswordToBase64(string password)
        {
            try
            {
                byte[] encData_byte = new byte[password.Length];
                encData_byte = System.Text.Encoding.UTF8.GetBytes(password);
                string encodedData = Convert.ToBase64String(encData_byte);
                return encodedData;
            }
            catch (Exception ex)
            {
                throw new Exception("Error in base64Encode" + ex.Message);
            }
        } //this function Convert to Decord your Password
        public static string DecodeFrom64(string encodedData)
        {
            System.Text.UTF8Encoding encoder = new System.Text.UTF8Encoding();
            System.Text.Decoder utf8Decode = encoder.GetDecoder();
            byte[] todecode_byte = Convert.FromBase64String(encodedData);
            int charCount = utf8Decode.GetCharCount(todecode_byte, 0, todecode_byte.Length);
            char[] decoded_char = new char[charCount];
            utf8Decode.GetChars(todecode_byte, 0, todecode_byte.Length, decoded_char, 0);
            string result = new String(decoded_char);
            return result;
        }

        //converting date of birth to age by Dhayakar
        public static string ToAgeString(DateTime dob)
        {
            DateTime dt = DateTime.Today;

            int days = dt.Day - dob.Day;
            if (days < 0)
            {
                dt = dt.AddMonths(-1);
                days += DateTime.DaysInMonth(dt.Year, dt.Month);

            }

            int months = dt.Month - dob.Month;
            if (months < 0)
            {
                dt = dt.AddYears(-1);
                months += 12;

            }

            int years = dt.Year - dob.Year;
            if (years != 0 && months == 0 && days == 0)

            {
                years = dt.Year - dob.Year;
                return string.Format("{0} year{1}", years, (years == 1) ? "" : "s");
            }
            else if (years == 0 && months != 0 && days == 0)
            {
                return string.Format("{0} month{1}", months, (months == 1) ? "" : "s");
            }
            else if (years == 0 && months == 0 && days != 0)

            {
                return string.Format("{0} day{1}", days, (days == 1) ? "" : "s");
            }
            else if (years != 0 && months != 0 && days != 0)
            {
                years = dt.Year - dob.Year;
                return string.Format("{0} year{1}", years, (years == 1) ? "" : "s");
            }
            else if (years != 0 && months == 0 && days != 0)
            {

                years = dt.Year - dob.Year;
                return string.Format("{0} year{1}", years, (years == 1) ? "" : "s");
            }
            else if (years != 0 && months != 0 && days == 0)
            {
                years = dt.Year - dob.Year;
                return string.Format("{0} year{1}", years, (years == 1) ? "" : "s");
            }
            else if (years == 0 && months != 0 && days != 0)
            {
                return string.Format("{0} month{1}", months, (months == 1) ? "" : "s");
            }
            else if (years == 0 && months == 0 && days == 0)
            {
                return string.Format("{0} day{1}", days, (days == 1) ? "" : "s");
            }

            return string.Format("{0} year {1}, {2} month {3} and {4} day {5}",
                                  years, (years == 1) ? "" : "s",
                                  months, (months == 1) ? "" : "s",
                                  days, (days == 1) ? "" : "s");
        }




        public static string CMPSConnectionstring()
        {


            var currentDir = Directory.GetCurrentDirectory();
            if (!Directory.Exists(currentDir + "/Connectionstring/"))
                Directory.CreateDirectory(currentDir + "/Connectionstring/");
            var path = $"{currentDir}/Connectionstring/CMPSServerstring.txt";


            string[] lines;
            var list = new List<string>();
            var fileStream = new FileStream(path, FileMode.Open, FileAccess.Read);
            using (var streamReader = new StreamReader(fileStream, Encoding.UTF8))
            {
                string line;
                while ((line = streamReader.ReadLine()) != null)
                {
                    list.Add(line);
                }
            }
            lines = list.ToArray();
          var  result =lines[0];
            return result;
        }

        public static string WYNKConnectionstring()
        {


            var currentDir = Directory.GetCurrentDirectory();
            if (!Directory.Exists(currentDir + "/Connectionstring/"))
                Directory.CreateDirectory(currentDir + "/Connectionstring/");
            var path = $"{currentDir}/Connectionstring/WYNKConnectionstyring.txt";


            string[] lines;
            var list = new List<string>();
            var fileStream = new FileStream(path, FileMode.Open, FileAccess.Read);
            using (var streamReader = new StreamReader(fileStream, Encoding.UTF8))
            {
                string line;
                while ((line = streamReader.ReadLine()) != null)
                {
                    list.Add(line);
                }
            }
            lines = list.ToArray();
            var WYNKresult = lines[0];
            return WYNKresult;
        }
        public static string PayrollConnectionstring()
        {
            var currentDir = Directory.GetCurrentDirectory();
            if (!Directory.Exists(currentDir + "/Connectionstring/"))
                Directory.CreateDirectory(currentDir + "/Connectionstring/");
            var path = $"{currentDir}/Connectionstring/PayrollConnectionstring.txt";

            string[] lines;
            var list = new List<string>();
            var fileStream = new FileStream(path, FileMode.Open, FileAccess.Read);
            using (var streamReader = new StreamReader(fileStream, Encoding.UTF8))
            {
                string line;
                while ((line = streamReader.ReadLine()) != null)
                {
                    list.Add(line);
                }
            }
            lines = list.ToArray();
            var WYNKresult = lines[0];
            return WYNKresult;
        }

        public static string GetConcatSName(string Name)
        {
            var S = " ";
            var G = Name;
            if (G != null)
            {
                S = G;
            }

            return S;
        }

    }
}
