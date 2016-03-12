FlowRouter.route('/', {
  triggersEnter: (context, redirect) => {
    redirect(FlowRouter.path('blogIndex'));
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
