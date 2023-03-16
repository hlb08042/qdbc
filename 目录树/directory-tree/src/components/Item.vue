<template>
    <div>
        <ul class="tree-ul" >
            <li class="item" v-for="(item, index) in list" :key="index">
                <div :class="{ 'item-active': item.isActive }">
                    <div>
                        <!-- 图标 -->
                        <span>▶</span>
                        <!-- 文字 -->
                        <span @click="changeActive(item), changeOpen(item)">
                            {{ item.name }}{{ item.isActive }}
                        </span>
                    </div>
                </div>
                <ul v-if="item.children&&item.isOpen">
                    <!-- <Item v-for="item1 in item.children" :list="item1" :key="item1.id"
                        @click="changeActive(item1), changeOpen(item1)"></Item> -->
                    <li v-for="item1 in item.children" :key="item1.id" @click="changeActive(item1), changeOpen(item1)">{{ item1.name }}
                        <ul v-if="item1.children&&item1.isOpen">
                            <li v-for="item2 in item1.children" :key="item2.id" @click="changeActive(item2), changeOpen(item2)">{{ item2.name }}></li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Item",
    props: ['list'],
    methods: {
        changeOpen(item){
            item.isOpen = !item.isOpen
            this.$forceUpdate();
            },
        changeActive(item) {
            console.log('changeActive', item)
            // debugger 
            console.log(11)
            this.$emit('changeActive', item)
            this.$forceUpdate();
        }
    },
}
</script>

<style>

</style>