import type { Type } from '@/utils/types';

import { useEffect, useState } from 'react';

import { styled } from '#/stitches.config';

interface CardProps {
  Img: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | string;
  name: string;
  type: Type;
  hashtag: string[];
}

export const Card: React.FC<CardProps> = ({ Img, name, type, hashtag }) => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [bounds, setBounds] = useState<DOMRect | undefined>();

  const rotateToMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const mouseX = mousePos.x;
    const mouseY = mousePos.y;
    if (!bounds) return;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const target = e.currentTarget;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
    target.style.transform = `
      scale3d(1.05, 1.05, 1.05)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;
    if (!target.lastElementChild) {
      console.log('animation error');
      return;
    }
    const glow = target.lastElementChild as HTMLDivElement;
    glow.style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #ffffff40,
        #0000000f
      )
    `;
  };

  const mouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    setBounds(target.getBoundingClientRect());
  };

  const mouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.style.transform = '';
    target.style.background = '';
    // if (!target.lastElementChild) {
    //   console.log('animation error');
    //   return;
    // }
    // const glow = target.lastElementChild as HTMLDivElement;
    // glow.style.backgroundImage =
    //   'radial-gradient(circle at 50% 50%, #ffffff22, #0000000f)';
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Container
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onMouseMove={rotateToMouse}
    >
      <Profile>
        {typeof Img === 'string' ? (
          <Png src={Img} />
        ) : (
          <Img width="14.6rem" height="14.6rem" />
        )}
      </Profile>
      <Info>
        <Type>{type.replace(/^[a-z]/, (char) => char.toUpperCase())}</Type>
        <Name>{name}</Name>
        <Hashtag>
          {hashtag.map((v, idx) => (
            <span key={idx}>#{v} </span>
          ))}
        </Hashtag>
      </Info>
      <Glow />
    </Container>
  );
};

const Container = styled('div', {
  position: 'relative',
  display: 'flex',
  gap: '3.5rem',
  width: '100%',
  maxWidth: '53rem',
  padding: '3.5rem',
  borderRadius: '2rem',
  backgroundColor: '$grade1',
  boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.1)',

  transitionDuration: '300ms',
  transitionProperty: 'transform, box-shadow',
  transitionTimingFunction: 'ease-out',
  transform: 'rotate3d(0)',

  '&:hover': {
    transitionDuration: '150ms',
    boxShadow: '0 .5rem 2rem .5rem #ffffff44',
  },
});

const Profile = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '14.6rem',
  width: '14.6rem',
  height: '14.6rem',
  borderRadius: '50%',
  overflow: 'hidden',
});

const Info = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1rem',
});

const Name = styled('div', {
  fontSize: '3rem',
});

const Type = styled('span', {
  width: 'fit-content',
  fontSize: '1.5rem',
  padding: '.6rem 2rem',
  borderRadius: '1rem',
  backgroundColor: '$grade2',
});

const Hashtag = styled('div', {
  display: 'flex',
  columnGap: '.5rem',
  width: '100%',
  maxHeight: '4.4rem',
  overflow: 'scroll',
  fontSize: '1.5rem',
  flexWrap: 'wrap',
  span: {
    color: '$main',
    opacity: 0.5,
  },
});

const Png = styled('img', {
  width: '14.6rem',
});

const Glow = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: '2rem',
  backgroundImage: 'radial-gradient(circle at 50% 10%, #ffffff22, #0000000f)',
  transitionDuration: '300ms',
});
