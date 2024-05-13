export type Country = {
  id: string;
  name: string;
  emoji: string;
  continent: {
    id: string;
    name: string;
  };
};

export type NewCountryInput = {
  name: string;
  emoji: string;
  code: string;
};
