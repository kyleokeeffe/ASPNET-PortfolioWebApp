using PortfolioWebApp.Models;

namespace PortfolioWebApp.Interfaces
{
    public interface IUserRepository
    {
        public List<User> GetUsers();

    }
}
