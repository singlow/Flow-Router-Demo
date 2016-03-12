FlowRouter.route('/blog/:postId', {
  name: 'blogPost',
  action: ( params, queryParams ) => {
    console.log( `This is my blog post: ${params.postId}` );
    console.log( `This is my query params: ${JSON.stringify(queryParams)}` );
  }
});
