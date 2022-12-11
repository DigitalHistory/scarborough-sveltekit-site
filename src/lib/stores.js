import { writable } from 'svelte/store';

export const posts = writable([]);

export const metastore = writable({themes: [], tags:[]});
export const themes = writable([]);

export const tags = writable([])

export const themeFilter = writable([]);


export const filters = writable ({});

export const obj = writable({tags: ["first", "second", "third"], birds: ["ostrich", "sparrow"]});
export const objDyn = writable({})
