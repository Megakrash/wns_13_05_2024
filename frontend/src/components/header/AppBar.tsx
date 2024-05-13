import React from "react";
import { useRouter } from "next/router";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PublicIcon from "@mui/icons-material/Public";
import FlagIcon from "@mui/icons-material/Flag";
import BurgerMenu from "./burgerMenu/BurgerMenu";
import { VariablesColors } from "@/styles/Variables.colors";

const colors = new VariablesColors();
const { colorDarkGrey, colorOrange, colorLightOrange } = colors;

const Header = (): React.ReactNode => {
  const router = useRouter();

  return (
    <AppBar position="static" sx={{ backgroundColor: colorDarkGrey }}>
      <Toolbar
        sx={{
          width: "100%",
          height: "70px",
          margin: "auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        {/* Mobile Menu */}
        <BurgerMenu />
        {/* Mobile Title */}
        <Tooltip title="Revenir sur la page d'accueil">
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              router.replace(`/`);
            }}
          >
            <PublicIcon sx={{ color: colorOrange }} />

            <Typography
              component="div"
              sx={{
                color: colorOrange,
                fontSize: "24px",
                fontWeight: 700,
                letterSpacing: ".2rem",
              }}
            >
              CP3
            </Typography>
          </Box>
        </Tooltip>
        {/* Desktop Title */}
        <Tooltip title="Back to home">
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              router.replace(`/`);
            }}
          >
            <PublicIcon sx={{ color: colorOrange }} />

            <Typography
              sx={{
                color: colorOrange,
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              CHECKPOINT 3 WCS
            </Typography>
          </Box>
        </Tooltip>
        {/* Big Buttons */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            gap: "15px",
          }}
        >
          {/* Search country Button */}
          <Button
            variant="contained"
            size="large"
            type="button"
            sx={{
              backgroundColor: colorLightOrange,
              fontWeight: 550,
            }}
            startIcon={<SearchIcon />}
            onClick={() => {
              router.replace(`/search`);
            }}
          >
            Rechercher un pays
          </Button>
          {/* Post country Button */}
          <Button
            variant="contained"
            size="large"
            type="button"
            sx={{
              backgroundColor: colorLightOrange,
              fontWeight: 550,
            }}
            startIcon={<FlagIcon />}
            onClick={() => {
              router.replace(`/country/new`);
            }}
          >
            Créer un pays
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
