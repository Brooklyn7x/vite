import { sidebarLinks } from "@/constants";
import { useUserContext } from "@/context/AuthContext";
import { InstagramIcon, LogOutIcon } from "lucide-react";
import React, { useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/queriesMutation";

const Leftbar = () => {
  const { pathname } = useLocation();
  const { user } = useUserContext();

  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess]);

  return (
    <div className="hidden lg:flex py-16 px-6 flex-col justify-between min-w-[270px] border">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center">
          <InstagramIcon />
          <p>Instx</p>
        </Link>

        <Link to={`/profile/${user.id}`} className="flex items-center gap-3">
          <img
            src={user.imageUrl}
            alt="profile-img"
            className="h-14 w-14 rounded-full gap-3"
          />
          <div className="flex flex-col">
            <p className="body-bold">{user.name}</p>
            <p className="text-sm text-light-3">@{user.username}</p>
          </div>
        </Link>

        <ul className="flex flex-col gap-4">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${
                  isActive && "bg-primary text-white rounded-md"
                }`}
              >
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4"
                >
                  {link.icons}
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <Button
        variant={"ghost"}
        className="flex items-center justify-start gap-4"
        onClick={() => signOut()}
      >
        <LogOutIcon />
        <p>Logout</p>
      </Button>
    </div>
  );
};

export default Leftbar;
