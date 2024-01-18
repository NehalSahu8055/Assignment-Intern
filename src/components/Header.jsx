import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

function Header() {
  return (
    <header className="sticky top-0 z-50  bg-white">
      <h1 className="mb- flex justify-between border-b px-4 py-2 text-2xl font-semibold text-slate-600 shadow-md">
        <span>Quiz App📝</span>
        <AvatarGroup>
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="Remy Sharp"
            src="https://i.pravatar.cc/150?img=1"
          />
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="Travis Howard"
            src="https://i.pravatar.cc/150?img=2"
          />
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="Agnes Walker"
            src="https://i.pravatar.cc/150?img=3"
          />
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="Trevor Henderson"
            src="https://i.pravatar.cc/150?img=4"
          />
        </AvatarGroup>
      </h1>
    </header>
  );
}

export default Header;
