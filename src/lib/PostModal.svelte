
<script>
 export let modalContent;
 export let title;
 export let image;
 export let contents;

</script>

<div class='modal'>
  <header class="header">
    <h2>{title}</h2>
  </header>
  
  <div class='content'>
    <div class="box">
      {#if image }
        <img src="{image}" alt="featured image"/>
      {/if}
    </div>
    {@html contents}
  </div>
</div>

<style>
 .header {
     margin-top: 2rem;
     background-color: rgb(200, 200, 200);
     
 }
 .content {
     background-color: white;
 }
</style>
