import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { postNewCountry } from "@/graphql/client";
import { NewCountryInput } from "../../types";
import { Button, TextField, Box } from "@mui/material";

const CountryForm = (): JSX.Element => {
  const [formData, setFormData] = useState<NewCountryInput>({
    name: "",
    emoji: "",
    code: "",
  });

  const [addCountry, { data, loading, error }] = useMutation(postNewCountry, {
    variables: { data: formData },
    onCompleted: () => {
      alert("Country added successfully!");
      setFormData({ name: "", emoji: "", code: "" }); // Reset the form
    },
    onError: (error) => {
      alert("Error adding country: " + error.message);
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
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        margin: "auto",
        mt: 5,
        width: { xs: "80%", sm: "60%" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
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
  );
};

export default CountryForm;
