import React from "react";
import { useRouter } from "next/router";
import { MenuItem, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FlagIcon from "@mui/icons-material/Flag";
import { VariablesColors } from "@/styles/Variables.colors";

interface MenuItemDetails {
  icon: React.ReactElement;
  text: string;
  route: string;
}

interface MenuItemComponentProps extends MenuItemDetails {
  handleCloseNavMenu: () => void;
}
type BurgerItemsProps = {
  handleCloseNavMenu: () => void;
};

const colors = new VariablesColors();
const { colorOrange } = colors;

const menuItems: MenuItemDetails[] = [
  { icon: <FlagIcon />, text: "Créer un pays", route: "/country/new" },
  { icon: <SearchIcon />, text: "Rechercher un pays", route: "/search" },
];

const MenuItemComponent: React.FC<MenuItemComponentProps> = ({
  icon,
  text,
  route,
  handleCloseNavMenu,
}) => {
  const router = useRouter();
  return (
    <MenuItem
      onClick={() => {
        handleCloseNavMenu();
        router.replace(route);
      }}
    >
      {React.cloneElement(icon, {
        sx: {
          width: "30px",
          marginRight: "8px",
          height: "auto",
          color: colorOrange,
        },
      })}
      <Typography textAlign="center">{text}</Typography>
    </MenuItem>
  );
};

const BurgerItems = ({
  handleCloseNavMenu,
}: BurgerItemsProps): React.ReactNode => {
  return (
    <>
      {menuItems.map((item, index) => (
        <MenuItemComponent
          key={index}
          icon={item.icon}
          text={item.text}
          route={item.route}
          handleCloseNavMenu={handleCloseNavMenu}
        />
      ))}
    </>
  );
};

export default BurgerItems;
