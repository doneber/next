<script setup>

const { path } = useRoute()
const currentPathData = await queryContent(path).findOne()

let parentPathData = null
const parentPath = path.split('/').slice(0, -1).join('/')
if (parentPath.length > 0) {
    parentPathData = await queryContent(parentPath).findOne()
}

const goBack = parentPath || '/'

</script>
<template>
  <header class="breadcrumb">
    <NuxtLink
      class="back-icon"
      :to="goBack"
    >
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
      >
        <g
          id="SVGRepo_bgCarrier"
          stroke-width="0"
        />
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          <defs />
          <g
            id="arrow_left"
            data-name="arrow left"
          >
            <path
              class="cls-1"
              d="M22,29.73a1,1,0,0,1-.71-.29L9.93,18.12a3,3,0,0,1,0-4.24L21.24,2.56A1,1,0,1,1,22.66,4L11.34,15.29a1,1,0,0,0,0,1.42L22.66,28a1,1,0,0,1,0,1.42A1,1,0,0,1,22,29.73Z"
            />
          </g>
        </g>
      </svg>
    </NuxtLink>
    <NuxtLink to="/">
      <span class="dash">/</span>
    </NuxtLink>
    <template v-if="parentPathData">
      <NuxtLink :to="parentPathData._path">
        <span class="title">{{ parentPathData.navigation.title }}</span>
      </NuxtLink>
      <span class="dash">/</span>
    </template>
    <span class="title current-title">{{ currentPathData?.navigation?.title || currentPathData.title }}</span>
  </header>
</template>

<style scoped>
.breadcrumb {
    top: 0;
    position: sticky;

    display: flex;
    align-items: center;
    gap: 7px;
    margin: 0px 0 16px 0;
    padding: 12px 0 12px 0;

    background-color: var(--bg-color);
}

.breadcrumb .back-icon:hover {
  background-color: var(--card-bg-color);
  box-shadow: 0 0 5px rgba(0 0 0 /.1);
}
.breadcrumb .back-icon {
    place-items: center;
    box-sizing: content-box;
    width: 1.4rem;
    height: 1.4rem;
    padding: 6px;
    cursor: pointer;
    border-radius: 4px;
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
    border-bottom: 1px solid transparent;
}

.breadcrumb .dash {
    font-size: 1.2rem;
    color: rgb(179 179 197);
}

@media (max-width: 900px) {

    .breadcrumb .title,
    .breadcrumb .dash {
        font-size: 1rem;
    }
}
</style>
