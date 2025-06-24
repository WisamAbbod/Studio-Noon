import { getArticle } from "@/lib/data/articles";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Components
import Blocks from "@/components/blocks";

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const article = await getArticle(slug);

  // If the article is not found, return a 404 page
  if (!article) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-red-400 px-6 py-8 lg:px-64 lg:py-12">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-white hover:text-red-100 transition-colors mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Link>
        
        {/* Title */}
        <h1 className="text-white text-4xl lg:text-5xl font-light leading-tight max-w-4xl">
          {article.title}
        </h1>
      </div>

      {/* Hero Image */}
      <div className="w-full h-96 lg:h-100 lg:w-256 relative rounded-xl overflow-hidden mx-auto">
        <Image
          src={article.featuredImage.node.sourceUrl}
          alt={article.featuredImage.node.altText}
          title={article.featuredImage.node.title}
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Content Section */}
      <div className="px-6 py-12 lg:px-16 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <Blocks blocks={article.editorBlocks} />
          </div>
        </div>
      </div>
    </div>
  );
}