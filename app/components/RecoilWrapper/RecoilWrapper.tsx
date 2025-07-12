'use client';

import { RecoilRoot } from 'recoil';
import { ReactNode } from 'react';

export default (props: {children: ReactNode}) => {
  return (
    <RecoilRoot>
      {props.children}
    </RecoilRoot>
  )
};