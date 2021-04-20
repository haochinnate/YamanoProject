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
            
            // return Ok(_mapper.Map<IEnumerable<TrimLevelDto>>(levels));
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

            // another implementation from youtube video
            // if(manufacturerObject != null)
            // {
            //     return Ok(level);
            //     // should map to DTO in "controller" or "repository"??
            //     return Ok(_mapper.Map<CommandReadDto>(commandItem));
            // }
            // return NotFound();

            return level;
        }

        // POST api/commands
        // [HttpPost]
        // public ActionResult<CommandReadDto> CreateCommand(CommandCreateDto commandCreateDto)
        // {
        //     var commandModel = _mapper.Map<Command>(commandCreateDto);
        //     _repository.CreateCommand(commandModel);
        //     _repository.SaveChanges();
        //     
        //     var commandReadDto = _mapper.Map<CommandReadDto>(commandModel);
        //     
        //     return CreateAtRoute(nameof(GetCommandById), new {Id = commandReadDto.Id}, commandReadDto);
        //     // return Ok(commandReadDto);
        // }

        // Get api/commands/{id}
        // [HttpGet("{id}", Name="GetCommandById")]
        // public ActionResult<CommandReadDto> GetCommandById(int id)
        // {
        //     var commandItem = _carModelRepository.GetCommandById(id);
        //     if (commandItem != null)
        //     {
        //         return Ok(_mapper.Map<CommandReadDto>(commandItem));
        //     }
        //     return NotFound();
        // }
    }
}