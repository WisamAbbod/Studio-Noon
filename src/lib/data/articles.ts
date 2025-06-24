import contentFetcher from "@/lib/fetch";

export const getLatestArticlesQuery = `
query LatestArticlesQuery ($after: String, $first: Int) {
    articles(after: $after, first: $first, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
            id
            slug
            title(format: RENDERED)
            excerpt: excerptPlainText
            featuredImage {
                node {
                    altText
                    sourceUrl
                    title
                }
            }
        }
        pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
        }
    }
}`;

export const getArticlesQuery = `
query ArticlesQuery($slug: ID!) {
    article(id: $slug, idType: SLUG) {
        id
        slug
        title(format: RENDERED)
        featuredImage {
            node {
                altText
                sourceUrl
                title
            }
        }
        excerpt: excerptPlainText
        editorBlocks {
            name
            ... on CoreParagraph {
                anchor
                attributes {
                    align
                    content
                }
            }
            ... on CoreHeading {
                anchor
                attributes {
                    align
                    content
                    level
                }
            }
        }
    }
}
`;

export const getArticles = async (
  after: string | null = null,
  first: number = 3
) => {
  // Query Variables
  const variables = {
    after,
    first,
  };

  // Query
  const body = JSON.stringify({ query: getLatestArticlesQuery, variables });

  try {
    // Revalidation Tags
    const tags = ["latestArticles", "articles"];

    // Use the default revalidation timing
    const revalidate = undefined;

    // Get the content
    const content = await contentFetcher(body, tags, revalidate);

    if (!content.data.articles) {
      return false;
    }

    return content.data.articles;
  } catch (error) {
    console.error(error);
    return false;
  }
};
export const getArticle = async (slug: string) => {
  // Query Variables
  const variables = {
    slug,
  };

  // Query
  const body = JSON.stringify({ query: getArticlesQuery, variables });

  try {
    // Revalidation Tags
    const tags = ["article", `article:${slug}`];

    // Use the default revalidation timing
    const revalidate = undefined;

    // Get the content
    const content = await contentFetcher(body, tags, revalidate);

    if (!content.data.article) {
      return false;
    }

    return content.data.article;
  } catch (error) {
    console.error(error);
    return false;
  }
};
