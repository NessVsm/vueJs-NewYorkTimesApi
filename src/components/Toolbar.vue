<template>
    <md-toolbar md-elevation="0">
        <div class="pageTitle">
            <img class="icon" src="https://symbols-electrical.getvecta.com/stencil_97/70_the-new-york-times-icon.4f402b8393.jpg"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-E1FBHSrlxsaOZg0ysuQg9gJMvtP-7CaQw&usqp=CAU"/>
        </div>
        <md-field>
            <label>Search by title</label>
            <md-input
                    v-model="search"
                    @change="setSearch"></md-input>
            <md-icon>search</md-icon>
        </md-field>
        <div class="md-layout md-gutter">
            <div class="md-layout-item">
                <md-field>
                    <label>Section</label>
                    <md-select
                            v-model="section"
                            name="section"
                            id="section"
                            @md-selected="onSectionChange">
                        <md-option> Section... </md-option>
                        <md-option
                                v-for="section in sections"
                                v-bind:key="section"
                                :value="section">
                                {{ section }}
                        </md-option>
                    </md-select>
                </md-field>
            </div>
        </div>
    </md-toolbar>
</template>

<script>
export default {
    name: "Toolbar",
    props: {
        sections: Array,
        search: String,
        section: String
    },
    methods: {
        onSectionChange(s) {
            this.$emit('sectionSelected', s);
        },
        setSearch() {
            this.$emit('searchValue', this.search);
        }
    }


}
</script>

<style scoped>
.pageTitle {
    background-color: #fff;
    width: 100%;
    height: 60px;
    display: flex;
}
.pageTitle .icon {
    width: 50px;
    height: 50px;
}
</style>
