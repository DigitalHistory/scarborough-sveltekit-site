<script>
 import  Facet  from './Facet.svelte'
 /* import { metastore } from './stores.js' */
 export let facets = [{field: "themes"}, {"field": "tags"}]
 
</script>

{#each facets as facet}
  <Facet field={facet.field}  />
{/each}
