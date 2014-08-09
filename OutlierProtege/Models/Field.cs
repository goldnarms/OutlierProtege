using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OutlierProtege.Models
{
    public partial class Field
    {
        public Field()
        {
            //this.Subjects = new HashSet<Subject>();
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        //[ForeignKey("FieldId")]
        //public virtual ICollection<Subject> Subjects { get; set; }
    }
}