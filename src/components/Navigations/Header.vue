<template>
	<div class = "p-3 flex items-center justify-between">
		<div class="flex items-center">
			<button class = "rounded-full hover:bg-light p-3 flex items-center justify-center">
				<img class = "h-6 w-6"src="logo.png" alt="">
			</button>
			<button :key = "tabIndex" v-for = "(tab, tabIndex) in tabs" :class = "'rounded-full px-5 py-3 flex items-center justify-center ' + ( currentTab === tab.key ? 'bg-dark text-white' : 'hover:bg-light' )" @click = "changeTab(tab.key)">
				{{tab.name}}
			</button>
		</div>
		<div class="flex-grow relative">
			<span class = "material-icons absolute mt-3 ml-3 text-muted">search</span>
			<input type="text" class = "text-muted w-full py-3 pl-10 pr-3 rounded-full bg-light hover:bg-lightHover" placeholder = "Search">
		</div>
		<div class="flex items-center">
			<button class = "rounded-full hover:bg-light p-3 flex items-center justify-center relative">
				<span class = "text-3xl material-icons text-muted">notifications</span>
				<div v-if = "notifications.length > 0" class = "rounded-full w-5 h-5 text-white absolute bg-primary flex items-center justify-center ml-5 mb-5">
					{{notifications.length}}
				</div>
			</button>
			<button class = "rounded-full hover:bg-light p-3 flex items-center justify-center relative">
				<span class = "text-3xl material-icons text-muted">message</span>
				<div v-if = "messages.length > 0" class = "rounded-full w-5 h-5 text-white absolute bg-primary flex items-center justify-center ml-5 mb-5">
					{{messages.length}}
				</div>
			</button>
			<button class = "rounded-full hover:bg-light p-3 flex items-center justify-center">
				<div class = "w-6 h-6 bg-cover bg-center rounded-full" :style = "'background-image: url(' + profile.image + ')'"></div>
			</button>
			<button class = "w-6 h-6 hover:bg-light rounded-full flex items-center justify-center">
				<span class = "material-icons text-muted">expand_more</span>
			</button>
		</div>
	</div>
</template>

<script>

export default{
	data(){
		return {
			// TABS
			tabs:[
				{
					name: "Home",
					key: "home"
				},
				{
					name: "Today",
					key: "today"
				}
			],
			currentTab: "home",

			// NOTIFICATIONS
			notifications:[
				{
					text:"HI1",
					link: "/hi1"
				},
				{
					text:"HI2",
					link: "/hi2"
				},
				{
					text:"HI3",
					link: "/hi3"
				}
			],

			// MESSAGES NOTIFICATIONS
			messages:[
				{
					sender: "sender1",
					text:"HI1",
					link: "/hi1"
				},
				{
					sender: "sender2",
					text:"HI2",
					link: "/hi2"
				}
			],
			profile:{
				image: '/img/profile-picture.png'
			}
		}
	},
	methods:{
		changeTab(newKey){
			this.currentTab = newKey;
		}
	}
};
</script>