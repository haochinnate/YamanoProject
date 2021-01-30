using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class CarModelRepository : ICarModelRepository
    {
        #region Field
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        #endregion

        #region Constructor
        public CarModelRepository(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }
        #endregion

        #region GetManufacturer
        public async Task<ManufacturerDto> GetManufacturerAsync(int id)
        {
            return await _context.CarManufacturers
                .Where(m => m.Id == id)
                .ProjectTo<ManufacturerDto>(_mapper.ConfigurationProvider)
                .SingleOrDefaultAsync();
        }

        public async Task<ManufacturerDto> GetManufacturerAsync(string manufacturerName)
        {
            return await _context.CarManufacturers
                .Where(m => m.Name == manufacturerName)
                .ProjectTo<ManufacturerDto>(_mapper.ConfigurationProvider)
                .SingleOrDefaultAsync();
        }

        public async Task<IEnumerable<ManufacturerDto>> GetManufacturersAsync()
        {
            return await _context.CarManufacturers
                .ProjectTo<ManufacturerDto>(_mapper.ConfigurationProvider)
                .ToListAsync();
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