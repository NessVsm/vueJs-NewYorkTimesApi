<template>
  <div id="app">'
    <Toolbar
            v-on:sectionSelected="getSection"
            v-on:searchValue="getSelectedNews"
            :sections="sections"/>
    <div class="section-divider">
      <span class="sectionTitle"> Featured </span>
    </div>
    <div v-if="featuredNews && featuredNews.length">
      <div v-for="featured in featuredNews" :key="featured.rank">
        <FeaturedNews
                :headlineTitle="featured.title"
                :headlineDescription="featured.abstract"
                :imageSrc="getImagem(featured)"
                :newsUrl="getUrl(featured)"/>
      </div>
    </div>
    <div v-else>
      <span> No results found! </span>
    </div>
    <hr class="divider"/>
    <div class="section-divider">
      <span class="sectionTitle"> Latest </span>
    </div>
    <div v-if="latestNews && latestNews.length">
      <div v-for="latest in latestNews" :key="latest.rank">
        <LatestNews
            :headlineTitle="latest.title"
            :headlineDescription="latest.abstract"
            :newsUrl="getUrl(latest)"
        />
      </div>
    </div>
    <div v-else>
      <span> No results found! </span>
    </div>
    <Pagination
      v-if="totalNews > 0"
      v-on:pageSelected="getNewsFromPage"/>
  </div>
</template>

<script>
import FeaturedNews from './components/FeaturedNews.vue'
import LatestNews from './components/LatestNews.vue';
import Toolbar from './components/Toolbar.vue';
import MonthlyNews from './services/MonthlyNews';
import Pagination from "@/components/Pagination";

export default {
  name: 'App',
  components: {
    Pagination,
    FeaturedNews,
    LatestNews,
    Toolbar
  },
  data() {
    return {
      featuredNews: [],
      latestNews: [],
      allNews: [],
      sections: [],
      sectionSelected: '',
      totalNews: 0,
      initialPage: 0
    }
  },
  created() {
    var self = this;
    MonthlyNews.getMonthlyNews(9, news => {
      self.allNews = news.data.results;
      self.sections = [...new Set(self.allNews.map(result => result.subsection))].filter(value => value !== '');
      self.getNews(self.allNews, '');
    })
  },
  methods: {
    getNews(news, sectionSelected) {
      let selectedNews =  sectionSelected === '' ? news : news.filter(item => item.subsection === sectionSelected);
      const initialFeatured = this.initialPage;
      const finalFeatured = initialFeatured + 3;
      this.featuredNews = selectedNews.slice(initialFeatured, (initialFeatured + 3));
      this.latestNews = selectedNews.slice(finalFeatured, finalFeatured + 9);
      this.sectionSelected = sectionSelected;
      this.totalNews = this.allNews.length;
    },
    getImagem (featuredNews) {
      if (featuredNews.multimedia) {
        return featuredNews.multimedia[0].url;
      }
    },
    getSection(s) {
      this.getNews(this.allNews, s);
    },
    getUrl(news) {
      if(news) {
        return news.url;
      }
    },
    getSelectedNews(n) {
      const news = this.allNews.filter(item => item.title.toLocaleLowerCase().includes(n.toLowerCase()) );
      this.getNews(news, this.sectionSelected);
    },
    getNewsFromPage(page) {
      this.initialPage = page - 1;
      this.getNews(this.allNews, this.sectionSelected);
    },
    initiateLocalStorage() {
      localStorage.setItem('totalPages', parseInt(this.totalNews/9));
    }
  },
  watch: {
    totalNews: function () {
      this.initiateLocalStorage();
    }
  }
}
</script>

<style>

.divider {
  border-top: 1px dotted #ccc;
  margin-top: 20px;
}
.section-divider {
  border-bottom: 1px solid #ccc;
  display: flex;
}

.sectionTitle {
  border-bottom: 5px solid red;
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
  padding-bottom: 5px;
  text-transform: uppercase;
}


</style>
