<template>
    <div>
        <h2>Favorite</h2>
        <input type="text" v-model="word" value="word">
        <p> {{ word }} </p>
    </div>
</template>

<script>

export default {
    name: "Favorite",
    components: {
        
    },
    data () {
        return {
            word: "Hello World!",
        }
    }
}
</script>