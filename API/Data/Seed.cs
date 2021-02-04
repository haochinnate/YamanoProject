using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedUsers(DataContext context)
        {
            if (await context.Users.AnyAsync())
            {
                return;
            } 
            var userData = await System.IO.File.ReadAllTextAsync("Data/UserSeedData.json");
            var users = JsonSerializer.Deserialize<List<User>>(userData);
        
            // just like AccountController Register function
            foreach (var user in users)
            {
                using var hmac = new HMACSHA512();
                user.UserName = user.UserName.ToLower();
                user.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("Pa$$w0rd"));
                user.PasswordSalt = hmac.Key;

                context.Users.Add(user);
            }
            await context.SaveChangesAsync(); 
        }

        internal static string _seedDataRootFolder = Path.Combine("Data", "CarSeedData");
        internal static string _seedDataManufacturersFolder = Path.Combine(_seedDataRootFolder, "Manufacturers");
        public static async Task SeedCars(DataContext context)
        {
            if (await context.CarManufacturers.AnyAsync())
            {
                return;
            } 

            var manufacturersData = await System.IO.File.ReadAllTextAsync(
                Path.Combine(_seedDataRootFolder, "CarManufacturerSeedData.json"));

            
            var manufacturers = JsonSerializer.Deserialize<List<CarManufacturer>>(manufacturersData);

            foreach (var manufacturerFile in Directory.GetFiles(_seedDataManufacturersFolder))
            {
                // manufacturerFile is "\CarSeedData\Manufacturers\manufacturer.json", which contains models information
                var modelsData = await System.IO.File.ReadAllTextAsync(manufacturerFile);
                var models = JsonSerializer.Deserialize<List<CarModel>>(modelsData);

                string manufacturerName = Path.GetFileNameWithoutExtension(manufacturerFile);
                var manufacturer = manufacturers.First(m => m.Name == manufacturerName);
                string manufacturerFolderPath = Path.Combine(_seedDataManufacturersFolder, manufacturerName);
                
                // assign models to manufacturer
                manufacturer.Models = models;

                foreach (var modelDataPath in Directory.GetFiles(manufacturerFolderPath))
                {        
                    var levels = await GetTrimLevelsFromFileAsync(modelDataPath);
                    string modelName = Path.GetFileNameWithoutExtension(modelDataPath);
                    var model = models.First(m => m.Name == modelName);
                    // assign level to models
                    model.Levels = levels;
                }
            }        

            // add to context and save
            foreach (var manufacturer in manufacturers)
            {
                context.CarManufacturers.Add(manufacturer);
            }
            await context.SaveChangesAsync(); 
        }

        internal static async Task<List<CarTrimLevel>> GetTrimLevelsFromFileAsync(string dataFilePath)
        {
            var levelsData = await System.IO.File.ReadAllTextAsync(dataFilePath);
            var levels = JsonSerializer.Deserialize<List<CarTrimLevel>>(levelsData);
            return levels;
        }
    }


}