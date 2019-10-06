<template>
    <div>
        <Navbar />
        <main class="py-4">
            <div class="container">
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>

<script>
    import  Navbar from './layouts/Navbar'
    export default {
        components:{
            Navbar
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
