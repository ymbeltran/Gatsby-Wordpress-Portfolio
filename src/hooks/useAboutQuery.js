import { useStaticQuery, graphql } from "gatsby"

export const useAboutQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage(title: {eq: "About Me"}) {
        title
        uri
        content
        featuredImage {
          node {
            localFile {
              url
              relativePath
              childImageSharp {
                fixed(width: 350) {
                  srcWebp
                }
              }
            }
          }
        }
      }
    }
  `)

  return data
}
