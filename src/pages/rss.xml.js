
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {

  const blog = await getCollection('blog');
  

  const sortedBlog = blog.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({

    title: 'Blog Faiq Hudzaifah',
    description: 'Kumpulan artikel, tutorial web development, dan pemikiran dari Muhammad Faiq Hudzaifah.',
    
    site: context.site,
    
    items: sortedBlog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
    
 
    customData: `<language>id-id</language>`,
  });
}