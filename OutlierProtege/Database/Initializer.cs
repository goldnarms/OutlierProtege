using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using OutlierProtege.Models;

namespace OutlierProtege.Database
{
    public class Initializer : System.Data.Entity.DropCreateDatabaseAlways<ProtegeContext>
    {
        public void Init(ProtegeContext context)
        {
            Seed(context);
        }
        protected override void Seed(ProtegeContext context)
        {
            var fields = new List<Field>
                {
                    new Field {Name = "Programming"}
                };
            fields.ForEach(f => context.Fields.Add(f));
            context.SaveChanges();
        }
    }
}