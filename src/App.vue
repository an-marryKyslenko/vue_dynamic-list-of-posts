<script setup>
  import { onMounted, provide, ref, watch } from "vue";
  import { postsApi } from "./api/posts";

  import Header from "./components/Header.vue";
  import NoList from "./components/NoList.vue";
  import SideBar from "./components/SideBar.vue";
  import PostPrevie from "./components/PostPrevie.vue";
  import AddPost from "./components/AddPost .vue";
  import Loader from "./components/Loader.vue";
  import Table from "./components/Table.vue";

  const posts = ref([]);
  const activePost = ref(null);
  const isCreatedPost = ref(false);
  const isOpenSideBar = ref(false);
  const isLoadingData = ref(false);

  const loadPosts = async () => {
    isLoadingData.value = true
    try {
      const res = await postsApi.getPosts();
      
      posts.value = res.data;
      isLoadingData.value = false;
    } catch (error) {
      console.error(error)
    }
  }

  onMounted(loadPosts)

  watch(activePost, (val) =>{
    if(val) {
      loadPosts()
    }
  })

  const createPost = async (formData) => {
    try {
      const res = await postsApi.createPost(formData);
      isCreatedPost.value = false;
      activePost.value = res.data;
    } catch (error) {
      console.error(error)
    }
  }

  const openSideBar = () =>{
    isCreatedPost.value = true;
    isOpenSideBar.value = true;
    activePost.value = null;
  }

  const resetForm = () =>{
    isOpenSideBar.value = false;
    isCreatedPost.value = false;
  }

  // provide('a')

</script>

<template>
  <Header />
  <main class="section">
    <div class="container">
      <div class="columns">
        <div :class="['column', isOpenSideBar ? 'is-half' : 'is-full']">
          <div class="box is-success">
            <div class="block">
              <div class="block is-flex is-justify-content-space-between">
                <p class="title">Posts</p>
                <button 
                  type="button" 
                  class="button is-link"
                  :class="{'is-light': isCreatedPost}"
                  @click="openSideBar"
                >Add New Post</button>
              </div>
  
              <Loader v-if="isLoadingData"/>

              <Table v-if="posts.length > 0" :posts="posts" v-model="activePost"/>
  
              <NoList v-else text="posts"/>
            </div>
          </div>
        </div>

        <SideBar :class="{'Sidebar--open': activePost || isCreatedPost}">
          <PostPrevie v-if="activePost" :activePost="activePost"/>
          <AddPost @submit="createPost" v-else/>
        </SideBar>
      </div>

    </div>
  </main>

</template>

<style scoped>

</style>
