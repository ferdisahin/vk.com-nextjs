import React from 'react'

export default function Logo(props) {
  return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="49"
			height="48"
			fill="none"
			viewBox="0 0 49 48"
            className={props.className}
            >
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M3.87 3.37C.5 6.75.5 12.17.5 23.04v1.92c0 10.86 0 16.3 3.37 19.67C7.25 48 12.67 48 23.54 48h1.92c10.86 0 16.3 0 19.67-3.37 3.37-3.38 3.37-8.8 3.37-19.67v-1.92c0-10.86 0-16.3-3.37-19.67C41.75 0 36.33 0 25.46 0h-1.92C12.68 0 7.24 0 3.87 3.37zm4.74 11.3c.25 12.48 6.82 20 17.65 20h.63v-7.15c3.95.4 6.89 3.35 8.09 7.15h5.69a15.8 15.8 0 00-8.03-10.03c2.48-1.49 6-5.09 6.83-9.97h-5.18c-1.08 3.97-4.31 7.57-7.4 7.91v-7.91h-5.26v13.85c-3.2-.8-7.37-4.68-7.54-13.85z"
				clipRule="evenodd"></path>
		</svg>
	);
}