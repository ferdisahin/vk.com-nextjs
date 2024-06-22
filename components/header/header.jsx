import React from 'react'
import Logo from '../logo'
import Link from 'next/link'
import SearchForm from './searchForm';

export default function Header() {
  return (
		<div className="bg-white ">
			<div className="max-w-[960px] mx-auto py-2">
				<div className="grid grid-cols-12 gap-5">
					<div className="col-span-2">
						<Link href={"/"}>
							<Logo className="text-blue-600 w-[30px] h-[30px]" />
						</Link>
					</div>
					<div className="col-span-3">
						<SearchForm />
					</div>
				</div>
			</div>
		</div>
	);
}
