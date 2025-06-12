<script lang="ts">
    import { page } from "$app/stores";
    import { cart } from '$lib/stores/cart';

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

<nav class="navbar">
    <a href="/" class="logo" on:click={handleLinkClick}>
        <img src="images/logo.jpg" class="img" alt="Lolidee's Cuisine Logo" />
    </a>
    <ul class="nav-menu {isHamburgerActive ? 'active' : ''}" id="navbar-menu">
        <li class="nav-item"><a href="/" class="nav-link" aria-current={$page.url.pathname === '/'} on:click={handleLinkClick}>Home</a></li>
        <li class="nav-item"><a href="/menu" class="nav-link" aria-current={$page.url.pathname  === '/menu'} on:click={handleLinkClick}>Our Menu</a></li>
        <li class="nav-item">
            <a href="/cart" class="nav-link" aria-current={$page.url.pathname === '/cart'} on:click={handleLinkClick}>
                Cart
                {#if $cart.length > 0}
                    <span class="cart-count">{$cart.length}</span>
                {/if}
            </a>
        </li>
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
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
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

    .logo {
        display: flex;
        align-items: center;
    }

    .logo img {
        height: 50px;
        width: auto;
    }

    .nav-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: var(--spacing-xl);
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .nav-link {
        color: var(--color-dark);
        font-weight: 500;
        text-decoration: none;
        position: relative;
        padding: var(--spacing-xs) 0;
        transition: color 0.3s ease;
    }

    .nav-link:hover {
        color: var(--primary-color, #ff6347);
    }

    .nav-link[aria-current='page'] {
        font-weight: bold;
        color: var(--primary-color, #ff6347);
    }

    .cart-count {
        position: absolute;
        top: -8px;
        right: -12px;
        background: var(--color-1);
        color: var(--color-light);
        font-size: 0.75rem;
        padding: 2px 6px;
        border-radius: 50%;
        min-width: 18px;
        text-align: center;
    }

    .hamburger {
        display: none;
        cursor: pointer;
        background: none;
        border: none;
        padding: 0;
        z-index: 1001;
    }

    .bar {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        background-color: var(--color-dark);
        transition: all 0.3s ease-in-out;
    }

    @media (max-width: 980px) {
        .hamburger {
            display: block;
        }
        
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 80px;
            gap: 0;
            flex-direction: column;
            background-color: var(--color-light);
            width: 100%;
            height: calc(100vh - 80px);
            text-align: center;
            transition: 0.3s ease-in-out;
            padding: 2rem 0;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
        }

        .nav-menu.active {
            left: 0;
        }

        .nav-item {
            margin: 1.5rem 0;
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
</style>