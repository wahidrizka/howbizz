'use client'
import React from 'react';
import NextLink, { LinkProps } from 'next/link';
import clsx from 'clsx';
import styles from './Link.module.css';
import Image from 'next/image';

export type LinkTypes = {
  isLogoLink?: boolean;
} & React.HTMLAttributes<HTMLAnchorElement> & LinkProps;

export const Link: React.FC<LinkTypes> = ({
  isLogoLink = false,
  children,
  className,
  style, 
  ...props
}) => {
  return (
    <NextLink 
      className={clsx(
        styles.link,
        isLogoLink && styles.logoLink,
        isLogoLink && styles.logo,
        className
      )} 
      style={{ ...style }} 
      {...props}
    >
      {isLogoLink ? (
        <Image 
          alt='howbizz-logotype Logo'
          loading='eager' 
          width={97.28125} 
          height={22} 
          decoding='async' 
          style={{ color: 'transparent' }}
          src="/static/howbizz.svg"
        />
      ): children}
    </NextLink>
  )
}