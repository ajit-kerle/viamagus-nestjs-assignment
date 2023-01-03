import { Module, Options } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';
import { TeamModule } from './team/team.module';



@Module({
  imports: [ConfigModule.forRoot({
  isGlobal: true,
}),
TypeOrmModule.forRoot({
      type: 'mongodb',
      url:process.env.URL,
      useNewUrlParser:true,
      synchronize:true,
      logging:true,
      useUnifiedTopology: true,
      autoLoadEntities: true,
      ssl: true,
      entities:[__dirname+"/**/*.entity{.ts,.js}"],
      // synchronize:true,
    }),
TaskModule,
TeamModule
],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor(){
    console.log("app module")
  }
}
