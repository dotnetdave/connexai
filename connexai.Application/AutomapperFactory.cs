using AutoMapper;
using ConnexAi.Domain;
using Google.Cloud.Datastore.V1;

namespace ConnexAi.Application
{
    public class AutoMapperFactory : IAutoMapperFactory
    {
        public IMapper CreateAutoMapper()
        {
            var config = new MapperConfiguration(cfg =>
            {
                // Add Mappings
                cfg.CreateMap<Entity, WorkProject>().ConvertUsing<EntityProjectViewModelConverter>();
            });
            config.AssertConfigurationIsValid();
            return config.CreateMapper();
        }
    }
}
