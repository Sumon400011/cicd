<template lang="">

    <section class="contact-us section-spacing">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6 mb-5 mb-lg-0">
                    <div class="contact-module">
                        <h2 class="label fw-bold text-start">Get In Touch With Us</h2>
                        <p class="subtitle">Nunc ullamcorper massa enim, malesuada consectetur augue rhoncus vel. Vivamus et tristique sem. Fusce in lorem et nibh. Lorem ipsum dolor sit amet, con duo secte tue adipiscing elit, sed tinci dun tut laoreet dolore mag na aliquam erat volutpa lore.</p>
                    </div>
                    <div class="row mt-5">
                        <div class="col-12 col-lg-6">
                            <div class="card ability-card">
                                <div class="img-container">
                                    <i class="bi bi-geo"></i>
                                </div>
                                <div class="card-body">
                                    <h3 class="card-title">Our Address</h3>
                                    <p class="card-subtitle">
                                    <strong> Head Office:</strong> Nunc ullamcorper massa enim, malesuada consectetur augue rhoncus vel. Vivamus et tristique sem.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="card ability-card">
                                <div class="img-container">
                                    <i class="bi bi-phone"></i>
                                </div>
                                <div class="card-body">
                                    <h3 class="card-title">Phone Numbers</h3>
                                    <p class="card-subtitle">+ 0123456789</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="card ability-card">
                                <div class="img-container">
                                    <i class="bi bi-envelope"></i>
                                </div>
                                <div class="card-body">
                                    <h3 class="card-title">Email Address</h3>
                                    <p class="card-subtitle">info@bdaaa.com</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="card ability-card">
                                <div class="img-container">
                                    <i class="bi bi-alarm"></i>
                                </div>
                                <div class="card-body">
                                    <h3 class="card-title">Working Hours</h3>
                                    <p class="card-subtitle">Mon to Fri: 9am to 8pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7301.397680838469!2d90.37441249629516!3d23.79373628463697!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bd534efce9%3A0x22f2105d38c1da4d!2sMySoft%20Limited!5e0!3m2!1sen!2sbd!4v1687774543240!5m2!1sen!2sbd" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="shadow" style="border: 0;"></iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="css" scoped>
    .contact-us{
        /* background-color: rgba(13, 111, 184, 0.1); */
        background-color: var(--bs-primary-bg-subtle);    
    }
    .subtitle {
        line-height: 26px;
        color: var(--bs-dark);
    }

    .contact-us .ability-card {
        max-width: 460px;
        flex-direction: row;
        margin-bottom: 15px;
        border: 0;
        background-color: transparent;
    }

    .contact-us .ability-card .img-container {
        height: 20px;
        width: 28px;
        min-width: 35px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--bs-primary);
        margin-right: 15px;
    }

    .contact-us .ability-card .img-container .img {
        padding: 8px;
        height: auto;
        max-width: 100%;
    }

    .contact-us .ability-card .img-container i {
        font-size: 18px;
    }

    .contact-us .ability-card .card-title {
        font-size: 16px;
        font-weight: 600;
        color: var(--bs-primary);
    }

    .contact-us .ability-card .card-body {
        padding: 0;
    }

    .contact-us .ability-card .card-body .card-subtitle {
        font-size: 13px;
        color: var(--bs-dark);
        margin-bottom: 15px;
    }
</style>