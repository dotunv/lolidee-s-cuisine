<script lang="ts">
	import { cart } from '$lib/stores/cart';
	import type { CartItem } from '$lib/stores/cart';

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
<div class="horder">
	<h2>My Cart</h2>
	<div class="g">
		<a href="/cart"><i class="fa-solid fa-cart-shopping"></i> Cart({$cart.length})</a>
	</div>
</div>

<!-- Cart Items -->
<section class="ord">
	<section class="order">
		{#if $cart.length === 0}
			<div class="empty-cart">
				<p>Your cart is empty</p>
				<a href="/menu" class="btn">Browse Menu</a>
			</div>
		{:else}
			{#each $cart as item (item.id)}
				<div class="orders">
					<div class="img">
						<img src={item.image} alt={item.name}>
					</div>
					<div class="whole">
						<div class="one">
							<h3>{item.name}</h3>
							<button on:click={() => removeItem(item.id)} aria-label="Remove item">
								<i class="fa-regular fa-trash-can"></i>
							</button>
						</div>
						<div class="two">
							<h3>#{item.price.toLocaleString()}</h3>
							<div class="three">
								<button on:click={() => updateQuantity(item.id, -1)} aria-label="Decrease quantity">
									<i class="fa-solid fa-minus"></i>
								</button>
								{item.quantity}
								<button on:click={() => updateQuantity(item.id, 1)} aria-label="Increase quantity">
									<i class="fa-solid fa-plus"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			{/each}
		{/if}
	</section>
</section>

<!-- Order Summary -->
{#if $cart.length > 0}
	<section class="hub">
		<div class="delivery">
			<h2>Order Summary</h2>
		</div>

		<section class="process">
			<div class="sub">
				<h3>Subtotal</h3>
				<h3>#{total.toLocaleString()}</h3>
			</div>
			<div class="del">
				<h3>Delivery Fee</h3>
				<h3>#{deliveryFee.toLocaleString()}</h3>
			</div>
			<div class="pay">
				<h3>Total Payment</h3>
				<h3>#{finalTotal.toLocaleString()}</h3>
			</div>
			<a href="/payment" class="btn">Process Order</a>
		</section>
	</section>

	<!-- Checkout Button -->
	<div class="end">
		<a href="/payment" class="btn">Checkout</a>
	</div>
{/if}

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

    .three button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .three button:hover {
        opacity: 0.8;
    }

    .one button {
        color: var(--color-2);
        transition: color 0.3s ease;
    }

    .one button:hover {
        color: var(--color-1);
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
</style> 