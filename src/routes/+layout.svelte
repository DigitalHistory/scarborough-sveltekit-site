<script>
 import "../app.scss";
 import { page } from "$app/stores";

 const nav = [
   {title: "Home", path: "/"},
   {title: "Articles", path: "/articles"}
 ]

 const siteTitle = "Scarborough History Demo Project"

</script>

<svelte:head>
  <title>{ siteTitle }</title>
</svelte:head>
<header>
  <section class="top">
    <span class ='nav-heading nav-brand' ><img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Flag_of_Scarborough%2C_Ontario.svg" alt="Scarborough Flag: Stylized Cliffs with Maple Leaf"/> </span>
    <h1 id="title">{ siteTitle }</h1>
  <input type ='checkbox' class = 'menu-toggle' id ='menu-toggle'>
  <nav class= 'header'>
    <ul>
      {#each nav as item}
        <li><a class:active={$page.url.pathname === item.path} class="navbar-item" href={item.path}>{item.title}</a></li>
      {/each}

    </ul>
  </nav>
  <label for='menu-toggle' class='menu-nav-toggle'>
    <span>  </span>
  </label>
  </section>
  <section class="sub">
    <h3>For demonstration purposes only. Please do not cite</h3>
  </section>

</header>

<!-- <Parent /> -->
<div id="content">
  <slot></slot>
</div>

<footer>
  This site is a teaching project. Content is not necessarily vetted for accuracy. For more authoritative sources on the history of Scarborough, visit <a href="https://historyofutsc.ca/resources/">the resources page from the History of UTSC website</a>
</footer>

<style lang="scss">
 header, footer {
     text-align: center;
     width: 100%;
     z-index: 999;
     padding: .4rem;
     position: fixed;
     background: #f4f5f6;
     
 }
 
 footer {
     min-height: 5rem;
     left: 0;
     bottom: 0;
 }
 #content {
     margin-top: 13rem;
 }
 header {
     top: 0;
     height: 12rem;
     border-bottom: 0.1rem solid #d1d1d1;
     margin-top: 0px;
     section.top {
         input.menu-toggle {
             display: none;
         }
         nav {
             position: absolute;
             text-align: center;
             top: 100%;
             left: 0;
             background-color: #f4f5f6;
             width: 100%;
             transform: scale(1, 0);
             transition: transform 400ms ease-in-out;
             transform-origin: top;
             ul {
                 margin: 0;
                 margin-top: 1rem;
                 padding: 0;
                 height: 6rem;
                 li {
                     margin-left: 1rem;
                     /* height: 10%; */
                     list-style: none;
                     a {
                         text-transform: uppercase;
                         opacity: 0;
                     }
                 }
             }
         }
     }
     section.sub h3 {
         font-style: italic;
         line-height: 1.1;
         font-size: 2.4rem;
     }
 }
 .nav-brand img {
     max-height: 5rem;
 }

 .menu-toggle:checked ~ nav {
     -webkit-transform: scale(1, 1);
     transform: scale(1, 1);
 }

 .menu-toggle:checked ~ nav a {
     opacity: 1;
     -webkit-transition: opacity 200ms ease-in 100ms;
     transition: opacity 200ms ease-in 100ms;
 }

 .menu-nav-toggle {
     position: absolute;
     top: 0;
     right: 0;
     height: 100%;
     display: -webkit-box;
     display: -ms-flexbox;
     display: flex;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
     margin-right: 2rem;
 }

 .menu-nav-toggle:hover, .menu-nav-toggle:focus {
     cursor: pointer;
 }

 .menu-nav-toggle span, .menu-nav-toggle span:before, .menu-nav-toggle span:after {
     display: block;
     background: #333;
     width: 2rem;
     border-radius: 0.125rem;
     position: relative;
     height: 0.25rem;
 }

 .menu-nav-toggle span:before, .menu-nav-toggle span:after {
     content: '';
     position: absolute;
 }

 .menu-nav-toggle span:before {
     top: 0.8rem;
 }

 .menu-nav-toggle span:after {
     bottom: 0.8rem;
 }

 @media screen and (min-width: 50rem) {
     .menu-nav-toggle {
         display: none;
     }
     header {
         section.top {
             display: grid;
             min-height: 5rem;
             grid-template-columns: 1fr  minmax(37.5rem, 3fr) 1fr;
             .nav-brand {
                 grid-column: 1/2;
             }
             #title {grid-column: 2/3;}
             nav {
                 all: unset;
                 grid-column: 3/4;
                 display: flex;
                 align-items: center;
                 ul {
                     margin-top: 0;
                     display: flex;
                     align-items: center;
                     height: auto;
                     li {
                         margin-bottom: 0;
                         margin-left: 2rem;
                         -webkit-box-align: center;
                         -ms-flex-align: center;
                         align-items: center;
                         height: auto;
                         a {
                             opacity: 1;
                         }
                     }
                 }
                 
             }
         }
     }

 }
 /*# sourceMappingURL=style.css.map */
</style>
