import Layout from "@/components/layout/Layout";
import CountryForm from "@/components/country/CountryForm";

function NewAd(): React.ReactNode {
  return (
    <Layout title="Créer un pays">
      <CountryForm />
    </Layout>
  );
}

export default NewAd;
