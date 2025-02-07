<template lang="">
    <div class="gellary-section section-spacing">
        <h1 class="text-center fw-bold">Gellary</h1>
        <div class="container-fluid pt-10">
            <viewer :images="photos.items" class="row row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 g-3">
                <img 
                    v-for="photo in photos.items"
                    :key="photo.id"
                    :src="photo.img"
                    class="gallery-img object-fit-cover"
                />
            </viewer>
        </div>
    </div>
</template>
<script setup>
    import photos from '/src/datas/gallery.json';
    
</script>

<style lang="css" scoped>
    .gallery-img{
        /* width: 100%; */
        height: 250px;
        cursor: pointer;
        transition: 0.15s;
    }
    .gallery-img:hover{
        opacity: 0.8;
        transition: 0.15s;
    }
</style>