<!-- #A2AF9F-->
<script>
  
    import { onMount } from 'svelte';
    let isOpen = false;
  
    onMount(() => {
      import('https://cdn.skypack.dev/tailwindcss/tailwind.css');
    });
  
  
  
  </script>
  
  <nav class="border-gray-200 bg-greenNav">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="../home" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="src\images\klj_meisjes.png" class="h-10 hidden md:block" alt="Logo" />
          <span class="self-center text-l font-semibold whitespace-nowrap dark:text-white hover:dark:text-greenKLJ">KLJ Meisjes Hamont</span>
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href="../logout">
          <button type="button" class="text-white bg-redKLJ hover:bg-greenNav hover:border-2 hover:border-redKLJ focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-redKLJ dark:hover:redKLJ dark:focus:ring-redKLJ">Logout</button>
          </a>
          
          <div class="flex justify-end">
            <div class="relative inline-block text-left">
              <div>
                <button type="button" class="md:hidden inline-flex justify-center w-full rounded-md hover:border-2 hover:border-redKLJ px-4 py-2 bg-redKLJ text-sm font-medium text-white hover:bg-greenNav focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-redKLJ focus:ring-redKLJ" id="options-menu" aria-haspopup="true" aria-expanded="true" on:click={() => isOpen = !isOpen}>
                  Menu
                  <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
          
              {#if isOpen}
              <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-greenNav ring-1 ring-black ring-opacity-5 z-1000">
                <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <a href="../leiding" on:click={() => isOpen = false} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-redKLJ" role="menuitem">Groepen</a>
                  <a href="../kamp" on:click={() => isOpen = false} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-redKLJ" role="menuitem">Kamp</a>
                  <a href="../inschrijven" on:click={() => isOpen = false} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-redKLJ" role="menuitem">Inschrijven Kamp </a>
                  <a href="../contact" on:click={() => isOpen = false} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-redKLJ" role="menuitem">Contact</a>
                  <li class="relative group list-none">
                    <a href="" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-redKLJ">Meer</a>
                    <ul class="absolute left-0 w-48 mt-0 space-y-2 bg-greenNav rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 invisible group-hover:visible">
                      <li><a href="../documenten" on:click={() => isOpen = false} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-redKLJ">Documenten</a></li>
                      <li><a href="../activiteiten" on:click={() => isOpen = false} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-redKLJ">Activiteiten</a></li>
                      <li><a href="../toevoegen" on:click={() => isOpen = false} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-redKLJ">Toevoegen</a></li>
                      <li><a href="../vragen" on:click={() => isOpen = false} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-redKLJ">Vragen</a></li>
                      <li><a href="../logout" on:click={() => isOpen = false} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-redKLJ">Logout</a></li>
                    </ul>
                  </li>
                </div>
              </div>
              {/if}
              
            </div>
          </div>
          
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-greenNav dark:bg-greenNav md:dark:bg-greenNav dark:border-gray-700">
          <li>
            <a href="../leiding" class="block py-2 px-3 md:p-0 text-white bg-redKLJ rounded md:bg-transparent md:text-redKLJ md:dark:text-redKLJ" aria-current="page">Groepen</a>
          </li>
          <li class="relative group br-greenNav" >
              <a href="../kamp" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-redKLJ md:dark:hover:text-redKLJ dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Kamp</a>
              <ul class="absolute left-0 w-48 mt-0 space-y-2 bg-greenNav text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 invisible group-hover:visible">
                  <li><a href="../kamp" class="block px-4 py-2 hover:bg-gray-100 hover:text-redKLJ">Info</a></li>
                  <li><a href="../inschrijven" class="block px-4 py-2 hover:bg-gray-100 hover:text-redKLJ">Inschrijven</a></li>
  
              </ul>
          </li>
          <li>
            <a href="../contact" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-redKLJ md:dark:hover:text-redKLJ dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
          </li>
          
          <li class="relative group">
              <a href="" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-redKLJ md:dark:hover:text-redKLJ dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Meer</a>
              <ul class="absolute left-0 w-48 mt-0 space-y-2 bg-greenNav text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 invisible group-hover:visible">
                  <li><a href="../documenten" class="block px-4 py-2 hover:bg-gray-100 hover:text-redKLJ">Documenten</a></li>
                  <li><a href="../activiteiten" class="block px-4 py-2 hover:bg-gray-100 hover:text-redKLJ">Activiteiten</a></li>
                  <li><a href="../toevoegen" class="block px-4 py-2 hover:bg-gray-100 hover:text-redKLJ">Toevoegen</a></li>
                  <li><a href="../vragen" class="block px-4 py-2 hover:bg-gray-100 hover:text-redKLJ">Vragen</a></li>
                  <li><a href="../logout" class="block px-4 py-2 hover:bg-gray-100 hover:text-redKLJ">Logout</a></li>
              </ul>
          </li>
  
          
        </ul>
      </div>
      </div>
    </nav>
    