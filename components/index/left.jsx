import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import { FaAndroid, FaApple } from "react-icons/fa";
import { LiaAngleRightSolid } from "react-icons/lia";

export default function IndexLeft() {
  return (
		<div className="flex-1 text-center">
			<div className="text-[22px] font-bold mt-3">VK for mobile devices</div>
			<div className="text-sm text-gray-600 leading-5 mt-2">
				Install our official mobile app and stay in touch with your friends
				anytime and anywhere.
			</div>
			<div className="mt-8">
				<div className="flex justify-center">
					<Link
						target="_blank"
						href="https://play.google.com/store/apps/details?id=com.vkontakte.android"
						className="w-[183px] h-[389px] relative block">
						<Image
							src="https://sun9-10.userapi.com/gwYU8O4GclCim8MKrXJXLP-QbTX3I3UiJ6Uz2g/21QUc-aCYuw.png"
							fill
							alt="VK Android"
						/>
					</Link>
					<Link
						target="_blank"
						href="https://itunes.apple.com/app/id564177498"
						className="w-[198px] h-[409px] relative block -ml-8">
						<Image
							src="https://sun9-42.userapi.com/dCn68T8QLdLWkOeUEbGYgzmrsKbtLFRcvsHvdw/1S2L5mgTXxU.png"
							fill
							alt="VK Android"
						/>
					</Link>
				</div>
				<nav className="flex items-center justify-center gap-5 mt-5">
					<Link
						href="/"
						className="flex items-center gap-1 text-cyan-700 font-semibold py-1.5 px-3 hover:bg-gray-200 rounded-lg transition-all">
						<FaAndroid />
						Google Play
					</Link>
					<Link
						href="/"
						className="flex items-center gap-1 text-cyan-700 font-semibold py-1.5 px-3 hover:bg-gray-200 rounded-lg transition-all">
						<FaAndroid />
						RuStore
					</Link>
					<Link
						href="/"
						className="flex items-center gap-1 text-cyan-700 font-semibold py-1.5 px-3 hover:bg-gray-200 rounded-lg transition-all">
						<FaApple />
						App Store
					</Link>
				</nav>
				<div className="text-center mt-6">
					<Link
						href="/"
						className="inline-flex items-center gap-1 text-[13px] text-cyan-700 group hover:underline transition-all font-medium">
						All Products
						<LiaAngleRightSolid className="text-[11px] group-hover:translate-x-1 transition-all" />
					</Link>
				</div>
			</div>
		</div>
	);
}
