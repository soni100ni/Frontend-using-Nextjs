"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);


  return (
    <div  className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50")}>
  <Menu setActive={setActive}>
    <HoveredLink href="/">
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
          </HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-2">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/courses/data-science">Data Science</HoveredLink>
            <HoveredLink href="/courses/mobile-dev">Mobile Development</HoveredLink>
            <HoveredLink href="/courses/ui-ux">UI/UX Design</HoveredLink>
          </div>
        </MenuItem>
        <HoveredLink href="/contact">
        <MenuItem setActive={setActive} active={active} item="Contact Us">
        </MenuItem>
        </HoveredLink>
      </Menu>
    </div>
  );
}
export default Navbar
