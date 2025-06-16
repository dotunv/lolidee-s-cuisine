<script lang="ts">
    import type { CartItem } from '$lib/stores/cart';
    import { cart } from '$lib/stores/cart';

    export let item: CartItem;

    function handleUpdateQuantity(change: number) {
        cart.updateQuantity(item.id, change);
    }

    function handleRemoveItem() {
        cart.removeItem(item.id);
    }

    import styles from './CartItemDisplay.module.css';
</script>

<div class={styles.cartItemDisplay}>
    <img src={item.image} alt={item.name} class={styles.cartItemImage} />
    <div class={styles.cartItemContent}>
        <div class={styles.cartItemHeader}>
            <h3>{item.name}</h3>
            <button class={styles.removeButton} on:click={handleRemoveItem} aria-label="Remove item">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        </div>
        <div class={styles.cartItemDetails}>
            <span class={styles.price}>#{item.price.toLocaleString()}</span>
            <div class={styles.quantityControls}>
                <button class={styles.quantityButton} on:click={() => handleUpdateQuantity(-1)} aria-label="Decrease quantity">
                    <i class="fa-solid fa-minus"></i>
                </button>
                <span class={styles.quantity}>{item.quantity}</span>
                <button class={styles.quantityButton} on:click={() => handleUpdateQuantity(1)} aria-label="Increase quantity">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>
    </div>
</div> 