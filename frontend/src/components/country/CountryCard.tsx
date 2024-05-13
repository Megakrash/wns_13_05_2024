import React from "react";
import { Country } from "@/types";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

type CountryCardProps = {
  country: Country;
};

const CountryCard = (props: CountryCardProps): React.ReactNode => {
  return (
    <>
      <CardActionArea
        sx={{
          width: 180,
        }}
        href={`/countries/${props.country.id}`}
      >
        <Card
          sx={{
            width: 180,
            height: 180,
            "&:hover": {
              border: (theme) => `2px solid ${theme.palette.primary.main}`,
            },
          }}
        >
          <Typography
            component="div"
            sx={{
              height: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "3rem",
              fontFamily: "Noto Color Emoji, Arial, sans-serif",
            }}
            aria-label={`Drapeau de ${props.country.name}`}
          >
            {props.country.emoji}
          </Typography>

          <CardContent>
            <Typography
              sx={{
                height: "75px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "flex",
                // alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
              variant="h5"
            >
              {props.country.name}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </>
  );
};

export default CountryCard;
