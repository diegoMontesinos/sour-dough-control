import React, { Children } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

export interface ActiveLinkProps {
  activeClassName?: string;
  inactiveClassName?: string;
  href: string;
  as?: string;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({
  children,
  activeClassName = '',
  inactiveClassName = '',
  ...props
}) => {
  const { asPath } = useRouter();
  const child = Children.only(children) as any;
  const childClassName = child?.props.className || '';

  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : `${childClassName} ${inactiveClassName}`.trim();

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

export default ActiveLink;
