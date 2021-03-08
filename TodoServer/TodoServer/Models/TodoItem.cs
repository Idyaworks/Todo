using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoServer.Models
{
    public enum TodoStatus
    {
        Completed,
        New
    }
    public class TodoItem
    {
        public long Id { get; set; }
        public string Title { get; set; }

        public string Description { get; set; }
        public TodoStatus Status { get; set; }

        public DateTime Date { get; set; }
    }
}
