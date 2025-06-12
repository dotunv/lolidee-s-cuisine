<script>
	export let imageSrc;
	export let description;
	export let altText = description;
	export let title;
	export let price;
	export let cartItem;
	export let rating = 4.8;
</script>


<div class="menu-item">
	<div class="menu-item-title">
		<div class="love">
			<button aria-label="Add to favorites"><i class="fa-regular fa-heart"></i> </button>
		</div>
		<img src={imageSrc} alt={altText}/>
		<div class="menu-item-title-sub">
			<div class="sub">
				<h3>{title} <i class="fa-solid fa-star"><span class="h">{rating}</span></i></h3>
				<h5>{description}</h5>
			</div>
			<div class="down">
				<h3>{price}</h3>
				<a  class="btn" href="/cart?addItem={cartItem}">Add to Cart</a>
			</div>
		</div>

	</div>

</div>