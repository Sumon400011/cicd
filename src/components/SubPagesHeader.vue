<template>
    <section 
        class="sub-pages" 
        :style="{ backgroundImage: 'url(' + bgImg + ')' }"
    >
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="page-title-content">
                        <h1>{{pageTitle}}</h1>
                        <ul class="custom-bread-crumb">
                            <li style="font-size: 18px;" class="pl-lg-0">
                                <RouterLink class="nav-link me-2" to="/"> Home </RouterLink>
                            </li>
                            <li style="font-size: 18px;">
                                <RouterLink class="nav-link me-2" to="about"> {{ label }} </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
        import { defineProps } from 'vue';
        defineProps(["pageTitle", "label", "bgImg"]);
</script>


<style lang="css" scoped>

    .sub-pages {
        height: 400px;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        z-index: 9;
        position: relative;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .sub-pages:before {
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: .8;
        background-image: linear-gradient(to right, var(--bs-primary) 30%, rgb(0, 0, 0, 0.6));
    }

    .page-title-content ul li a {
        color: #fff;
    }

    .page-title-content ul li:not(:last-of-type):before {
        content: "/";
        position: absolute;
        color: #fff;
        right: -2%;
        top: 0px;
        font-weight: 500;
        font-size: 18px;
    }

    .page-title-content ul li.none-list:before {
        display: none;
    }

    .page-title-content {
        position: relative;
        z-index: 999;
    }

    .page-title-content h1 {
        margin-bottom: 0;
        line-height: 1.3;
        font-size: 40px;
        font-weight: 600;
        color: #fff;
    }

    .page-title-content ul {
        padding-left: 0;
        list-style-type: none;
        margin-top: 15px;
        margin-bottom: 0;
    }

    .page-title-content ul li {
        display: inline-block;
        position: relative;
        color: #fff;
        font-size: 17px;
        padding: 0 20px;
    }

    @media (max-width: 768px) {
        .page-title-content{
            text-align: center;
        }
        .page-title-content h1 {
            font-size: 32px;
        }
        .sub-pages {
            height: 250px;
        }
    }

</style>