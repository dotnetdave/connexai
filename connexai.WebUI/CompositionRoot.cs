using AutoMapper;
using ConnexAi.Application;
using ConnexAi.Persistence;
using DryIoc;
using MediatR;

namespace connexai
{
    public class CompositionRoot
    {
        public CompositionRoot(IRegistrator container)
        {
            container.Register<IDatastoreDbFactory, DatastoreDbFactory>(Reuse.Singleton);
            container.Register(reuse: Reuse.Singleton, made: Made.Of(r => ServiceInfo.Of<IDatastoreDbFactory>(), f => f.CreateDatastoreDb()));

            container.RegisterDelegate<ServiceFactory>(r => r.Resolve);
            container.RegisterMany(new[] { typeof(IMediator).GetAssembly(), typeof(DatastoreDbFactory).GetAssembly() }, Registrator.Interfaces);
        }
    }
}