<template>
    <div class="homepage">
        <HomeBanner />
        <AboutComponent />
        <ProgramsComponent />
        <FacultiesComponent />
        <GalleryComponent />
        <NewsComponent />
        <ContactComponent />
    </div>
</template>

<script setup>
    import HomeBanner from '../../sections/HomeBanner/HomeBanner.vue';
    import GalleryComponent from '../../sections/Gallery/GalleryComponent.vue';
    import NewsComponent from '../../sections/News/NewsComponent.vue';
    import ContactComponent from '../../sections/Contact/ContactComponent.vue';
    import ProgramsComponent from '../../sections/Programs/ProgramsComponent.vue';
    import AboutComponent from '../../sections/About/AboutComponent.vue';
    import FacultiesComponent from '../../sections/Faculties/FacultiesComponent.vue';
   
</script>

<style lang="css" scoped>
    @import './HomePage.css';
</style>