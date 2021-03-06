import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";

export const AddPostsForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onTitleChanged = (event) => setTitle(event.target.value);
  const onContentChanged = (event) => setContent(event.target.value);

  const onSaveButtonClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content
        })
      );

      setTitle("");
      setContent("");
    }
  };

  return (
    <section>
      <h2> Add a new post... </h2>
      <form>
        <label htmlFor="postTitle">Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="content">Content:</label>
        <input
          type="text"
          id="content"
          name="content"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSaveButtonClicked}>
          Save
        </button>
      </form>
    </section>
  );
};
