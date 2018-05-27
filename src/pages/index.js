import React from 'react';
import Artwork from '../components/Artwork.js'

const IndexPage = ({ data }) => (
  <div>
    <h1>Virginia Lovejoy Allyn</h1>
    <div style={{
      display: 'grid',
      gridGap: '20px',
      // gridColums: 'repeat(4 20%)',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gridAutoRows: '1fr 1fr'
    }}>
      {
        data.allFile.edges.map(img => {
          return (
            <div>
              <Artwork img={img} />
            </div>
          );
        }
      )}
    </div>
  </div>
)

export default IndexPage

export const query = graphql`
  query ImagesQuery {
      # the filter is usefull if you have multiple source-filesystem instances
      # the name "images" is set in the gatsby-config
    allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      edges {
        node {
          name
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            sizes(maxWidth: 700) {
              ...GatsbyImageSharpSizes
            }
          }
      }
    }
  }
}
`;
