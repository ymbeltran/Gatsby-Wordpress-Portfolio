import { useStaticQuery, graphql } from "gatsby"

export const useFooterQuery = () => {
  const dataFooter = useStaticQuery(graphql`
    query FooterQuery {
      wpMenu(name: {eq: "Social"}) {
        menuItems {
          nodes {
            id
            label
            url        
          }
        }
      }    
    }
  `)
  return dataFooter.wpMenu.menuItems.nodes;
}
