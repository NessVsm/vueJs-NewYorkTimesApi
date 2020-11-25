<template>
    <div @click="onClick(newsUrl)">
        <md-card md-with-hover>
            <md-ripple>
                <md-card-header>
                    <div class="md-title">{{ headlineTitle }}</div>
                </md-card-header>
                <md-card-content> {{headlineDescription }}</md-card-content>
            </md-ripple>
        </md-card>
    </div>
</template>

<script>
export default {
    name: "LatestNews",
    props: {
        headlineTitle: String,
        headlineDescription: String,
        newsUrl: String
    },
    methods: {
        onClick(url) {
            window.location = url;
        }
    }
}
</script>
