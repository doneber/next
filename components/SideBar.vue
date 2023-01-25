<script setup>
const { path } = useRoute()
const props = defineProps(['path'])
const currentPath = props.path || path

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(currentPath))
const currentCourse = navigation['_rawValue'].find(course => course._path === currentPath)
const courseList = currentCourse.children.filter((item) => item._path !== currentPath)

const markCheckbox = () => {
    console.log('checkbox');
}
</script>

<template>
    <nav>
        <ul class="list-class">
            <template v-for="link of courseList">
                <NuxtLink :to="link._path">
                    <li :key="link._path">
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
                        <label class="checkbox-container" @click.stop="markCheckbox()">
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                    </li>
                </NuxtLink>
            </template>
        </ul>
    </nav>
</template>

<style>
nav {
    overflow: auto;
    border: 1px solid #2c2c31;
}

.list-class li {
    display: flex;
    gap: 18px;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    padding-left: 12px;
    border-bottom: 1px solid #2c2c31;
}

.card-class {
    display: flex;
    align-items: center;
    gap: 12px;
}

/* The container */
.checkbox-container {
    display: inline-block;
    position: relative;
    padding-left: 22px;
    widows: 35px;
    margin-bottom: 24px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default checkbox */
.checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

/* Create a custom checkbox */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: rgb(52, 59, 73);
    border-radius: 4px;
}

/* On mouse-over, add a grey background color */
.checkbox-container:hover input~.checkmark {
    background-color: rgb(40, 46, 59);
}

/* When the checkbox is checked, add a blue background */
.checkbox-container input:checked~.checkmark {
    background-color: rgb(52, 59, 73);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.checkbox-container input:checked~.checkmark:after {
    display: block;
}

/* Style the checkmark/indicator */
.checkbox-container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
</style>