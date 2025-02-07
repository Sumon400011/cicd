<template lang="">
	<v-card class="mx-auto" hover>
		<v-img
			class="align-end text-white"
			height="250"
			:src="thumbnail"
			cover
            hover
            link
		>
			<!-- <v-card-title>Top 10 Australian beaches</v-card-title> -->
            <v-card-text>
                <button class="btn btn-sm rounded-2 btn-primary ms-auto d-block bg-primary">
                    <i class="bi bi-calendar-check me-1"></i>
                    {{date}}
                </button>
            </v-card-text>
		</v-img>

        <v-card-text >
            <h3 class="mb-3 h5">{{title}}</h3>
			<p class="mb-0 text-grey">{{subtitle}}</p>
		</v-card-text>

		<v-card-actions class="border-top p-0">
			<!-- <v-btn color="orange" text="Read More"> </v-btn> -->
            <v-card-text>
                <a class="icon-link icon-link-hover align-items-start link-underline link-underline-opacity-0" style="--bs-link-hover-color-rgb: var(--bs-secondary)" :href="link">
                    Read More <i class="bi bi-arrow-right ms-1"></i>
                </a>
            </v-card-text>
		</v-card-actions>
	</v-card>
</template>

<script setup>
    import { defineProps } from 'vue';
    defineProps(["date", "thumbnail", "title", "subtitle", "link"]);
    // const color = ref('indigo')
</script>

<style lang="css"></style>
