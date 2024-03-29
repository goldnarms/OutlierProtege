﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace OutlierProtege
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            //routes.MapRoute(
            //    name: "frontPage",
            //    url: "Home/FrontPage",
            //    defaults: new { controller = "Home", action = "FrontPage" });

            //routes.MapRoute(
            //    name: "register",
            //    url: "register/{pid}",
            //    defaults: new { controller = "Home", action = "Register", pid = UrlParameter.Optional });

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
