<script>
 import Post from '$lib/Post.svelte'
 import MostModal from '$lib/PostModal.svelte'
 import { onMount } from 'svelte';
 import NoResults from '$lib/NoResults.svelte';
 const endpoint = "posts.json";
 let posts = [],
     searchTerm, filteredposts;

 onMount(async function () {
   const response = await fetch(endpoint);
   const data = await response.json();
   console.log("HELLO");
   posts = data.data;
   posts.forEach((e, i) => {e.title = e.title || e.id})
   console.log (posts)
 });	

 // initialise modal state and content
 let showModal = false;
 let modalContent = ;
 
 // pass in component as parameter and toggle modal state
 function toggleModal(title, contents) {
   modalContent = contents;
   modalTitle = title;
   showModal = !showModal;
 }
 
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>


<main id="postgallery">
    {#each posts as {title,  contents}}
      <Post on:click={() => toggleModal({title}, {contents})} {title} 
            {contents} />
    {/each}	
</main>	
<Post />


