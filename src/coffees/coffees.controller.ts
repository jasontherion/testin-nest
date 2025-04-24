import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';

@Controller('coffees')
export class CoffeesController {
   constructor(private readonly coffeesService: CoffeesService){}

    @Get("flower")
    findAll() {
         // return 'This action returns all coffees';
         return this.coffeesService.findAll();

         }

    @Get(':id')
    findOne(@Param('id') id: string) {
        // return `This action returns #${id} coffee`;
        return this.coffeesService.findOne(id);
    }

    @Post()
    create(@Body() body: CreateCoffeeDto) {
        // return body;
        return this.coffeesService.create(body);
    }

    @Get("other")
    findAllOther(@Res() response) { 
        return response.status(220).send("esto es una prueba de status ") 
    }


    @Get("other2")
    @HttpCode(HttpStatus.GONE)
    findAll2(@Res() response) { return "esto es una prueba de status " }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: UpdateCoffeeDto) {
        // return `This action updates #${id} coffee`;
        return this.coffeesService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        // return `This action removes #${id} coffee`;
        return this.coffeesService.remove(id);
    }

    @Get()
    findAllPagination(@Query() paginationQuery) {
      const { limit, offset } = paginationQuery;
      return `This action returns all coffees. Limit ${limit}, offset: ${offset}`;
    }

}
