using AutoMapper;

namespace ConnexAi.Application
{
    public interface IAutoMapperFactory
    {
        IMapper CreateAutoMapper();
    }
}