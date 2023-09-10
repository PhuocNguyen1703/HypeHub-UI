import config from '~/config';

// Modal
export const MODAL_ACTION_CLOSE = 'MODAL_ACTION_CLOSE';
export const MODAL_ACTION_CONFIRM = 'MODAL_ACTION_CONFIRM';
export const MODAL_CREATE_ROOM = 'MODAL_CREATE_ROOM';
export const MODAL_JOIN_ROOM = 'MODAL_JOIN_ROOM';
export const MODAL_ADD_FRIEND = 'MODAL_ADD_FRIEND';
export const MODAL_INVITE_PEOPLE = 'MODAL_INVITE_PEOPLE';
export const MODAL_CREATE_CATEGORY = 'MODAL_CREATE_CATEGORY';
export const MODAL_CREATE_CHANNEL = 'MODAL_CREATE_CHANNEL';
export const MODAL_DELETE_ROOM = 'MODAL_DELETE_ROOM';

export const DOTS = '...';

//Path
export const MANAGE_USERS_PATH = `${config.routes.manage.path}/${config.routes.manage.children.users.path}`;
export const MANAGE_TICKETS_PATH = `${config.routes.manage.path}/${config.routes.manage.children.tickets_path}`;
