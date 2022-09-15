import React from "react";
import Reply from "./Reply";

export default function Comment(props) {
  return (
    <>
      <div className="d-flex gap-2 my-2" key={props.key}>
        <img
          src={props.image}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#E5E7EB" }}
        >
          <span className="fw-semibold">{props.username}</span>
          <br />
          <span>{props.text}</span>

          <div className="d-flex align-items-center gap-1">
            {props.like > 0 && (
              <>
                <img src="/like.svg" width={20}></img>
                <span className="text-muted"> {props.like} คน</span>
              </>
            )}
          </div>
        </div>
      </div>
      {props.replies.map((x, i) => (
        <Reply
          username={x.username}
          key={i}
          text={x.replyText}
          like={x.likeNum}
          image={x.userImagePath}
        />
      ))}
    </>
  );
}
