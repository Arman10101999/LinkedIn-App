import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import InputOptions from "./InputOptions";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
// import { Avatar } from "@mui/material";
// import HeaderOption from "./HeaderOption";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { Avatar } from "@mui/material";
import { db } from "./firebase";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  // this useEffect creates a real time listener of the db . they will push the message in the firestore db and that Directly mapped to the post i.e. if the db changes the mapping of posts updates toolbar.

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Arman Srivastava",
      description: "this is test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // THIS line is clearing the "write the post area" after being posted passing firebase
    setInput("");
  };

  // so now if we post anything it should show in the feed so , for this we use firebase -- see firebase.jsx

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__avatar">
          <Avatar src="https://ih1.redbubble.net/image.4687614567.2927/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg" />
          {/* <HeaderOption avatar="https://ih1.redbubble.net/image.4687614567.2927/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg" /> */}
          <div className="feed__input">
            <CreateIcon />
            <form>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Write a Post!"
              />
              <button onClick={sendPost} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>

        {/* everytime the user types in it fires up the event and sets the input and get the value from it */}

        <div className="feed__inputOptions">
          <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOptions
            Icon={SubscriptionsIcon}
            title="Video"
            color="#E7A33E"
          />
          <InputOptions Icon={EventNoteIcon} title="Event" color="#E7A33E" />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title="Write Artcile"
            color="#7FC15E"
          />
        </div>
      </div>

      {/* Posts */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
