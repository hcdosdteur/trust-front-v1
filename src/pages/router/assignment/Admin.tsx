import type { Assignment as AssignmentType } from '@/context/api';

import { useState, useEffect, useContext } from 'react';

import { styled } from '#/stitches.config';

import { Loading } from '@/component/loading/Loading';
import { ApiContext } from '@/context/api';

import { Wrapper, Container, Post } from './index';

const Admin = () => {
  const [assignArr, setAssignArr] = useState<AssignmentType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { assignment } = useContext(ApiContext);

  const getAssignment = async () => {
    setLoading(true);
    const res = await assignment.get();
    if (!res) {
      alert('서버와의 연결이 원활하지 않습니다 T.T');
      return;
    }
    console.log(res);
    setLoading(false);
  };

  useEffect(() => {
    getAssignment();
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
