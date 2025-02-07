<template lang="">
    <section class="faculties section-spacing">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title mb-0 display-5 text-center fw-bold text-primary">
                        Meet Our Professionals
                    </h2>
                    <p class="sec-subtitle section-desc text-center mx-auto fs-6 text-dark fw-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam distinctio itaque mollitia libero eaque? Cumque magnam dolore est molestiae architecto qui, deleniti accusamus maxime quod voluptatem explicabo eligendi tenetur fugit!</p>
                </div>
            </div>
        </div>

        <div class="container">
			<div class="row mt-3 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-lg-4">
                <template v-for="(team, index) in teams.teams" :key="index">
                    <div class="col" v-if="team?.isActive">
                        <v-card class="mx-auto specialist-card shadow-none" >
                            <v-img height="300" class="img-fluid rounded-1 mx-auto" :src="team.img" :alt="team.name" cover>
                            </v-img>

                            <v-card-item>
                                <h3 class="fs-5 text-center">{{team.name}}</h3>
                                <p class="mb-1 text-center text-primary small">
                                    {{team.position}}
                                </p>
                                <small class="d-block text-center">{{team.chamber}}</small>
                            </v-card-item>
                        </v-card>
                    </div>
                </template>

            </div>
        </div>
    </section>
</template>
<script setup>
    import teams from '/src/datas/teams.json';
</script>


<style lang="css" scoped>
    .specialist-card img{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
    .sec-subtitle {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
	}
    .specialist-card:hover img{
        border: 1px solid var(--bs-primary)!important;
    }
</style>