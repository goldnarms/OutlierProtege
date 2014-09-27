using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OutlierProtege.Models
{
    public partial class Protege
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int HoursLogged { get; set; }
        public int FieldId { get; set; }
        public string UserId { get; set; }
        [ForeignKey("FieldId")]
        public virtual Field Field { get; set; }
        [ForeignKey("UserId")]
        public virtual ApplicationUser User { get; set; }

        public virtual ICollection<Practice> Practices { get; set; }
    }
}