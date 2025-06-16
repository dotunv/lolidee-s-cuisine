<script lang="ts">
	import { cart } from '$lib/stores/cart';
	import CartItemDisplay from '../../components/CartItemDisplay.svelte';

	$: total = $cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
	$: deliveryFee = 500;
	$: finalTotal = total + deliveryFee;

	function updateQuantity(id: string, change: number) {
		cart.updateQuantity(id, change);
	}

	function removeItem(id: string) {
		cart.removeItem(id);
	}
</script>

<svelte:head>
	<title>Cart - Lolidee's Cuisine</title>
	<meta name="description" content="View your cart at Lolidee's Cuisine. Review your order and proceed to checkout." />
</svelte:head>

<!-- Cart Header -->
<div class="horder" style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; padding-top: 5rem; margin-bottom: 2rem;">
	<h2>My Cart</h2>
	<div class="g">
		<a href="/cart"><i class="fa-solid fa-cart-shopping"></i> Cart({$cart.length})</a>
	</div>
</div>

<!-- Main content wrapper for grid layout -->
<div class="cart-layout-wrapper">
	

	<!-- Cart Items -->
	<section class="ord">
		<div class="cart-items-container">
			{#if $cart.length === 0}
				<div class="empty-cart">
					<p>Your cart is empty</p>
					<a href="/menu" class="btn">Browse Menu</a>
				</div>
			{:else}
				{#each $cart as item (item.id)}
					<CartItemDisplay {item} />
				{/each}
			{/if}
		</div>
	</section>

    {#if $cart.length > 0}
		<!-- Order Summary -->
		<section class="order-summary-section">
			<h2 class="summary-title">Order Summary</h2>

			<div class="summary-details">
				<div class="summary-row">
					<span>Subtotal</span>
					<span>#{total.toLocaleString()}</span>
				</div>
				<div class="summary-row">
					<span>Delivery Fee</span>
					<span>#{deliveryFee.toLocaleString()}</span>
				</div>
				<div class="summary-total">
					<span>Total Payment</span>
					<span>#{finalTotal.toLocaleString()}</span>
				</div>
				<a href="/payment" class="btn process-order-btn">Process Order</a>
			</div>
		</section>
	{/if}
</div>

<style>
    @import '/css/cart.css';

    /* Additional Svelte-specific styles */
    button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        font-family: inherit;
    }

    .empty-cart {
        text-align: center;
        padding: 2rem;
    }

    .empty-cart p {
        margin-bottom: 1rem;
        color: var(--color-2);
    }

    .empty-cart .btn {
        display: inline-block;
        background: var(--color-1);
        color: var(--color-light);
        padding: 0.5rem 1rem;
        border-radius: 4px;
        text-decoration: none;
        transition: background-color 0.3s ease;
    }

    .empty-cart .btn:hover {
        background: var(--color-2);
    }

    .cart-layout-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 1rem;
    }

    .cart-items-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }

    .order-summary-section {
        background-color: var(--color-light);
        border-radius: 8px;
        box-shadow: var(--shadow-sm);
        padding: 1.5rem;
        margin: 0 auto 1.5rem auto; /* Add margin-bottom for mobile spacing */
    }

    .summary-title {
        font-size: 1.5rem;
        color: var(--color-dark);
        margin-bottom: 1.5rem;
        text-align: center;
    }

    .summary-details {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .summary-row {
        display: flex;
        justify-content: space-between;
        font-size: 1rem;
        color: var(--color-2);
    }

    .summary-row span:first-child {
        color: red; /* Make Subtotal and Delivery Fee text red */
    }

    .summary-total {
        display: flex;
        justify-content: space-between;
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--color-dark);
        border-top: 1px solid var(--color-border);
        padding-top: 1rem;
        margin-top: 1rem;
    }

    .process-order-btn {
        display: block;
        width: 100%;
        text-align: center;
        background-color: var(--color-1);
        margin-top: 2rem;
        padding: 0.75rem 1.5rem;
        font-size: 1.1rem;
    }

    /* Media queries for responsiveness */
    @media (min-width: 768px) {
        .cart-layout-wrapper {
            display: grid;
            grid-template-columns: 1fr 2fr; /* Order summary on left (1/3), Cart items on right (2/3) */
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto; /* Center the grid */
            padding: 0 1rem;
            align-items: start;
        }

        .ord {
            padding: 0; /* Remove padding from .ord as its container already has it */
        }

        .cart-items-container {
            width: 100%;
            max-width: none;
        }

        .order-summary-section {
            width: 100%;
            max-width: none;
            margin: 0;
            position: sticky;
            top: 2rem;
        }
    }

    @media (max-width: 767px) {
        .ord {
            flex-direction: column;
            align-items: center;
            padding: 0; /* Remove padding from .ord as its container already has it */
        }

        .cart-items-container,
        .order-summary-section {
            width: 100%;
            max-width: 500px;
            margin: 0 auto;
            margin-bottom: 1.5rem;
        }
    }
</style> 