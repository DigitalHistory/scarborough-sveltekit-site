<script>
 import { scale } from 'svelte/transition';
 import { expoInOut } from 'svelte/easing';
 const basepath="https://github.com/DigitalHistory/scarborough-history/edit/main/articles/"
 export let title;
 export let image;
 export let language;
 export let postBundle;
 export let pdfLink;
 export let contents;
 export let updated;
 export let relpath;
 import { format } from 'date-fns'

 $: console.log(image)
 console.log(updated)
</script>


<section class="card post-card" on:click  transition:scale={{duration: 1000, easing: expoInOut}}>
  <header class="card-header">
    <h2 class="card-header-title">
      {title}
    </h2>
  </header>
  <div class="card-content">
    {#if image }
      <img class="featured" src={image} alt="Featured Image for this Article">
    {:else}
      {@html contents}
    {/if}
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        <a href="{basepath}{relpath}">Edit the source file here</a>
      </span>
    </p>
  </footer>
</section>



<style style lang="scss">
 .post-card {
     width: 30rem;
     background-color: rgb(200, 200, 200);
     
     height: 30rem;
     display: grid;
     grid-template-rows: 5rem 20rem 5rem;
     header.card-header, footer.card-footer  {
         background: rgb(219, 219, 219);
         padding: 1rem 1.5rem;
         border-radius: .4rem;
         font-size: 86%;
         overflow: none;
     }
     header h2 {
         font-size: 2.4rem;
         display: -webkit-box;
         -webkit-box-orient: vertical;
         -webkit-line-clamp: 1;
         overflow: hidden;

     }
     .card-content {
         background-color: rgb(230, 230, 230);

         border-radius: 0;
         display: block;
         padding: 1rem 1.5rem;
         :global(h1) {
             font-size: 2.6rem;
         }
     }
 }


 
 /* post Layout */
 .bkcont {
     width: 100%;
     text-align: center;
 }
 
 .bkcover {
     width: 100px;
     height: 150px;
     margin-bottom: 5px;
     box-shadow: 0 0 3px gray;
 }
 
 div.language {
     font-size: .8em;
     margin: 5px 0;
 }
 
 figcaption {
     text-align: center;
     width: 90%;
     padding: 3px 10px;
     height: 36px;
     font-weight: bold;
 }
 
 
 /* post Links Layout */
 a { cursor: pointer; }
	
 .post-bottom-links {
     width: 100%;
     display: flex;
     align-items: flex-start;
     justify-content: center;  
 }
 
 .available-at {
     width: 100%;
     flex-direction: column;
     align-items: center;
     justify-content: center; 
     /*   background-color: #fff; */
 }

 .available-at header { 
		      text-align: center;
	              }
 .available-at header h5 { 
		         font-size: .95rem;
		         margin: 15px 0;
		         padding: 0 .2rem;
	                 }

 .from-pariyatti {
     height: 200px;
 }

 .other-vendors {
     border-left: 3px solid #BA5626;
     height: 200px;
 }

 .buy-options-cont {
     text-align: center;
     padding: 0 10px 10px;

 }

 .vender-logo {
     width: 100px;
     margin: 10px 0 0 0;
 }

 .p-post-btn {
     border: none;
     width: 100px;
     background: #BA5626;
     font-weight: 400;
     font-size: 12px;
     color: #f3f1ea;
     text-transform: uppercase;
     line-height: 130%;
     cursor: pointer;
     margin-top: .8em;
     padding: 9px 14px;
     box-shadow: 1px 1px 1px black;
     transition: .3s all;
 }

 .p-post-btn:hover {
     background-color: #D0A45A;
     color: #000;
 }

 .p-post-btn:active {
     box-shadow: inset 0 0 1px black;
 }
</style>
