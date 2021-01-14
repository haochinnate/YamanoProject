using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/cars")]
    public class CarManufacturersController : ControllerBase
    {
        private readonly DataContext _context;
        public CarManufacturersController(DataContext context)
        {
            _context = context;
        }

        // url:port/api/carmanufacturers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CarManufacturer>>> GetCarManufacturers()
        {
            var manufacturers = await _context.CarManufacturers.ToListAsync();

            return manufacturers;
        }

        // url:port/api/carmanufacturers/3
        [HttpGet("{id}")]
        public async Task<ActionResult<CarManufacturer>> GetCarManufacturer(int id)
        {
            var manufacturer = await _context.CarManufacturers.FindAsync(id);

            return manufacturer;
        }
    }
}