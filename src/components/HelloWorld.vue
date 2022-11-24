<script setup lang="ts">
import { ref } from "vue";
import { articleRes } from "@/api/types";
import { getArticle } from "@/api";

defineProps<{ msg: string }>();

const count = ref(0);
const article = ref({} as articleRes);
const articleID = ref(1);
const getArticleHandler = async () => {
  const res = await getArticle(articleID.value);
  article.value = res;
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>标题：{{ article.title }}</h2>
  <h2>内容：{{ article.content }}</h2>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <span>文章ID</span>
    <select v-model="articleID">
      <option v-for="item in 3" :key="item" :value="item">{{ item }}</option>
    </select>
    <button @click="getArticleHandler">获取文章</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
