"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";

export default function ProfileButton() {
  return (
    <div className="rounded-full hover:bg-gray-100 bg-white flex gap-2 max-h-10 border-primary p-2 items-center flex-shrink-0">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-center">
        <p className="text-xs font-medium">John Doe</p>
        <p className="text-xs text-gray-500">Community Member</p>
      </div>
      <ChevronDown
        className="hover:cursor-pointer"
        onClick={() => {
          alert("test");
        }}
      />
    </div>
  );
}
