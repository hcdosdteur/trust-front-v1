import { useState, useEffect, useContext } from 'react';
// import { styled } from '#/stitches.config';
import { useNavigate } from 'react-router-dom';

import { Loading } from '@/component/loading/Loading';
import { ApiContext, Post as PostType } from '@/context/api';
import { useAxiosAuth } from '@/context/axios';

import { Container, Post as PostContainer, Wrapper } from './assignment';

export const Post = () => {
  const [postArr, setPostArr] = useState<PostType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { post } = useContext(ApiContext);
  const { logout } = useAxiosAuth();

  const getPost = async () => {
    setLoading(true);
    try {
      const res = await post.get();
      if (!res) {
        alert('서버와의 연결이 원활하지 않습니다 T.T');
        return;
      } else if (res === 'JWT 토큰이 올바르지 않거나 만료되었습니다.') {
        alert('로그인이 만료되었습니다. 다시 로그인해주세요.');
        logout();
        navigate('/login');
      }
      console.log(res);
      setPostArr(res as PostType[]);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Wrapper>
      {loading && <Loading />}
      <Container>
        {postArr.map(({ title, content, category }, idx) => (
          <PostContainer
            title={title}
            content={content}
            category={category}
            completed="post"
            key={idx}
          ></PostContainer>
        ))}
      </Container>
    </Wrapper>
  );
};

// const Wrapper = styled('div', {
//   width: '100%',
// });
