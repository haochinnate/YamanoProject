using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Interfaces;

namespace API.Data
{
    public class CarModelRepository : ICarModelRepository
    {
        #region GetManufacturer
        public Task<ManufacturerDto> GetManufacturerAsync(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task<ManufacturerDto> GetManufacturerAsync(string manufacturerName)
        {
            throw new System.NotImplementedException();
        }

        public Task<IEnumerable<ManufacturerDto>> GetManufacturersAsync()
        {
            throw new System.NotImplementedException();
        }

        #endregion

        #region GetModel
        public Task<CarModelDto> GetModelAsync(ManufacturerDto manufacturer, int modelId)
        {
            throw new System.NotImplementedException();
        }

        public Task<CarModelDto> GetModelAsync(ManufacturerDto manufacturer, string modelName)
        {
            throw new System.NotImplementedException();
        }

        public Task<IEnumerable<CarModelDto>> GetModelsAsync(int manufacturerId)
        {
            throw new System.NotImplementedException();
        }

        public Task<IEnumerable<CarModelDto>> GetModelsAsync(string manufacturerName)
        {
            throw new System.NotImplementedException();
        }

        public Task<IEnumerable<CarModelDto>> GetModelsAsync(ManufacturerDto manufacturer)
        {
            throw new System.NotImplementedException();
        }    
        #endregion

        #region GetTrimLevel
        public Task<TrimLevelDto> GetTrimLevelAsync(CarModelDto model, int trimLevelId)
        {
            throw new System.NotImplementedException();
        }

        public Task<TrimLevelDto> GetTrimLevelAsync(CarModelDto model, string trimLevelName)
        {
            throw new System.NotImplementedException();
        }

        public Task<IEnumerable<TrimLevelDto>> GetTrimLevelsAsync(int modelId)
        {
            throw new System.NotImplementedException();
        }

        public Task<IEnumerable<TrimLevelDto>> GetTrimLevelsAsync(string modelName)
        {
            throw new System.NotImplementedException();
        }

        public Task<IEnumerable<TrimLevelDto>> GetTrimLevelsAsync(CarModelDto model)
        {
            throw new System.NotImplementedException();
        }
        #endregion

    }
}