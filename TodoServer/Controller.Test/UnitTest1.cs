using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoServer.Controllers;
using TodoServer.Models;

namespace Controller.Test
{
    [TestClass]
    public class UnitTest1
    {

        [TestMethod]
        public async Task GetAllTodoItemsAsync()
        {
            var todoContext = new TodoContext(null);
            
            todoContext.TodoItems.Add(new TodoItem { Id = 0, Title = "BBB", Description = "BBB", Date = DateTime.Now });
            todoContext.TodoItems.Add(new TodoItem { Id = 1, Title = "ZZZ", Description = "ZZZ", Date = DateTime.Now });
            todoContext.TodoItems.Add(new TodoItem { Id = 2, Title = "AAA", Description = "AAA", Date = DateTime.Now });

            var controller = new TodoItemsController(todoContext);

            var action = await controller.GetTodoItems();
            var result = action.Result as IEnumerable<TodoItem>;
            Assert.AreEqual(3, result.Count());
        }
    }
}
