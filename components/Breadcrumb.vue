<script setup>
const { path } = useRoute()
const currentPathData = await queryContent(path).findOne()

let parentPathData = null
const parentPath = path.split('/').slice(0, -1).join('/')
if (parentPath.length > 0) {
    parentPathData = await queryContent(parentPath).findOne()
}
</script>
<template>
    <header class="breadcrumb">
        <NuxtLink to="/">
            <span class="title"> ... </span>
        </NuxtLink>
        <template v-if="parentPathData">
            <span class="dash">/</span>
            <NuxtLink :to="parentPathData._path">
                <span class="title">{{ parentPathData.navigation.title }}</span>
            </NuxtLink>
        </template>
        <span class="dash">/</span>
        <span class="title current-title">{{ currentPathData?.navigation?.title || currentPathData.title }}</span>
    </header>
</template>

<style scoped>
.breadcrumb {
    display: flex;
    align-items: center;
    gap: 7px;
    margin: 16px 0 32px 0;
}

.breadcrumb .title {
    font-size: 1.1rem;
    font-weight: 100;
    color: rgb(179 179 197);
    border-bottom: 1px solid transparent;
    padding-bottom: 1px;
}

.breadcrumb .title:hover {
    border-bottom: 1px solid rgb(179 179 197 /.7);
}

.breadcrumb .current-title:hover {
    border-bottom: none;
}

.breadcrumb .dash {
    font-size: 1.2rem;
    color: rgb(179 179 197);
}
</style>
