const GET_SERVICE_CATEGORIES = `
  query {
    serviceCategories {
      edges {
        node {
          id
          name
          description
          categoryIcon {
            sourceUrl
          }
        }
      }
    }
  }
`;
