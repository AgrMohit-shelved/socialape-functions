let db = {
  users: [
    {
      userId: 'dh23ggj5h32g543j5gf43',
      email: 'user@email.com',
      handle: 'user',
      createdAt: '2019-03-15T10:59:52.798Z',
      imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
      bio: 'Hello, my name is user, nice to meet you',
      website: 'https://user.com',
      location: 'London, UK',
    },
  ],
  screams: [
    {
      userHandle: 'user',
      body: 'This is a sample scream',
      createdAt: '2019-03-15T10:59:52.798Z',
      likeCount: 5,
      commentCount: 3,
    },
  ],
  comments: [
    {
      userHandle: 'user',
      screamId: 'kdjsfgdksuufhgkdsufky',
      body: 'This is a comment on some scream',
      createdAt: '2019-03-15T10:59:52.798Z',
    },
  ],
};

const userDetails = {
  // Redux data
  credentials: {
    userId: 'dh23ggj5h32g543j5gf43',
    email: 'user@email.com',
    handle: 'user',
    createdAt: '2019-03-15T10:59:52.798Z',
    imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
    bio: 'Hello, my name is user, nice to meet you',
    website: 'https://user.com',
    location: 'London, UK',
  },
  likes: [
    {
      userHandle: 'user',
      screamId: 'hh7O5oWfWucVzGbHH2pa',
    },
    {
      userHandle: 'user',
      screamId: '3IOnFoQexRcofs5OhBXO',
    },
  ],
};
