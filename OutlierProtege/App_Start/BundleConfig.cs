using System.Web;
using System.Web.Optimization;

namespace OutlierProtege
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/scripts")
                .Include("~/bower_components/angular/angular.js")
                .Include("~/bower_components/jquery/dist/jquery.js")
                .Include("~/bower_components/underscore/underscore.js")
                //.Include("~/bower_components/angular-animate/angular-animate.js")
                .Include("~/bower_components/angular-bootstrap/ui-bootstrap.js")
                .Include("~/bower_components/angular-bootstrap/ui-bootstrap-tpls.js")
                .Include("~/bower_components/angular-cookies/angular-cookies.js")
                .Include("~/bower_components/angular-resource/angular-resource.js")
                //.Include("~/bower_components/angular-route/angular-route.js")
                .Include("~/bower_components/angular-sanitize/angular-sanitize.js")
                .Include("~/bower_components/angular-ui-router/release/angular-ui-router.js")
                .Include("~/bower_components/jquery-steps/build/jquery.steps.js")
                .Include("~/bower_components/angular-wizard/dist/angular-wizard.js")
                .Include("~/bower_components/bootstrap/dist/js/bootstrap.js")
                .Include("~/Scripts/packages.js")
                .Include("~/Scripts/theme.js")
                //.Include("~/bower_components/angular/angular.js")
                //.Include("~/bower_components/angular/angular.js")
                //.Include("~/bower_components/angular/angular.js")
                //.Include("~/bower_components/angular/angular.js")
                //.Include("~/bower_components/angular/angular.js")
                //.Include("~/bower_components/angular/angular.js")
                //.Include("~/bower_components/angular/angular.js")
                //.Include("~/bower_components/angular/angular.js")
                //.Include("~/bower_components/angular/angular.js")
                //.Include("~/bower_components/angular/angular.js")
                //.Include("~/bower_components/angular/angular.js")
                //.Include("~/bower_components/angular/angular.js")
                //.Include("~/bower_components/angular/angular.js")
                        );

            //bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
            //            "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/app")
                .IncludeDirectory("~/App/Services/", "*.js")
                .IncludeDirectory("~/App/Directives/", "*.js")
                .IncludeDirectory("~/App/Interfaces/", "*.js")
                .IncludeDirectory("~/App/Controllers/", "*.js")
                .IncludeDirectory("~/App/Models/", "*.js")
                .Include("~/App/App.js")
                );

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include("~/bower_components/modernizr/modernizr.js"));

            bundles.Add(new StyleBundle("~/Content/css")
                .Include("~/bower_components/bootstrap/dist/css/bootstrap.css")
                //.Include("~/Content/main.css")
                //.Include("~/Content/site.css")
                .Include("~/Content/swatch-red-white.css")
                .Include("~/Content/swatch-white-red.css")
                .Include("~/Content/theme.css")
                );

            // Set EnableOptimizations to false for debugging. For more information,
            // visit http://go.microsoft.com/fwlink/?LinkId=301862
            BundleTable.EnableOptimizations = false;
            //TODO:  BundleTable.EnableOptimizations = true;
        }
    }
}
