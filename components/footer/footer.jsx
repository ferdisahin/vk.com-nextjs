import Link from 'next/link';
import React from 'react'

export default function Footer() {
  return (
		<div className="max-w-[960px] mx-auto flex justify-between text-[13px]">
			<div className="text-gray-500">VK © 2006-2024</div>
			<nav className="flex items-center gap-3 *:text-cyan-800">
				<Link
					className="hover:underline"
					href="/">
					About VK
				</Link>
				<Link
					className="hover:underline"
					href="/">
					Terms
				</Link>
				<Link
					className="hover:underline"
					href="/">
					Developers
				</Link>
			</nav>
			<nav className="flex items-center gap-3 *:text-cyan-800">
				<Link
					className="hover:underline"
					href="/">
					Türkçe
				</Link>
				<Link
					className="hover:underline"
					href="/">
					Русский
				</Link>
				<Link
					className="hover:underline"
					href="/">
					English
				</Link>
				<Link
					className="hover:underline"
					href="/">
					All languages
				</Link>
			</nav>
		</div>
	);
}
