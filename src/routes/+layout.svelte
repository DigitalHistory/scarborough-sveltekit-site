<script>
 import "../app.scss";
 import { page } from "$app/stores";

 const nav = [
   {title: "Home", path: "/"},
   {title: "Articles", path: "/articles"}
 ]

 
</script>

<nav class="navbar">
  <logo />
  <h1>Scarborough History Demo</h1>
  <ul class="navlinks">
    {#each nav as item}
      <li>
        <a class:active={$page.url.pathname === item.path} href={item.path}>{item.title}</a>
      </li>
    {/each}
  </ul>
  
</nav>


<slot></slot>
