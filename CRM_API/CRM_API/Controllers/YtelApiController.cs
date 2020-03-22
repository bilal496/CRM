using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using YtelAPI.Standard;
using YtelAPI.Standard.Models;

namespace CRM_API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class YtelApiController : ApiController
    {
        public async Task<string> SendSMS(string To,string body)
        {
            string basicAuthUserName = "a2508a00-03b2-11e9-bd38-c316c5acc991"; // The username to use with basic authentication
            string basicAuthPassword = "4820eb8af0b8b3e725986a23fc9af44a"; // The password to use with basic authentication

            YtelAPIClient client = new YtelAPIClient(basicAuthUserName, basicAuthPassword);

            CreateSmsSendsmsInput collect = new CreateSmsSendsmsInput();

            string mfrom = "+19892144063";
            collect.From = mfrom;
            //if(To == null || To == "")
            //To = "+19892144063";
            collect.To = To;
            //if (body == null || body == "")
            //     body = "Hello Testing";
            collect.Body = body;

            string method = "POST";
            collect.Method = method;

            //string messageStatusCallback = "MessageStatusCallback";
            //collect.MessageStatusCallback = messageStatusCallback;

            bool? smartsms = false;
            collect.Smartsms = smartsms;

            bool? deliveryStatus = false;
            collect.DeliveryStatus = deliveryStatus;


            string result = await client.SMS.CreateSmsSendsmsAsync(collect);
            return result;
        }

        public async Task<string> sendRVM(string To,string URL)
        {

            string basicAuthUserName = "a2508a00-03b2-11e9-bd38-c316c5acc991"; // The username to use with basic authentication
            string basicAuthPassword = "4820eb8af0b8b3e725986a23fc9af44a"; // The password to use with basic authentication

            YtelAPIClient client = new YtelAPIClient(basicAuthUserName, basicAuthPassword);

            CreateCallsMakervmInput collect = new CreateCallsMakervmInput();

            string mfrom = "+19892144063";
            collect.From = mfrom;

            string RVMID = "+19853284842";
            collect.RVMCallerId = RVMID;

            //string to = "+19892144063";
            collect.To = To;

            //string URL = "https://dl.prokerala.com/downloads/ringtones/files/mp3/meray-paas-tum-ho-pakistani-drama-ost-ringtone-49231.mp3";
            collect.VoiceMailURL = URL;

            string method = "POST";
            collect.Method = method;

            //string statusCallBackUrl = "StatusCallBackUrl";
            //collect.StatusCallBackUrl = statusCallBackUrl;

            //string statsCallBackMethod = "StatsCallBackMethod";
            //collect.StatsCallBackMethod = statsCallBackMethod;


            string result = await client.Call.CreateCallsMakervmAsync(collect);
            return result;
        }

        public async Task<string> makeCall(string To,string URL)
        {

            string basicAuthUserName = "a2508a00-03b2-11e9-bd38-c316c5acc991"; // The username to use with basic authentication
            string basicAuthPassword = "4820eb8af0b8b3e725986a23fc9af44a"; // The password to use with basic authentication

            YtelAPIClient client = new YtelAPIClient(basicAuthUserName, basicAuthPassword);

            CreateCallsMakecallInput collect = new CreateCallsMakecallInput();

            string mfrom = "+19892144063";
            collect.From = mfrom;

            //string to = "+19892144063";
            collect.To = To;

            //string URL = "https://theautomatedrei.com/receiveVoiceCall";
            collect.Url = URL;

            string method = "POST";
            collect.Method = method;

            //string statusCallBackUrl = "StatusCallBackUrl";
            //collect.StatusCallBackUrl = statusCallBackUrl;

            //string statsCallBackMethod = "StatsCallBackMethod";
            //collect.StatsCallBackMethod = statsCallBackMethod;


            string result = await client.Call.CreateCallsMakecallAsync(collect);
            return result;
        }
    }
}
