import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { LoadableComponent } from '@loadable/component';

import { styled } from '#/stitches.config';

enum UserType {
  A = 'A',
  U = 'U',
}

interface User {
  userType: UserType;
}

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100vw',
  height: '100vh',
});
const Main = styled('div', {
  display: 'flex',
  position: 'relative',
  width: 'calc(100% - 20rem)',
});

const Box: React.FC<{
  Children: LoadableComponent<{}>;
}> = ({ Children }) => {
  return (
    <Container>
      <Main>
        <Children />
      </Main>
    </Container>
  );
};

export const BranchRouting = ({
  screens: { Admin, User },
}: {
  screens: {
    Admin: LoadableComponent<{}>;
    User: LoadableComponent<{}>;
  };
}): JSX.Element => {
  const [myData, setMyData] = useState<User | null>();
  // need User Type
  useEffect(() => {}, []);

  if (myData === null) return <Navigate to="/login" />;
  if (myData?.userType === UserType.A) return <Box Children={Admin} />;
  if (myData?.userType === UserType.U) return <Box Children={User} />;
  return <></>;
};
