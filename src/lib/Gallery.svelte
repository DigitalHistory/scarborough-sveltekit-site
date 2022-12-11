<script>
 import { posts, metastore, themes, filters } from './stores.js'
 import Search from './Search.svelte';
 import Postcard from '$lib/Postcard.svelte'
 import Popup from '$lib/Popup.svelte'
 import PostModal from '$lib/PostModal.svelte'
 import { onMount, setContext } from 'svelte';
 import NoResults from '$lib/NoResults.svelte';
 //const endpoint = "posts.json";
 const endpoint = "https://lovely-youtiao-5c9c43.netlify.app/output.json";
 let filteredposts = []
 import FacetSet from '$lib/FacetSet.svelte'
 import { getContext } from 'svelte';
 const { open } = getContext('simple-modal');
 const showFull = (allProps) => { console.log(allProps); open(PostModal, allProps); }
   const showSurprise = () => open(PostModal, { title: "It's a modal!" });
 let allFacets 
 
 function getMeta (posts, field) {
   let meta = []
   for (let p of posts) {
     console.log("postMETA",p[field] )
     if (p[field]) {
       if (typeof(p[field]) == "string" && !meta.includes(p[field])) {
         meta.push(p[field])
         console.log("pushed string theme", p[field])
       }
       if (Array.isArray(p[field])) {
         p[field].forEach(t =>!meta.includes(t) && meta.push(t) )
       }
     }
   }
   console.log("META FROM " + field,meta)
   meta=meta.sort()
   return meta
 }
 

 function getThemes (posts) {
   let themes = []
   for (let p of posts) {
     console.log("postTHEMES",p.themes )
     if (p.themes) {
       if (typeof(p.themes) == "string" && !themes.includes(p.themes)) {
         themes.push(p.themes)
         console.log("pushed string theme", p.themes)
       }
       if (Array.isArray(p.themes)) {
         p.themes.forEach(t =>!themes.includes(t) && themes.push(t) )
       }
     }
   }
   console.log("THEMES",themes)
   themes=themes.sort()
   return themes
 }
 
 async function fetchPosts () {
   const response = await fetch(endpoint);
   const data = await response.json();
   data && data.data.forEach((e, i) => {e.title = e.title || e.id})
   console.log("HELLO");
   posts.update(p => data.data);
   $metastore.themes=getMeta($posts, "themes")
   /* $metastore.tags=getMeta($posts, "tags") */
   allFacets = [{field: "themes", terms: $metastore.themes}]
   console.log ("POSTS", posts, "META", $metastore)
 }
 
 onMount(async function () {
   await fetchPosts()
   filteredposts = $posts
   console.log("FILTERED",filteredposts)
 });	

 // For Search Input
 let searchTerm = "";

 function filterPosts () {
   console.log("RUNNING FILTERPOSTS")
   let foundPosts = $posts
   console.log("START", foundPosts)
   let filterNames = Object.getOwnPropertyNames($filters)
   console.log(filterNames)
   for (let name of filterNames) {
     let terms = $filters[name] || []
     console.log("TERMS", terms)
     foundPosts = foundPosts.filter(post => {
       if (!terms || terms.length != 0) {return post}
       let retain = false
       terms.forEach(term => {
         console.log("THESTUFF", post[name], term, retain)
         if (Array.isArray(post[name]) && post[name].includes(term) ) {
           retain = true
         } else if (post[name] == term) {retain = true};
         console.log("THESTUFF", post[name], term, retain)
       })
       
       return retain
     })
   }
   console.log(foundPosts)
   filteredposts = foundPosts
 }

 setContext('filterPosts', filterPosts)

 function searchposts () {	
                         return filteredposts = $posts.filter(post => {
			   let postTitle = post.id.toLowerCase();
			   return postTitle.includes(searchTerm.toLowerCase())
			   return true
		         });
                         }  

 
</script>

<main class="content" id="fullGallery">
  <aside id="facets">
    <section id="query-section">
      <Search bind:searchTerm on:input={searchposts} />
    </section>	

    <FacetSet facets={allFacets} />
  </aside>
  <section id="postgallery">
    {#each filteredposts as {title,  contents}}    
      <Postcard on:click={() => showFull({title, contents})} {title} 
                {contents} />
    {/each}
  </section>
  </main>	


<style lang="scss">
 main#fullGallery {
     margin-top: 10rem;
     display: grid;
     grid-template-columns: 1fr 5fr;
     gap: 5px;
     > #facets {
         /* background-color: green; */
     }
     #postgallery {
         display: grid;
         grid-template-columns: repeat(auto-fit, 30rem);
         gap: 10px;
         /* margin-top: 10rem; */
     }
 }

 
</style>
