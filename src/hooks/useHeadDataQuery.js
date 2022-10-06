import { useStaticQuery, graphql } from "gatsby";

export const useHeadDataQuery = () => {
  const dataHead = useStaticQuery(graphql`
    query HeadDataQuery{
      allWp {
        nodes {
          generalSettings {
            title
            language
            description
          }
        }
      }
    }
  `)
  
  return {generalSettings:dataHead.allWp.nodes[0].generalSettings}
}
