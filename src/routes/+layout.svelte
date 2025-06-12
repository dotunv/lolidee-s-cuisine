<script>
  import '../app.css';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';

  export let children;
</script>

<div class="site-container">
    <Navbar />

    <main>
        {@render children()}
    </main>

    <Footer />  
</div>


<style>
    /* Optional: Styles for the overall layout container */
    .site-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh; /* Ensures footer is at bottom */
    }
  
    main {
      flex-grow: 1; /* Allows main content to take available space */
      /* Add padding or other styles for your main content area if needed */
    }
  
    /* If you are not using a global stylesheet via app.html or import,
       you might need some :global() styles here, but it's generally better
       to use one of the other methods for truly global styles. */
  </style>