import { IColor } from 'src/yellow/interfaces/color-entity.interface';

export interface IHouse {
  name: string;
  rooms: number;
  color: IColor;
}
