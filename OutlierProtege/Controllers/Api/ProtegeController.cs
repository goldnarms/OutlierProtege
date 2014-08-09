using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using OutlierProtege.Database;
using OutlierProtege.Models;

namespace OutlierProtege.Controllers.Api
{
    public class ProtegesController : ApiController
    {
        private ProtegeContext db = new ProtegeContext();

        // GET: api/Proteges
        public IQueryable<Protege> GetProteges()
        {
            return db.Proteges;
        }

        // GET: api/Proteges/5
        [ResponseType(typeof(Protege))]
        public async Task<IHttpActionResult> GetProtege(int id)
        {
            Protege protege = await db.Proteges.FindAsync(id);
            if (protege == null)
            {
                return NotFound();
            }

            return Ok(protege);
        }

        // PUT: api/Proteges/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutProtege(int id, Protege protege)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != protege.Id)
            {
                return BadRequest();
            }

            db.Entry(protege).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProtegeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Proteges
        [ResponseType(typeof(Protege))]
        public async Task<IHttpActionResult> PostProtege(Protege protege)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Proteges.Add(protege);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = protege.Id }, protege);
        }

        // DELETE: api/Proteges/5
        [ResponseType(typeof(Protege))]
        public async Task<IHttpActionResult> DeleteProtege(int id)
        {
            Protege protege = await db.Proteges.FindAsync(id);
            if (protege == null)
            {
                return NotFound();
            }

            db.Proteges.Remove(protege);
            await db.SaveChangesAsync();

            return Ok(protege);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProtegeExists(int id)
        {
            return db.Proteges.Count(e => e.Id == id) > 0;
        }
    }
}