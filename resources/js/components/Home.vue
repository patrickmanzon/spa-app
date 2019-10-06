<template>
    <div>
        <p>Hello World</p>
    </div>
</template>

<script>
    export default{
        created() {
            console.log(this.$store.state.user);
        }
    }
</script>