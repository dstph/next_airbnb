import React from 'react';
import Link from 'next/link';

const AtomLink = ({href, child, className}) => (
  <Link  href={href}><a className={className}>{child}</a></Link>
)

export default AtomLink;