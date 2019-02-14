using System.Threading.Tasks;
using ConnexAi.Application.Project.Queries.GetProjects;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace connexai.Controllers
{
    [Route("api/[controller]")]
    public class ProjectsController : Controller
    {
        private readonly IMediator mediator;

        public ProjectsController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> All()
        {
            return new JsonResult(await mediator.Send(new GetProjectsQuery()));
        }
    }
}
