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
        public async Task<CarModelDto> GetModelAsync(ManufacturerDto manufacturer, int modelId)
        {
            return await _context.Models
                .Where(m => m.Id == modelId && m.CarManufacturerId == manufacturer.Id)
                .ProjectTo<CarModelDto>(_mapper.ConfigurationProvider)
                .SingleOrDefaultAsync();
        }

        public async Task<CarModelDto> GetModelAsync(ManufacturerDto manufacturer, string modelName)
        {
            return await _context.Models
                .Where(m => m.Name == modelName && m.CarManufacturerId == manufacturer.Id)
                .ProjectTo<CarModelDto>(_mapper.ConfigurationProvider)
                .SingleOrDefaultAsync();
        }

        public async Task<IEnumerable<CarModelDto>> GetModelsAsync(int manufacturerId)
        {
            return await _context.CarManufacturers
                .Where(m => m.Id == manufacturerId)
                .Select(m => m.Models)
                .ProjectTo<CarModelDto>(_mapper.ConfigurationProvider)
                .ToListAsync();
        }

        public async Task<IEnumerable<CarModelDto>> GetModelsAsync(string manufacturerName)
        {
            return await _context.CarManufacturers
                .Where(m => m.Name == manufacturerName)
                .Select(m => m.Models)
                .ProjectTo<CarModelDto>(_mapper.ConfigurationProvider)
                .ToListAsync();
        }

        public async Task<IEnumerable<CarModelDto>> GetModelsAsync(ManufacturerDto manufacturer)
        {
            return await _context.CarManufacturers
                .Where(m => m.Id == manufacturer.Id)
                .Select(m => m.Models)
                .ProjectTo<CarModelDto>(_mapper.ConfigurationProvider)
                .ToListAsync();
        }
        #endregion

        #region GetTrimLevel
        public async Task<TrimLevelDto> GetTrimLevelAsync(CarModelDto model, int trimLevelId)
        {
            return await _context.Models
                .FirstOrDefault(m => m.Id == model.Id)
                .Levels.AsQueryable()
                .Where(l => l.Id == trimLevelId)
                .ProjectTo<TrimLevelDto>(_mapper.ConfigurationProvider)
                .SingleOrDefaultAsync();
        }

        public async Task<TrimLevelDto> GetTrimLevelAsync(CarModelDto model, string trimLevelName)
        {
            return await _context.Models
                .FirstOrDefault(m => m.Id == model.Id)
                .Levels.AsQueryable()
                .Where(l => l.LevelName == trimLevelName)
                .ProjectTo<TrimLevelDto>(_mapper.ConfigurationProvider)
                .SingleOrDefaultAsync();
        }

        public async Task<IEnumerable<TrimLevelDto>> GetTrimLevelsAsync(int modelId)
        {
            return await _context.Models
                .Where(m => m.Id == modelId)
                .Select(m => m.Levels)
                .ProjectTo<TrimLevelDto>(_mapper.ConfigurationProvider)
                .ToListAsync();
        }

        public async Task<IEnumerable<TrimLevelDto>> GetTrimLevelsAsync(string modelName)
        {
            return await _context.Models
                .Where(m => m.Name == modelName)
                .Select(m => m.Levels)
                .ProjectTo<TrimLevelDto>(_mapper.ConfigurationProvider)
                .ToListAsync();
        }

        public async Task<IEnumerable<TrimLevelDto>> GetTrimLevelsAsync(CarModelDto model)
        {
            return await _context.Models
                .Where(m => m.Id == model.Id)
                .Select(m => m.Levels)
                .ProjectTo<TrimLevelDto>(_mapper.ConfigurationProvider)
                .ToListAsync();
        }
        #endregion

    }
}