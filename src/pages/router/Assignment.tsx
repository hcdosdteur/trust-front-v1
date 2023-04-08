import { styled } from '#/stitches.config';
import { Loading } from '@/component/Loading/Loading';
import { useState, useEffect } from 'react';

export const Assignment = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const fetchTest = async () => {
    setLoading(true);
    try {
      const target = '/api/test';
      const result = await fetch(`${target}`);
      let data = await result.text();
      if (!data) throw new Error(`data is empty.\n${target}`);
      console.log(data);
      setLoading(false);
    } catch (error) {
      let message = 'Unknown Error';
      if (error instanceof Error) message = error.message;
      alert('Error: ' + message);
    }
  };

  useEffect(() => {
    // fetchTest();
  }, []);

  return (
    <>
      {loading && <Loading />}
      <h1>게시판 페이지 입니다.</h1>
    </>
  );
};

const Wrapper = styled('div', {
  width: '100%',
});
