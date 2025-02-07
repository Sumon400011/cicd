<template>
    <div class="homepage">
        <HomeBanner />
        <About />
        <Programs />
        <Faculties />
        <Gallery />
        <News />
        <Contact />
    </div>
</template>

<script setup>
    import HomeBanner from '../../sections/HomeBanner/HomeBanner.vue';
    import Gallery from '../../sections/Gallery/Gallery.vue';
    import News from '../../sections/News/News.vue';
    import Contact from '../../sections/Contact/Contact.vue';
    import Programs from '../../sections/Programs/Programs.vue';
    import About from '../../sections/About/About.vue';
    import Faculties from '../../sections/Faculties/Faculties.vue';
   
</script>

<style lang="css" scoped>
    @import './HomePage.css';
</style>