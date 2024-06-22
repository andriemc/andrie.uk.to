import { HTMLAttributes } from 'react';

export default function ActionLink(props: HTMLAttributes<HTMLAnchorElement>) {
	return (
		<a
			href='#'
			{...props}
			onClick={(e) => {
				e.preventDefault();
				if (props.onClick) return props.onClick(e);
			}}
		/>
	);
}
