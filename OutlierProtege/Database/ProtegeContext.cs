using System.Data.Entity.ModelConfiguration.Conventions;
using OutlierProtege.Models;

namespace OutlierProtege.Database
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class ProtegeContext : DbContext
    {
        public ProtegeContext()
            : base("name=ProtegeContext")
        {
        }

        public DbSet<Subject> Subjects { get; set; }
        public DbSet<Field> Fields { get; set; }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}
