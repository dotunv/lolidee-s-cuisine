<script lang="ts">
    import { page } from "$app/stores";

    let isHamburgerActive = false;

    function toggleHamburger() {
        isHamburgerActive = !isHamburgerActive;
    }

    function handleLinkClick() {
        isHamburgerActive = false;
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Enter' || event.key === ' ') {
            toggleHamburger();
        }
    }
</script>

<nav class="navbar {isHamburgerActive ? 'active' : ''}">
    <a href="/" class="logo" on:click={handleLinkClick}>
        <img src="images/logo.jpg" class="img" alt="Lolidee's Cuisine Logo" />
    </a>
    <ul class="nav-menu" id="navbar-menu">
        <li class="nav-item"><a href="/" class="nav-link" aria-current={$page.url.pathname === '/'} on:click={handleLinkClick}>Home</a></li>
        <li class="nav-item"><a href="/menu" class="nav-link" aria-current={$page.url.pathname  === '/menu'} on:click={handleLinkClick}>Our Menu</a></li>
        <li class="nav-item"><a href="/cart" class="nav-link" aria-current={$page.url.pathname === '/cart'} on:click={handleLinkClick}>Cart</a></li>
        <li class="nav-item"><a href="/about" class="nav-link" aria-current={$page.url.pathname === '/about'} on:click={handleLinkClick}>About us</a></li>
        <li class="nav-item"><a href="/contact" class="nav-link" aria-current={$page.url.pathname === '/contact'} on:click={handleLinkClick}>Contact us</a></li>
    </ul>
    <button 
        class="hamburger {isHamburgerActive ? 'active' : ''}" 
        on:click={toggleHamburger}
        on:keydown={handleKeydown}
        aria-label="Toggle navigation menu" 
        aria-expanded={isHamburgerActive} 
        aria-controls="navbar-menu"
        type="button"
    >
        <span class="bar"></span>
        <span class="bar"></span>   
        <span class="bar"></span>
    </button>
</nav>

<style>
    /* Basic styles to ensure functionality; your style.css will handle the main look */
    .navbar {
      position: sticky;
      min-height: 80px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 var(--spacing-lg);
      background-color: var(--color-light);
      box-shadow: var(--shadow-sm);
      z-index: 1000;
    }
  
    .nav-menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--spacing-xl);
    }
  
    .nav-link {
      color: var(--color-dark);
      font-weight: 500;
      position: relative;
      padding: var(--spacing-xs) 0;
    }
  
    .nav-link[aria-current='page'] {
      /* Add your active link style, e.g., color, underline */
      font-weight: bold; /* Example */
      color: var(--primary-color, #ff6347); /* Example, use your theme color */
    }
  
  
    .hamburger {
      display: none; /* Will be shown by media query in your global style.css */
      cursor: pointer;
      background: none;
      border: none;
      padding: 0;
    }
  
    .bar {
      display: block;
      width: 25px;
      height: 3px;
      margin: 5px auto;
      background-color: #333; /* Or your bar color */
      transition: all 0.3s ease-in-out;
    }
  
    /* Example for hamburger active state based on your CSS structure */
    /* Your style.css likely has more sophisticated hamburger animations */
    @media (max-width: 768px) { /* Or your mobile breakpoint */
      .hamburger {
        display: block; /* Show hamburger on mobile */
      }
  
      .nav-menu {
        position: fixed; /* Or absolute, depending on your design */
        left: -100%; /* Hidden by default */
        top: 70px; /* Adjust based on navbar height */
        flex-direction: column;
        background-color: #fff; /* Or your menu background */
        width: 100%;
        text-align: center;
        transition: 0.3s;
        gap: 0;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
        z-index: 100; /* Ensure it's above other content */
      }
  
      .nav-menu.active {
        left: 0; /* Show menu */
      }
  
      .nav-item {
        margin: 16px 0;
      }
  
      .hamburger.active .bar:nth-child(2) {
        opacity: 0;
      }
      .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }
      .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }
    }

    @media(max-width:980px) {
        .hamburger {
            display: block;
        }
        
        .nav-menu {
            position: absolute;
            left: -100%;
            top: 70px;
            gap: 0;
            flex-direction: column;
            background-color: var(--color-light);
            width: 100%;
            text-align: center;
            transition: 0.3s;
        }
    }
  </style>