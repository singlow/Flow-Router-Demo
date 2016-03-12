Template.blogIndex.onCreated(function() {
  this.autorun(() => {
    this.subscribe('posts');
  });
});

Template.blogIndex.helpers({
  posts: ()=> {
    let posts = Posts.find( {}, { sort: [['createdAt', 'desc']] } );
    return posts;
  }
});
             

Template.blogPost.onCreated(function() {
  this.autorun(() => {
    let postId = FlowRouter.getParam('postId');
    this.subscribe('single-post', postId);
  });
});

Template.blogPost.helpers({
  post: ()=> {
    let postId = FlowRouter.getParam('postId');
    let post = Posts.findOne( { _id: postId } ) || {};
    return post;
  },
  author: function() {
    let user = Meteor.users.findOne( { _id: this.createdBy } ) || {};
    return user.profile.name;
  }
});
