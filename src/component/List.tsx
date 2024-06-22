import { HTMLAttributes } from 'react';

export default function List(props: HTMLAttributes<HTMLUListElement>) {
	return <ul {...props}>{props.children}</ul>;
}
