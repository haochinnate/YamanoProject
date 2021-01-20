using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Authorize]
    public class UsersController : BaseApiController
    {
        private readonly IUserRepository _userRepository;
        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            var users = await _userRepository.GetUsersAsync();
            return Ok(users);
        }

        // [HttpGet("{id}")]
        // public async Task<ActionResult<User>> GetUser(int id)
        // {
        //     return await _userRepository.GetUserByIdAsync(id);
        // }

        [HttpGet("{username}")]
        public async Task<ActionResult<User>> GetUser(string username)
        {
            return await _userRepository.GetUserByUserNameAsync(username);
        }
    }
}