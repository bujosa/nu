import { Module } from '@nestjs/common';
import { YellowModule } from './yellow/yellow.module';

@Module({
  imports: [YellowModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
