using System.Data.Entity.ModelConfiguration.Conventions;
using Microsoft.AspNet.Identity.EntityFramework;
using OutlierProtege.Models;

namespace OutlierProtege.Database
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class ProtegeContext : IdentityDbContext<ApplicationUser>
    {
        public ProtegeContext()
            : base("name=ProtegeContext")
        {
        }


        public static ProtegeContext Create()
        {
            return new ProtegeContext();
        }

        public DbSet<Subject> Subjects { get; set; }
        public DbSet<Field> Fields { get; set; }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}
