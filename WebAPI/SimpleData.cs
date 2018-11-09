using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI
{
    public class SimpleData
    {
        public static void Initialize(NoteContext context)
        {
            if (!context.Notes.Any())
            {
                context.Notes.AddRange(
                    new Note
                    {
                        Text = "First Note"
                    }
                );
                context.SaveChanges();
            }
        }
    }
}
