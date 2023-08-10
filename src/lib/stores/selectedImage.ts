import { writable, derived } from "svelte/store";
import type { Image as ImageType } from "./../../lib/types.d.ts";

export const img = writable<ImageType>();
export const imgArray = writable<ImageType[]>();
export const imgArrayArrived = writable<boolean>();
