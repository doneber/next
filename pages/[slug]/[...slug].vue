<script setup>
const { path } = useRoute()
const parentPath = path.split('/').slice(0, -1).join('/')
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(parentPath))
const parentData = navigation['_rawValue'][0]
</script>
<template>
    <main>
        <div class="container">
            <header class="course-info">
                <NuxtLink :to="parentData._path">
                    <h3>
                        <span class="dash">.. / </span>
                        <span class="parent-title">{{ parentData.title }}</span>
                        <span class="dash"> /</span>
                    </h3>
                </NuxtLink>
            </header>
            <ContentDoc />
        </div>
    </main>
</template>
<style>
.course-info {
    margin: 16px 0 32px 0;
    color: rgb(179 179 197);
}

.course-info h3 {
    display: inline;
    font-size: 1.2rem;
    font-weight: 100;
}

.course-info h3 .dash {
    font-size: 1.4rem;
    color: rgb(179 179 197);
}

.course-info h3 .parent-title {
    color: rgb(179 179 197);

}

.course-info h3 .parent-title:hover {
    border-bottom: 2px solid rgb(179 179 197 /.3);
    padding-bottom: 0px;
}
</style>