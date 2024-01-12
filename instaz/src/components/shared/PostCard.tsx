import { useUserContext } from "@/context/AuthContext";
import { multiFormatDateString } from "@/lib/utils";
import { Models } from "appwrite";
import { Edit } from "lucide-react";
import { Link } from "react-router-dom";
import PostStats from "./PostStats";

type PostCardProps = {
  post: Models.Document;
};

const PostCard = ({ post }: PostCardProps) => {
  const { user } = useUserContext();

  if (!post.creator) return;

  return (
    <div className="rounded-3xl border p-5 lg:p-7 w-full max-w-screen-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to={`/profile/${post.creator?.$id}`}>
            <img
              src={post.creator?.imageUrl || null}
              className="rounded-full w-12 lg:h-12"
              alt="post-img"
            />
          </Link>

          <div className="flex flex-col">
            <p className="text-base font-medium">{post.creator.name}</p>
            <div className="flex gap-2 text-xs text-muted-foreground">
              <p>{multiFormatDateString(post.$createdAt)}</p>-
              <p>{post.location}</p>
            </div>
          </div>
        </div>

        <Link
          to={`/update-post/${post.$id}`}
          className={`${user.id !== post.creator.$id && "hidden"}`}
        >
          <Edit className="w-5 h-5" />
        </Link>
      </div>

      <Link to={`/posts/${post.$id}`}>
        <div className="text-[14px] font-medium leading-[140%]">
          <p>{post.captions}</p>
          <ul className="flex gap-1 mt-2">
            {post.tags.map((tag: string) => (
              <li key={tag}>#{tag}</li>
            ))}
          </ul>
        </div>

        <img
          src={post.imageUrl || null}
          className=" h-64 xs:h-[400px] lg:h-[450px] w-full rounded-[24px] object-cover mb-5"
          alt="post-card"
        />
      </Link>

      <PostStats post={post} userId={user.id} />
    </div>
  );
};

export default PostCard;
