import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Color, ColorSchema } from './database/color.entity';
import { YellowResolver } from './yellow.resolver';
import { YellowService } from './yellow.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Color.name,
        schema: ColorSchema,
      },
    ]),
  ],
  providers: [YellowService, YellowResolver],
  exports: [MongooseModule],
})
export class YellowModule {}
