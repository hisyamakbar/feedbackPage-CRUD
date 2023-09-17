"use client";
import { Header } from "./Header";
import { FeedBackCard } from "./FeedBackCard";
import { Form } from "./Form";

export const FeedBackEditor = ({ CardDatas }) => {
	return (
		<div className="max-w-2xl m-auto relative h-screen border border-stone-300 bg-neutral-700 shadow-xl overflow-y-scroll">
			<Header />
			<section className=" mb-24 my-9 px-9  pb-32">
				{CardDatas.map((item) => {
					return <FeedBackCard {...item} />;
				})}
			</section>
			<Form />
		</div>
	);
};
