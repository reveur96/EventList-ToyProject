/** @format */

import { useIsFetching } from '@tanstack/react-query';

export default function Header({ children }: any) {
	const fetching = useIsFetching();
	return (
		<>
			<div>{fetching > 0 && <progress />}</div>
			<header className='w-full flex justify-center'>
				<div className='p-8 flex justify-between w-2/3 border-b border-gray-200'>
					<div>
						<h1 className=' text-xl font-semibold'>React Events</h1>
					</div>
					<nav className=' text-lg font-semibold hover:text-indigo-500'>
						{children}
					</nav>
				</div>
			</header>
		</>
	);
}
