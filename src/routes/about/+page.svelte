<script lang="ts">
    import { page } from "$app/stores";
</script>

<svelte:head>
    <title>About Us - Lolidee's Cuisine</title>
    <meta name="description" content="Learn about Lolidee's Cuisine, our story, and meet our chef. Experience authentic Nigerian cuisine in a warm and welcoming atmosphere." />
</svelte:head>

<!-- Hero Section -->
<div class="hero-section">
    <div class="again">
        <h2>About us</h2>
        <p>Welcome to Lolidee's Cuisine, where passion meets plate! We pride ourselves on using the freshest, locally-sourced ingredients to craft dishes that celebrate both tradition and innovation. Whether you're here for a cozy dinner or a special celebration, our inviting atmosphere and attentive service promise to make every visit memorable. 
        Join us and savor the essence of good food and great company.</p>
    </div>

    <!-- Our Story Section -->
    <div class="content">
        <div class="image">
            <img src="/images/images (68).jpeg" alt="Dining area at Lolidee's Cuisine">
        </div>
        <div class="text">
            <h3>Our Story</h3>
            <p class="story">We are passionate about providing our guests with unforgettable dining experiences. From our delicious menu to our attentive service, we strive to create an atmosphere that's 
                warm, welcoming and inviting. Our story begins with a simple dream: to create a place where great food and heartfelt connections come together.
             Our restaurant started as a humble endeavor rooted in a passion for culinary excellence and community spirit. From the very beginning, we've been committed to offering dishes that
              are as rich in flavor as they are in heritage, blending traditional recipes with modern twists.

                Over the years, Lolidee's Cuisine has grown into a beloved local gem, cherished for its warm atmosphere and vibrant menu. Each dish tells a story, crafted with love and an unwavering dedication to quality. Our journey has been shaped
                by the incredible support of our guests and the hard work of our dedicated team. As we continue to evolve, we remain devoted to creating memorable dining experiences and celebrating the joy of good food shared among friends and family.</p>
        </div>
    </div>

    <!-- Chef Section -->
    <div class="her">
        <div class="img">
            <img src="/images/IMG-20230803-WA0000.jpg" alt="Chef Lolidee">
        </div>
        <div class="text">
            <h3>Meet the Chef</h3>
            <p>Meet the creative force behind Lolidee's distinctive flavors. With a culinary journey that spans over the years, Chef Lolidee brings a wealth of experience and a deep passion for cooking to our kitchen. Their approach combines time-honored techniques with innovative twists, crafting dishes that are both familiar and exciting. Chef Lolidee is dedicated to sourcing the finest local ingredients, ensuring each plate reflects their commitment to quality and artistry.

                Beyond their impressive skills, Chef Lolidee is known for their genuine warmth and dedication to creating a memorable dining experience. Whether experimenting with new flavors or perfecting classic recipes, their goal is always to delight and inspire our guests. At Lolidee's Cuisine, we are proud to share the culinary magic of Chef Lolidee with you and invite you to experience the passion that goes into every dish.</p>
        </div>
    </div>
</div>

<style>
    @import '/css/about.css';
</style> 