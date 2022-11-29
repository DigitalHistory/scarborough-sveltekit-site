
<script>
 export let modalContent;
 export let title;
 export let image;
 export let contents;

</script>

<div class='modal'>
  <div class="header">{title}</div>
  <div class='content'>
    {@html contents}
  </div>
</div>

<style>
 
 .content {
     background-color: white;
     width: 20em;
     height: 20em;
 }
</style>
