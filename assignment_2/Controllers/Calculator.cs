using Microsoft.AspNetCore.Mvc;

namespace assignment_2.Controllers;

public class Calculator : Controller
{
    // GET
    public IActionResult Index()
    {
        return View();
    }
}