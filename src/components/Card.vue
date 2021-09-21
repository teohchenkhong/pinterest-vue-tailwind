<template>
    <div class="">
        <div class = "relative w-full h-full" @mouseover = "hovering=true;" @mouseleave = "hovering = false;">
            <!-- IMAGE -->
            <img class = "rounded-lg" :src="src" alt="">
            <div class = "opacity-0 hover:opacity-100">
                <!-- OVERLAY -->
                <div class="absolute bg-dark opacity-50 w-full h-full inset-0 rounded-lg"></div>

                <!-- UI BUTTON -->
                <div class="absolute top-0 w-full h-full flex flex-col justify-between p-2">
                    <!-- TOP ROW -->
                    <div class="flex items-center justify-between">
                        <button class = "flex items-center">
                            <p class="font-semibold text-white"></p>
                            <span class = "material-icons text-white">expand_more</span>
                        </button>
                        <button class = "font-semibold text-white rounded-full px-5 py-3 bg-primary">
                            Save
                        </button>
                    </div>
                    <!-- BOT ROW -->
                    <div class="flex items-center w-full">
                        <button class = "ml-auto mr-2 bg-white rounded-full w-8 h-8 items-center justify-center text-dark opacity-95 hover:opacity-100 font-semibold">
                            <span class = "material-icons text-base">ios_share</span>
                        </button>
                        <button class = "mr-2 bg-white rounded-full w-8 h-8 items-center justify-center text-dark opacity-95 hover:opacity-100 font-semibold">
                            <span class = "material-icons text-base">more_horiz</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class = "text-sm leading-tight pt-2">
            <p class="font-bold">{{title}}</p>
            <p>{{user}}</p>
        </div>
    </div>
</template>


<script>
export default{
    props: ["src", "title", "user"],
    data(){
        return {
            hovering: false
        }
    }
};
</script>