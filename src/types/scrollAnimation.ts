import bezier from 'bezier-easing';
import { RefObject } from 'react';

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
