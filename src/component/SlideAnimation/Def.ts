import { defObj } from '@/types/scrollAnimation';
import bezierEasing from 'bezier-easing';

const ease = bezierEasing(0.25, 0.1, 0.25, 1.0);
const easeIn = bezierEasing(0.38, 0.01, 0.78, 0.13);
const midSlow = bezierEasing(0, 0.7, 1, 0.3);

export const def = new Map([
  [
    'slide1',
    {
      id: 'slide1',
      top: 500, // element의 시작점
      bottom: 1900, // element의 끝점
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
          top: 500, // 애니메이션 시작점
          bottom: 1900, // 애니메이션 끝점
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
          top: 500,
          bottom: 800,
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
          top: 1400,
          bottom: 1900,
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
      bottom: 700,
      topStyle: {
        opacity: 1,
      },
      bottomStyle: {
        opacity: 0,
      },
      animations: [
        {
          enabled: false,
          top: 500,
          bottom: 700,
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
      top: 1900,
      bottom: 3200,
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
          top: 1900,
          bottom: 3200,
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
          top: 1900,
          bottom: 2500,
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
          top: 2600,
          bottom: 3200,
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
      top: 3300,
      bottom: 4600,
      topStyle: {
        opacity: 0,
      },
      bottomStyle: {
        opacity: 0,
      },
      animations: [
        {
          enabled: false,
          top: 3300,
          bottom: 4600,
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
          top: 3300,
          bottom: 3900,
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
          top: 4000,
          bottom: 4600,
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
      top: 4700,
      bottom: 6000,
      topStyle: {
        opacity: 0,
      },
      bottomStyle: {
        opacity: 0,
      },
      animations: [
        {
          enabled: false,
          top: 4700,
          bottom: 6000,
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
          top: 4700,
          bottom: 5300,
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
          top: 5400,
          bottom: 6000,
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
      top: 6100,
      bottom: 9000,
      topStyle: {
        opacity: 0,
      },
      bottomStyle: {
        opacity: 0,
      },
      animations: [
        {
          enabled: false,
          top: 6100,
          bottom: 7100,
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
          top: 6100,
          bottom: 6700,
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
