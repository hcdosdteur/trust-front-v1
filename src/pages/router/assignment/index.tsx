import type { Type } from '@/utils/types';

import { styled } from '#/stitches.config';

import { ReactComponent as Check } from '@/assets/icon/check.svg';
import { ReactComponent as Delete } from '@/assets/icon/delete.svg';
import { ReactComponent as Modify } from '@/assets/icon/modify.svg';

export const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  overflow: 'scroll',
  height: '100vh',
});

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '14rem',
  marginBottom: '8rem',
  gap: '1.5rem',
  width: '100%',
  height: 'fit-content',
  maxWidth: '90rem',
});

export const PostContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '3.5rem',
  borderRadius: '2rem',
  backgroundColor: '$grade1',
});

interface PostProps {
  title: string;
  content: string;
  completed?: boolean | string;
  category: Type;
}
export const Post: React.FC<PostProps> = ({
  title,
  content,
  completed,
  category,
}) => {
  return (
    <PostContainer>
      <Header>
        <Title dangerouslySetInnerHTML={{ __html: title }} />
        <Category
          dangerouslySetInnerHTML={{
            __html: category.charAt(0).toUpperCase() + category.slice(1),
          }}
        />
      </Header>
      <Contents>
        <pre dangerouslySetInnerHTML={{ __html: content }} />
      </Contents>
      <Interaction>
        <Button
          completed={
            completed === 'post' ? false : completed === true ? true : undefined
          }
        >
          <Check fill={completed ? '#748189' : '#C2D7E4'} />
        </Button>
        <Button>
          <Modify />
        </Button>
        <Button>
          <Delete />
        </Button>
      </Interaction>
    </PostContainer>
  );
};

const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
});

const Title = styled('div', {
  fontSize: '2.5rem',
  fontWeight: 700,
  color: '$main',
});

const Category = styled('div', {
  height: 'fit-content',
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '$main',
  padding: '.6rem 2rem',
  backgroundColor: '$grade2',
  borderRadius: '1rem',
});

const Contents = styled('div', {
  margin: '6.5rem 0',
  pre: {
    fontSize: '2rem',
    color: '$main',
    opacity: 0.6,
    whiteSpace: 'pre-wrap',
  },
});

const Interaction = styled('div', {
  display: 'flex',
  gap: '1rem',
});

const Button = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '5.5rem',
  height: '5.5rem',
  borderRadius: '50%',
  cursor: 'pointer',
  transition: '.2s ease-out',
  backgroundColor: '$grade2',
  variants: {
    completed: {
      true: {
        backgroundColor: '$main',
      },
      false: {
        display: 'none',
      },
    },
  },
});
