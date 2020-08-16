using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace WYNK.Data.Model
{
    public class WYNKContext : DbContext
    {
        public WYNKContext(DbContextOptions<WYNKContext> options) : base(options) { }

      
        public DbSet<Bankservice> Bankservice { get; set; }
    }

}
