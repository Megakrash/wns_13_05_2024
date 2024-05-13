import SearchComponent from "@/components/search/Search";
import Layout from "@/components/layout/Layout";

function Search(): React.ReactNode {
  return (
    <Layout title="Search">
      <SearchComponent />
    </Layout>
  );
}

export default Search;
