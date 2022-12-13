<div class="markdown-page">

## About This Website

This is a demonstration website intended to help students/audience members at University of Toronto, Scarborough, think about data and metadata in the context of historical inquiry. There is only one substantive page on the site, which you can reach through `ARTICLES` in the menu bar, or simply [by clicking here](./articles).

Once arrived at the Articles page, you will be presented with a simple faceted search interface organized by the metadata added to the page by audience members. Click the checkboxes or enter a word or phrase in the search box to narrow your search for 

The articles found on that page will have been produced under severe time pressure during a brief demonstration. Ordinary citation practice has been suspended for the sake of simplicity. 


## Technical note

This website is built with [Svelte](https://svelte.dev/) components in the [SvelteKit](https://kit.svelte.dev/) server framework (for routing). CSS pased on [Milligram](https://github.com/milligram/milligram) (SASS version). Data for posts is captured from [this github repository](https://github.com/DigitalHistory/scarborough-history); Markdown and YAML from individual articles is [written to JSON stored here](https://lovely-youtiao-5c9c43.netlify.app/output.json) by the magic of [Netlify](https://www.netlify.com/).

</div>

<style lang="scss">
.markdown-page {
    margin: 10rem;
    h1 {

    }
}
  </style>
