<template>
    <div class="headline" @click="onClick(newsUrl)">
        <md-card md-with-hover>
            <md-card-media-cover md-solid>
                <md-card-media>
                    <img :src="imageSrc">
                </md-card-media>
                <md-card-area>
                    <md-card-header>
                        <span class="md-title">{{ headlineTitle }}</span>
                        <span class="md-subhead"> {{ headlineDescription }}</span>
                    </md-card-header>
                </md-card-area>
            </md-card-media-cover>
        </md-card>
    </div>
</template>


<script>
export default {
    name: "FeaturedNews",
    props: {
        headlineTitle: String,
        headlineDescription: String,
        imageSrc: String,
        newsUrl: String
    },
    methods: {
        onClick(url) {
            window.location = url;
        }
    }
}
</script>
