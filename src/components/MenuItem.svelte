<script>
	export let imageSrc;
	export let description;
	export let altText = description;
	export let title;
	export let price;
	export let cartItem;
	export let rating = 4.8;

	import styles from './MenuItem.module.css';
	import { cart } from '$lib/stores/cart';

	function handleAddToCart() {
		// Extract numeric price from the string (remove # and commas)
		const numericPrice = parseInt(price.replace(/[#,]/g, ''));
		
		cart.addItem({
			id: cartItem,
			name: title,
			price: numericPrice,
			image: imageSrc
		});
	}
</script>

<div class={styles.menuItem}>
	<div class={styles.menuItemTitle}>
		<div class={styles.love}>
			<button aria-label="Add to favorites"><i class="fa-regular fa-heart"></i> </button>
		</div>
		<img src={imageSrc} alt={altText}/>
		<div class={styles.menuItemTitleSub}>
			<div class={styles.sub}>
				<h3>{title} <i class="fa-solid fa-star"><span class={styles.h}>{rating}</span></i></h3>
				<h5>{description}</h5>
			</div>
			<div class={styles.down}>
				<h3>{price}</h3>
				<button class={styles.btn} on:click={handleAddToCart}>Add to Cart</button>
			</div>
		</div>
	</div>
</div>