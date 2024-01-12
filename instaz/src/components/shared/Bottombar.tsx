import { bottombarLinks, sidebarLinks } from "@/constants";
import { useUserContext } from "@/context/AuthContext";
import { Link, useLocation } from "react-router-dom";

const Bottombar = () => {
  const { user } = useUserContext();
  const { pathname } = useLocation();
  return (
    <div className="md:hidden bottom-0 z-50 sticky w-full px-5 py-4 flex items-center justify-between border">
      {bottombarLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <Link
            to={link.route}
            key={link.label}
            className={`leftsidebar-link group ${
              isActive && "bg-primary text-white rounded-md"
            }`}
          >
            {link.icons}
          </Link>
        );
      })}
    </div>
  );
};

export default Bottombar;
