import React, { useState } from "react";
import { queryAllCountries } from "@/graphql/client";
import { Country } from "@/types";
import { useQuery } from "@apollo/client";
import CountryCard from "../country/CountryCard";
import { Box, TextField, Typography } from "@mui/material";

const Search = (): React.ReactNode => {
  const [searchCountry, setSearchCountry] = useState<string>("");
  //-------------------------------------
  // Get Categories&SubCategories & Tags
  //-------------------------------------
  const { data: dataCountries } = useQuery<{ items: Country[] }>(
    queryAllCountries
  );
  const countries: Country[] = dataCountries ? dataCountries.items : [];

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchCountry.toLowerCase())
  );
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: 5,
        gap: "20px",
      }}
    >
      <Typography variant="h4" textAlign="center" sx={{ mb: 2 }}>
        Chercher votre pays parmis notre large gamme
      </Typography>
      <TextField
        label="Trouver un pays"
        variant="outlined"
        value={searchCountry}
        onChange={(e) => setSearchCountry(e.target.value)}
        sx={{ mb: 2, width: "300px" }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        {filteredCountries.map((country) => (
          <CountryCard key={country.id} country={country} />
        ))}
      </Box>
    </Box>
  );
};

export default Search;
