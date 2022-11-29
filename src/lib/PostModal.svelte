
<script>
 export let modalContent;
 export let title;
 export let image;
 export let content;

</script>

<div on:click|self class='modal'>
  <div class="header">{title}</div>
  <div class='content'>
    {content}
  </div>
</div>

<style>
 .modal {
     background-color: rgba(0, 0, 0, 0.4);
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
 }
 
 .content {
     background-color: white;
     width: 20em;
     height: 20em;
 }
</style>
