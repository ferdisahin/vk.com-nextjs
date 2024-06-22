import Logo from "@/components/logo";
import QrCode from "@/components/qr";
import Link from "next/link";

import { FaCircleQuestion } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

import { Tooltip } from "react-tooltip";

export default function IndexRight() {
	return (
		<div className="w-80 space-y-4">
			<div className="bg-white rounded-lg py-8 px-6">
				<div className="text-center">
					<Logo className="text-blue-600 mx-auto" />
					<div className="text-lg font-bold mt-4 mb-5">Sign in to VK</div>
				</div>

				<input
					type="text"
					placeholder="Phone or email"
					className="bg-gray-100 border border-gray-300 w-full h-9 rounded-lg px-3 placeholder-gray-600 !ring-0 !outline-none focus:border-blue-300"
				/>

				<div className="flex items-center gap-1 mt-3">
					<label className="flex items-center gap-2 cursor-pointer">
						<input
							type="checkbox"
							className="w-4 h-4 rounded-md"
						/>
						<span className="text-[13px]">Save user</span>
					</label>
					<FaCircleQuestion
						className="text-gray-400 cursor-pointer"
						data-tooltip-id="my-tooltip"
						data-tooltip-place="bottom"
					/>
					<Tooltip
						id="my-tooltip"
						style={{
							backgroundColor: "#fff",
							color: "#000",
							maxWidth: "260px",
							shadow: "rgba(0,0,0, .1)",
						}}>
						<b>Save User</b>
						<div>
							Check this box if you want your account information saved for
							quick login on this device
						</div>
					</Tooltip>
				</div>

				<button className="bg-[#447bba] hover:bg-[#4177b5] text-white rounded-lg py-2 w-full transition-all font-bold mt-5">
					Sign in
				</button>

				<div className="border-t border-gray-100 mt-5 pt-5 flex items-center gap-5">
					<div className="relative group inline-block cursor-pointer">
						<QrCode />
						<div className="w-8 h-8 bg-white flex items-center justify-center rounded absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:scale-100 scale-50 opacity-0 group-hover:opacity-100 transition-all">
							<IoIosSearch className="text-xl text-blue-600" />
						</div>
					</div>
					<div>
						<div className="font-bold">Quick login with QR code</div>
						<div className="text-[13px] text-slate-500">
							Use your phone's camera
						</div>
						<Link
							href="/"
							className="text-blue-500 hover:underline font-semibold text-xs mt-2">
							Learn more
						</Link>
					</div>
				</div>
			</div>

			<div className="bg-white rounded-lg py-8 px-6 space-y-3">
				<Link
					href="/"
					className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg block font-bold text-center transition-all">
					Sign up
				</Link>
				<Link
					href="/"
					className="text-[#3770b1] py-2 rounded-lg block font-bold text-center transition-all border border-[#3770b1] hover:bg-gray-50">
					Create business page
				</Link>
				<div className="text-center">
					<div className="text-gray-400 text-[13px] px-5">
						After signing up, you'll get access to all of VK ID's features{" "}
					</div>
					<Link
						href="/"
						className="text-xs hover:underline">
						Learn More
					</Link>
				</div>
			</div>

			<div className="text-center">
				<Link
					href="/"
					className="inline-block text-gray-500 hover:underline text-[13px]">
					Recommendation technologies used
				</Link>
			</div>
		</div>
	);
}
