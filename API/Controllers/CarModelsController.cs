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
    [Route("api/cars/{manufacturer}")]
    public class CarModelsController : ControllerBase
    {
        private readonly ICarModelRepository _carModelRepository;
        private readonly IMapper _mapper;

        public CarModelsController(ICarModelRepository carModelRepository, IMapper mapper)
        {
            _carModelRepository = carModelRepository;
            _mapper = mapper;
        }

        // url:port/api/cars/{manufacturer}/models
        [HttpGet("models")]
        public async Task<ActionResult<IEnumerable<CarModelDto>>> GetModels([FromRoute]string manufacturer)
        {
            Debug.WriteLine($"Function: GetModels({manufacturer})");

            var models = await _carModelRepository.GetModelsAsync(manufacturer);
            return Ok(models);
        }

        // url:port/api/cars/{manufacturer}/models/{modelName}
        [HttpGet("models/{modelName}")]
        public async Task<ActionResult<CarModelDto>> GetModel([FromRoute]string manufacturer, string modelName)
        {
            Debug.WriteLine($"Function: GetModel({manufacturer}, {modelName})");

            var manufacturerObject = await _carModelRepository.GetManufacturerAsync(manufacturer);
            var model = await _carModelRepository.GetModelAsync(manufacturerObject, modelName);
            return model;
        }
        
        // https://stackoverflow.com/questions/58208688/validating-and-passing-controller-level-parameters-with-asp-net-mvc-attribute-ro
        // [Route("customers/{customerId}/orders/{orderId}")]
        // public Order GetOrderByCustomer(int customerId, int orderId) { ... }
        // url:port/api/cars/{manufacturer}/models/
        // url:port/api/cars/{manufacturer}/models/{id}
        // public async Task<ActionResult<IEnumerable<CarModels>>> GetCarModels()
        // {
        //     var manufacturer = await _context.CarManufacturers.FindAsync(id);

        //     return manufacturer;
        // }
    }
}