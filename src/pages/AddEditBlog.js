import React, { useState, useEffect } from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

const initialState = {
  title: "",
  tags: [],
  trending: "no",
  category: "",
  description: "",
};

const categoryOption = [
  "Fests",
  "Technology",
  "Food",
  "Academics",
  "Sports",
  "Hubs & Society",
];

const AddEditBlog = () => {
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);

  const { title, tags, category, trending, description } = form;

  const handleChange = (e) => {};
  const handleTags = () => {};
  const handleTrending = () => {};
  const onCategorChange = () => {};

  return (
    <div className="container-fluid mb-4">
      <div className="container">
        <div className="col-12 ">
          <div className="text-center heading py-2">Create Blog</div>
        </div>
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            <form className="row blog-form">
              <div className="col-12 py-3">
                <input
                  type="text"
                  className="form-control input-text-box"
                  placeholder="Title"
                  name="title"
                  value={title}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 py-3">
                <ReactTagInput
                  tags={tags}
                  placeholder="Tags"
                  onChange={handleTags}
                />
              </div>
              <div className="col-12 py-3">
                <p className="trending">Is it trending blog ?</p>
                <div className="form-check-inline mx-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    value="yes"
                    name="radioOption"
                    checked={trending === "yes"}
                    onChange={handleTrending}
                  />
                  <label htmlFor="radioOption" className="form-check-label">
                    {" "}
                    Yes&nbsp;{" "}
                  </label>
                  <input
                    type="radio"
                    className="form-check-input"
                    value="no"
                    name="radioOption"
                    checked={trending === "no"}
                    onChange={handleTrending}
                  />
                  <label htmlFor="radioOption" className="form-check-label">
                    {" "}
                    No{" "}
                  </label>
                </div>
              </div>
              <div className="col-12 py-3">
                <select
                  value={category}
                  onChange={onCategorChange}
                  className="catg-dropdown"
                >
                  <option>Please select category</option>
                  {categoryOption.map((option, index) => (
                    <option value={option || ""} key={index}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-12 py-3">
                <textarea
                 className="form-control description-box" 
                 placeholder="Description"
                 value={description}
                 name="description"
                 onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input type="file" className="form-control" onChange={(e)=>setFile(e.target.files[0])} />
              </div>
              <div className="col-12 py-3 text-center">
              <button className="btn btn-add" type="submit">
                Submit
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEditBlog;
