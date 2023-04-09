const routes = {
    login: '/login',
    user_information: '/user_information',
    home: '/',
    sales: '/sales',
    profile: '/profile',
    chat: { private: '/chat/private', group: '/chat/group' },
    employee: '/employee',
    email: '/email',
    todo: '/todo',
    calendar: '/calendar',
    kanban: '/kanban',
    board: '/kanban/board/:boardId',
    timesheets: '/timesheets',
    user_management: { default: '/user-management', table: 'table' },
    support: '/support',
    support_center: '/support-center',
};

export default routes;
