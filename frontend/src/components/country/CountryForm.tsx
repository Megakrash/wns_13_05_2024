import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { postNewCountry, queryAllCountries } from "@/graphql/client";
import { NewCountryInput, Country } from "../../types";
import CountryCard from "../country/CountryCard";
import { Button, TextField, Box } from "@mui/material";

const CreateCountryForm = (): JSX.Element => {
  const [formData, setFormData] = useState<NewCountryInput>({
    name: "",
    emoji: "",
    code: "",
  });

  const {
    data: dataCountries,
    loading: loadingCountries,
    refetch,
  } = useQuery<{ items: Country[] }>(queryAllCountries);
  const countries: Country[] = dataCountries ? dataCountries.items : [];

  const [addCountry, { loading, error }] = useMutation(postNewCountry, {
    variables: { data: formData },
    onCompleted: () => {
      alert("Country added successfully!");
      refetch();
    },
    onError: (error) => {
      alert("Error adding country: " + error.message);
    },
    update: (cache, { data: { addCountry } }) => {
      const existingCountries = cache.readQuery<{ items: Country[] }>({
        query: queryAllCountries,
      });
      if (existingCountries && addCountry) {
        cache.writeQuery({
          query: queryAllCountries,
          data: { items: [...existingCountries.items, addCountry] },
        });
      }
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addCountry();
  };

  return (
    <div>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          mt: 1,
          width: {
            xs: "80%",
            sm: "60%",
          },
        }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Nom du pays"
          name="name"
          autoComplete="name"
          autoFocus
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="emoji"
          label="Emoji du pays"
          name="emoji"
          autoComplete="emoji"
          value={formData.emoji}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="code"
          label="Code du pays"
          name="code"
          autoComplete="code"
          value={formData.code}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
          disabled={loading}
        >
          Ajouter un pays
        </Button>
        {error && <p>Error submitting form: {error.message}</p>}
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "15px", mt: 3 }}>
        {loadingCountries ? (
          <p>Loading...</p>
        ) : (
          countries.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))
        )}
      </Box>
    </div>
  );
};

export default CreateCountryForm;
