// Chat data
export const chatData = {
  rooms: [
    {
      _id: 'room-01',
      name: 'room-01',
      type: 'public',
      avatar:
        'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      _id: 'room-02',
      name: 'room-02',
      type: 'private',
      avatar:
        'https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      _id: 'room-03',
      name: 'room-03',
      type: 'private',
      avatar:
        'https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      _id: 'room-04',
      name: 'room-04',
      type: 'public',
      avatar:
        'https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      _id: 'room-05',
      name: 'room-05',
      type: 'private',
      avatar:
        'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      _id: 'room-06',
      name: 'room-06',
      type: 'private',
      avatar:
        'https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
  ],

  conversations: [
    {
      _id: 'member-01',
      cover_avatar:
        'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      members: ['Tony', 'Yama', 'Alex nguyen'],
      messages: [
        {
          _id: 'message-01',
          conversation_id: 'member-01',
          sender_id: 'user-01',
          user_avatar:
            'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
          user_name: 'Brian',
          body: 'hello',
          file_url:
            'https://plus.unsplash.com/premium_photo-1675432590018-cf39722ab63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
          createdAt: '2023-8-26 19:17',
        },
        {
          _id: 'message-02',
          conversation_id: 'member-01',
          sender_id: 'user-02',
          user_avatar:
            'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
          user_name: 'Brian',
          body: 'hello',
          file_url: null,
          createdAt: '2023-8-26 19:18',
        },
        {
          _id: 'message-03',
          conversation_id: 'member-01',
          sender_id: 'user-03',
          user_avatar:
            'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
          user_name: 'Brian',
          body: 'hello',
          file_url: null,
          createdAt: '2023-9-01 19:10',
        },
        {
          _id: 'message-04',
          conversation_id: 'member-01',
          sender_id: 'user-01',
          user_avatar:
            'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
          user_name: 'Brian',
          body: 'hello',
          file_url:
            'https://images.unsplash.com/photo-1693155119642-efe7b1254143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
          createdAt: '2023-9-01 19:15',
        },
        {
          _id: 'message-05',
          conversation_id: 'member-01',
          sender_id: 'user-01',
          user_avatar:
            'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
          user_name: 'Brian',
          body: 'hello',
          file_url: null,
          createdAt: '2023-9-01 19:18',
        },
        {
          _id: 'message-06',
          conversation_id: 'member-01',
          sender_id: 'user-01',
          user_avatar:
            'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
          user_name: 'Brian',
          body: 'hello',
          file_url:
            'https://images.unsplash.com/photo-1691603136103-bff3ade192e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          createdAt: '2023-9-19 18:00',
        },
        {
          _id: 'message-07',
          conversation_id: 'member-01',
          sender_id: 'user-01',
          user_avatar:
            'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
          user_name: 'Brian',
          body: 'hello',
          file_url: null,
          createdAt: '2023-9-19 19:00',
        },
        {
          _id: 'message-08',
          conversation_id: 'member-01',
          sender_id: 'user-01',
          user_avatar:
            'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
          user_name: 'Brian',
          body: 'hello',
          file_url: null,
          createdAt: '2023-9-19 19:18',
        },
        {
          _id: 'message-09',
          conversation_id: 'member-01',
          sender_id: 'user-01',
          user_avatar:
            'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
          user_name: 'Brian',
          body: 'hello',
          file_url:
            'https://images.unsplash.com/photo-1692800148019-2f17672c1d57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          createdAt: '2023-9-20 19:18',
        },
        {
          _id: 'message-10',
          conversation_id: 'member-01',
          sender_id: 'user-01',
          user_avatar:
            'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
          user_name: 'Brian',
          body: 'hello',
          file_url: null,
          createdAt: '2023-9-20 19:18',
        },
        {
          _id: 'message-11',
          conversation_id: 'member-01',
          sender_id: 'user-01',
          user_avatar:
            'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
          user_name: 'Brian',
          body: 'hello',
          file_url:
            'https://plus.unsplash.com/premium_photo-1694707235672-449f0589bc49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          createdAt: '2023-9-20 19:18',
        },
      ],
    },
    {
      _id: 'member-02',
      cover_avatar:
        'https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      members: ['Tony'],
    },
    {
      _id: 'member-03',
      cover_avatar:
        'https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      members: ['Thomson'],
    },
    {
      _id: 'member-04',
      cover_avatar:
        'https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      members: ['Yamamoto Yuki', 'Brian Nguyen', 'Alex nguyen'],
    },
    {
      _id: 'member-05',
      cover_avatar:
        'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      members: ['Yama'],
    },
    {
      _id: 'member-06',
      cover_avatar:
        'https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      members: ['Alex nguyen'],
    },
    {
      _id: 'member-07',
      cover_avatar:
        'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      members: ['Tony', 'Yama', 'Alex nguyen', 'Tony', 'Yama', 'Alex nguyen'],
    },
    {
      _id: 'member-08',
      cover_avatar:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      members: ['Tony', 'Yama'],
    },
    {
      _id: 'member-09',
      cover_avatar:
        'https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      members: ['Tony', 'Yama', 'Alex nguyen', 'Victoria'],
    },
    {
      _id: 'member-10',
      cover_avatar:
        'https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      members: ['Victoria'],
    },
  ],
};
