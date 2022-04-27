using Microsoft.EntityFrameworkCore;
using UploadFilesServer.Models;

namespace UploadFilesServer.Context
{
    public class UserContext: DbContext
    {
        public UserContext(DbContextOptions options)
            :base(options)
        {
        }

        public DbSet<User>? Users { get; set; }
    }
}
