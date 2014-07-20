using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OutlierProtege.Models
{
    public class Field
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Subject> Subjects { get; set; }
    }
}