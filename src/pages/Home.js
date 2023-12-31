import {
  collection,
  deleteDoc,
  onSnapshot,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import BlogSection from "../components/BlogSection";
import Spinner from "../components/Spinner";
// import {chati} from ".../public/chati.svg";
import { toast } from "react-toastify";
import Tags from "../components/Tags";
import MostPopular from "../components/MostPopular";
import Trending from "../components/Trending";
import { Link } from "react-router-dom";
// import Chat from "./Chat";

const Home = ({ setActive, user }) => {
  const userId = user?.uid;
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  const [trendBlogs, setTrendBlogs] = useState([]);

  const getTrendingBlog = async () => {
    const blogRef = collection(db, "blogs");
    const trendQuery = query(blogRef, where("trending", "==", "yes"));
    const querySnapshot = await getDocs(trendQuery);
    let trendBlogs = [];
    querySnapshot.forEach((doc) => {
      trendBlogs.push({ id: doc.id, ...doc.data() });
    });
    setTrendBlogs(trendBlogs);
  };

  useEffect(() => {
    getTrendingBlog();
    const unsub = onSnapshot(
      collection(db, "blogs"),
      (snapshot) => {
        let list = [];
        let tags = [];
        snapshot.docs.forEach((doc) => {
          tags.push(...doc.get("tags"));
          list.push({ id: doc.id, ...doc.data() });
        });
        const uniqueTags = [...new Set(tags)];
        setTags(uniqueTags);
        setBlogs(list);
        setLoading(false);
        setActive("home");
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
      getTrendingBlog();
    };
  }, [setActive]);

  if (loading) {
    return <Spinner />;
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you wanted to delete that blog?")) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, "blogs", id));
        toast.success("Blog deleted successfully");
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  console.log("blogs", blogs);

  return (
    <div className="container-fluid bg-[#22092C] pb-4 pt-4  padding">
      <div className="container padding ">
        <div className="row mx-0">
          <Trending blogs={trendBlogs} />
          <div className="col-md-8">
            <BlogSection
              blogs={blogs}
              user={user}
              handleDelete={handleDelete}
            />
          </div>
          <div className="col-md-3">
            <Tags tags={tags} />
            <MostPopular blogs={blogs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
