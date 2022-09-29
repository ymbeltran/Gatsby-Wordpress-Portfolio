import { useStaticQuery, graphql } from "gatsby"

export const useProjectsQuery = () => {
  const projects = useStaticQuery(graphql`
    query ProjectsQuery {
      allWpPost {
        edges {
          node {
            title
            excerpt
            featuredImage {
              node {
                filename
              }
            }
            website_link {
              websiteLink
            }
            project_repo {
              repoLink
            }
            locale {
              locale
            }
          }
        }
      }  
    }
  `);
  /* var output, property, propert, output1, proper, output2;
  for (property in projects.allWpPost.edges) {
      output += property + ': ' + projects.allWpPost.edges[property] + '; ';
      for (propert in projects.allWpPost.edges[property]) {
        output1 += propert + ': ' + projects.allWpPost.edges[property][propert] + '; ';
        for (proper in projects.allWpPost.edges[property][propert]) {
          output2 += proper + ': ' + projects.allWpPost.edges[property][propert][proper] + '; ';
        }
        console.log("projects.allWpPost.edges[property][propert][proper] "+output2);
      }
      // console.log("projects.allWpPost.edges[property][propert] "+output1);
  } */
  // console.log("projects.allWpPost.edges[property] "+output);
  return projects.allWpPost;
}
