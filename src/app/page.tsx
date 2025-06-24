// Data Functions
import { getArticles } from "@/lib/data/articles";

// Components
import Cards from "@/components/cards";

export default async function Home() {
  const articles = await getArticles(null, 6);

  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      {articles && articles.nodes.length > 0 && <Cards {...articles} />}
    </div>
  );
}
