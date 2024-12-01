"use client";
import React from "react";
import clsx from "clsx";
import styles from "./NavigationMenu.module.css";
import { Link } from "@/components";
import { links } from "@/data";
import { usePathname } from "next/navigation";

export type NavigationTypes = {
  orientation?: "horizontal" | "vertical";
} & React.HTMLAttributes<HTMLElement>

export const NavigationMenu: React.FC<NavigationTypes> = ({
  orientation = "horizontal", 
  className,
  style,
  ...props
}) => {
  const pathname = usePathname();

  const [active, setActive] = React.useState<string | "open" | "closed">("open");
  const [highlightStyle, setHighlightStyle] = React.useState<React.CSSProperties>({
    opacity: 0,
    transitionDuration: "150ms",
    width: 0,
    transform: "translate(0)",
  });

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    setActive("closed");
    const target = e.currentTarget;
    const targetRect = target.getBoundingClientRect();

    const parentRect = target.parentElement!.getBoundingClientRect();

    setHighlightStyle({
      opacity: 1,
      transitionDuration: "150ms",
      width: targetRect.width,
      transform: `translate(${targetRect.left - parentRect.left}px)`,
    });
  };

  const handleMouseLeave = () => {
    setActive("open");
    setHighlightStyle((prev) => ({
      ...prev,
      opacity: 0,
    }));
  };

  const navigationMenuStyles = {
    "--indicator-height": "10px",
    "--arrow-offset": "-10px",
    "--content-width": "-16px",
    "--left-offset": "calc(-1 * var(--gap-between-logo-and-nav) - 98px)",
    "--pointer-x": "168.71875px",
		"--pointer-y": "30%",
  } as React.CSSProperties;

  return (
    <nav 
      data-orientation={orientation} 
      className={clsx(styles.root, className)} 
      style={{ ...navigationMenuStyles, ...style }} 
      {...props}
    >
      <div 
        aria-hidden 
        className={clsx(styles.tabsHighlight)}
        style={{ ...highlightStyle }}
       />
      <div style={{ position: "relative" }}>
        <ul data-orientation={orientation} className={clsx(styles.list)}>
          {links.map((item, index) => (
            <li key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link data-active={pathname === item.href && active} href={item.href} className={clsx(styles.link)}>
              {item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
};