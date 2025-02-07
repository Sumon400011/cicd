<template lang="">
	<div class="about-section section-spacing">
		<div class="all-wrapper">
			<div class="container mt-5 pt-3 mt-lg-0 pt-lg-5 mt-0">
				<div class="row mb-lg-5 mb-3">
					<div class="col-12">
                        <h1 data-v-4fc42b6d="" class="text-center fw-bold">About Us</h1>
						<p class="sec-subtitle sec-subtitle">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id minima est nemo possimus quasi. Quisquam animi corrupti necessitatibus. Voluptatibus quae eligendi assumenda itaque temporibus hic dicta possimus deleniti perspiciatis illo.
						</p>
					</div>
				</div>
				<div class="row align-items-center pt-10">
					<div class="col-12 col-lg-6 pe-2 pe-lg-4 mb-3 mb-lg-0">
						<img
							src="/images/sliders/slider-3.jpg"
							alt=""
							class="abt-img img-fluid rounded-3"
						/>
					</div>
					<div class="col-12 col-lg-6">
						<div class="cta-module about-item about-right ps-lg-4 mb-0">
							<!-- <img
							    src="/images/sliders/slider-1.jpg"
								alt="About"
                                class="img-fluid"
							/> -->
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nobis explicabo placeat ipsum vel maxime soluta cupiditate officiis minima esse atque ipsa, fuga dolorem, sit quisquam hic rem. Quibusdam, voluptas!
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adi33pisicing elit. Fugiat nobis explicabo placeat ipsum vel maxime soluta cupiditate officiis minima esse atque ipsa, fuga dolorem, sit quisquam hic rem. Quibusdam, voluptas!
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nobis explicabo placeat ipsum vel maxime soluta cupiditate officiis minima esse atque ipsa, fuga dolorem, sit quisquam hic rem. Quibusdam, voluptas!
							</p>
                            <button class="btn btn-primary rounded-1 fs-6 mx-auto btn-lg px-5 py-3 rounded-1 mt-3" > See More </button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="css" scoped>
	.sec-subtitle {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
		/* color: #767373; */
	}
	.abt-img {
		/* border-radius: 30px; */
		min-height: 430px;
		object-fit: cover;
		object-position: center;
	}
	.cta-module p {
		text-align: justify;
		margin-bottom: 25px;
		color: #767373;
	}
	.brand-btn:hover {
		color: #fff;
		background: #08a760 !important;
	}
	@media (max-width: 992px) {
		.about-right {
			padding-left: 0;
		}
		.abt-img {
			border-radius: 30px;
			min-height: 280px;
		}
	}
</style>
