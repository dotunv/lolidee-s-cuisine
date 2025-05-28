<script lang="ts">
    import { page } from "$app/stores";

    let formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };

    function handleSubmit() {
        // Handle form submission
        console.log('Form submitted:', formData);
        // Reset form
        formData = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };
    }
</script>

<svelte:head>
    <title>Contact Us - Lolidee's Cuisine</title>
    <meta name="description" content="Get in touch with Lolidee's Cuisine. We're here to answer your questions and take your orders. Contact us for reservations and inquiries." />
</svelte:head>

<!-- Hero Image Section -->
<section class="here">
    <div class="here">
        <img src="/images/images (19).png" alt="Contact Lolidee's Cuisine">
    </div>
</section>

<!-- Contact Form Section -->
<section class="inquiries">
    <!-- Contact Information -->
    <div class="contact">
        <div class="text">
            <h2>Get in touch</h2>
            <p>You can contact us anytime and day, our assistant will get back to you and attend to your needs</p>
        </div>
        <div class="break">
            <div class="break_1">
                <div class="break_0">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>No 14, Zone D, Osuntokun, Bodija, Ibadan, Oyo state, Nigeria.</p>
                </div>
                <div class="break_0">
                    <i class="fa-solid fa-phone"></i>
                    <p>Telephone <br>+23478096478</p>
                </div>
            </div>
            <div class="break_2">
                <div class="break_0">
                    <i class="fa-solid fa-envelope-open-text"></i>
                    <p>info@gmail.com <br> global@gmail.com</p>
                </div>
                <div class="break_0">
                    <i class="fa-regular fa-clock"></i>
                    <p>Opens 5am-7pm <br>Mon-Fri</p>
                </div>
            </div>
        </div>
        <div class="follow">
            <p>Follow us</p>
            <div class="social-links">
                <li><a href="https://facebook.com/lolideescuisine" target="_blank" aria-label="Follow us on Facebook"><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href="https://wa.me/23478096478" target="_blank" aria-label="Contact us on WhatsApp"><i class="fa-brands fa-whatsapp"></i></a></li>
                <li><a href="https://instagram.com/lolideescuisine" target="_blank" aria-label="Follow us on Instagram"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://twitter.com/lolideescuisine" target="_blank" aria-label="Follow us on Twitter"><i class="fa-brands fa-twitter"></i></a></li>
            </div>
        </div>
    </div>

    <!-- Contact Form -->
    <div class="fill">
        <div class="text">
            <h2>Your details</h2>
            <p>Let us know how to get back to you</p>
        </div>
        <form class="input" on:submit|preventDefault={handleSubmit}>
            <div class="name">
                <h3>Your name</h3>
                <input 
                    type="text" 
                    placeholder="Enter your name"
                    bind:value={formData.name}
                    required
                />
            </div>
            <div class="email">
                <h3>Your email address</h3>
                <input 
                    type="email" 
                    placeholder="Enter your email"
                    bind:value={formData.email}
                    required
                />
            </div>
            <div class="subject">
                <h3>Subject</h3>
                <input 
                    type="text" 
                    placeholder="Subject"
                    bind:value={formData.subject}
                    required
                />
            </div>
            <div class="comment">
                <h3>Comment / Message</h3>
                <input 
                    type="text" 
                    placeholder="Your message"
                    bind:value={formData.message}
                    required
                />
            </div>
            <div class="button">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
</section>

<style>
    @import '/css/contact.css';

    /* Additional Svelte-specific styles */
    button {
        border: none;
        background: none;
        cursor: pointer;
        font-family: inherit;
    }

    .button button {
        border-radius: 30px;
        font-weight: 500;
        transition: all 0.3s ease;
        font-size: 14px;
        line-height: 1;
        color: var(--color-4);
        width: 50%;
        background-color: var(--color-1);
        margin-top: 0;
        padding: 12px 56px;
    }

    .button button:hover {
        color: var(--color-4);
        background-color: var(--color-2);
        transform: translateY(-2px);
    }
</style> 