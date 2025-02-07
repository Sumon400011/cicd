<template>
    <v-card class="mx-auto program-card" >
        <v-img height="250" :src="program.img" :alt="program.name" cover>
            <v-chip color="primary" variant="flat" class="mt-2 ms-2">Best Seller</v-chip>
        </v-img>

        <v-card-item>
            <h3 class="fs-5">{{program.name}}</h3>
            <v-card-subtitle>
                <div class="duration d-flex align-items-center text-primary">
                    <div class="d-flex me-3">
                        <i class="bi bi-alarm me-1"></i>
                        <span>{{program.period}}</span>
                    </div>
                    <div class="d-flex">
                        <i class="bi bi-person-plus me-1"></i>
                        <span>{{program.seats}}</span>
                    </div>
                </div>
            </v-card-subtitle>
        </v-card-item>

        <v-card-text>
            <p class="mb-0">
                {{program.desc}}
            </p>
        </v-card-text>
        <v-card-text>
            <a class="icon-link icon-link-hover align-items-start link-underline link-underline-opacity-0" :href="program.ink" style="--bs-link-hover-color-rgb: var(--bs-secondary);">
                Read More <i class="bi bi-arrow-right ms-1"></i>
            </a>
        </v-card-text>
    </v-card>
</template>

<script setup>
    import { defineProps } from 'vue';
    defineProps(["program"]);
</script>

<style lang="css" scoped>
    
</style>