import { useStaticQuery, graphql } from "gatsby"

export const useAboutQuery = () => {
  const dataAbout = useStaticQuery(graphql`
    query {
      wpPage(title: {eq: "About Me"}) {
        title
        uri
        excerpt
        featuredImage {
          node {
            filename
          }
        }
      }
    }
  `)

  return dataAbout
}
