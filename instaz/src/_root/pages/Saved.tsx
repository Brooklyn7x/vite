import GridPostList from "@/components/shared/GridPostList";
import { useGetCurrentUser } from "@/lib/react-query/queriesMutation";
import { Models } from "appwrite";
import { Edit, Loader } from "lucide-react";

const Saved = () => {
  const { data: currentUser } = useGetCurrentUser();

  const savePosts = (currentUser?.save || [])
    .map((savePost: Models.Document) => ({
      ...savePost.post,
      creator: {
        imageUrl: currentUser?.imageUrl,
      },
    }))
    .reverse();

  return (
    <div className="flex flex-col flex-1 items-center gap-10 overflow-scroll py-10 px-5 md:p-14">
      <div className="flex gap-2 w-full max-w-5xl">
        <Edit />
        <h2 className="h3-bold md:h2-bold text-left w-full">Saved Posts</h2>
      </div>

      {!currentUser ? (
        <Loader />
      ) : (
        <ul className="w-full flex justify-center max-w-5xl gap-9">
          {savePosts.length === 0 ? (
            <p className="text-light-4">No available posts</p>
          ) : (
            <GridPostList posts={savePosts} showStats={false} />
          )}
        </ul>
      )}
    </div>
  );
};

export default Saved;
