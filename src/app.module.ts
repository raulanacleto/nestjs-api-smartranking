import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';

const MONGOOSE_USER =
  'mongodb+srv://raul:ktoqNFiaYxVnKBC3@cluster0.k4w1w.mongodb.net/smartracking?retryWrites=true&w=majority';

@Module({
  imports: [
    MongooseModule.forRoot(MONGOOSE_USER, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }),
    JogadoresModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
