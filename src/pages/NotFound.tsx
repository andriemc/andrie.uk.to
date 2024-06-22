import { Link } from 'react-router-dom';

const ASCII_ART = `
██╗  ██╗ ██████╗ ██╗  ██╗
██║  ██║██╔═████╗██║  ██║
███████║██║██╔██║███████║
╚════██║████╔╝██║╚════██║
     ██║╚██████╔╝     ██║
     ╚═╝ ╚═════╝      ╚═╝`;

export default function NotFound() {
	return (
		<div className='flex flex-1 flex-col justify-center items-center h-full'>
			<pre className='select-none'>{ASCII_ART}</pre>

			<p className='mt-3'>
				I can't find that, but you can{' '}
				<Link to='/' className='decoration-transparent text-blue-400'>
					go home
				</Link>
				.
			</p>
		</div>
	);
}
