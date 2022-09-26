import { useStaticQuery, graphql } from "gatsby"

export const useHeroQuery = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      wp {
        generalSettings {
          title
        }
      }    
    }
  `)

  return data;
}
