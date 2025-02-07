<template lang="">
	<div>
		<SubPagesHeader
			:pageTitle="'About Us'"
			:label="'About Us'"
			:bgImg="'images/banners/subpage-banner-1.jpg'"
		></SubPagesHeader>

        <section class="section-spacing">
            <div class="container">
                <div class="row gap-3 gap-5 py-10 justify-content-center align-items-center">
                    <div class="col-lg-5 col-12">
                        <h1 class="head-2">History</h1>
                        <p>
                            Discover the rich history and journey of our nursing institute.
                            Explore the milestones, achievements, and the evolution of our
                            institution over the years.
                        </p>
                    </div>
                    <div class="col-lg-5 col-12">
                        <img
                            class="dept-img mx-auto img-fluid rounded shadow"
                            src="/images/gallery/gallery-1.jpg"
                            alt="History"
                        />
                    </div>
                </div>
                <div class="row gap-3 gap-5 py-10 justify-content-center align-items-center">
                    <div class="col-lg-5 col-12">
                        <h1 class="head-2">Mission</h1>
                        <p>
                            Understand our mission statement and the core values that guide our
                            educational and healthcare initiatives. Learn about our commitment
                            to excellence in nursing education.
                        </p>
                    </div>
                    <div class="col-lg-5 col-12">
                        <img
                            class="dept-img mx-auto img-fluid rounded shadow"
                            src="/images/gallery/gallery-2.jpg"
                            alt="Mission"
                        />
                    </div>
                </div>
                <div class="row gap-3 gap-5 py-10 justify-content-center align-items-center">
                    <div class="col-lg-5 col-12">
                        <h1 class="head-2">Vision</h1>
                        <p>
                            Explore our vision for the future of nursing education. Learn about
                            our aspirations, goals, and the impact we aim to make in the field
                            of healthcare and education.
                        </p>
                    </div>
                    <div class="col-lg-5 col-12">
                        <img
                            class="dept-img mx-auto img-fluid rounded shadow"
                            src="/images/gallery/gallery-3.jpg"
                            alt="Vision"
                        />
                    </div>
                </div>
                <div class="row gap-3 gap-5 py-10 justify-content-center align-items-center">
                    <div class="col-lg-5 col-12">
                        <h1 class="head-2">Governing Body</h1>
                        <p>
                            Meet the dedicated individuals who form our governing body. Learn
                            about their roles, expertise, and contributions to the strategic
                            direction of our nursing institute.
                        </p>
                    </div>
                    <div class="col-lg-5 col-12">
                        <img
                            class="dept-img mx-auto img-fluid rounded shadow"
                            src="/images/gallery/gallery-4.jpg"
                            alt="Governing Body"
                        />
                    </div>
                </div>
                <div class="row gap-3 gap-5 py-10 justify-content-center align-items-center">
                    <div class="col-lg-5 col-12">
                        <h1 class="head-2">Principle's Messages</h1>
                        <p>
                            Read a special message from our Principle, providing insights into
                            our institute's philosophy, values, and his vision for the future of
                            nursing education.
                        </p>
                    </div>
                    <div class="col-lg-5 col-12">
                        <img
                            class="dept-img mx-auto img-fluid rounded shadow"
                            src="/images/gallery/gallery-5.jpg"
                            alt="Principle's Messages"
                        />
                    </div>
                </div>
                <div class="row gap-3 gap-5 py-10 justify-content-center align-items-center">
                    <div class="col-lg-5 col-12">
                        <h1 class="head-2">Our Commitments</h1>
                        <p>
                            Learn about our commitments to fostering excellence in nursing
                            education, research, and community engagement. Discover how we
                            uphold the highest standards of academic and ethical practices.
                        </p>
                    </div>
                    <div class="col-lg-5 col-12">
                        <img class="dept-img mx-auto img-fluid rounded shadow"
                            src="/images/gallery/gallery-6.jpg"
                            alt="Our Commitments"
                        />
                    </div>
                </div>
                <div class="row gap-3 gap-5 py-10 justify-content-center align-items-center">
                    <div class="col-lg-5 col-12">
                        <h1 class="head-2">Our Achievements</h1>
                        <p>
                            Celebrate our achievements and milestones in the field of nursing
                            education. Explore the recognition, awards, and accomplishments that
                            showcase our dedication to excellence.
                        </p>
                    </div>
                    <div class="col-lg-5 col-12">
                        <img class="dept-img mx-auto img-fluid rounded shadow"
                            src="/images/gallery/gallery-7.jpg"
                            alt="Our Achievements"
                        />
                    </div>
                </div>
            </div>
        </section>
	</div>
</template>

<script setup>
import SubPagesHeader from "../../components/SubPagesHeader.vue";
</script>

<style lang="css" scoped>
    .row:nth-child(even) {
        flex-direction: row-reverse;
    }
</style>
