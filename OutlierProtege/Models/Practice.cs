using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OutlierProtege.Models
{
    public class Practice
    {
        public int Id { get; set; }
        public int Hours { get; set; }
        public int TaskId { get; set; }
        public int SourceId { get; set; }
        public int ProtegeId { get; set; }

        public virtual Source Source { get; set; }
        public virtual Protege Protege { get; set; }
        public virtual Task Task { get; set; }
    }
}