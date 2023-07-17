const routes = {
    login: 'login',
    home: '/',
    email: 'email',
    chat: { path: 'chat', children: { private_path: 'private', group_path: 'group' } },
    todo: 'todo',
    timeline: 'timeline',
    calendar: {
        path: 'calendar',
        children: {
            day_path: 'day',
            month_path: 'month',
            year_path: 'year',
            schedule_path: 'schedule',
        },
    },
    kanban: 'kanban',
    profile: {
        path: 'profile',
        children: {
            wallet_path: 'wallet',
            change_password_path: 'change-password',
            social_link_path: 'social-link',
            time_sheets_path: 'time-sheets',
        },
    },
    support: 'support',
    ///// Admin Route /////
    manage: {
        path: 'manage',
        children: {
            users: {
                path: 'users',
                children: { table_path: 'table', search_path: 'search' },
            },
            tickets_path: 'tickets',
        },
    },
};

export default routes;
