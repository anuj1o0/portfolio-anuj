import React from 'react';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/anuj1o0',
    icon: 'bxl-github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anuj-srivastava-755277259/',
    icon: 'bxl-linkedin',
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/anujsrivastava176/',
    icon: 'bx-code-alt',
  },
  {
    label: 'Email',
    href: 'mailto:anujsrivastava176@gmail.com',
    icon: 'bx-envelope',
  },
];

const Social = () => {
  return (
    <div className="home__socials">
      {socials.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel="noreferrer"
          className="home__social-link"
          aria-label={label}
          title={label}
        >
          <i className={`bx ${icon}`} />
        </a>
      ))}
    </div>
  );
};

export default Social;
