import { useState, useEffect } from 'react';

import { styled } from '#/stitches.config';

import { Loading } from '@/component/loading/Loading';

import { Wrapper, Container, Post } from './index';

const Admin = () => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Wrapper>
      {loading && <Loading />}
      <Container>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Container>
    </Wrapper>
  );
};

export default Admin;
