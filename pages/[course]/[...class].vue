<script setup>
const { path } = useRoute()
const parentPath = path.split('/').slice(0, -1).join('/')
</script>
<template>
    <div class="wrapper">
        <ClassSideBar :path="parentPath" />
        <main>
            <div class="container">
                <Breadcrumb />
                <ContentDoc />
            </div>
            <Footer />
        </main>
    </div>
</template>
<style scoped>
.wrapper {
    display: flex;
    height: calc(100vh - var(--app-bar-height));
}

.rich-content {
    overflow: auto;
}

@media (max-width: 900px) {
    .wrapper {
        flex-direction: column-reverse;
        justify-content: start;
    }
}
</style>