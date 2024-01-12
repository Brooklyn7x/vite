import { InstagramIcon, LogInIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/queriesMutation";
import { useEffect } from "react";
import { useUserContext } from "@/context/AuthContext";

const Topbar = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess]);

  return (
    <div className=" top-0 sticky w-full z-50 md:hidden border">
      <div className="flex items-center justify-between py-4 px-5">
        <Link to="/">
          {" "}
          <InstagramIcon />
        </Link>

        <div className="flex gap-4">
          <Button variant={"ghost"} size={"sm"} onClick={() => signOut()}>
            <LogInIcon className="h-5 w-5" />
          </Button>
          <Link
            to={`/profile/${user.id}`}
            className="flex items-center justify-center"
          >
            <img
              src={user.imageUrl}
              alt="profile-img"
              className="h-8 w-8 rounded-full gap-3"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
