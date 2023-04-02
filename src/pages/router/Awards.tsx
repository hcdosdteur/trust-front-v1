import { keyframes, styled } from '#/stitches.config';

const Award: React.FC<{
  rank: string;
  content: string;
}> = ({ rank, content }) => {
  return (
    <Contents>
      <Rank>{rank} </Rank>
      <span>{content} </span>
    </Contents>
  );
};

export const Awards = () => {
  return (
    <Wrapper>
      <Container n={1}>
        <Award rank="1위" content="2022 The Hacking Championship Junior" />
        <Award rank="2위" content="2022 The Hacking Championship Junior" />
      </Container>
      <Container n={2}>
        <Award rank="은상" content="2020 The Hacking Championship Junior" />
        <Award
          rank="2명 수료"
          content="차세대 보안리더 양성 프로그램 Best of the Best 9기"
        />
      </Container>
      <Container n={3}>
        <Award
          rank="우수상"
          content="021 KOSPO 웹서비스 정보보안 경진대회 청소년부"
        />
        <Award rank="1위" content="2022 Whitehat Contest Junior" />
        <Award rank="3위" content="2022 Whitehat Contest Junior" />
      </Container>
      <Container n={4}>
        <Award rank="2위" content="2022 Whitehat Contest Junior" />
        <Award rank="1위" content="2022 Whitehat Contest Junior" />
        <Award
          rank="2위"
          content="2021 제3회 전국 고등학생 사이버 보안경진대회"
        />
      </Container>
      <Container n={5}>
        <Award rank="4위" content="2022 Whitehat Contest Junior" />
        <Award rank="2위" content="2022 CODEGATE Junior Finals" />
        <Award rank="1위" content="2022 CODEGATE Junior Finals" />
      </Container>
      <Container n={6}>
        <Award rank="2위" content="2022 Whitehat Contest Junior" />
        <Award rank="1위" content="2022 CODEGATE Junior Quals" />
        <Award rank="1위" content="2021 Cyberguardians CTF" />
      </Container>
      <Container n={7}>
        <Award rank="3위" content="2022 DEFCON 29 본선" />
        <Award rank="우수상" content="2022 JBUCTF 고등부" />
        <Award rank="1위" content="2021 Layer7 CTF" />
        <Award rank="우수상" content="2022 JBUCTF 고등부" />
      </Container>
      <Container n={8}>
        <Award rank="1위" content="2020 Layer7 CTF" />
        <Award rank="2위" content="2020 Layer7 CTF" />
        <Award rank="2위" content="2022 WACON 고등부" />
        <Award rank="3위" content="2022 WACON 고등부" />
      </Container>
      <Container n={9}>
        <Award rank="3위" content="2022 WACON 일반부" />
        <Award rank="1위" content="2022 CCE" />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
});

const fadeinUp = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(20px)',
  },
  to: {
    opacity: 1,
    transform: 'none',
  },
});

const Container = styled('div', {
  display: 'flex',
  gap: '2rem',
  animation: `${fadeinUp} 1s ease-in-out`,
  animationFillMode: 'forwards',
  opacity: 0,
  variants: {
    n: {
      1: {
        animationDelay: '0',
      },
      2: {
        animationDelay: 'calc(.1s * 1)',
      },
      3: {
        animationDelay: 'calc(.1s * 2)',
      },
      4: {
        animationDelay: 'calc(.1s * 3)',
      },
      5: {
        animationDelay: 'calc(.1s * 4)',
      },
      6: {
        animationDelay: 'calc(.1s * 5)',
      },
      7: {
        animationDelay: 'calc(.1s * 6)',
      },
      8: {
        animationDelay: 'calc(.1s * 7)',
      },
      9: {
        animationDelay: 'calc(.1s * 8)',
      },
    },
  },
});

const Contents = styled('div', {
  span: {
    fontSize: '2rem',
  },
});

const Rank = styled('span', {
  color: '$grade1',
});
