using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) 
            : base(options)
        {
        }

        public DbSet<CarManufacturer> CarManufacturers { get; set; }
        public DbSet<CarModel> Models { get; set; }
        // public DbSet<CarTrimLevel> TrimLevels { get; set; }
        public DbSet<User> Users { get; set; }
    }
}