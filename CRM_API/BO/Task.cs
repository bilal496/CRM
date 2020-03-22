using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BO
{
    public class Task
    {
        public int TaskNumber { get; set; }
        public int Category { get; set; }
        public int Status { get; set; }
        public string Description { get; set; }
        public string Notes { get; set; }
        public int AssignTo { get; set; }
        public bool NotifyAssignee { get; set; }
        public int Reminder { get; set; }
        public int ContactId { get; set; }
        public DateTime DueDate { get; set; }
        public int CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public int ChangedBy { get; set; }
        public DateTime ChangedDate { get; set; }
        public bool IsActive { get; set; }
    }
}
