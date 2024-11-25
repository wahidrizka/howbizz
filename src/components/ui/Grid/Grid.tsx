"use client";
import React from "react";
import clsx from "clsx";
import styles from "./Grid.module.css";
import { ResponsiveMap } from "@/types";
import { getResponsiveValue } from "@/utils";

export type GridType = {
	columns?: number | ResponsiveMap<number>;
	rows?: number | ResponsiveMap<number>;
	height?: number | string | ResponsiveMap<number | string>;
} & React.HTMLAttributes<HTMLDivElement>;

const Root = ({
	columns,
	rows,
	height,
	children,
	className,
	style,
}: GridType) => {
	const isResponsiveColumns = typeof columns === "object";
	const isResponsiveRows = typeof rows === "object";
	const isResponsiveHeight = typeof rows === "object";

	const xsColumns = isResponsiveColumns
		? getResponsiveValue(columns, "xs")
		: undefined;
	const xsRows = isResponsiveRows ? getResponsiveValue(rows, "xs") : undefined;
	const xsHeight = isResponsiveHeight
		? getResponsiveValue(rows, "xs")
		: undefined;

	const smColumns = isResponsiveColumns
		? getResponsiveValue(columns, "sm")
		: undefined;
	const smRows = isResponsiveRows ? getResponsiveValue(rows, "sm") : undefined;
	const smHeight = isResponsiveHeight
		? getResponsiveValue(rows, "sm")
		: undefined;

	const smdColumns = isResponsiveColumns
		? getResponsiveValue(columns, "smd")
		: undefined;
	const smdRows = isResponsiveRows
		? getResponsiveValue(rows, "smd")
		: undefined;
	const smdHeight = isResponsiveHeight
		? getResponsiveValue(rows, "smd")
		: undefined;

	const mdColumns = isResponsiveColumns
		? getResponsiveValue(columns, "md")
		: undefined;
	const mdRows = isResponsiveRows ? getResponsiveValue(rows, "md") : undefined;
	const mdHeight = isResponsiveHeight
		? getResponsiveValue(rows, "md")
		: undefined;

	const lgColumns = isResponsiveColumns
		? getResponsiveValue(columns, "lg")
		: undefined;
	const lgRows = isResponsiveRows ? getResponsiveValue(rows, "lg") : undefined;
	const lgHeight = isResponsiveHeight
		? getResponsiveValue(rows, "lg")
		: undefined;

	const gridStyles = {
		"--xs-grid-columns": xsColumns,
		"--xs-grid-rows": xsRows,
		"--xs-height": xsHeight,

		"--sm-grid-columns": smColumns,
		"--sm-grid-rows": smRows,
		"--sm-height":
			height === "preserve-aspect-ratio"
				? "calc(var(--width) / var(--grid-columns) * var(--grid-rows))"
				: !isResponsiveHeight
				? height
				: smHeight,

		"--smd-grid-columns": smdColumns,
		"--smd-grid-rows": smdRows,
		"--smd-height": smdHeight,

		"--md-grid-columns": mdColumns,
		"--md-grid-rows": mdRows,
		"--md-height": mdHeight,

		"--lg-grid-columns": lgColumns,
		"--lg-grid-rows": lgRows,
		"--lg-height": lgHeight,

		"--grid-columns": !isResponsiveColumns ? columns : undefined,
		"--grid-rows": !isResponsiveRows ? rows : undefined,
	} as React.CSSProperties;

	return (
		<div
			className={clsx(styles.grid, className)}
			style={{ ...gridStyles, ...style }}
			data-grid
		>
			{children}
		</div>
	);
};

const GridSystemContentWrapper = ({
	children,
}: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className={clsx(styles.gridSystemContentWrapper)}>{children}</div>
	);
};

const UnstableUseContainer = ({
	children,
}: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className={clsx(styles["unstable-gridSystemContentWrapper"])}>
			{children}
		</div>
	);
};

export type GridSystemType = {
	unstable_useContainer?: boolean;
	maxWidth?: string | number;
	minWidth?: string | number;
	guideWidth?: string | number;
	horizontalMargin?: string | number;
	gridSystemWidth?: string | number;
	guideColor?: string;
	crossColor?: string;
	debug?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const GridSystem = ({
	unstable_useContainer = false,
	maxWidth,
	minWidth,
	guideWidth,
	horizontalMargin,
	gridSystemWidth,
	guideColor,
	crossColor,
	debug = false,
	children,
	className,
	style,
}: GridSystemType) => {
	const gridSystemStyles = {
		"--max-width": maxWidth || undefined,
		"--min-width": minWidth || undefined,
		"--guide-width": guideWidth || undefined,
		"--horizontal-margin": horizontalMargin || undefined,
		"--grid-system-width": gridSystemWidth || undefined,
		"--guide-color": `var(--ds-${guideColor || "gray-400"})`,
		"--cross-color": `var(--ds-${crossColor || "gray-600"})`,
	} as React.CSSProperties;

	return unstable_useContainer ? (
		<UnstableUseContainer>
			<div
				className={clsx(
					styles.gridSystem,
					debug && styles.gridSystemDebug,
					className
				)}
				style={{ ...gridSystemStyles, ...style }}
			>
				{children}
			</div>
		</UnstableUseContainer>
	) : (
		<GridSystemContentWrapper>
			<div
				className={clsx(
					styles.gridSystem,
					debug && styles.gridSystemDebug,
					className
				)}
				style={{ ...gridSystemStyles, ...style }}
			>
				{children}
			</div>
		</GridSystemContentWrapper>
	);
};

type CrossType = {
	size?: number | string | ResponsiveMap<number | string>;
	halfSize?: number | string | ResponsiveMap<number | string>;
	column?: number | ResponsiveMap<number>;
	row?: number | ResponsiveMap<number>;
} & React.HTMLAttributes<HTMLDivElement>;
const GridCross = ({
	size,
	halfSize,
	column,
	row,
	className,
	style,
}: CrossType) => {
	const isResponsiveSize = typeof size === "object";
	const isResponsiveHalfSize = typeof halfSize === "object";
	const isResponsiveColumn = typeof column === "object";
	const isResponsiveRow = typeof row === "object";

	const xsSize = isResponsiveSize ? getResponsiveValue(size, "xs") : undefined;
	const xsHalfSize = isResponsiveHalfSize
		? getResponsiveValue(halfSize, "xs")
		: undefined;
	const xsColumn = isResponsiveColumn
		? getResponsiveValue(column, "xs")
		: undefined;
	const xsRow = isResponsiveRow ? getResponsiveValue(row, "xs") : undefined;

	const smSize = isResponsiveSize ? getResponsiveValue(size, "sm") : undefined;
	const smHalfSize = isResponsiveHalfSize
		? getResponsiveValue(halfSize, "sm")
		: undefined;
	const smColumn = isResponsiveColumn
		? getResponsiveValue(column, "sm")
		: undefined;
	const smRow = isResponsiveRow ? getResponsiveValue(row, "sm") : undefined;

	const smdSize = isResponsiveSize
		? getResponsiveValue(size, "smd")
		: undefined;
	const smdHalfSize = isResponsiveHalfSize
		? getResponsiveValue(halfSize, "smd")
		: undefined;
	const smdColumn = isResponsiveColumn
		? getResponsiveValue(column, "smd")
		: undefined;
	const smdRow = isResponsiveRow ? getResponsiveValue(row, "smd") : undefined;

	const mdSize = isResponsiveSize ? getResponsiveValue(size, "md") : undefined;
	const mdHalfSize = isResponsiveHalfSize
		? getResponsiveValue(halfSize, "md")
		: undefined;
	const mdColumn = isResponsiveColumn
		? getResponsiveValue(column, "md")
		: undefined;
	const mdRow = isResponsiveRow ? getResponsiveValue(row, "md") : undefined;

	const lgSize = isResponsiveSize ? getResponsiveValue(size, "lg") : undefined;
	const lgHalfSize = isResponsiveHalfSize
		? getResponsiveValue(halfSize, "lg")
		: undefined;
	const lgColumn = isResponsiveColumn
		? getResponsiveValue(column, "lg")
		: undefined;
	const lgRow = isResponsiveRow ? getResponsiveValue(row, "lg") : undefined;

	const crossStyles = {
		"--cross-size": !isResponsiveSize ? size : undefined,
		"--cross-half-size": !isResponsiveHalfSize ? halfSize : undefined,
		"--cross-column": !isResponsiveColumn ? column : undefined,
		"--cross-row": !isResponsiveRow ? row : undefined,

		"--xs-cross-size": xsSize,
		"--xs-cross-half-size": xsHalfSize,
		"--xs-cross-column": xsColumn,
		"--xs-cross-row": xsRow,

		"--sm-cross-size": smSize,
		"--sm-cross-half-size": smHalfSize,
		"--sm-cross-column": smColumn,
		"--sm-cross-row": smRow,

		"--smd-cross-size": smdSize,
		"--smd-cross-half-size": smdHalfSize,
		"--smd-cross-column": smdColumn,
		"--smd-cross-row": smdRow,

		"--md-cross-size": mdSize,
		"--md-cross-half-size": mdHalfSize,
		"--md-cross-column": mdColumn,
		"--md-cross-row": mdRow,

		"--lg-cross-size": lgSize,
		"--lg-cross-half-size": lgHalfSize,
		"--lg-cross-column": lgColumn,
		"--lg-cross-row": lgRow,
	};

	const crossLineVerticalStyles = {
		width: "var(--cross-half-size)",
		height: "var(--cross-size)",
		borderRightWidth: "var(--guide-width)",
	} as React.CSSProperties;
	const crossLineHorizontalStyles = {
		width: "var(--cross-size)",
		height: "var(--cross-half-size)",
		borderBottomWidth: "var(--guide-width)",
	};
	return (
		<div
			className={clsx(styles.cross, className)}
			style={{ ...crossStyles, ...style }}
			data-grid-cross
		>
			<div
				className={clsx(styles.crossLine)}
				style={{ ...crossLineVerticalStyles }}
			/>
			<div
				className={clsx(styles.crossLine)}
				style={{ ...crossLineHorizontalStyles }}
			/>
		</div>
	);
};

type GridBlockType = {
	gridRow?: number | string | ResponsiveMap<number>;
	gridColumn?: number | string | ResponsiveMap<number>;
	cellRows?: number | string | ResponsiveMap<number>;
	cellColumns?: number | string | ResponsiveMap<number>;
	cellDisplay?: string | ResponsiveMap<string>;
	cellPadding?: string | ResponsiveMap<string>;
} & React.HTMLAttributes<HTMLDivElement>;
const GridBlock = ({
	gridRow,
	gridColumn,
	cellRows,
	cellColumns,
	cellDisplay,
	cellPadding,
	children,
	className,
	style,
}: GridBlockType) => {
	const isResponsiveGridRow = typeof gridRow === "object";
	const isResponsiveGridColumn = typeof gridColumn === "object";
	const isResponsiveCellRows = typeof cellRows === "object";
	const isResponsiveCellColumns = typeof cellColumns === "object";
	const isResponsiveCellDisplay = typeof cellDisplay === "object";
	const isResponsiveCellPadding = typeof cellPadding === "object";

	const xsGridRow = isResponsiveGridRow
		? getResponsiveValue(gridRow, "xs")
		: undefined;
	const xsGridColumn = isResponsiveGridColumn
		? getResponsiveValue(gridColumn, "xs")
		: undefined;
	const xsCellRows = isResponsiveCellRows
		? getResponsiveValue(cellRows, "xs")
		: undefined;
	const xsCellColumns = isResponsiveCellColumns
		? getResponsiveValue(cellColumns, "xs")
		: undefined;
	const xsCellDisplay = isResponsiveCellDisplay
		? getResponsiveValue(cellDisplay, "xs")
		: undefined;
	const xsCellPadding = isResponsiveCellPadding
		? getResponsiveValue(cellPadding, "xs")
		: undefined;

	const smGridRow = isResponsiveGridRow
		? getResponsiveValue(gridRow, "sm")
		: undefined;
	const smGridColumn = isResponsiveGridColumn
		? getResponsiveValue(gridColumn, "sm")
		: undefined;
	const smCellRows = isResponsiveCellRows
		? getResponsiveValue(cellRows, "sm")
		: undefined;
	const smCellColumns = isResponsiveCellColumns
		? getResponsiveValue(cellColumns, "sm")
		: undefined;
	const smCellDisplay = isResponsiveCellDisplay
		? getResponsiveValue(cellDisplay, "sm")
		: undefined;
	const smCellPadding = isResponsiveCellPadding
		? getResponsiveValue(cellPadding, "sm")
		: undefined;

	const smdGridRow = isResponsiveGridRow
		? getResponsiveValue(gridRow, "smd")
		: undefined;
	const smdGridColumn = isResponsiveGridColumn
		? getResponsiveValue(gridColumn, "smd")
		: undefined;
	const smdCellRows = isResponsiveCellRows
		? getResponsiveValue(cellRows, "smd")
		: undefined;
	const smdCellColumns = isResponsiveCellColumns
		? getResponsiveValue(cellColumns, "smd")
		: undefined;
	const smdCellDisplay = isResponsiveCellDisplay
		? getResponsiveValue(cellDisplay, "smd")
		: undefined;
	const smdCellPadding = isResponsiveCellPadding
		? getResponsiveValue(cellPadding, "smd")
		: undefined;

	const mdGridRow = isResponsiveGridRow
		? getResponsiveValue(gridRow, "md")
		: undefined;
	const mdGridColumn = isResponsiveGridColumn
		? getResponsiveValue(gridColumn, "md")
		: undefined;
	const mdCellRows = isResponsiveCellRows
		? getResponsiveValue(cellRows, "md")
		: undefined;
	const mdCellColumns = isResponsiveCellColumns
		? getResponsiveValue(cellColumns, "md")
		: undefined;
	const mdCellDisplay = isResponsiveCellDisplay
		? getResponsiveValue(cellDisplay, "md")
		: undefined;
	const mdCellPadding = isResponsiveCellPadding
		? getResponsiveValue(cellPadding, "md")
		: undefined;

	const lgGridRow = isResponsiveGridRow
		? getResponsiveValue(gridRow, "lg")
		: undefined;
	const lgGridColumn = isResponsiveGridColumn
		? getResponsiveValue(gridColumn, "lg")
		: undefined;
	const lgCellRows = isResponsiveCellRows
		? getResponsiveValue(cellRows, "lg")
		: undefined;
	const lgCellColumns = isResponsiveCellColumns
		? getResponsiveValue(cellColumns, "lg")
		: undefined;
	const lgCellDisplay = isResponsiveCellDisplay
		? getResponsiveValue(cellDisplay, "lg")
		: undefined;
	const lgCellPadding = isResponsiveCellPadding
		? getResponsiveValue(cellPadding, "lg")
		: undefined;

	const blockStyles = {
		"--cell-display": !isResponsiveCellDisplay ? cellDisplay : undefined,
		"--cell-padding": !isResponsiveCellPadding ? cellPadding : undefined,

		"--xs-grid-row": xsGridRow,
		"--xs-grid-column": xsGridColumn,
		"--xs-cell-rows": xsCellRows,
		"--xs-cell-columns": xsCellColumns,
		"--xs-cell-display": xsCellDisplay,
		"--xs-cell-padding": xsCellPadding,

		"--sm-grid-row": isResponsiveGridRow ? smGridRow : gridRow,
		"--sm-grid-column": isResponsiveGridColumn ? smGridColumn : gridColumn,
		"--sm-cell-rows": isResponsiveCellRows ? smCellRows : cellRows,
		"--sm-cell-columns": isResponsiveCellColumns ? smCellColumns : cellColumns,
		"--sm-cell-display": smCellDisplay,
		"--sm-cell-padding": smCellPadding,

		"--smd-grid-row": smdGridRow,
		"--smd-grid-column": smdGridColumn,
		"--smd-cell-rows": smdCellRows,
		"--smd-cell-columns": smdCellColumns,
		"--smd-cell-display": smdCellDisplay,
		"--smd-cell-padding": smdCellPadding,

		"--md-grid-row": mdGridRow,
		"--md-grid-column": mdGridColumn,
		"--md-cell-rows": mdCellRows,
		"--md-cell-columns": mdCellColumns,
		"--md-cell-display": mdCellDisplay,
		"--md-cell-padding": mdCellPadding,

		"--lg-grid-row": lgGridRow,
		"--lg-grid-column": lgGridColumn,
		"--lg-cell-rows": lgCellRows,
		"--lg-cell-columns": lgCellColumns,
		"--lg-cell-display": lgCellDisplay,
		"--lg-cell-padding": lgCellPadding,
	} as React.CSSProperties;

	return (
		<div
			className={clsx(styles.block, className)}
			style={{ ...blockStyles, ...style }}
		>
			{children}
		</div>
	);
};

export const Grid = Object.assign(Root, {
	System: GridSystem,
	Cross: GridCross,
	Cell: GridBlock,
});