<script>
  import MenuItem from '../components/MenuItem.svelte';
</script>

<svelte:head>
  <title>Lolidee's Cuisine - Home</title>
  <meta name="description" content="Every Bite Tells A Story. Explore Lolidee's delicious menu." />
</svelte:head>

<div class="home"> <div class="homepage">
    <div class="text">
      <h2>Every Bite Tells A Story</h2>
      <p>
        Let's take a culinary journey around the world, one dish at a time, every
        dish is a chapter in our culinary journey, every morsel is a testament
        to the efforts that goes into creating an unforgettable experience. Take
        a bite, and let the story unfold.
      </p>
      <a class="btn" href="/menu">Get Started</a>
      <a class="butn" href="/menu">Explore Menu</a>
    </div>
  </div>
  <div class="slide">
    <img src="/images/homepage.jpg" alt="Delicious food spread" />
  </div>
</div>

<div class="icon-container">
  <div class="icons">
    <a href="/menu" aria-label="View our quality food menu"><i class="fa-solid fa-bowl-food"></i></a>
    <h3>Quality food</h3>
    <p>
      Our commitment to quality ensures that every dish that leaves our
      kitchen is a masterpiece, bursting with flavor and passion
    </p>
  </div>
  <div class="icons">
    <a href="/menu" aria-label="Explore our food and drinks menu"><i class="fa-solid fa-martini-glass-citrus"></i></a>
    <h3>Food and drinks</h3>
    <p>
      Explore our extensive menu, featuring diverse range of options to
      satisfy any cravings.
    </p>
  </div>
  <div class="icons">
    <a href="/about" aria-label="Learn about our expert chefs"><i class="fa-solid fa-chess-queen"></i></a>
    <h3>Expert chef</h3>
    <p>
      Our kitchen is a hub of creativity and expertise, we have chefs with
      years of experience and passion for innovation
    </p>
  </div>
</div>

<section class="food">
  <div class="heading">
    <h2>Our Specials</h2>
    <p>
      Our Chef specials are the star of the show you won't want to miss them
    </p>
  </div>

  <div class="menu">
    <MenuItem
      imageSrc="/images/images (71).jpeg"
      altText="Hot Fried Rice"
      title="Hot Fried Rice"
      description="Freshly made and served hot, an healthy meal for all"
      price="#4,000"
      cartItem="hot-fried-rice"
    />
    <MenuItem
      imageSrc="/images/images (73).jpeg"
      altText="Smoky Jollof Rice"
      title="Smoky Jollof Rice"
      description="Freshly made and served hot, an healthy meal for all"
      price="#4,000"
      cartItem="smoky-jollof-rice"
    />
    <MenuItem
      imageSrc="/images/images (97).jpeg"
      altText="Hot Ewa Agoyin"
      title="Hot Ewa Agoyin"
      description="Freshly made and served hot, an healthy meal for all"
      price="#4,000"
      cartItem="hot-ewa-agoyin"
    />
    <MenuItem
      imageSrc="/images/images (84).jpeg"
      altText="Hot Black Amala"
      title="Hot Black Amala"
      description="Freshly made and served hot, an healthy meal for all"
      price="#4,000"
      cartItem="hot-black-amala"
    />
    <MenuItem
      imageSrc="/images/images (85).jpeg"
      altText="Sweet Efo Riro"
      title="Sweet Efo Riro"
      description="Freshly made and served hot, an healthy meal for all"
      price="#4,000"
      cartItem="sweet-efo-riro"
    />
    <MenuItem
      imageSrc="/images/images (99).jpeg"
      altText="White Spaghetti"
      title="White Spaghetti"
      description="Freshly made and served hot, an healthy meal for all"
      price="#4,000"
      cartItem="white-spaghetti"
    />
  </div>

  <div class="view-more">
    <a href="/menu" class="btn">View Full Menu</a>
  </div>
</section>

<div class="tutorials">
  <div class="tutorial-image">
    <img src="/images/images (69).jpeg" alt="Cooking class" />
  </div>
  <div class="texy">
    <h2>You are what you eat</h2>
    <p>
      Learn various ways to prepare healthy meals through these tutorials and
      recipe. I'm always happy to provide tutorials and tips for anyone
      interested in learning more about cooking. join our online cooking class
    </p>
    <a class="btn" href="/cooking-class">Click to join</a> </div>
</div>

<style>
  /* Styles for .home, .homepage, .icon-container, .food, .tutorials etc. */
  /* These should mostly come from your global style.css */
  /* If you have styles that are ONLY for the home page, you can put them here. */
</style>