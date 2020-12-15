using API.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/cars/{manufacturer}")]
    public class CarModelsController : ControllerBase
    {
        private readonly DataContext _context;

        public CarModelsController(DataContext context)
        {
            this._context = context;
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