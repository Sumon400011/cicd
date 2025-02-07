<template>
    <div class="blogpage">
        <SubPagesHeader
            :pageTitle="'Read Our News & Blogs'"
            :label="'Blogs'"
            :bgImg="'images/banners/subpage-banner-3.jpg'"
        ></SubPagesHeader>

        <section class="section-spacing">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="mb-4">
                            <h2 class="m-0"><i class="bi bi-bookmark-star me-2"></i>Latest Blogs and News Highlights</h2>
                            <p class="m-0">Check last weeks top highlights, news, stories and headline news</p>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-xxl-7 col-xl-6 col-12" v-if="featured.length">
                        <v-card class="mb-4 mb-lg-0">
                            <v-img class="align-end" :src="featured[0].thumbnail" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                height="440px"
                                cover
                            >
                                <v-card-title class="text-white">{{ featured[0].title }}</v-card-title>
                                <a :href="featured[0].link" class="stretched-link"></a>
                            </v-img>
                        </v-card>
                    </div>
                    <div class="col-xxl-5 col-xl-6 col-12">
                        <div v-for="(item, index) in featured.slice(1, 4)" :key="index" class="card mb-4 border-0">
                            <div class="row g-0">
                                <div class="col-lg-4">
                                    <img :src="item.thumbnail" class="img-fluid h-100 object-fit-cover rounded" alt="Card title" />
                                </div>
                                <div class="col-lg-8">
                                    <div class="card-body">
                                        <h5 class="card-title h6">{{ truncateText(item.title, 60)}}</h5>
                                        <p class="card-text small">{{ truncateText(item.subtitle, 80)  }}</p>
                                        <a :href="item.link" class="stretched-link"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-4 row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4">
                    <div class="col" v-for="(news, index) in otherNews" :key="index">
                        <NewsCard 
                            :date="news.date"
                            :thumbnail="news.thumbnail"
                            :title="news.title"
                            :subtitle="news.subtitle"
                            :link="news.link"
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
    import { ref, computed, onMounted } from 'vue'
    import SubPagesHeader from '/src/components/SubPagesHeader.vue';
    import NewsCard from '/src/components/NewsCard.vue';
    import newsData from '/src/datas/news.json';

    const featured = ref([]);
    const news = ref([]);

    onMounted(() => {
        news.value = newsData.items;
        featured.value = news.value.slice(0, 4);
    });

    const otherNews = computed(() => {
        return news.value.slice(4);
    });

    const truncateText = (text, length = 200) => {
        return text.length > length ? text.substring(0, length) + '...' : text;
    };
</script>

<style lang="css" scoped>
    .card{
        transition: 0.25s;
    }
    .card:hover{
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    @media (max-width: 768px){
        .v-responsive.v-img{
            height: 282px !important;
        }
    }
</style>