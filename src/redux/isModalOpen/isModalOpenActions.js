import { createAction } from '@reduxjs/toolkit';

const open = createAction('modal/open');
const hide = createAction('modal/hide');

const actions = { open, hide };

export default actions;
