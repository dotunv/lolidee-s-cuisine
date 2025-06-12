<script lang="ts">
    import { page } from "$app/stores";
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";

    let activeCategory = 'all';
    let searchQuery = '';

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'meals', name: 'Meals' },
        { id: 'swallow', name: 'Swallow' },
        { id: 'soup', name: 'Soups' },
        { id: 'extras', name: 'Extras' }
    ];

    const menuItems = {
        meals: [
            {
                id: 'smoky-jollof',
                name: 'Smoky Jollof Rice',
                image: '/images/images (73).jpeg',
                rating: 4.8,
                description: 'Freshly made and served hot, an healthy meal for all',
                price: 4000
            },
            {
                id: 'coconut-fried',
                name: 'Coconut Fried Rice',
                image: '/images/images (76).jpeg',
                rating: 4.8,
                description: 'Freshly made and served hot, an healthy meal for all',
                price: 4000
            },
            // Add more meal items...
        ],
        swallow: [
            {
                id: 'black-amala',
                name: 'Hot Black Amala',
                image: '/images/images (84).jpeg',
                rating: 4.8,
                description: 'Freshly made and served hot, an healthy meal for all',
                price: 4000
            },
            // Add more swallow items...
        ],
        soup: [
            {
                id: 'efo-riro',
                name: 'Sweet Efo Riro',
                image: '/images/images (85).jpeg',
                rating: 4.8,
                description: 'Freshly made and served hot, an healthy meal for all',
                price: 4000
            },
            // Add more soup items...
        ],
        extras: [
            {
                id: 'moi-moi',
                name: 'Hot moi moi',
                image: '/images/images (100).jpeg',
                rating: 4.8,
                description: 'Freshly made and served hot, an healthy meal for all',
                price: 4000
            },
            // Add more extra items...
        ]
    };

    function handleCategoryClick(category: string) {
        activeCategory = category;
    }

    function handleAddToCart(itemId: string) {
        // Implement cart functionality
        console.log('Adding to cart:', itemId);
    }

    function handleFavorite(itemId: string) {
        // Implement favorite functionality
        console.log('Toggling favorite:', itemId);
    }
</script>

<svelte:head>
    <title>Our Menu - Lolidee's Cuisine</title>
    <meta name="description" content="Explore our diverse menu featuring delicious meals, swallow, soups, and extras" />
</svelte:head>

<Navbar />

<!-- Menu Hero Section -->
<section class="menu-hero">
    <div class="container">
        <div class="menu-header">
            <h1>Our Menu</h1>
            <p>Our menu is like falling into a world of foodie fantasies. A culinary adventure waiting to be
                explored, with new flavors and taste around every corner. It's the perfect place to find your new
                favorite dish.</p>
        </div>
        <div class="menu-controls">
            <div class="search-bar">
                <i class="fas fa-search"></i>
                <input 
                    type="text" 
                    placeholder="Search for food..." 
                    bind:value={searchQuery}
                />
            </div>
            <a href="/cart" class="cart-button">
                <i class="fa-solid fa-cart-shopping"></i>
                <span class="cart-count">0</span>
            </a>
        </div>
    </div>
</section>

<!-- Category Navigation -->
<nav class="category-nav">
    <div class="container">
        <ul class="category-list">
            {#each categories as category}
                <li>
                    <a 
                        href="#{category.id}" 
                        class={activeCategory === category.id ? 'active' : ''}
                        on:click|preventDefault={() => handleCategoryClick(category.id)}
                    >
                        {category.name}
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</nav>

<!-- Menu Sections -->
<main class="menu-sections">
    <div class="container">
        {#each categories as category}
            {#if activeCategory === 'all' || activeCategory === category.id}
                <section id={category.id} class="menu-section">
                    <h2 class="section-title">{category.name}</h2>
                    <div class="menu-grid">
                        {#each menuItems[category.id as keyof typeof menuItems] as item}
                            <div class="menu-item">
                                <div class="menu-item-image">
                                    <img src={item.image} alt={item.name} />
                                    <button 
                                        class="favorite-btn"
                                        on:click={() => handleFavorite(item.id)}
                                        aria-label="Add to favorites"
                                    >
                                        <i class="fa-regular fa-heart"></i>
                                    </button>
                                </div>
                                <div class="menu-item-content">
                                    <div class="menu-item-header">
                                        <h3>{item.name}</h3>
                                        <div class="rating">
                                            <i class="fa-solid fa-star"></i>
                                            <span>{item.rating}</span>
                                        </div>
                                    </div>
                                    <p class="description">{item.description}</p>
                                    <div class="menu-item-footer">
                                        <span class="price">#{item.price.toLocaleString()}</span>
                                        <button 
                                            class="add-to-cart"
                                            on:click={() => handleAddToCart(item.id)}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                </section>
            {/if}
        {/each}
    </div>
</main>

<Footer />

<style>
    @import 'static/css/menu.css';
</style> 