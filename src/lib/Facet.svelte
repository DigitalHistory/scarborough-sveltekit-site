<script>
 import { getContext } from 'svelte'
 import { metastore, filters } from './stores.js'
 
 export let field="period"
 let terms = []
 console.log("TERMS", terms)
 console.log("METASTORE ON FILTER LAUNCH",field, $metastore[field])
 terms = $metastore[field]
 // avoid type errors.
 $filters[field] = $filters[field] || []
 export let selected =  $filters[field] || []  


 function updateTerms () { console.log("UPDSTETERMS");terms = $metastore[field]}
 function updateFilter (terms) {
   $filters[field] = terms || []
 }
 // $: $metastore && updateTerms()
 $: console.log("REACTIVE", $filters)
 $: updateFilter(selected)

 /* function onMount() {terms = $metastore[field] || []} */
</script>

<section class="facet-container">
<h3>{ field }</h3>
     {#each  $metastore[field]  as term}
     <input
     type="checkbox"
     bind:group={ selected }
     value={term}
     /> {term}<br>
     {/each}  

</section>

<style lang="scss">
 section.facet-container {
     margin: 1rem 0;
     border: 1px gray solid;
     border-radius: 4px;
     padding: 0 1rem;
     h3:first-letter{
         text-transform: capitalize;
     }
     h3 {         margin-bottom: 1rem;
        }

 }
 
</style>
