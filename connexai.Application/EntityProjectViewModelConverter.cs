using AutoMapper;
using ConnexAi.Domain;
using Google.Cloud.Datastore.V1;

namespace ConnexAi.Application
{
    public class EntityProjectViewModelConverter : ITypeConverter<Entity, WorkProject>
    {
        public WorkProject Convert(Entity source, WorkProject destination, ResolutionContext context)
        {
            destination = new WorkProject
            {
                Name = (string)source["Name"],
                Company = (string)source["Company"],
                Description = (string)source["Description"]
            };
            return destination;
        }
    }
}