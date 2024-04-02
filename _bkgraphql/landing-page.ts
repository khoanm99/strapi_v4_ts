// export default (strapi) => ({ nexus }) => ({
//   typeDefs: `
//     type Query {
//       landingPageBySlug(slug: String!): LandingPageEntityResponse
//     }
//   `,
//   resolvers: {
//     Query: {
//       landingPageBySlug: {
//         resolve: async (parent, args, context) => {
//           const { toEntityResponse } = strapi.service('plugin::graphql.format').returnTypes;

//           let filters = {};
//           filters['slug'] = args.slug;

//           // landing-page
//           const data = await strapi.services['api::landing-page.landing-page'].find({
//             filters: filters,
//             locale: args.locale ?? 'de',
//           });
//           const response = toEntityResponse(data.results[0]);
//           return response;
//         },
//       },
//     },
//   },
//   resolversConfig: {
//     'Query.landingPageBySlug': {
//       auth: {
//         scope: ['api::landing-page.landing-page.findOne'],
//       },
//     },
//   },
// });
