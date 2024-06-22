import React from 'react'
import { IoIosSearch } from "react-icons/io";

export default function SearchForm(props) {
  return (
		<div className="relative bg-gray-100 hover:bg-gray-200 flex items-center gap-2 rounded-lg transition-all px-2">
			<IoIosSearch />
			<input
				type="text"
				className="w-full bg-transparent !ring-0 !outline-none text-xs h-8"
				placeholder={props.placeholder ?? 'Search'}
			/>
		</div>
	);
}
