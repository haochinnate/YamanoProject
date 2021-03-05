using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface ICarModelRepository
    {
        // Update TrimLevel 
        // 
        // void Upate(User user);
        // Task<bool> SaveAllAsync();

        // Manufacturer
        Task<IEnumerable<ManufacturerDto>> GetManufacturersAsync();
        Task<ManufacturerDto> GetManufacturerAsync(int id);
        Task<ManufacturerDto> GetManufacturerAsync(string manufacturerName);

        // Model
        Task<IEnumerable<CarModelDto>> GetModelsAsync(int manufacturerId);
        Task<IEnumerable<CarModelDto>> GetModelsAsync(string manufacturerName);
        Task<IEnumerable<CarModelDto>> GetModelsAsync(ManufacturerDto manufacturer);
        Task<CarModelDto> GetModelAsync(ManufacturerDto manufacturer, int modelId);
        Task<CarModelDto> GetModelAsync(ManufacturerDto manufacturer, string modelName);

        // TrimLevel
        Task<IEnumerable<TrimLevelDto>> GetTrimLevelsAsync(int modelId);
        Task<IEnumerable<TrimLevelDto>> GetTrimLevelsAsync(string modelName);
        Task<IEnumerable<TrimLevelDto>> GetTrimLevelsAsync(CarModelDto model);
        Task<TrimLevelDto> GetTrimLevelAsync(CarModelDto model, int trimLevelId);
        Task<TrimLevelDto> GetTrimLevelAsync(CarModelDto model, string trimLevelName);

        // void CreateCommand(Command cmd);
        // void CreateTrimLevel(TrimLevelDto? trimLevel);
        // bool SaveChanged();
    }
}