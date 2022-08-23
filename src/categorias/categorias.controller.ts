import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CriarCategoriaDto } from './dtos/criar-categoria.dto';
import { Categoria } from './interfaces/categoria.interface';

@Controller('api/v1/categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async criarCategoria(@Body()CriarCategoriaDto: CriarCategoriaDto): Promise<Categoria> {
       return await this.categoriasService.criarCategoria(CriarCategoriaDto)
  }

  @Get()
  async consultarCategorias(): Promise<Array<Categoria>> {
    return await this.categoriasService.consultarTodasCategorias();
  }

  @Get('/:categoria')
  async consultarCategoriaPeloId(
    @Param('categoria') categoria :string): Promise<Categoria> {
    return await this.categoriasService.consultarCategoriaPeloId(categoria);
  }
  
      
}
