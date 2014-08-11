using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using OutlierProtege.Models;

namespace OutlierProtege.Database
{
    public class Initializer : System.Data.Entity.DropCreateDatabaseIfModelChanges<ProtegeContext>
    {
        public void Init(ProtegeContext context)
        {
            Seed(context);
        }
        protected override void Seed(ProtegeContext context)
        {
            var programming = new Field
            {
                Name = "Programming",
                //Id = 0,
                //Subjects = new List<Subject>
                //{
                //    new Subject { Id = 4, Name = "C#" }
                //}
            };
            var sales = new Field
            {
                Name = "Sales",
                //Subjects = new List<Subject>
                //{
                //    new Subject { Id = 5, Name = "Presentations" }
                //}
            };
            var fields = new List<Field>
                {
                    programming,
                    sales
                };
            fields.ForEach(f => context.Fields.Add(f));
            var subjects = new List<Subject>
            {
                new Subject { Id = 2, Name = "Asp.Net"}
            };
            subjects.ForEach(s => context.Subjects.Add(s));

            var tasks = new List<Task>
            {
                new Task { Description = "Study" }
            };
            tasks.ForEach(t => context.Tasks.Add(t));

            var sources = new List<Source>
            {
                new Source { Description = "Source" }
            };
            sources.ForEach(s => context.Sources.Add(s));
            context.SaveChanges();
        }
    }
}