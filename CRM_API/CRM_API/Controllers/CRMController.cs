using CRM_API.CRMServiceReference;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BO;
using System.Web.Http.Cors;
using System.Web.Http.Results;
using System.Web.Helpers;
using Newtonsoft.Json.Linq;

namespace CRM_API.Controllers
{
    public class CRMController : ApiController
    {
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public JsonResult<DataSet> GetLookups(string id)
        {
            try
            {
                string result = string.Empty;
                CRMClient obj = new CRMClient();
                DataSet ds = obj.GetLookups(id);
                if (ds != null & ds.Tables.Count > 0)
                {
                    result = JsonConvert.SerializeObject(ds);
                }
                return Json(ds);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public JsonResult<DataSet> GetContacts(string id = null)
        {
            try
            {
                var result = string.Empty;
                CRMClient obj = new CRMClient();
                DataSet ds = obj.GetContacts();
                if (ds != null & ds.Tables.Count > 0)
                {
                    //result = JsonConvert.SerializeObject(ds);
                }
                return Json(ds);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public JsonResult<DataSet> GetContactById(string id)
        {
            try
            {
                string result = string.Empty;
                CRMClient obj = new CRMClient();
                DataSet ds = obj.GetContactById(Convert.ToInt32(id));
                if (ds != null & ds.Tables.Count > 0)
                {
                    result = JsonConvert.SerializeObject(ds);
                }
                return Json(ds);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public string AddContact(JObject contact)
        {
            try
            {
                string result = string.Empty;
                dynamic jsonData = contact;
                JObject conJson = jsonData.contact;
                Contact con = conJson.ToObject<Contact>();
                CRMClient obj = new CRMClient();
                result = obj.AddContact(con);
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public JsonResult<DataSet> GetTasks()
        {
            try
            {
                var result = string.Empty;
                CRMClient obj = new CRMClient();
                DataSet ds = obj.GetTasks();
                if (ds != null & ds.Tables.Count > 0)
                {
                    //result = JsonConvert.SerializeObject(ds);
                }
                return Json(ds);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public string AddTask(JObject task)
        {
            try
            {
                string result = string.Empty;
                dynamic jsonData = task;
                JObject conJson = jsonData.task;
                Task con = conJson.ToObject<Task>();
                CRMClient obj = new CRMClient();
                result = obj.AddTask(con);
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [System.Web.Http.HttpGet]
        public JsonResult<DataSet> callspWithoutParams(string spName)
        {
            try
            {
                var result = string.Empty;
                CRMClient obj = new CRMClient();
                DataSet ds = obj.callspWithoutParams(spName);
                if (ds != null & ds.Tables.Count > 0)
                {
                    //result = JsonConvert.SerializeObject(ds);
                }
                return Json(ds);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [System.Web.Http.HttpGet]
        public JsonResult<DataSet> getContactEdit(int contactId)
        {
            try
            {
                var result = string.Empty;
                CRMClient obj = new CRMClient();
                DataSet ds = obj.getContactEdit(contactId);
                if (ds != null & ds.Tables.Count > 0)
                {
                    //result = JsonConvert.SerializeObject(ds);
                }
                return Json(ds);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}



//// GET api/values
//public IEnumerable<string> Get()
//{
//    return new string[] { "value1", "value2" };
//}

//// GET api/values/5
//public string Get(int id)
//{
//    return "value";
//}

//// POST api/values
//public void Post([FromBody]string value)
//{
//}

//// PUT api/values/5
//public void Put(int id, [FromBody]string value)
//{
//}

//// DELETE api/values/5
//public void Delete(int id)
//{
//}