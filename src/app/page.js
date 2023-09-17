import React from "react";
import { FeedBackEditor } from "@/components/FeedBackEditor";

async function getData() {
	const res = await fetch("https://devscale-mockapi.fly.dev/api/collections/jobdirectory/records?sort=-created", {
		cache: "no-cache",
	});
	const data = await res.json();
	return data;
}

export default async function Page() {
	const { items } = await getData();
	console.log(items);

	return <FeedBackEditor CardDatas={items} />;
}
