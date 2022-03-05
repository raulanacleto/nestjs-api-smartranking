import { Injectable, Logger } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class JogadoresService {
  private jogadores: Jogador[] = [];
  private readonly logger = new Logger(JogadoresService.name);

  async criarAtualizarJogador(CriarJogadorDto: CriarJogadorDto): Promise<void> {
    this.criar(CriarJogadorDto);
  }

  private criar(criaJogadorDto: CriarJogadorDto): void {
    const { nome, telefone, email } = criaJogadorDto;
    const jogador: Jogador = {
      _id: uuidv4(),
      nome,
      telefone,
      email,
      ranking: `A`,
      posicaoRanking: 1,
      urlFoto: 'www.google.com.br/foto123.jpg',
    };
    this.logger.log(`criaJogadorDto: ${JSON.stringify(jogador)}`);
    this.jogadores.push(jogador);
  }
}
