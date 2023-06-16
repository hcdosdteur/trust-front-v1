import { defObj } from '@/types/scrollAnimation';
import bezierEasing from 'bezier-easing';

const ease = bezierEasing(0.25, 0.1, 0.25, 1.0);
const easeIn = bezierEasing(0.38, 0.01, 0.78, 0.13);
const midSlow = bezierEasing(0, 0.7, 1, 0.3);

const start: number = 600;

export const def = new Map([
  [
    'slide1',
    {
      id: 'slide1',
      top: start, // element의 시작점
      bottom: start + 1400, // element의 끝점
      topStyle: {
        // element의 시작 스타일
        opacity: 0,
        translateY: -60,
      },
      bottomStyle: {
        // element의 끝 스타일
        opacity: 0,
        translateY: 60,
      },
      animations: [
        {
          enabled: false, // 애니메이션 활성화 여부
          top: start, // 애니메이션 시작점
          bottom: start + 1400, // 애니메이션 끝점
          easing: midSlow, // Easing Function
          styles: [
            // 애니메이션 시 변경될 스타일
            {
              name: 'translateY', // 스타일 이름
              topValue: 60, // 진행률 0% 일 때의 스타일
              bottomValue: -60, // 진행률 100% 일 때의 스타일
            },
          ],
        },
        {
          enabled: false,
          top: start,
          bottom: start + 300,
          easing: ease,
          styles: [
            {
              name: 'opacity',
              topValue: 0,
              bottomValue: 1,
            },
          ],
        },
        {
          enabled: false,
          top: start + 900,
          bottom: start + 1400,
          easing: easeIn,
          styles: [
            {
              name: 'opacity',
              topValue: 1,
              bottomValue: 0,
            },
          ],
        },
      ],
    },
  ],
  [
    'scroll-down',
    {
      id: 'scroll-down',
      top: 0,
      bottom: start + 200,
      topStyle: {
        opacity: 1,
      },
      bottomStyle: {
        opacity: 0,
      },
      animations: [
        {
          enabled: false,
          top: start,
          bottom: start + 200,
          easing: easeIn,
          styles: [
            {
              name: 'opacity',
              topValue: 1,
              bottomValue: 0,
            },
          ],
        },
      ],
    },
  ],
  [
    'slide2',
    {
      id: 'slide2',
      top: start + 1400,
      bottom: start + 2700,
      topStyle: {
        opacity: 0,
        translateY: -60,
      },
      bottomStyle: {
        opacity: 0,
        translateY: 60,
      },
      animations: [
        {
          enabled: false,
          top: start + 1400,
          bottom: start + 2700,
          easing: midSlow,
          styles: [
            {
              name: 'translateY',
              topValue: 60,
              bottomValue: -60,
            },
          ],
        },
        {
          enabled: false,
          top: start + 1400,
          bottom: start + 2000,
          easing: ease,
          styles: [
            {
              name: 'opacity',
              topValue: 0,
              bottomValue: 1,
            },
          ],
        },
        {
          enabled: false,
          top: start + 2100,
          bottom: start + 2700,
          easing: easeIn,
          styles: [
            {
              name: 'opacity',
              topValue: 1,
              bottomValue: 0,
            },
          ],
        },
      ],
    },
  ],
  [
    'slide3',
    {
      id: 'slide3',
      top: start + 2800,
      bottom: start + 4100,
      topStyle: {
        opacity: 0,
      },
      bottomStyle: {
        opacity: 0,
      },
      animations: [
        {
          enabled: false,
          top: start + 2800,
          bottom: start + 4100,
          easing: midSlow,
          styles: [
            {
              name: 'translateY',
              topValue: 60,
              bottomValue: -60,
            },
          ],
        },
        {
          enabled: false,
          top: start + 2800,
          bottom: start + 3400,
          easing: ease,
          styles: [
            {
              name: 'opacity',
              topValue: 0,
              bottomValue: 1,
            },
          ],
        },
        {
          enabled: false,
          top: start + 3500,
          bottom: start + 4100,
          easing: easeIn,
          styles: [
            {
              name: 'opacity',
              topValue: 1,
              bottomValue: 0,
            },
          ],
        },
      ],
    },
  ],
  [
    'slide4',
    {
      id: 'slide4',
      top: start + 4200,
      bottom: start + 5500,
      topStyle: {
        opacity: 0,
      },
      bottomStyle: {
        opacity: 0,
      },
      animations: [
        {
          enabled: false,
          top: start + 4200,
          bottom: start + 5500,
          easing: midSlow,
          styles: [
            {
              name: 'translateY',
              topValue: 60,
              bottomValue: -60,
            },
          ],
        },
        {
          enabled: false,
          top: start + 4200,
          bottom: start + 4800,
          easing: ease,
          styles: [
            {
              name: 'opacity',
              topValue: 0,
              bottomValue: 1,
            },
          ],
        },
        {
          enabled: false,
          top: start + 4900,
          bottom: start + 5500,
          easing: easeIn,
          styles: [
            {
              name: 'opacity',
              topValue: 1,
              bottomValue: 0,
            },
          ],
        },
      ],
    },
  ],
  [
    'slide5',
    {
      id: 'slide5',
      top: start + 5600,
      bottom: start + 8500,
      topStyle: {
        opacity: 0,
      },
      bottomStyle: {
        opacity: 0,
      },
      animations: [
        {
          enabled: false,
          top: start + 5600,
          bottom: start + 6600,
          easing: midSlow,
          styles: [
            {
              name: 'translateY',
              topValue: 60,
              bottomValue: -60,
            },
          ],
        },
        {
          enabled: false,
          top: start + 5600,
          bottom: start + 6200,
          easing: ease,
          styles: [
            {
              name: 'opacity',
              topValue: 0,
              bottomValue: 1,
            },
          ],
        },
      ],
    },
  ],
]);
