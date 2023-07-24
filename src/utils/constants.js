import config from '~/config';

export const MODAL_ACTION_CLOSE = 'MODAL_ACTION_CLOSE';
export const MODAL_ACTION_CONFIRM = 'MODAL_ACTION_CONFIRM';
export const DOTS = '...';

//Path
export const CALENDAR_DAY_PATH = `${config.routes.calendar.path}/${config.routes.calendar.children.day_path}`;
export const CALENDAR_MONTH_PATH = `${config.routes.calendar.path}/${config.routes.calendar.children.month_path}`;
export const CALENDAR_YEAR_PATH = `${config.routes.calendar.path}/${config.routes.calendar.children.year_path}`;
export const CALENDAR_SCHEDULE_PATH = `${config.routes.calendar.path}/${config.routes.calendar.children.schedule_path}`;

export const PROFILE_INFO_PATH = `${config.routes.profile.path}/${config.routes.profile.children.info_path}`;
export const PROFILE_WALLET_PATH = `${config.routes.profile.path}/${config.routes.profile.children.wallet_path}`;
export const PROFILE_CHANGE_PASSWORD_PATH = `${config.routes.profile.path}/${config.routes.profile.children.change_password_path}`;
export const PROFILE_SOCIAL_LINK_PATH = `${config.routes.profile.path}/${config.routes.profile.children.social_link_path}`;
export const PROFILE_TIME_SHEETS_PATH = `${config.routes.profile.path}/${config.routes.profile.children.time_sheets_path}`;

export const MANAGE_USERS_PATH = `${config.routes.manage.path}/${config.routes.manage.children.users.path}`;
export const MANAGE_TICKETS_PATH = `${config.routes.manage.path}/${config.routes.manage.children.tickets_path}`;
