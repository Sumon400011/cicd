<template lang="">
    <div class="news-section section-spacing">
        <h1 class="text-center fw-bold">News & Articles</h1>
        <div class="container pt-10">
            <div class="row row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4">
                <div class="col" v-for="(news, index) in newsData" :key="index">
                    <NewsCard 
                        :date="news.date"
                        :thumbnail="news.thumbnail"
                        :title="news.title"
                        :subtitle="news.subtitle"
                        :link="news.link"
                    />
                </div>
            </div>

            <div class="row mt-3">
                <div class="col-12 text-center">
                    <RouterLink to="blog" class="btn btn-primary rounded-1 fs-6 mx-auto btn-lg px-5 py-3 rounded-1 mt-3">
                        See More
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import NewsCard from '../../components/NewsCard.vue';
    import newsJson from '/src/datas/news.json';
    import { onMounted, ref } from 'vue';

    const newsData = ref([]);

    onMounted(() => {
        newsData.value = newsJson.items.slice(0, 6);
    })

</script>

<style lang="css">
    
</style>