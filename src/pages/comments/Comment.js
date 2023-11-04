import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";

const Comment = (props) => {
  const { profile_id, profile_image, owner, updated_at, content } = props;
  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${props.profile_id}`}>
          <Avatar src={props.profile_image} alt={props.owner} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{props.owner}</span>
          <span className={styles.Date}>{props.updated_at}</span>
          <p>{props.content}</p>
        </Media.Body>
      </Media>
    </div>
  );
};

export default Comment;
