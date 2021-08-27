import React, { AnchorHTMLAttributes } from 'react';
import { Navigation, Links, Circle, LinksContainer } from './styles';

interface BarNavigationProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  link: string;
  haveCircle?: boolean;
}

export function BarNavigation({
  link,
  haveCircle,
  ...rest
}: BarNavigationProps): JSX.Element {
  return (
    <Navigation>
      <LinksContainer haveCircle={haveCircle}>
        <Links {...rest}>{link}</Links>
        {haveCircle && <Circle />}
      </LinksContainer>
    </Navigation>
  );
}
