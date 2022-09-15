import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import { comments } from "../libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto bg-white p-3 rounded rounded-3 shadow-sm"
      >
        <PostOwner
          name={"Supasan Ruangchutipopan 640610671"}
          image={"/profileImages/Thinking_Face_Emoji_large.png"}
          title={"Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"}
          like={555}
        />
        {/* PostOwner Example*/}

        {/* <div className="vstack gap-3">
          <div className="d-flex align-items-center gap-3">
            <img
              src="/profileImages/Thinking_Face_Emoji_large.png"
              width="48"
              height="48"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
            <span className="fw-semibold fs-5">
              Supasan Ruangchutipopan 640610671
            </span>
          </div>
          <span>Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207</span>
          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span className="text-muted">100 คน</span>
          </div>
          <hr className="m-0" />
        </div> */}

        {/* Comment Example */}
        {/* <Comment
          username={55}
          key={5}
          text={5}
          like={5}
          replies={5}
          image={"/profileImages/Thinking_Face_Emoji_large.png"}
        /> */}
        {comments.map((x, i) => (
          <>
            {/* <span>5555</span> */}
            <Comment
              username={x.username}
              key={i}
              text={x.commentText}
              like={x.likeNum}
              replies={x.replies}
              image={x.userImagePath}
            />
          </>
        ))}
        {/* <div className="d-flex gap-2 my-2">
          <img
            src="/profileImages/lisa.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">Lisa</span>
            <br />
            <span>จริงค่า</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">999 คน</span>
            </div>
          </div>
        </div> */}

        {/* Reply Example */}
      </div>
    </div>
  );
}
