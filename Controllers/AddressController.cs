using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using SampleWebApi.Models;
// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace SampleWebApi.Controllers
{
    [Route("api/[controller]")]
    public class AddressController : Controller
    {
        private SampleDbContext _context;

        public AddressController(SampleDbContext context)
        {
            _context = context;
        }
        // GET: /<controller>/
        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            //var person = _context.People.FirstOrDefault(t => t.Id == id);
            var _addresses = _context.Address
                .FirstOrDefault(t => t.Id == id);

            if (_addresses != null)
            {
                _context.Remove(_addresses);
                _context.SaveChanges();
            }
        }
    }
}
