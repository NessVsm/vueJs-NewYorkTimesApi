<template>
   <div>
       <ul class="pagination">
           <li class="pages"
               v-for="index in 6"
               :key="index"
               :class="{ 'active': 1 === index }"
                @click="changePage(index, $event)">
               {{ index }}
           </li>
       </ul>
   </div>
</template>

<script>
    export default {
        name: "Pagination",
        props: {
            totalPages: Number,
            pageSelected: Number
        },
        created(){
            this.totalPages = localStorage.getItem('totalPages');
        },
        methods: {
            changePage(page, evt) {
                this.pageSelected = page;
                this.$emit('pageSelected', page);
                document.querySelector('.active').classList.remove('active')
                evt.target.classList.add('active');
            }
        }
    }
</script>

<style scoped>
.pagination {
    display: flex;
    justify-content: center;
}
.pages {
    border: 1px solid gray;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin: 0 5px;
    width: 30px;
}
.active {
    background-color: #ccc;
}

</style>
