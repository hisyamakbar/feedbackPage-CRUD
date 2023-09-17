"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const Form = () => {
	const router = useRouter();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	async function createCard() {
		const res = await fetch("https://devscale-mockapi.fly.dev/api/collections/jobdirectory/records", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ title, description }),
		});
		const data = await res.json();
		setTitle("");
		setDescription("");
		router.refresh();
	}

	return (
		<div className=" max-w-2xl h-fit p-6 gap-3 flex-col backdrop-blur-2xl bg-transparent bg-gradient-to-tl from-transparent to-white/30 from-[0%] to-[200%] border border-stone-300 flex justify-center items-center  fixed bottom-0 w-full rounded-tl-3xl rounded-tr-3xl">
			<input value={title} placeholder="Input your name (optional)" className="w-full" onChange={(e) => setTitle(e.target.value)} />
			<textarea value={description} placeholder="Write your feedback here" className="w-full" onChange={(e) => setDescription(e.target.value)} />
			<button className="px-8 py-2 bg-violet-500 rounded text-white text-base font-medium w-full" onClick={createCard}>
				Submit
			</button>
		</div>
	);
};
