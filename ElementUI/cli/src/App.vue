<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Layout></Layout>
    <Container></Container>
    <Icon></Icon>
    <Button></Button>
    <Radio></Radio>
    <br><br><br>
    <Input></Input>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Layout from './components/Layout.vue'
import Container from './components/Container.vue'
import Icon from './components/Icon.vue'
import Button from './components/Button.vue'
import Radio from './components/Radio.vue'
import Input from './components/Input.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    Layout,
    Container,
    Icon,
    Button,
    Radio,
    Input
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
