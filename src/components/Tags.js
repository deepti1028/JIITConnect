import React from "react";

const Tags = ({ tags }) => {
  return (
    <div>
      <div>
        <div className="blog-heading text-start py-2 mb-4" style={{ color: '#F875AA' }}>Tags</div>
      </div>
      <div className="tags" >
        {tags?.map((tag, index) => (
          <p className="tag" key={index} style={{ backgroundColor: '#662549', color: 'white' }}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Tags;
