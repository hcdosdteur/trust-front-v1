import { RefObject } from 'react';

export type Type = 'web' | 'pwn' | 'rev' | 'crypto';

export type UserType = 'A' | 'U';

export type Admin =
  | 'Kim-Dohyeon'
  | 'Baek-Hyeonseo'
  | 'Kim-Gyeongmin'
  | 'Cho-Hyeonjae'
  | 'Jeon-Mingi'
  | 'Kim-Jiho'
  | 'Lee-Yeil';

export interface elementType {
  [key: string]: RefObject<HTMLDivElement>;
}

export interface defObj {
  id: string;
  top: number;
  bottom: number;
  topStyle: {
    [key: string]: number;
  };
  bottomStyle: {
    opacity: number;
    translateY: number;
  };
  animations: {
    enabled: boolean;
    top: number;
    bottom: number;
    easing: BezierEasing.EasingFunction;
    styles: {
      name: string;
      topValue: number;
      bottomValue: number;
    }[];
  }[];
}
