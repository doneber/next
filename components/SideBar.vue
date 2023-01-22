<script setup>
const props = defineProps(['path'])
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(props.path))
const list = navigation['_rawValue'][0]['children']
const courseList = list.filter((item) => item._path !== props.path)
</script>

<template>
    <nav>
        <ul class="list-class">
            <li v-for="link of courseList" :key="link._path">
                <NuxtLink :to="link._path">
                    <div class="card-class">
                        <span>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#FFF">
                                <path
                                    d="M4 21.4V2.6a.6.6 0 01.6-.6h11.652a.6.6 0 01.424.176l3.148 3.148A.6.6 0 0120 5.75V21.4a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6zM8 10h8M8 18h8M8 14h4"
                                    stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                                <path d="M16 2v3.4a.6.6 0 00.6.6H20" stroke="#FFF" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
                        {{ link.title }}
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    overflow: auto;
    border-right: 1px solid #2c2c31;
}

.list-class li {
    padding: 16px;
    padding-left: 12px;
    border-bottom: 1px solid #2c2c31;
}

.card-class {
    display: flex;
    align-items: center;
    gap: 12px;
}
</style>