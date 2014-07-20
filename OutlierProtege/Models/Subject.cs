using System.ComponentModel.DataAnnotations;
using System.Security.AccessControl;

namespace OutlierProtege.Models
{
    public class Subject
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
    }
}