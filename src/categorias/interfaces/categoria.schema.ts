import * as mongoose from 'mongoose';

export const CategoriaSchema = new mongoose.Schema(
  {
    categoria: { type: String, unique: true },
    descricao: { type: String, unique: false },
    eventos: [
      {
        nome: { type: String },
        operacao: { type: String },
        valor: { type: Number },
      },
    ],
    jogadores: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Jogador',
      },
    ],
  },
  { timestamps: true, collection: 'categorias' },
);
