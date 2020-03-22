using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using BO;
using DAL;

namespace BLL
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service1" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Service1.svc or Service1.svc.cs at the Solution Explorer and start debugging.
    public class CRM : ICRM
    {
        public DataSet GetLookups(string name)
        {
            try
            {
                Storage obj = new Storage();
                DataSet ds = obj.GetLookups(name);
                return ds;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public DataSet GetContacts()
        {
            try
            {
                Storage obj = new Storage();
                DataSet ds = obj.GetContacts();
                return ds;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public DataSet GetContactById(int id)
        {
            try
            {
                Storage obj = new Storage();
                DataSet ds = obj.GetContactById(id);
                return ds;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public string AddContact(Contact contact)
        {
            try
            {
                Storage obj = new Storage();
                string result = obj.AddContact(contact);
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public DataSet GetTasks()
        {
            try
            {
                Storage obj = new Storage();
                DataSet ds = obj.GetTasks();
                return ds;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public string AddTask(Task task)
        {
            try
            {
                Storage obj = new Storage();
                string result = obj.AddTask(task);
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public DataSet callspWithoutParams(string spName)
        {
            try
            {
                Storage obj = new Storage();
                DataSet ds = obj.callspWithoutParams(spName);
                return ds;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public DataSet getContactEdit(int contactId)
        {
            try
            {
                Storage obj = new Storage();
                DataSet ds = obj.getContactEdit(contactId);
                return ds;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
