using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    // this class is reference from https://www.youtube.com/watch?v=fmvcAzHpsk8
    public class CommandsController : ControllerBase
    {
        
        #region CREATE Endpoint
        // POST: api/commands
        // [HttpPost]
        // public ActionResult<CommandReadDto> CreateCommand(CommandCreateDto commandCreateDto)
        // {
        //     var commandModel = _mapper.Map<Command>(commandCreateDto);
        //     _repository.CreateCommand(commandModel);
        //     _repository.SaveChanges();
        //     
        //     var commandReadDto = _mapper.Map<CommandReadDto>(commandModel);
        //     
        //     // 這個在postman 中, 回傳 status會是 201 Created
        //     // 然後也會有 created 的 location Uri, 可以知道 create 在哪
        //     return CreateAtRoute(nameof(GetCommandById), new {Id = commandReadDto.Id}, commandReadDto);
        //     // return Ok(commandReadDto);
        // }
        #endregion

        #region GET Endpoint
        // GET: api/commands/{id}
        // [HttpGet("{id}", Name="GetCommandById")]
        // public ActionResult<CommandReadDto> GetCommandById(int id)
        // {
        //     var commandItem = _carModelRepository.GetCommandById(id);
        //     if (commandItem != null)
        //     {
        //         return Ok(_mapper.Map<CommandReadDto>(commandItem));
        //     }
        //     return NotFound();
        // }
        #endregion

        #region UPDATE Endpoint
        // PUT request is "Full" update, need to supply the entire object
        // Inefficient(and error prone for large objects)
        // Not used so much now, PATCH is the favoured approach

        // class CommandUpdateDto: HowTo, Line, Platform (just like CommandCreateDto)

        // PUT: api/commands/{id}, commandUpdateDto 是從 body text 來的
        // [HttpPut("{Id}")]
        // public ActionResult UpdateCommand(int id, CommandUpdateDto commandUpdateDto)
        // {
        //     var commandModelFromRepo = _repository.GetCommandById(id);

        //     if (commandModelFromRepo == null)
        //     {
        //         return NotFound();
        //     }

        //     _mapper.Map(commandUpdateDto, commandModelFromRepo);

        //     _repository.UpdateCommand(commandModelFromRepo);
        //     _repository.SaveChanges();
        //     return NoContent(); // 204
        // }



        #endregion

        #region PATCH Endpoint
            
        #endregion

        #region DELETE Endpoint
            
        #endregion

    }
}