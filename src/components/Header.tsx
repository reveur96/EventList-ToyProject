/** @format */

import { useState } from 'react';
import { Dialog, Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function Example() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className='bg-black'>
			<nav
				className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
				aria-label='Global'>
				<div className='flex lg:flex-1'>
					<Link
						to='/'
						className='-m-1.5 p-1.5'>
						<span className='sr-only'>Your Company</span>
						<img
							className='h-8 w-auto'
							src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
							alt=''
						/>
					</Link>
				</div>
				<div
					id='mobile_menu'
					className='flex lg:hidden'>
					<button
						type='button'
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200'
						onClick={() => setMobileMenuOpen(true)}>
						<span className='sr-only'>Open main menu</span>
						<Bars3Icon
							className='h-6 w-6'
							aria-hidden='true'
						/>
					</button>
				</div>
				<Popover.Group className='hidden lg:flex lg:gap-x-12'>
					<Link
						to='/events'
						className='text-sm font-semibold leading-6 text-gray-200 pb-1 border-b-2 border-black hover:text-indigo-500  hover:border-b-2  hover:border-indigo-500'>
						All events
					</Link>
					<Link
						to='/newEvent'
						className='text-sm font-semibold leading-6 text-gray-200 pb-1 border-b-2 border-black hover:text-indigo-500  hover:border-b-2  hover:border-indigo-500'>
						Create event
					</Link>
					<Link
						to='/events/:userId'
						className='text-sm font-semibold leading-6 text-gray-200 pb-1 border-b-2 border-black hover:text-indigo-500  hover:border-b-2  hover:border-indigo-500'>
						My events
					</Link>
					<Link
						to='/users'
						className='text-sm font-semibold leading-6 text-gray-200 pb-1 border-b-2 border-black hover:text-indigo-500  hover:border-b-2  hover:border-indigo-500'>
						My profile
					</Link>
				</Popover.Group>

				<div className='hidden lg:flex lg:flex-1 lg:justify-end'>
					<a
						href='#'
						className='text-sm font-semibold leading-6 text-gray-200 pb-1 border-b-2 border-black hover:text-indigo-500  hover:border-b-2  hover:border-indigo-500'>
						Log in <span aria-hidden='true'>&rarr;</span>
					</a>
				</div>
			</nav>
			<Dialog
				as='div'
				className='lg:hidden'
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}>
				<div className='fixed inset-0 z-10' />
				<Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gradient-to-tr from-[#190420] to-[#000102]  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
					<div className='flex items-center justify-between'>
						<a
							href='#'
							className='-m-1.5 p-1.5'>
							<span className='sr-only'>Your Company</span>
							<img
								className='h-8 w-auto'
								src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
								alt=''
							/>
						</a>
						<button
							type='button'
							className='-m-2.5 rounded-md p-2.5 text-gray-200 hover:text-indigo-500 '
							onClick={() => setMobileMenuOpen(false)}>
							<span className='sr-only'>Close menu</span>
							<XMarkIcon
								className='h-6 w-6'
								aria-hidden='true'
							/>
						</button>
					</div>
					<div className='mt-6 flow-root'>
						<div className='-my-6 divide-y divide-gray-500/10'>
							<div className='space-y-2 py-6'>
								<Link
									to='/events'
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-100 hover:bg-opacity-10'>
									All events
								</Link>
								<Link
									to='/newEvent'
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-100 hover:bg-opacity-10'>
									Create event
								</Link>
								<Link
									to='/events/:userId'
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-100 hover:bg-opacity-10'>
									My events
								</Link>
								<Link
									to='/users'
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-100 hover:bg-opacity-10'>
									My profile
								</Link>
							</div>
							<div className='py-6'>
								<a
									href='#'
									className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-100 hover:bg-opacity-10'>
									Log in
								</a>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
