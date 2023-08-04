import { writable, derived } from "svelte/store";
import type { Image as ImageType } from "./../../lib/types.d.ts";

export const img = writable<ImageType>();
