// Types
import { type Article } from "@/types";

// Next
import Image from "next/image";
import Link from "next/link";

/*

Notes / Tips

# Style the module up to be like the figma mockup – do not be afraid to manipulate or change this file or split into parts.

*/

const Card = (props: Article) => {
  return (
    <Link href={`/articles/${props.slug}`} className="block">
      <article className="group cursor-pointer" style={{ fontFamily: 'Inter' /* Inter enforce as default */ }}> 
        {/* Image */}
        {props.featuredImage.node.sourceUrl && (
          <div className="mb-4 overflow-hidden rounded-lg">
            <Image
              src={props.featuredImage.node.sourceUrl}
              width={400}
              height={200} // Updated to match 200px height from guidelines
              alt=""
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              style={{ height: '200px' }} // Enforcing 200px height as per guidelines
            />
          </div>
        )}
        
        {/* Content */}
        <div>
          <span 
            className="text-white uppercase mb-2 block"
            style={{
              fontSize: '12px',
              lineHeight: '150%',
              letterSpacing: '1.2px',
              fontWeight: 'bold', // Inter bold
            }}
          >
            ARTICLE
          </span>
          
          <h3 
            className="text-white mb-2 leading-tight group-hover:text-gray-300 transition-colors"
            style={{
              fontSize: '22px',
              lineHeight: '120%',
              fontWeight: '300', // Inter light
            }}
          >
            {props.title}
          </h3>
          
          <div 
            className="text-gray-400"
            style={{
              fontSize: '14px',
              lineHeight: '150%',
              fontWeight: '300', // Inter light
            }}
            dangerouslySetInnerHTML={{ __html: props.excerpt }}
          />
        </div>
      </article>
    </Link>
  );
};

export default Card;