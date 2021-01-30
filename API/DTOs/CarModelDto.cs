using System.Collections.Generic;

namespace API.DTOs
{
    public class CarModelDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Level { get; set; }
        public string OfficialUrl { get; set; }
        public ICollection<TrimLevelDto> Levels { get; set; }
    }
}