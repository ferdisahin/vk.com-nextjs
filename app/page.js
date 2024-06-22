"use client"

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import IndexLeft from "@/components/index/left";
import IndexRight from "@/components/index/right";

export default function Home() {
  return (
      <div>
        <Header />

        <div className="max-w-[960px] mx-auto my-[18px]">
			<div className="flex gap-20">
				<IndexLeft />
				<IndexRight />
			</div>
		</div>

		<Footer />
      </div>
  );
}
