const blog = FlowRouter.group({
  prefix: "/blog"
});

blog.route('/', {
  name: 'blogIndex',
  action: () => {
    console.log( 'Blog index page' );
  }
});

blog.route('/:postId', {
  name: 'blogPost',
  action: ( params, queryParams ) => {
    console.log( `This is my blog post: ${params.postId}` );
    console.log( `This is my query params: ${JSON.stringify(queryParams)}` );
  }
});
