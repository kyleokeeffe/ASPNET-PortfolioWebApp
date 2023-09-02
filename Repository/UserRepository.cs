using PortfolioWebApp.Interfaces;
using PortfolioWebApp.Models;


namespace PortfolioWebApp.Repository
{
    public class UserRepository:IUserRepository
    {
        readonly IAuthService _authService;
        private UserDbContext _dbContext;
        public UserRepository(IAuthService authService, UserDbContext dbContext)
        {
            _dbContext = dbContext;

            _authService = authService;

            UserDTO dto = new UserDTO();
            dto.Username = "Kyle";
            dto.Password = "google";
            User user = _authService.RegisterUserInit(dto);

           
            using (var context = _dbContext)
            {
                //var users = new List<User>
                //{

                // new User
                //    {

                //        Username = "test",
                //        Id = 1,

                //        Role="Customer"

                //    } };
                //context.Users.AddRange(users);
                context.User.Add(user);
                context.SaveChanges();
            }
            _authService = authService;
        }


        public List<User> GetUsers()
        {
            using (var context = _dbContext)
            {
                var list = context.User.
                    ToList();
                return list;
            }
        }
    }
}
