using System.Collections.Generic;

namespace API.Entities
{
    public class CarManufacturer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ChineseName { get; set; }
        public string LogoUrl { get; set; }
        public string OfficialUrl { get; set; }
        public ICollection<CarModel> Models { get; set; }
    }
}