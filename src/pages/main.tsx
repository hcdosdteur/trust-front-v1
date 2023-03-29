import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from '#/stitches.config';
import { NavigatedComponent } from '@/component/Navigation/Navigation';
import { SubMenu } from '@/component/Navigation';

const Main = () => {
  const [path, setPath] = useState<string>('/');
  const { pathname } = useLocation();

  useEffect(() => {
    const p = `${pathname}/`;
    setPath(p.substring(0, p.indexOf('/', 1)));
  }, [pathname]);

  return (
    <Wrapper>
      {pathname !== '/' && <SubMenu />}
      {NavigatedComponent[path] &&
        NavigatedComponent[path].map(({ Component }) => {
          return <Component key={`${path}`} />;
        })}
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
});
