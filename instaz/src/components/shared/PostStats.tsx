import {
  useDeleteSavedPost,
  useGetCurrentUser,
  useLikePost,
  useSavePost,
} from "@/lib/react-query/queriesMutation";
import { Models } from "appwrite";
import { Bookmark, BookmarkCheck, Heart, HeartCrack } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type PostStatsProps = {
  post: Models.Document;
  userId: string;
};

const PostStats = ({ post, userId }: PostStatsProps) => {
  const location = useLocation();
  const likesList = post.likes.map((user: Models.Document) => user.$id);

  const [likes, setLikes] = useState<string[]>(likesList);
  const [isSaved, setIsSaved] = useState(false);

  const { mutate: likePost } = useLikePost();
  const { mutate: savePost } = useSavePost();
  const { mutate: deleteSavePost } = useDeleteSavedPost();

  const { data: currentUser } = useGetCurrentUser();

  const savedPostRecord = currentUser?.save?.find(
    (record: Models.Document) => record.post.$id === post.$id
  );

  useEffect(() => {
    setIsSaved(!!savedPostRecord);
  }, [currentUser]);

  const handleLikePost = (e: React.MouseEvent) => {
    e.stopPropagation();

    let likesArray = [...likes];

    if (likesArray.includes(userId)) {
      likesArray = likesArray.filter((Id) => Id !== userId);
    } else {
      likesArray.push(userId);
    }

    setLikes(likesArray);
    likePost({ postId: post.$id, likesArray });
  };

  const handleSavePost = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (savedPostRecord) {
      setIsSaved(false);
      return deleteSavePost(savedPostRecord.$id);
    }

    savePost({ userId: userId, postId: post.$id });
    setIsSaved(true);
  };

  return (
    <div className="flex items-center justify-between z-20">
      <div className="flex items-center gap-2 mr-5">
        {likes ? (
          <HeartCrack
            className="cursor-pointer w-5 h-5 "
            onClick={handleLikePost}
          />
        ) : (
          <Heart className="cursor-pointer w-5 h-5" onClick={handleLikePost} />
        )}

        <p>{likes.length}</p>
      </div>

      {isSaved ? (
        <BookmarkCheck className="h-5 w-5" onClick={handleSavePost} />
      ) : (
        <Bookmark className="h-5 w-5" onClick={handleSavePost} />
      )}
    </div>
  );
};

export default PostStats;
