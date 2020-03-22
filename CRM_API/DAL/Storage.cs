using BO;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class Storage
    {
        public Database objDB;
        public DbCommand cmd;

        public Storage()
        {
            objDB = DatabaseFactory.CreateDatabase();
        }

        public DataSet GetLookups(string name)
        {
            try
            {
                cmd = objDB.GetStoredProcCommand("prGetLookups");
                objDB.AddInParameter(cmd, "@Name", System.Data.DbType.String, name);
                DataSet ds = objDB.ExecuteDataSet(cmd);
                return ds;

            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            { }
        }

        public DataSet GetContacts()
        {
            try
            {
                cmd = objDB.GetStoredProcCommand("prgetcontacts");
                DataSet ds = objDB.ExecuteDataSet(cmd);
                return ds;

            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            { }
        }

        public DataSet GetContactById(int id)
        {
            try
            {
                cmd = objDB.GetStoredProcCommand("prGetContactByID");
                objDB.AddInParameter(cmd, "@ContactID", System.Data.DbType.Int32, id);
                DataSet ds = objDB.ExecuteDataSet(cmd);
                return ds;

            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            { }
        }
        public string AddContact(Contact contact)
        {
            try
            {
                cmd = objDB.GetStoredProcCommand("prAddContact");
                objDB.AddInParameter(cmd, "@FirstName", System.Data.DbType.String, contact.FirstName);
                objDB.AddInParameter(cmd, "@LastName", System.Data.DbType.String, contact.LastName);
                objDB.AddInParameter(cmd, "@PrimaryEmail", System.Data.DbType.String, contact.PrimaryEmail);
                objDB.AddInParameter(cmd, "@SecondaryEmail", System.Data.DbType.String, contact.SecondaryEmail);
                objDB.AddInParameter(cmd, "@MobileNo", System.Data.DbType.String, contact.MobileNo);
                objDB.AddInParameter(cmd, "@HomeNo", System.Data.DbType.String, contact.HomeNo);
                objDB.AddInParameter(cmd, "@OfficeNo", System.Data.DbType.String, contact.OfficeNo);
                objDB.AddInParameter(cmd, "@Fax", System.Data.DbType.String, contact.Fax);
                objDB.AddInParameter(cmd, "@Company", System.Data.DbType.String, contact.Company);
                objDB.AddInParameter(cmd, "@BirthDate", System.Data.DbType.DateTime, contact.BirthDate);
                objDB.AddInParameter(cmd, "@AnniversaryDate", System.Data.DbType.DateTime, contact.AnniversaryDate);
                objDB.AddInParameter(cmd, "@SpouseName", System.Data.DbType.String, contact.SpouseName);
                objDB.AddInParameter(cmd, "@SpouseEmail", System.Data.DbType.String, contact.SpouseEmail);
                objDB.AddInParameter(cmd, "@SpousePhone", System.Data.DbType.String, contact.SpousePhone);
                objDB.AddInParameter(cmd, "@SpouseBirthDay", System.Data.DbType.DateTime, contact.SpouseBirthDay);
                objDB.AddInParameter(cmd, "@Source", System.Data.DbType.String, contact.Source);
                objDB.AddInParameter(cmd, "@Status", System.Data.DbType.Int32, contact.Status);
                objDB.AddInParameter(cmd, "@HotnessLevel", System.Data.DbType.String, contact.HotnessLevel);
                objDB.AddInParameter(cmd, "@Tags", System.Data.DbType.String, contact.Tags);
                objDB.AddInParameter(cmd, "@AssignedUser", System.Data.DbType.Int32, contact.AssignedUser);
                objDB.AddInParameter(cmd, "@Comments", System.Data.DbType.String, contact.Comments);
                objDB.AddInParameter(cmd, "@CreatedBy", System.Data.DbType.Int32, contact.CreatedBy);
                objDB.ExecuteNonQuery(cmd);
                return "Success";
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            { }
        }

        public DataSet GetTasks()
        {
            try
            {
                cmd = objDB.GetStoredProcCommand("prgetTasks");
                DataSet ds = objDB.ExecuteDataSet(cmd);
                return ds;

            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            { }
        }

        public string AddTask(BO.Task task)
        {
            try
            {
                cmd = objDB.GetStoredProcCommand("prAddTask");
                objDB.AddInParameter(cmd, "@Category", System.Data.DbType.Int32, task.Category);
                objDB.AddInParameter(cmd, "@Status", System.Data.DbType.Int32, task.Status);
                objDB.AddInParameter(cmd, "@Description", System.Data.DbType.String, task.Description);
                objDB.AddInParameter(cmd, "@Notes", System.Data.DbType.String, task.Notes);
                objDB.AddInParameter(cmd, "@AssignTo", System.Data.DbType.Int32, task.AssignTo);
                objDB.AddInParameter(cmd, "@NotifyAssignee", System.Data.DbType.Boolean, task.NotifyAssignee);
                objDB.AddInParameter(cmd, "@Reminder", System.Data.DbType.Int32, task.Reminder);
                objDB.AddInParameter(cmd, "@ContactId", System.Data.DbType.Int32, task.ContactId);
                objDB.AddInParameter(cmd, "@DueDate", System.Data.DbType.DateTime, task.DueDate);
                objDB.AddInParameter(cmd, "@CreatedBy", System.Data.DbType.Int32, task.CreatedBy);
                objDB.ExecuteNonQuery(cmd);
                return "Success";
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            { }
        }

        public DataSet callspWithoutParams(string spName)
        {
            try
            {
                cmd = objDB.GetStoredProcCommand(spName);
                DataSet ds = objDB.ExecuteDataSet(cmd);
                return ds;

            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            { }
        }

        public DataSet getContactEdit(int contactId)
        {
            try
            {
                cmd = objDB.GetStoredProcCommand("prGetContactEdit");
                objDB.AddInParameter(cmd, "@ContactID", System.Data.DbType.Int32, contactId);
                DataSet ds = objDB.ExecuteDataSet(cmd);
                return ds;

            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            { }
        }

        static void Main(string[] args)
        {
        }
    }
}
