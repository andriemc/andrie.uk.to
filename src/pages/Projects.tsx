import { Link } from 'react-router-dom';
import Box from '../component/Box';
import List from '../component/List';
import ListItem from '../component/ListItem';
import { classes } from '../util';
import websitePreview from '../assets/preview.png';
import textcatPreview from '../assets/textcat preview.png';

const Project = (props: {
	image?: string;
	name: string;
	description: string;
	links: { name: string; url: string; className?: string }[];
}) => {
	return (
		<ListItem>
			<Box className='p-5 flex flex-row'>
				{props.image && (
					<img
						src={props.image}
						width={200}
						height={200}
						className='border-white border-2 mr-4 p-3'
					/>
				)}
				<div>
					<p className='text-xl'>{props.name}</p>
					<div className='mt-1 flex gap-2'>
						{props.links.map((l) => (
							<Link
								to={l.url}
								className={classes('decoration-transparent', l.className)}
							>
								[{l.name}]
							</Link>
						))}
					</div>

					<p className='mt-1'>{props.description}</p>
				</div>
			</Box>
		</ListItem>
	);
};

export default function Projects() {
	return (
		<div>
			<List className='flex flex-col gap-3'>
				<Project
					image={websitePreview}
					name='This website!'
					description='The website you are currently on!'
					links={[
						{
							name: 'Go to',
							url: 'https://andrie.uk.to/',
							className: 'text-red-400',
						},
						{
							name: 'Git',
							url: 'https://github.com/andriemc/andrie.uk.to',
							className: 'text-blue-400',
						},
					]}
				/>
				<Project
					image={textcatPreview}
					name='TextCat'
					description='A small place for people to share text.'
					links={[
						{
							name: 'Go to',
							url: 'https://textcat.andrie.uk.to',
							className: 'text-red-400',
						},
						{
							name: 'Git',
							url: 'https://github.com/andriemc/textcat',
							className: 'text-blue-400',
						},
					]}
				/>
			</List>
		</div>
	);
}
