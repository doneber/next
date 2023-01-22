<script setup>
const { path } = useRoute()
const currentPathData = await queryContent(path).findOne()

const parentPath = path.split('/').slice(0, -1).join('/')
const parentPathData = await queryContent(parentPath).findOne()

</script>
<template>
    <header class="breadcrumb">
        <h3>
            <NuxtLink to="/">
                <span class="parent-title"> ...</span>
            </NuxtLink>
            <span class="dash"> / </span>
            <NuxtLink :to="parentPath">
                <span class="parent-title">{{ parentPathData.navigation.title }}</span>
            </NuxtLink>
            <span class="dash"> / </span>
            <span>{{ currentPathData.title }}</span>
        </h3>
    </header>
</template>

<style>
.breadcrumb {
    margin: 16px 0 32px 0;
    color: rgb(179 179 197);
}

.breadcrumb h3 {
    display: inline;
    font-size: 1.2rem;
    font-weight: 100;
}

.breadcrumb h3 .dash {
    font-size: 1.4rem;
    color: rgb(179 179 197);
}

.breadcrumb h3 .parent-title {
    color: rgb(179 179 197);
}

.breadcrumb h3 .parent-title:hover {
    border-bottom: 2px solid rgb(179 179 197 /.3);
    padding-bottom: 0px;
}
</style>
