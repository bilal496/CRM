using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.IO;
using System.Text.RegularExpressions;
using System.Web.Http.Cors;

namespace CRM_API.Controllers
{
    public class RVMController : ApiController
    {
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [System.Web.Http.HttpGet]
        public string GetDirectoryListingRegexForUrl(string url)
        {
            if (url.Equals("https://theautomatedrei.com/uploads/mp3/"))
            {
                return "<a href=\".*\">(?<name>.*)</a>";
            }
            throw new NotSupportedException();
        }

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [System.Web.Http.HttpGet]
        public IHttpActionResult GetFiles()
        {
            string url = "https://theautomatedrei.com/uploads/mp3/";
            List<voices> files=new List<voices>();
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
            {
                using (StreamReader reader = new StreamReader(response.GetResponseStream()))
                {
                    string html = reader.ReadToEnd();
                    Regex regex = new Regex(GetDirectoryListingRegexForUrl(url));
                    MatchCollection matches = regex.Matches(html);
                    if (matches.Count > 0)
                    {
                        foreach (Match match in matches)
                        {
                            if (match.Success)
                            {
                                if (match.Groups["name"].ToString().Contains(".wav") || match.Groups["name"].ToString().Contains(".mp3"))
                                {
                                    voices v = new voices();
                                    v.key = match.Groups["name"].ToString();
                                    v.value = "https://theautomatedrei.com/uploads/mp3/" + match.Groups["name"].ToString();
                                    files.Add(v);
                                }
                            }
                        }
                    }
                }
            }
            return Json(files);
        }
        
       
    }

    public class voices
    {
        public string key { get; set; }
        public string value { get; set; }
    }
}