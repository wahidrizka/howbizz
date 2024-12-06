import React from "react";
import Link, { LinkProps } from "next/link";
import clsx from "clsx";
import styles from './Button.module.css';
import { Spinner } from "..";

type ButtonBaseTypes = {
  as?: "button" | "a";
  active?: boolean;
  size?: "tiny" | "small" | "large" | undefined;
  variant?: "howbizz" | "secondary" | "tertiary" | "error" | "warning" | undefined;
  svgOnly?: boolean;
  shape?: "rounded" | "square" | "circle" | undefined;
  leadingVisual?: React.ReactNode;
  trailingVisual?: React.ReactNode;
  shadow?: boolean;
  loading?: boolean;
  children: React.ReactNode;
};

// Additional props for as === `button` element
type ButtonTypes = ButtonBaseTypes &
	React.ButtonHTMLAttributes<HTMLButtonElement>;

// Additional props for as === `a` element
type LinkButtonTypes = ButtonBaseTypes &
	Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
	LinkProps;

export type ButtonPropTypes = ButtonTypes | LinkButtonTypes;

export const Button: React.FC<ButtonPropTypes> = (props) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  const handleMouseEnter = React.useCallback(() => setIsHovered(true), []);
	const handleMouseLeave = React.useCallback(() => setIsHovered(false), []);

  const {
    as = "button",
    size,
    variant,
    active = false,
    svgOnly = false,
    shape,
    leadingVisual,
    trailingVisual,
    shadow,
    loading,
    children,
    className,
    style,
    ...rest
  } = props;

  const buttonClasses = clsx(
    styles.reset,
    styles.base,
    styles.button,
    size && styles[size],
    variant && (variant === "howbizz" || variant === "error" || variant === "warning")
      ? [
          styles['howbizz-new-themed'],
          styles[`howbizz-new-${variant}`],
          styles[`howbizz-new-${variant}-fill`],
        ]
      : variant && styles[variant],
    shape && shape !== "rounded" && styles.shape,
    shape === "rounded" && styles.rounded,
    shape === "circle" && styles.circle,
    shadow && styles.shadow,
    loading && styles.loading,
    active && styles.invert,
    isHovered && styles.invert,
    className
  );

  const buttonStyles = {
    "---geist-icon-size": "16px",
  } as React.CSSProperties;

  const spinnerSize = size === "large" ? 24 : 16;

  if (as === "a" && "href" in props) {
    const {...linkProps} = rest as LinkButtonTypes;

    return (
      <Link
        {...linkProps}
        data-version={`v${process.env.npm_package_version}`}
        data-howbizz-button
        data-leading-visual={!!leadingVisual || loading}
        data-trailing-visual={!!trailingVisual}
        data-active={active}
        data-hover={isHovered}
        onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
        className={buttonClasses}
        style={{ ...buttonStyles, ...style }}
      >
        {loading && (
          <div className={styles.leadingVisual}>
            <Spinner size={spinnerSize} />
          </div>  
        )}

        {/* leading position of icon inside the Button */}
        {leadingVisual && (
          <span className={styles.leadingVisual}>{leadingVisual}</span>
        )}

        <span className={clsx(
            styles.content, 
            svgOnly && styles.flex
          )}
        >
          {children}
        </span>

        {/* trailing position of icon inside the Button */}
        {trailingVisual && (
          <span className={styles.trailingVisual}>{trailingVisual}</span>
        )}
      </Link>
    )
  }

  return (
    <button
      type="submit"
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      data-version={`v${process.env.npm_package_version}`}
      data-howbizz-button
      data-leading-visual={!!leadingVisual || loading}
      data-trailing-visual={!!trailingVisual}
      data-active={active}
      data-hover={isHovered}
      onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
      className={buttonClasses}
      style={{ ...buttonStyles, ...style }}
    >

      {loading && (
        <div className={styles.leadingVisual}>
          <Spinner size={spinnerSize} />
        </div>
      )}

      {/* leading position of icon inside the Button */}
      {leadingVisual && (
        <span className={styles.leadingVisual}>{leadingVisual}</span>
      )}

      <span className={clsx(
          styles.content, 
          svgOnly && styles.flex
        )}
      >
        {children}
      </span>

      {/* trailing position of icon inside the Button */}
      {trailingVisual && (
        <span className={styles.trailingVisual}>{trailingVisual}</span>
      )}
    </button>
  )
}