import { useState, useEffect } from 'react';

// import { styled } from '#/stitches.config';

import { Loading } from '@/component/loading/Loading';

export const Post = () => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Loading />}
      <h1>게시판 페이지 입니다.</h1>
    </>
  );
};

// const Wrapper = styled('div', {
//   width: '100%',
// });
