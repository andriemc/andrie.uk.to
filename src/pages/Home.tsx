import { Link } from 'react-router-dom';

const ASCII_ART = `
 █████╗ ███╗   ██╗██████╗ ██████╗ ███████╗██╗    ██╗
██╔══██╗████╗  ██║██╔══██╗██╔══██╗██╔════╝██║    ██║
███████║██╔██╗ ██║██║  ██║██████╔╝█████╗  ██║ █╗ ██║
██╔══██║██║╚██╗██║██║  ██║██╔══██╗██╔══╝  ██║███╗██║
██║  ██║██║ ╚████║██████╔╝██║  ██║███████╗╚███╔███╔╝
╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝╚══════╝ ╚══╝╚══╝ `;

export default function Home() {
	return (
		<div className='flex flex-1 flex-col justify-center items-center h-full'>
			<Link to='/about' className='decoration-transparent'>
				<pre className='select-none'>{ASCII_ART}</pre>
			</Link>

			<p className='mt-3'>
				<Link to='/about'>Someone</Link> building{' '}
				<Link to='/projects'>projects</Link> that won't change the world.
			</p>
		</div>
	);
}
