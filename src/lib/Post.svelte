<script>
	import { scale } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';
	export let title;
  export let image;
	export let language;
	export let postBundle;
	export let pdfLink;
	export let contents;
</script>


<section class="post" transition:scale={{duration: 1000, easing: expoInOut}}>
	
  <section class="post-meta">
    <h1>{title}</h1>
  </section> 
	
  <section class="post-content">
    {@html contents}
  </section>
	
</section>


<style>
 .post { 
       width: 280px;
       border: 4px solid #BA5626; 
       border-radius: 3px;
       box-shadow: 1px 1px 0 black;
       margin: 5px;
       background-color: #e4ddcf;
       }
 
 .post-meta {
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: flex-start;
     border-bottom: 3px solid #BA5626;
 }
 
 .post-meta h1 {

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
