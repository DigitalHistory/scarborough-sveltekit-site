<script>

 import Post from '$lib/Post.svelte'
 import Popup from '$lib/Popup.svelte'
 import PostModal from '$lib/PostModal.svelte'
 import { onMount } from 'svelte';
 import NoResults from '$lib/NoResults.svelte';
 const endpoint = "posts.json";
 let posts = [],
     searchTerm, filteredposts;

  import { getContext } from 'svelte';
 const { open } = getContext('simple-modal');
  const showFull = (allProps) => { console.log(allProps); open(PostModal, allProps); }
  const showSurprise = () => open(PostModal, { title: "It's a modal!" });


 onMount(async function () {
   const response = await fetch(endpoint);
   const data = await response.json();
   console.log("HELLO");
   posts = data.data;
   posts.forEach((e, i) => {e.title = e.title || e.id})
   console.log ("POSTS", posts)
 });	


</script>

  <main id="postgallery">
    {#each posts as {title,  contents}}
    
      <Post on:click={() => showFull({title, contents})} {title} 
            {contents} />
    {/each}	
  </main>	

<p>
	<button on:click={showSurprise}>Show me a surprise!</button>
</p>
