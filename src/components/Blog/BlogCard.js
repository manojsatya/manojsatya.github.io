import React from 'react';
import { slugify } from '../../utils/sluglify';
import { Link } from 'gatsby';

export default function BlogCard({ title, date, author, slug, excerpt, tags }) {
  return (
    <div>
      <p>{title}</p>
      <p>{date}</p>
      <p>{author}</p>
      <p>{slug}</p>
      {tags.map(tag => (
        <Link to={`/tag/${slugify(tag)}`}>{tag}</Link>
      ))}
      <p>{excerpt}</p>
    </div>
  );
}
