import useFormInput from "./custom/useFormInput";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
export default function CreatePost() {
  const title = useFormInput("");
  const subTitle = useFormInput("");
  const content = useFormInput("");
  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(`title ${title.value}`)

    try {
      const docRef = await addDoc(collection(db, "posts"), {
        title:title.value,
        subTitle:subTitle.value,
        content:content.value,
        createdAt: new Date()
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="">Title</label>
          <input type="text" {...title} />
        </div>
        <div className="form-field">
          <label htmlFor="">Sub Title</label>
          <input type="text" {...subTitle} />
        </div>
        <div className="form-field">
          <label htmlFor="">Content</label>
          <textarea name="" id="" cols="30" rows="10" {...content}></textarea>
        </div>
        <button type="submit" className="create-post-btn">
          Create Post
        </button>
      </form>
    </div>
  );
}
