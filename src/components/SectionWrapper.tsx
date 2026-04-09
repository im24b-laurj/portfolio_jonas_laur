import React from 'react';

type Props = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export default function SectionWrapper({ id, children, className = '' }: Props) {
  return (
    <section id={id} className={`section ${className}`} aria-labelledby={`${id}-heading`}>
      {children}
    </section>
  );
}
