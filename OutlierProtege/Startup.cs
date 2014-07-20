using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(OutlierProtege.Startup))]
namespace OutlierProtege
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
