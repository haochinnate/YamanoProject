using System.Collections.Generic;
using System.Diagnostics;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/cars/{manufacturer}/models/{modelName}")]
    public class CarTrimLevelsController : ControllerBase
    {
        private readonly ICarModelRepository _carModelRepository;
        private readonly IMapper _mapper;
        public CarTrimLevelsController(ICarModelRepository carModelRepository, IMapper mapper)
        {
            _carModelRepository = carModelRepository;
            _mapper = mapper;
        }

        // url:port/api/cars/{manufacturer}/models/{modelName}/levels
        [HttpGet("levels")]
        public async Task<ActionResult<IEnumerable<TrimLevelDto>>> GetTrimLevels(
            [FromRoute]string manufacturer, 
            [FromRoute]string modelName)
        {
            Debug.WriteLine($"Function: GetTrimLevels({manufacturer}, {modelName})");

            var levels = await _carModelRepository.GetTrimLevelsAsync(modelName);
            return Ok(levels);
        }

        // url:port/api/cars/{manufacturer}/models/{modelName}/levels/{id}
        [HttpGet("levels/{id}")]
        public async Task<ActionResult<TrimLevelDto>> GetTrimLevel(
            [FromRoute]string manufacturer, 
            [FromRoute]string modelName, 
            int id)
        {
            Debug.WriteLine($"Function: GetTrimLevel({manufacturer}, {modelName}, {id})");

            var manufacturerObject = await _carModelRepository.GetManufacturerAsync(manufacturer);
            var model = await _carModelRepository.GetModelAsync(manufacturerObject, modelName);
            var level = await _carModelRepository.GetTrimLevelAsync(model, id);

            return level;
        }
    }
}