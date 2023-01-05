import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "./authSlice";
import { Link } from "react-router-dom";

const Welcome = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  const welcome = user ? `Welcome user ${user}` : "Welcome!";
  const tokenAbbr = `${token.slice(0, 9)}...`;

  const content = (
    <section>
      <h1>{welcome}</h1>
      <p>token: ${tokenAbbr}</p>
      <p>
        <Link to="/userList"> Go to the users list</Link>
      </p>
    </section>
  );
  return content;
};

export default Welcome;
