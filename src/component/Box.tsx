import { HTMLAttributes } from 'react';
import { classes } from '../util';

export default function Box(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={classes(
				'border-white border-4 border-double',
				props.className
			)}
		/>
	);
}
