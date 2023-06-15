const routes = {
    login: '/login',
    home: '/',
    user_information: '/user_information',
    sales: '/sales',
    profile: {
        default: '/profile',
        payment: 'payment',
        change_password: 'change-password',
        time_sheets: 'time-sheets',
    },
    chat: { private: '/chat/private', group: '/chat/group' },
    employee: '/employee',
    email: '/email',
    todo: '/todo',
    timeline: '/timeline',
    calendar: '/calendar',
    kanban: '/kanban',
    board: '/kanban/board/:boardId',
    user_management: { default: '/user-management', search: 'search-users', time_sheets: 'time-sheets' },
    support: '/support',
    support_center: '/support-center',
};

export default routes;
