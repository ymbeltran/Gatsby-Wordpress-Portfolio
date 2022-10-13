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
        resumeLink {
          resume
        }
      }
      wp {
        allSettings {
          generalSettingsUrl
        }
      }
    }
  `)

  return dataAbout
}
