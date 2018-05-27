import React from 'react';
import Img from "gatsby-image";


export default ({ img }) => {
  console.log(img);
  return (
    <div style={{
      background: '#fff',
      padding: 10,
    }}>
      <Img
        // resolutions={img.node.childImageSharp.resolutions}
        sizes={img.node.childImageSharp.sizes}
      />
      <h4 style={{marginTop: 15}}>
        {img.node.name}
      </h4>
    </div>
  );
};
