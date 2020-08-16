using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WYNK.Data.Model;
using WYNK.Data.Repository;
using WYNK.Data.Repository.Implementation;

namespace WYNK.Services
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var conString = Configuration.GetConnectionString("WYNKContext");



            services.AddCors(x => { x.AddPolicy("AllowAll", y => y.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin().AllowCredentials().Build()); });
            services.AddDbContext<WYNKContext>(Options => Options.UseSqlServer(conString));
      
            services.AddScoped<IRepositoryWrapper, RepositoryWrapper>();
            services.AddMvc().AddJsonOptions(x =>
            {
                x.SerializerSettings.ContractResolver = new DefaultContractResolver();
                x.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            });
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
     .AddJwtBearer(options =>
     {
         options.TokenValidationParameters = new TokenValidationParameters
         {
             ValidateIssuer = true,
             ValidateAudience = true,
             ValidateLifetime = true,
             ValidateIssuerSigningKey = true,
             ValidIssuer = Configuration["Jwt:Issuer"],
             ValidAudience = Configuration["Jwt:Issuer"],
             IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]))
         };
     });
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors("AllowAll");
            app.UseAuthentication();


            app.UseMvc();
        }
    }
}