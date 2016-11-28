using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using SampleWebApi.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace SampleWebApi.Controllers
{
    [Route("api/[controller]")]
    public class PersonController : Controller
    {
        private SampleDbContext _context;

        public PersonController(SampleDbContext context)
        {
            _context = context; 
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Person> Get()
        {
            var people = _context.People;
//                .Include(c => c.Addresses);
            return people;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Person Get(int id)
        {
            var person = _context.People
                .Include(c => c.Addresses)
                .FirstOrDefault(c => c.Id == id);
            return person;
        }

        // POST api/values
        [HttpPost]
        [ProducesResponseType(typeof(Person), 200)]
       
        public async Task<IActionResult> Post([FromBody]Person value)
        {
            if (ModelState.IsValid)
            {
                _context.People.Add(value);
                await _context.SaveChangesAsync();
                return Ok(value);
            }
            return null;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        
        public void Put(int id, [FromBody]Person value)
        {
            if (ModelState.IsValid)
            {
                var existingPerson = _context.People.FirstOrDefault(t => t.Id == id);
                if (existingPerson != null)
                    existingPerson.Addresses = value.Addresses;
                existingPerson.FirstName = value.FirstName;
                existingPerson.LastName = value.LastName;
                _context.SaveChanges();
            }
        }
        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            //var person = _context.People.FirstOrDefault(t => t.Id == id);
            var person = _context.People
                .Include(c => c.Addresses)
                .FirstOrDefault(t => t.Id == id);

            if (person != null)
            {
                _context.Remove(person);
                _context.SaveChanges();
            }
        }
    }
}
