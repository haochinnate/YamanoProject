using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/cars")]
    public class CarManufacturersController : ControllerBase
    {
        private readonly ICarModelRepository _carModelRepository;
        private readonly IMapper _mapper;

        public CarManufacturersController(ICarModelRepository carModelRepository, IMapper mapper)
        {
            _carModelRepository = carModelRepository;
            _mapper = mapper;
        }

        // url:port/api/cars
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ManufacturerDto>>> GetCarManufacturers()
        {
            var manufacturers = await _carModelRepository.GetManufacturersAsync();
            return Ok(manufacturers);
        }

        // url:port/api/cars/{manufacturerName}
        [HttpGet("{manufacturerName}")]
        public async Task<ActionResult<ManufacturerDto>> GetCarManufacturer(string manufacturerName)
        {
            var manufacturer = await _carModelRepository.GetManufacturerAsync(manufacturerName);
            return manufacturer;
        }
    }
}