import { Link } from 'react-router-dom';

const ASCII_ART = `
██╗  ██╗███████╗██╗   ██╗██╗
██║  ██║██╔════╝╚██╗ ██╔╝██║
███████║█████╗   ╚████╔╝ ██║
██╔══██║██╔══╝    ╚██╔╝  ╚═╝
██║  ██║███████╗   ██║   ██╗
╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝`;

export default function About() {
	return (
		<div className='flex flex-1 flex-col justify-center items-center h-full'>
			<pre className='select-none'>{ASCII_ART}</pre>

			<p className='mt-5 mb-3 text-pretty max-w-[37em]'>
				I'm Andrew, I like writing code, and playing games! If you wanna find
				where else on the internet I am, you can check out my{' '}
				<Link to='https://gravatar.com/andriemc'>gravatar page</Link> where I
				have linked everywhere I'm on. :)
			</p>

			<Link to='/' className='mt-5 text-blue-400 decoration-transparent'>
				[Go home]
			</Link>
		</div>
	);
}
