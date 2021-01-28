using System.Collections.Generic;

namespace API.DTOs
{
    public class ManufacturerDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ChineseName { get; set; }
        public string LogoUrl { get; set; }
        public string OfficialUrl { get; set; }
        public ICollection<CarModelDto> Models { get; set; }
    }
}