import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
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
      
}
