using AutoMapper;
using ConnexAi.Domain;
using Google.Cloud.Datastore.V1;
using MediatR;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace ConnexAi.Application.Project.Queries.GetProjects
{
    public class GetProjectsQueryHandler : IRequestHandler<GetProjectsQuery, ProjectsViewModel>
    {
        private readonly DatastoreDb db;
        private readonly IMapper mapper;

        public GetProjectsQueryHandler(IMapper mapper, DatastoreDb db)
        {
            this.mapper = mapper;
            this.db = db;
        }

        public async Task<ProjectsViewModel> Handle(GetProjectsQuery request, CancellationToken cancellationToken)
        {
            var projects = await db.RunQueryAsync(new Query("Project"));
            return new ProjectsViewModel()
            {
                Projects = mapper.Map<IEnumerable<Entity>, List<WorkProject>>(projects.Entities)
            };
        }
    }
}