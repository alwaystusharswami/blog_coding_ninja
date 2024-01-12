import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsData);
      console.log("posts", postsData);
    }
    getData();
  }, []);
  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by">Tushar</div>
      {posts &&
        posts.map((post, index) => (
          <div className="post" key={`post-${index}`}>
            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.subTitle}</p>
          </div>
        ))}
    </div>
  );
}
