import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

const Article = (props) => {

  // Destructuring Props
  const { 
    author, 
    authorExists,
    description,
    image,
    imageExits,
    publishedAt,
    source,
    title,
    url } = props;

  return (
    <article className={ article_style }>
      <div className={ details_style }>

        {/* Published */}
        <span className={ published_style }>
          <strong>Published:</strong> { publishedAt.split("T")[0] }
          { ' | ' }
        </span>
        
        {/* Author */}
        <span className={ authorExists ? author_style : hidden_style }>
          <strong>Author:</strong> { author }
          { ' | ' }
        </span>

        {/* Source */}
        <span className={ source_style }>
          <strong>Source:</strong> { source }
        </span>
      </div>

      {/* Image */}
      <img src={ image } alt={ title } className={ imageExits ? image_style : hidden_style } />

      {/* Title */}
      <h3 className={ title_style }>
        <a className={ link_style } target="_blank" href={ url }>
        { title }
        </a>
      </h3>

      {/* Description */}
      <p className={ description_style }>
        { description }
      </p>
    </article>
  );
};

Article.propTypes = {
  author: PropTypes.string,
  description: PropTypes.string,
  details: PropTypes.string,
  image: PropTypes.string,
  publishedAt: PropTypes.string,
  source: PropTypes.string
};

export default Article;


// - - - - - - - - - - - - - - - - - - - - - - - - -
// CSS
// - - - - - - - - - - - - - - - - - - - - - - - - -

const article_style = css`
  border: 1px solid rgba(0,0,0,0.2);
  margin-bottom: 2rem;
  padding: 1rem;
  text-align: left;
  transition: background 0.3s;
  &:hover {
    transition: background 0.1s;
    background: rgba(0,0,0,0.02);
  }
`;
const author_style = css``;
const description_style = css`
  color: rgba(0,0,0,0.5);
  font-size: 0.7rem;
`;
const details_style = css`
  background: rgba(0,0,0,0.05);
  font-size: 0.5rem;
  display: block;
  padding: 10px;
  width: auto;
`;
const hidden_style = css`display: none;`;
const image_style = css`
  width: 100%;
  overflow: hidden;  
  transition: transform 0.3s;
  &:hover {
    transition: transform 0.3s;
    transform: scale(1.012);
  }
`;
const link_style = css`
  color: black;
  font-weight: bold;
  transition: color 0.3s;
  &:hover {
    color: orange;
    transition: color 0.1s;
  }
`;
const published_style = css`
  font-size: 0.5rem;
`;
const source_style = css``;
const title_style = css`
  font-size: 1rem;
  font-weight: 500;
`;

// - - - - - - - - - - - - - - - - - - - - - - - - -
