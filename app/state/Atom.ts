'use client';

import { atom } from 'recoil';

export const emailState = atom({
  key: 'emailState',
  default: '',
});

export const passwordState = atom({
  key: 'passwordState',
  default: '',
});

export const showPasswordState = atom({
  key: 'showPasswordState',
  default: false,
});

export const loginFailedState = atom({
  key: 'loginFailedState',
  default: false,
});
