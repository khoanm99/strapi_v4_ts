import landingPage from './api/landing-page/graphql/landing-page';
// import productGraphql from './api/product/graphql/product';

export default (strapi:any) => {
  const extensions = [landingPage]
  const extensionService = strapi.plugin('graphql').service('extension')

  for (const extension of extensions) {
    extensionService.use(extension(strapi))
  }
}
