import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  useEffect(() => {
    async function getData() {
      const docRef = doc(db, "posts", postId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setPost(docSnap.data())
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    getData();
  }, []);

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content} </p>
    </div>
  );
}
