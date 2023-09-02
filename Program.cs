using Microsoft.EntityFrameworkCore;
using PortfolioWebApp.Models;
using System;

namespace PortfolioWebApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                                  policy =>
                                  {
                                      policy.WithOrigins("https://localhost:44453/").AllowAnyMethod().AllowAnyHeader();
                                      //policy.WithOrigins("https://localhost:7193/").AllowAnyMethod().AllowAnyHeader();
                                      
                                  });
            });
            var connection = String.Empty;
            if (builder.Environment.IsDevelopment())
            {
                builder.Configuration.AddEnvironmentVariables().AddJsonFile("appsettings.json");
                connection = builder.Configuration.GetConnectionString("AZURE_SQL_CONNECTIONSTRING");
            }
            else
            {
                connection = Environment.GetEnvironmentVariable("AZURE_SQL_CONNECTIONSTRING");
            }

            builder.Services.AddDbContext<UserDbContext>(options =>
                options.UseSqlServer(connection));
            // Add services to the container.

            builder.Services.AddControllersWithViews();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();
            app.UseCors(MyAllowSpecificOrigins);

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller}/{action=Index}/{id?}");

            app.MapFallbackToFile("index.html");

            app.MapGet("/User", (UserDbContext context) =>
            {
                return context.User.ToList();
            })
            .WithName("GetUsers");
            //.WithOpenApi();

            app.MapPost("/User", (User user, UserDbContext context) =>
            {
                context.Add(user);
                context.SaveChanges();
            })
            .WithName("CreateUser");
           // .WithOpenApi();



            app.Run();
        }
    }
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public byte[] PasswordHash { get; set; } = new byte[32];
        public byte[] PasswordSalt { get; set; } = new byte[32];
        public string RefreshToken { get; set; } = string.Empty;
        public DateTime TokenCreated { get; set; }
        public DateTime TokenExpires { get; set; }
    }

    public class UserDbContext : DbContext { 
    public UserDbContext(DbContextOptions<UserDbContext> options) : base(options)
        {

        }
        public DbSet<User> User { get; set; }
    }


    //public class DatabaseContext : DbContext
    //{

    //    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //    {
    //        //optionsBuilder.UseSqlServer
    //        base.OnConfiguring(optionsBuilder);
    //    }
    //    //public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
    //    //{

    //    //}
    //    public DbSet<User> Users { get; set; }
    //    //users=>Set<User>()

    //}

}