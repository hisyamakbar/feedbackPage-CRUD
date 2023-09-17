"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const FeedBackCard = ({ id, title, description }) => {
	const router = useRouter();
	const [editMode, SetEditMode] = useState(false);
	const [currentName, setCurrentName] = useState(title);
	const [currentDescription, setCurrentDescription] = useState(description);

	async function deleteCard() {
		await fetch("https://devscale-mockapi.fly.dev/api/collections/jobdirectory/records/" + id, {
			method: "DELETE",
		});
		router.refresh();
	}

	async function updateCard() {
		const res = await fetch("https://devscale-mockapi.fly.dev/api/collections/jobdirectory/records/" + id, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ title: currentName, description: currentDescription }),
		});
		const data = await res.json();
		console.log(data);
		SetEditMode(false);
		router.refresh();
	}

	return (
		<div className="card">
			{editMode ? (
				<>
					<input value={currentName} placeholder="Input your name (optional)" className="w-full" onChange={(e) => setCurrentName(e.target.value)} />
					<textarea value={currentDescription} placeholder="Write your feedback here" className="w-full" onChange={(e) => setCurrentDescription(e.target.value)} />
				</>
			) : (
				<>
					<h3 className="text-white  text-2xl font-bold tracking-wide">{title}</h3>
					<p className="text-neutral-300 text-lg font-normal">{description}</p>
				</>
			)}
			<div className="flex gap-3 justify-end">
				<button onClick={() => SetEditMode(true)} className="px-8 py-2 bg-violet-500 rounded text-white text-base font-medium">
					Edit
				</button>
				{editMode ? (
					<button onClick={updateCard} className="px-8 py-2 bg-violet-950 rounded text-white text-base font-medium">
						Update
					</button>
				) : (
					<button onClick={deleteCard} className="px-8 py-2 bg-red-600 rounded text-white text-base font-medium">
						Delete
					</button>
				)}
			</div>
		</div>
	);
};
