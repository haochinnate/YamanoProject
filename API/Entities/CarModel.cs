using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Models")]
    public class CarModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string OfficialUrl { get; set; }
        public bool IsActive { get; set; }
        public ICollection<CarTrimLevel> Levels { get; set; }
        public CarManufacturer CarManufacturer { get; set; }
        public int CarManufacturerId { get; set; }
    }
}