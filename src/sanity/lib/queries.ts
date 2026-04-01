import { groq } from "next-sanity";

// --- BLOG POSTS ---
export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id, 
  title, 
  "slug": slug.current, 
  coverImage, 
  excerpt, 
  publishedAt,
  readTime,
  "authorName": author->name,
  "categories": categories[]->title
}`;

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  title, 
  "slug": slug.current,
  coverImage, 
  body, 
  publishedAt,
  readTime,
  seoTitle,
  seoDescription,
  "author": author->{name, image, bio, role},
  "categories": categories[]->title
}`;

// --- CASE STUDIES ---
export const caseStudiesQuery = groq`*[_type == "caseStudy"] | order(publishedAt desc) {
  _id, 
  title,
  "slug": slug.current, 
  clientName,
  sector,
  summary,
  coverImage,
  metrics
}`;

export const caseStudyBySlugQuery = groq`*[_type == "caseStudy" && slug.current == $slug][0] {
  title, 
  "slug": slug.current,
  clientName,
  sector,
  summary,
  coverImage, 
  challenge,
  solution,
  results,
  metrics,
  seoTitle,
  seoDescription
}`;
