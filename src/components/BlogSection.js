// import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { excerpt } from "../utility";
import React, { useState, useEffect } from 'react';
import {auth} from "../firebase";


// console.log("hiiiiii");
// console.log(currentUser?. uid);


const BlogSection = ({ blogs, handleDelete, user }) => {
  const currentUser = auth.currentUser;
  const userId = currentUser?.displayName;
  return (
    <div>
      <div className="blog-heading text-start py-2 mb-4" style={{ color: '#F875AA' }}>Daily Blogs</div>
      {blogs?.map((item) => (
        <div className="row pb-4" key={item.id}>
          <div className="col-md-5">
            <div className="hover-blogs-img">
              <div className="blogs-img">
                <img src={item.imgUrl} alt={item.title} />
                <div></div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="text-start">
              <h6 className="category catg-color">{item.category}</h6>
              <span className="title py-2">{item.title}</span>
              <span className="meta-info" style={{ color: '#A91079' }}>
                <p className="author" style={{ color: '#A91079' }}>{item.author}</p> -&nbsp;
                {item.timestamp.toDate().toDateString()}
              </span>
            </div>
            <div className="short-description text-start">
              {excerpt(item.description, 200)}
            </div>
            <Link to={`/detail/${item.id}`}>
            <button className="btn btn-read" >Read More</button>
            </Link>
            {user && item.author === userId && (
              <div style={{ float: "right" }}>
                <FontAwesome
                  name="trash"
                  style={{ margin: "15px", cursor: "pointer",  color: "white" }}
                  size="2x"
                  onClick={() => handleDelete(item.id)}
                />
                <Link to={`/update/${item.id}`}>
                  <FontAwesome
                    name="edit"
                    style={{ cursor: "pointer", color: "white"  }}
                    size="2x"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSection;
