<template lang="">
	<section class="programs section-spacing">
		<div
			class="bg-overlay"
			style=" background-image: url('https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');"
		></div>
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-10">
					<h2
						class="section-title mb-0 display-5 text-center fw-bold text-primary"
					>
						We Offer Best Programs
					</h2>
					<p class="section-desc sec-subtitle text-center mx-auto fs-6 text-dark fw-medium">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Consectetur eligendi deleniti pariatur veritatis nihil architecto
						eveniet doloremque possimus totam voluptatibus, est maiores, rem,
						exercitationem odit quasi! Debitis aspernatur eveniet est?
					</p>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row mt-3 row-cols-1 row-cols-md-2 row-cols-lg-3 g-lg-4">
				<template v-for="(program, index) in programsData" :key="index">
					<div class="col" v-if="program.isActive">
						<ProgramsCard 
							:program="program"
						></ProgramsCard>
					</div>
				</template>
			</div>
			
			<div class="row mt-3">
				<div class="col-12 text-center">
					<RouterLink to="programs" class="btn btn-primary rounded-1 fs-6 mx-auto btn-lg px-5 py-3 rounded-1 mt-3">
						See More
					</RouterLink>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { ref, onMounted } from 'vue';
	import programsJson from '/src/datas/programs.json';
	import ProgramsCard from '../../components/ProgramsCard.vue';
	
	const programsData = ref([]);

    onMounted(() => {
		programsData.value = programsJson.programs.slice(0, 6);
    });
</script>

<style lang="css" scoped>
	.programs {
		position: relative;
	}
	
	.sec-subtitle {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
		/* color: #767373; */
	}

	.programs:after {
		--bg-opacity: 0.8;
		content: "";
		top: 0;
		right: 0;
		left: 0;
		height: 100%;
		width: 100%;
		position: absolute;
		/* background-color: rgba(var(--bs-primary-rgb), var(--bg-opacity)); */
		background-color: var(--bs-primary-bg-subtle);
		z-index: -1;
	}

	@media (max-width: 768px) {
		.bg-overlay,
		.programs:after {
			height: 15%;
		}
	}
</style>
