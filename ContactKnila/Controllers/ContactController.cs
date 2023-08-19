using ContactKnila.DBContext;
using ContactKnila.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly ContactDbContext _context;

        public ContactController(ContactDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contact>>> Get()
        {
            return await _context.Contacts.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Contact>> GetById(int id)
        {
            var contactDetails = await _context.Contacts.FindAsync(id);

            if (contactDetails == null)
            {
                return NotFound();
            }

            return contactDetails;
        }

        [HttpPost]
        public async Task<ActionResult<Contact>> Post(Contact contact)
        {
            _context.Contacts.Add(contact);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Get", new { id = contact.Id }, contact);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Contact contact)
        {
            var updateContact = _context.Contacts.Where(x => x.Id == id).FirstOrDefault();
            updateContact.FirstName = contact.FirstName;
            updateContact.LastName = contact.LastName;
            updateContact.PhoneNumber = contact.PhoneNumber;
            updateContact.Address = contact.Address;
            updateContact.City = contact.City;
            updateContact.State = contact.State;
            updateContact.Country = contact.Country;
            updateContact.PostalCode = contact.PostalCode;
            _context.Contacts.Update(updateContact);
            _context.SaveChanges();
            return Ok("Updated!");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var contactDetails = await _context.Contacts.FindAsync(id);
            if (contactDetails == null)
            {
                return NotFound();
            }

            _context.Contacts.Remove(contactDetails);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
