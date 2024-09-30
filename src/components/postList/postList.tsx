import { useState } from "react";
interface User {
  id: number;
  name: string;
  avator: string;
}
interface CommentProps {
  comment: {
    user: {
      id: number,
      name: string,
      avator: string,
    },
    content: string,
    time: string,
    like: number,
    liked: boolean,
    id: number,
  };
}
const user: User = {
  id: 1,
  name: "holopku",
  avator: "https://avatars.githubusercontent.com/u/37905046?v=4",
};
const list: CommentProps[] = [
  {
    comment: {
      user: user,
      content: "hello",
      time: "2021/1/1",
      like: 0,
      liked: false,
      id: 1,
    },
  },
  {
    comment: {
      user: user,
      content: "world",
      time: "2021/1/2",
      like: 0,
      liked: false,
      id: 2,
    },
  },
];

function Comment({ comment }: CommentProps) {
  const [liked, setLiked] = useState(comment.liked);
  const [like, setLike] = useState(comment.like);

  function handleClick() {
    if (liked) {
      setLiked(false);
      setLike(like - 1);
    } else {
      setLiked(true);
      setLike(like + 1);
    }
  }
  return (
    <div className="comment">
      <div className="user">
        <img
          src={comment.user.avator}
          alt={comment.user.name}
          width={50}
          height={50}
        />
        <span>{comment.user.name}</span>
      </div>
      <div className="content">
        <p>{comment.content}</p>
      </div>
      <div className="time">
        <span>{comment.time}</span>
      </div>
      <div className="like">
        <span>{like}</span>
        <button onClick={handleClick}>{liked ? "liked" : "like"} </button>
      </div>
    </div>
  );
}
const listPosts = () => {
  const [commentList, setCommentList] = useState(list);
  const [content, setContent] = useState("");
  function handleClick({ content }) {
    setCommentList([
      ...commentList,
      {
        comment: {
          user: user,
          content: content,
          time: new Date().toLocaleDateString(),
          like: 0,
          liked: false,
          id: commentList.length + 1,
        },
      },
    ]);
  }
  return (
    <div>
      <div className="reply">
        <input
          type="text"
          placeholder="发条评论吧qwq"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button onClick={() => handleClick({ content })}>发布</button>
      </div>
      <div className="list">
        {commentList.map((item) => (
          <Comment key={item.comment.id} comment={item.comment} />
        ))}
      </div>
    </div>
  );
};

export default listPosts;
