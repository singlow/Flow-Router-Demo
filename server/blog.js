Meteor.publish('posts', function() {
  return Posts.find( {} );
});

Meteor.publish('single-post', function(postId) {
  let posts = Posts.find( { _id: postId } );
  let authorIds = posts.map( (post) => post.createdBy ); 
  let authors = Meteor.users.find( { _id: { $in: authorIds } } );
  posts.rewind();
  return [posts, authors];
});
