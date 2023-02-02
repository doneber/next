<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted } from 'vue'
import { useCourses } from '@/stores/courses'

const { path } = useRoute()
const parentPath = path.split('/').slice(0, -1).join('/')

const { data: navigation } = await useAsyncData(path, () => fetchContentNavigation(parentPath))
const currentLessonList = navigation['_rawValue'].find(course => course._path === parentPath).children
const currentdata = currentLessonList.find((item) => item._path === parentPath)
const authorData = currentdata.author

/* Obtiene la información de la navegación de contenidos. */
const courses = useCourses()
if (!courses.courseList[parentPath]) {
  let lessonListWithoutIndexMd = currentLessonList.filter((item) => item._path !== parentPath)
  lessonListWithoutIndexMd.forEach(item => {
    item.seen = false
  });
  courses.addCourse(parentPath, lessonListWithoutIndexMd)
}

let lessonList = courses.courseList[parentPath]


/* Verifica si el usuario ha llegado al final de la página */
const scrolling = (e) => {
  const clientHeight = e.target.clientHeight
  const scrollHeight = e.target.scrollHeight
  const scrollTop = e.target.scrollTop

  if (scrollTop >= (scrollHeight - clientHeight - 130)) {
    const lesson = lessonList.find(e => e._path === path)
    lesson.seen = true
  }
}
/* al cargar la página dispara el evento scroll */
const input = ref(null)
// let mobileDevice = isMobile()
let drawerToggle = ref(false)
// console.log(drawerToggle.value);
const toggleDrawer = () => {
  console.log({drawerToggle});
  drawerToggle.value = !drawerToggle.value
}

onMounted(() => {
  input.value.dispatchEvent(new Event("scroll"))
  drawerToggle.value = window.innerWidth > 768
})

</script>
<template>
  <div class="wrapper">
    <main
      ref="input"
      class="rich-content"
      @scroll="scrolling"
    >
      <LessonList
        v-show="drawerToggle"
        class="lesson-list"
        :path="parentPath"
        :lesson-list="lessonList"
      />
      <div class="container">
        <TheBreadcrumb />
        <AuthorInfo :author="authorData" />
        <ContentDoc />
        <!-- <TheFooter /> -->
      </div>
    </main>
    <button
      class="btn-open-drawer"
      @click="toggleDrawer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -3 20 20"
      >
        <g
          fill="none"
          fill-rule="evenodd"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path d="M1 1h18M1 7h13M1 13h8" />
        </g>
      </svg>
    </button>
    <button
      v-show="drawerToggle"
      class="btn-close-drawer"
      @click="toggleDrawer"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      ><g
        id="SVGRepo_bgCarrier"
        stroke-width="0"
      /><g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      /><g id="SVGRepo_iconCarrier"> <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
        fill="#ffffff"
      /> </g></svg>
    </button>
  </div>
</template>
<style scoped>
.btn-close-drawer {
  display: none;
}
.btn-open-drawer:hover {
  transition: transform 0.1s ease-in-out;
  transform: scale(1.1);
  background-color: var(--card-bg-color-hover);
}
.btn-open-drawer {
    display: block;
    position: fixed;
    bottom: 12px;
    left: 12px;
    z-index: 9;
    
    height: 55px;
    width: 55px;
    padding: 12px;
    border-radius: 50%;
    border: none;
    box-shadow: 0 0 5px 5px rgb(0 0 0 /.1);
    
    background: var(--card-bg-color);
    cursor: pointer;
  }
.lesson-list {
  overflow: auto;
}
.wrapper {
  display: flex;
  height: calc(100vh - var(--app-bar-height));
}

.rich-content {
  display: flex;
  overflow: auto;
}

@media (max-width: 768px) {
  .lesson-list {
    background-color: var(--bg-color);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;

    width: 90%;
    max-height: 80%;
    box-shadow: 0 0 0 100vw rgba(15, 16, 18, 0.8);
  }

  .btn-close-drawer{
    display: block;
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 12;
    
    height: auto;
    width: 50px;
    height: 50px;
    padding: 5px;
    border: none;
    border-radius: 50%;

    background: rgba(15, 16, 18);
    cursor: pointer;
  }
}
</style>