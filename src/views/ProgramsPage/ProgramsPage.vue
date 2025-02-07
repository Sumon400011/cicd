<template>
    <div class="programs-page">
        <SubPagesHeader
            :pageTitle="'Our Programs'"
            :label="'Programs'"
            :bgImg="'images/banners/subpage-banner-3.jpg'"
        ></SubPagesHeader>

        <section class="programs section-spacing">
            <!-- <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-10">
                        <h2 class="section-title mb-0 display-5 text-center fw-bold text-primary">
                            Programs We Have
                        </h2>
                    </div>
                </div>
            </div> -->
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-lg-4">
                    <template v-for="(program, index) in programsJson.programs" :key="index">
                        <div class="col" v-if="program.isActive">
                            <ProgramsCard 
                                :program="program"
                            ></ProgramsCard>
                        </div>
                    </template>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    import SubPagesHeader from '/src/components/SubPagesHeader.vue';
	import programsJson from '/src/datas/programs.json';
	import ProgramsCard from '/src/components/ProgramsCard.vue';


</script>

<style lang="css" scoped>
    .program-card{
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	}

	.card-img {
		height: 300px;
		object-fit: cover;
		object-position: center;
	}
    .sec-subtitle {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
	}
</style>