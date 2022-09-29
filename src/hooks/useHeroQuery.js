import { useStaticQuery, graphql } from "gatsby"

export const useHeroQuery = () => {
  const dataHero = useStaticQuery(graphql`
    query HeroQuery {
      wp {
        generalSettings {
          title
        }
      }    
    }
  `)

  return dataHero;
}
