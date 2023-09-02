using Microsoft.EntityFrameworkCore;
using PortfolioWebApp.Models;

namespace PortfolioWebApp.DB
{
    public class DatabaseContext:DbContext
    {

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //optionsBuilder.UseSqlServer
            base.OnConfiguring(optionsBuilder);
        }
        //public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        //{

        //}
        public DbSet<User> Users { get; set; }
        //users=>Set<User>()

    }
}
