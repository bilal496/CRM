using BO;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace BLL
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IService1" in both code and config file together.
    [ServiceContract]
    public interface ICRM
    {

        [OperationContract]
        DataSet GetLookups(string name);

        [OperationContract]
        DataSet GetContacts();

        [OperationContract]
        DataSet GetContactById(int id);

        [OperationContract]
        string AddContact(Contact contact);

        [OperationContract]
        DataSet GetTasks();

        [OperationContract]
        string AddTask(Task task);

        [OperationContract]
        DataSet callspWithoutParams(string spName);

        [OperationContract]
        DataSet getContactEdit(int contactId);
    }
}
