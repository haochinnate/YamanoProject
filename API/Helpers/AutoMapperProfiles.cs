using System.Linq;
using API.DTOs;
using API.Entities;
using API.Extensions;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, MemberDto>()
                .ForMember(
                    dest => dest.PhotoUrl,
                    opt => opt.MapFrom(
                        src => src.Photos.FirstOrDefault(x => x.IsMain).Url))
                .ForMember(
                    dest => dest.Age,
                    opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge())
                );
            CreateMap<Photo, PhotoDto>();

            // for my YamanoProject
            CreateMap<CarManufacturer, ManufacturerDto>();
            CreateMap<CarModel, CarModelDto>();
            CreateMap<CarTrimLevel, TrimLevelDto>();
            CreateMap<CarPhoto, CarPhotoDto>();

            // CreateMap<Command, CommandReadDto>();
            // CreateMap<CommandCreateDto, Command>(); 
            // CreateMap<CommandUpdateDto, Command>(); 
        }
    }
}