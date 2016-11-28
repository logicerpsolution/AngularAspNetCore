using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SampleWebApi.Models
{
    public class SampleDbContext : DbContext
    {
        public SampleDbContext(DbContextOptions<SampleDbContext> options)
            : base(options)
        {
            this.Database.EnsureCreated();
        }

        public DbSet<Person> People { get; set; }
        public DbSet<Address> Address { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Address>()
            //.Property(b => b.Id)
            //.ValueGeneratedNever();
            //modelBuilder.Entity<Address>().Property(x => x.Id).ValueGeneratedNever();
            //modelBuilder.Entity<Address>().Property(a => a.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);
        }
    }

    public class Person
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public List<Address> Addresses { get; set; }
    }

    public class Address
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        
        public string City { get; set; }
        public string Street { get; set; }
    }
}