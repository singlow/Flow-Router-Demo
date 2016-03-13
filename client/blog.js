PostSubs = new SubsManager();

Template.blogIndex.onCreated(function() {
  this.autorun(() => {
    this.subscribe('posts');
  });
});

Template.blogIndex.helpers({
  posts: ()=> {
    let posts = Posts.find( {}, { sort: [['createdAt', 'desc']] } );
    return posts;
  },
  pathForPost: function() {
    let params = {
      postId: this._id
    }
    let queryParams = {
      coments: 'show'
    }
    return FlowRouter.path('blogPost', params, queryParams);
  }
});
             

Template.blogPost.onCreated(function() {
  this.ready = new ReactiveVar();
  this.autorun(() => {
    let postId = FlowRouter.getParam('postId');
    let handle = PostSubs.subscribe('single-post', postId);
    this.ready.set(handle.ready());
  });
});

Template.blogPost.helpers({
  post: ()=> {
    let postId = FlowRouter.getParam('postId');
    let post = Posts.findOne( { _id: postId } ) || {};
    return post;
  },
  postReady: ()=> {
    return Template.instance().ready.get();
  },
  editPath: function() {
    return FlowRouter.path('collections.posts.update', this);
  }
});
