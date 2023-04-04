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
    user_management: { user_table: '/user-management/table', user_card: '/user-management/card' },
    support: '/support',
    support_center: '/support-center',
};

export default routes;
