import type { UserType } from '@/utils/types';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoadableComponent } from '@loadable/component';

import { getMyData } from '@/api/user';
import { SubMenu } from '@/component/navigation';
import { Wrapper } from '@/pages/main';

const Box: React.FC<{ Children: LoadableComponent<unknown> }> = ({
  Children,
}) => {
  return (
    <Wrapper>
      <SubMenu />
      <Children />
    </Wrapper>
  );
};

export const NeedAuth = ({
  element: { Admin, User },
}: {
  element: {
    Admin: LoadableComponent<unknown>;
    User: LoadableComponent<unknown>;
  };
}) => {
  const [myRole, setMyRole] = useState<UserType | null>(null);
  const userData = getMyData();
  const navigate = useNavigate();
  // console.log(userData);

  useEffect(() => {
    if (userData instanceof Error) {
      console.log(userData.message);
      const ans = confirm(
        'ERROR : ' + userData.message + '\n로그인 페이지로 이동합니다.',
      );
      if (ans) navigate('/login');
      else navigate(-1);
    } else {
      setMyRole(userData.role);
    }
  }, []);

  return (
    <>
      {myRole === 'A' && <Box Children={Admin} />}
      {myRole === 'U' && <Box Children={User} />}
    </>
  );
};
