<template>
    <div class="headline">
        <md-card>
            <md-card-media-cover md-solid>
                <md-card-media md-ratio="1:1">
                    <img src="" alt="Skyscraper">
                </md-card-media>

                <md-card-area>
                    <md-card-header>
                        <span class="md-title">{{ headlineTitle }}</span>
                        <span class="md-subhead">1/1 image</span>
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
        imageSrc: String
    }
}
</script>
<style scoped>
 .headline {
       width: 100%;
   }
</style>
