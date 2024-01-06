// components/AccountMenu.tsx

import React from "react";
import Link from "next/link";

interface IMenuItem {
  href: string;
  text: string;
}

interface IMenuProps {
  title: string;
  menuItems: IMenuItem[];
  activeLink: string;
  handleLinkClick: (link: string) => void;
}

const Menu: React.FC<IMenuProps> = ({
  menuItems,
  activeLink,
  handleLinkClick,
  title,
}) => {
  return (
    <div>
      <h1 className="text-white text-[18px] font-medium">{title}</h1>
      <div className="h-1 w-10 bg-green-600"></div>
      <div className="flex flex-col items-start justify-start gap-5 mt-8">
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={index}
            href={menuItem.href}
            text={menuItem.text}
            active={activeLink === menuItem.text.toLowerCase()} // Assuming text is unique for each menu item
            onClick={() => handleLinkClick(menuItem.text.toLowerCase())}
          />
        ))}
      </div>
    </div>
  );
};

interface MenuItemProps {
  href: string;
  text: string;
  active: boolean;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, text, active, onClick }) => {
  const activeClassName = active ? "text-white" : "";
  return (
    <a
      className={`text-gray-400 hover:text-white text-[14px] font-medium ${activeClassName}`}
      onClick={onClick}
      href={href}
    >
      {text}
    </a>
  );
};

export default Menu;
