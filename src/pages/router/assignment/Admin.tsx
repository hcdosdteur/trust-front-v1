import type { Assignment as AssignmentType } from '@/context/api';

import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Loading } from '@/component/loading/Loading';
import { ApiContext } from '@/context/api';
import { useAxiosAuth } from '@/context/axios';

import { Wrapper, Container, Post } from './index';

const Admin = () => {
  const [assignArr, setAssignArr] = useState<AssignmentType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { assignment } = useContext(ApiContext);
  const { logout } = useAxiosAuth();

  const getAssignment = async () => {
    setLoading(true);
    try {
      const res = await assignment.get();
      if (!res) {
        alert('서버와의 연결이 원활하지 않습니다 T.T');
        return;
      } else if (res === 'JWT 토큰이 올바르지 않거나 만료되었습니다.') {
        alert('로그인이 만료되었습니다. 다시 로그인해주세요.');
        logout();
        navigate('/login');
      }
      console.log(res);
      setAssignArr(res as AssignmentType[]);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAssignment();
  }, []);

  return (
    <Wrapper>
      {loading && <Loading />}
      <Container>
        {assignArr.map(({ title, content, category, completed }, idx) => (
          <Post
            title={title}
            content={content}
            category={category}
            completed={completed}
            key={idx}
          ></Post>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Admin;
