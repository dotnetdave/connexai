using AutoMapper;
using ConnexAi.Domain;
using Google.Cloud.Datastore.V1;

namespace ConnexAi.Application
{
    public class ApplicationTypeMappingProfile : Profile
    {
        public ApplicationTypeMappingProfile()
        {
            CreateMap<Entity, WorkProject>().ConvertUsing<EntityProjectViewModelConverter>();
        }
    }
}