using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BO
{
    public class Contact
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PrimaryEmail { get; set; }
        public string SecondaryEmail { get; set; }
        public string MobileNo { get; set; }
        public string HomeNo { get; set; }
        public string OfficeNo { get; set; }
        public string Fax { get; set; }
        public string Company { get; set; }
        public DateTime BirthDate { get; set; }
        public DateTime AnniversaryDate { get; set; }
        public string SpouseName { get; set; }
        public string SpouseEmail { get; set; }
        public string SpousePhone { get; set; }
        public DateTime SpouseBirthDay { get; set; }
        public string Source { get; set; }
        public int Status { get; set; }
        public string HotnessLevel { get; set; }
        public string Tags { get; set; }
        public int AssignedUser { get; set; }
        public string Comments { get; set; }
        public int CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public int ChangedBy { get; set; }
        public DateTime ChangedDate { get; set; }
        public int IsActive { get; set; }
    }
}
