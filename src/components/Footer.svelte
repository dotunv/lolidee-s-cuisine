<div class="footer" id="footer">
    <div class="container">
      <div class="phase">
        <h2>Lolidee's Cuisine</h2>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi labore explicabo beatae autem atque enim dolor adipisci ad itaque molestias.</p>
    </div>
    <div class="about">
      <h3>About</h3>
      <ul>
        <li><a href="/about">About us</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/content">Content</a></li>
      </ul>
    </div>
    <div class="categories">
      <h3>Categories</h3>
      <ul>
        <li><a href="/category/swallow">Swallow</a></li>
        <li><a href="/category/soups">Soups</a></li>
        <li><a href="/category/extras">Extras</a></li>
        <li><a href="/category/snacks">Snacks</a></li>
      </ul>
    </div>
    <div class="contact">
      <h3>Contact</h3>
      <ul>
        <li>No 14, Osuntokun street, Bodija, Ibadan</li>
        <li>+23470986547</li>
        <li><a href="mailto:info@gmail.com">info@gmail.com</a></li>
      </ul>
      <div class="social-links">
        <ul>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page"><i class="fa-brands fa-facebook"></i></a></li>
          <li><a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp"><i class="fa-brands fa-whatsapp"></i></a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram"><i class="fa-brands fa-instagram"></i></a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter"><i class="fa-brands fa-twitter"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
  
  <style>
    .footer {
      padding: 7% 5%;
      background-image: url('/images/homepage.jpg');
      background-attachment: fixed;
      background-size: cover;
      background-position: center;
      position: relative;
      z-index: 1;
      margin-top: 5%;
      display: flex;
      flex-direction: row;
      color: white;
      gap: 15%;
    }

    .footer::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: var(--color-overlay);
      z-index: -1;
    }

    .container {
      width: 35%;
    }

    .container p {
      width: 100%;
      margin-top: 2%;
      font-size: 16px;
      font-weight: 300;
      color: white;
      margin-left: -0.5%;
    }

    .phase {
      display: flex;
      flex-direction: row;
      gap: 1%;
    }

    .about, .categories, .contact {
      display: flex;
      flex-direction: column;
      gap: 5%;
      width: 10%;
      text-align: left;
    }

    .contact {
      width: 25%;
    }

    .footer .social-links {
      margin-top: 15px;
      display: flex;
      flex-direction: row;
      gap: 5%;
    }

    .footer .social-links li a {
      font-size: 20px;
      transition: transform 0.3s ease;
    }

    .footer .social-links li a:hover {
      transform: translate(0, -10%);
    }

    .footer .social-links .fa-facebook {
      color: #316ff6;
    }

    .footer .social-links .fa-twitter {
      color: #1da1f2;
    }

    .footer .social-links .fa-instagram {
      color: #cd486b;
    }

    .footer .social-links .fa-whatsapp {
      color: #25d366;
    }

    .about ul li, .categories ul li, .contact ul li {
      display: flex;
      flex-direction: column;
      margin-top: 5%;
      font-size: 15px;
    }

    @media (max-width: 900px) {
      .footer {
        flex-wrap: wrap;
        gap: 5%;
      }

      .container {
        width: 100%;
      }

      .about, .categories {
        width: 45%;
      }

      .contact {
        width: 100%;
      }

      .footer .social-links {
        gap: 7%;
      }
    }
  </style>