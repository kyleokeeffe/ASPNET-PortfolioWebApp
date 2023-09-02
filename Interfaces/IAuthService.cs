using PortfolioWebApp.Models;

namespace PortfolioWebApp.Interfaces
{
    public interface IAuthService
    {
        Task<User> RegisterUser(UserDTO request);
        User RegisterUserInit(UserDTO request);
        Task<AuthResponseDTO> Login(UserDTO request);
        Task<AuthResponseDTO> RefreshToken();

    }
}
