FlowRouter.route('/', {
  action: () => {
    FlowRouter.go("/blog");
  }
});

const blog = FlowRouter.group({
  prefix: "/blog"
});

blog.route('/', {
  name: 'blogIndex',
  action: () => {
    BlazeLayout.render('blogLayout', { content: 'blogIndex' });
  }
});

blog.route('/:postId', {
  name: 'blogPost',
  action: ( params, queryParams ) => {
    BlazeLayout.render('blogLayout', { content: 'blogPost' });
  }
});
