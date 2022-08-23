import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';
import { CategoriasModule } from './categorias/categorias.module';

const MONGOOSE_USER =
  'mongodb+srv://raul:naoMeLembro1@cluster0.k4w1w.mongodb.net/smartracking?retryWrites=true&w=majority';

@Module({
  imports: [
    MongooseModule.forRoot(MONGOOSE_USER, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    JogadoresModule,
    CategoriasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
