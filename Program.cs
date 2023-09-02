using Microsoft.EntityFrameworkCore;
using PortfolioWebApp.DB;
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
                                      policy.WithOrigins("localhost:4200").AllowAnyMethod().AllowAnyHeader();
                                      
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

            builder.Services.AddDbContext<DatabaseContext>(options =>
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

            app.MapGet("/User", (DatabaseContext context) =>
            {
                return context.Users.ToList();
            })
            .WithName("GetUsers");
            //.WithOpenApi();

            app.MapPost("/User", (User user, DatabaseContext context) =>
            {
                context.Add(user);
                context.SaveChanges();
            })
            .WithName("CreateUser");
           // .WithOpenApi();



            app.Run();
        }
    }
    //public class User
    //{
    //    public int Id { get; set; }
    //    public string Name { get; set; }
    //    public string Password { get; set; }
    //}

    //public class UserDbContext : DbContext { 
    //public UserDbContext(DbContextOptions<UserDbContext> options) : base(options)
    //    {

    //    }
    //    public DbSet<User> User { get; set; }
    //}


}