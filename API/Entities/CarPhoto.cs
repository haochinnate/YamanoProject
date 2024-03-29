using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("CarPhotos")]
    public class CarPhoto
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public bool IsMain { get; set; }
        public string PublicId { get; set; }
        public CarTrimLevel CarTrimLevel { get; set; }
        public int CarTrimLevelId { get; set; }
    }
}