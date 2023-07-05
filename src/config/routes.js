const routes = {
    login: 'login',
    home: '/',
    user_information: 'user_information',
    sales: 'sales',
    profile: {
        info: 'profile',
        wallet: 'wallet',
        change_password: 'change-password',
        time_sheets: 'time-sheets',
    },
    chat: { private: 'chat/private', group: 'chat/group' },
    employee: 'employee',
    email: 'email',
    todo: 'todo',
    timeline: 'timeline',
    calendar: 'calendar',
    kanban: 'kanban',
    board: 'kanban/board/:boardId',
    support: 'support',
    manage: { user: 'manage/users', ticket: 'manage/tickets' },
};

export default routes;
