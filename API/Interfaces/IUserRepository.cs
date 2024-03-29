using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface IUserRepository
    {
        void Upate(User user);
        Task<bool> SaveAllAsync();
        Task<IEnumerable<User>> GetUsersAsync();
        Task<User> GetUserByIdAsync(int id);
        Task<User> GetUserByUserNameAsync(string username);

        Task<IEnumerable<MemberDto>> GetMembersAsync();
        Task<MemberDto> GetMemberAsync(string username);
    }
}