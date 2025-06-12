<script>
	export let imageSrc;
	export let description;
	export let altText = description;
	export let title;
	export let price;
	export let cartItem;
	export let rating = 4.8;

	import styles from './MenuItem.module.css';
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
				<a class={styles.btn} href="/cart?addItem={cartItem}">Add to Cart</a>
			</div>
		</div>
	</div>
</div>