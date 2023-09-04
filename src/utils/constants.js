import config from '~/config';

// Modal
export const MODAL_ACTION_CLOSE = 'MODAL_ACTION_CLOSE';
export const MODAL_ACTION_CONFIRM = 'MODAL_ACTION_CONFIRM';
export const MODAL_CREATE_ROOM = 'createRoomModal';
export const MODAL_ADD_FRIEND = 'addFriendModal';

export const DOTS = '...';

//Path
export const MANAGE_USERS_PATH = `${config.routes.manage.path}/${config.routes.manage.children.users.path}`;
export const MANAGE_TICKETS_PATH = `${config.routes.manage.path}/${config.routes.manage.children.tickets_path}`;
