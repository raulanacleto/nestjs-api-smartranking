import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadorSchema } from './interfaces/jogador.schema';
import { JogadoresController } from './jogadores.controller';
import { JogadoresService } from './jogadores.service';

const schema = { name: 'Jogador', schema: JogadorSchema };

@Module({
  imports: [MongooseModule.forFeature([schema])],
  controllers: [JogadoresController],
  providers: [JogadoresService],
})
export class JogadoresModule {}
