Posts = new orion.collection('posts', {
  singularName: 'post',
  pluralName: 'posts',
  title: 'posts',
  link: {
    title: 'Posts'
  },
  tabular: {
    columns: [
      { data: 'title', title: 'Title' },
      orion.attributeColumn('createdBy', 'createdBy', 'Author'),
      orion.attributeColumn('createdAt', 'createdAt', 'Date')
    ]
  }
});

Posts.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  body: orion.attribute('froala', {
    label: 'Body'
  }),
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));

Posts.helpers({
  author() {
    return Meteor.users.findOne(this.createdBy);
  }
});
