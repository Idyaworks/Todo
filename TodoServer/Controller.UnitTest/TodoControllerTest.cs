using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using TodoServer.Controllers;
using TodoServer.Models;
using Xunit.Sdk;

namespace Controller.UnitTest
{
    [TestClass]
    public class TodoControllerTest
    {
        [TestMethod]
        public async System.Threading.Tasks.Task TestMethod1Async()
        {

            var mockSet = new Mock<DbSet<TodoItem>>();

            var mockContext = new Mock<TodoContext>();
            mockContext.Setup(m => m.TodoItems).Returns(mockSet.Object);

            var service = new TodoItemsController(mockContext.Object);
            var task = await service.PostTodoItem(new TodoItem { Title = "AAA", Description = "AAA", Status = TodoStatus.New, Date = DateTime.Now });
            var result = task.Result as CreatedAtActionResult;

            Assert.IsNotNull(result);
            Assert.AreEqual((result.Value as TodoItem).Id, 0);
        }
    }
}
