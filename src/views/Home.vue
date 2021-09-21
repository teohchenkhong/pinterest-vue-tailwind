<template>
	<div class = "px-20 w-full flex flex-wrap">
		<div class="w-1/5" v-for = "(subCards, subCardIndex) in splitCards" :key = "subCardIndex">
			<div class="w-full" v-for = "({src, title, user, recommended}, cardIndex) in subCards" :key=  "cardIndex">
				<div class="w-full p-2">
					<Card :key = "src" 
					:src = "src"
					:title = "title"
					:user = "user"
					>
					</Card>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
//-------------------- IMPORTS ---------------------//
import Card from "../components/Card";


//--------------------- EXPORT ---------------------//
export default{
	components: {Card},
	data(){
		return {
			cards: [
				{
					src: '/img/cards/1.jpg',
					title: 'Title 1',
					user: 'User 1',
					recommended: 'Travel'
				},
				{
					src: '/img/cards/2.jpg',
					title: 'Title 2',
					user: 'User 2',
					recommended: 'Travel'
				},
				{
					src: '/img/cards/3.jpg',
					title: 'Title 3',
					user: 'User 3',
					recommended: 'Travel'
				},
				{
					src: '/img/cards/4.jpg',
					title: 'Title 4',
					user: 'User 4',
					recommended: 'Travel'
				},
				{
					src: '/img/cards/5.jpg',
					title: 'Title 5',
					user: 'User 5',
					recommended: 'Travel'
				},
				{
					src: '/img/cards/6.jpg',
					title: 'Title 6',
					user: 'User 6',
					recommended: 'Travel'
				},
				{
					src: '/img/cards/7.jpg',
					title: 'Title 7',
					user: 'User 7',
					recommended: 'Travel'
				},
				{
					src: '/img/cards/8.jpg',
					title: 'Title 8',
					user: 'User 8',
					recommended: 'Travel'
				},
				{
					src: '/img/cards/9.jpg',
					title: 'Title 9',
					user: 'User 9',
					recommended: 'Travel'
				},
				{
					src: '/img/cards/10.jpg',
					title: 'Title 10',
					user: 'User 10',
					recommended: 'Travel'
				},
				{
					src: '/img/cards/11.jpg',
					title: 'Title 11',
					user: 'User 11',
					recommended: 'Travel'
				},
				{
					src: '/img/cards/12.jpg',
					title: 'Title 12',
					user: 'User 12',
					recommended: 'Travel'
				},
				{
					src: '/img/cards/13.jpg',
					title: 'Title 13',
					user: 'User 13',
					recommended: 'Travel'
				},
				{
					src: '/img/cards/14.jpg',
					title: 'Title 14',
					user: 'User 14',
					recommended: 'Travel'
				},
				{
					src: '/img/cards/15.jpg',
					title: 'Title 15',
					user: 'User 15',
					recommended: 'Travel'
				},
				{
					src: '/img/cards/16.jpg',
					title: 'Title 16',
					user: 'User 16',
					recommended: 'Travel'
				},
				{
					src: '/img/cards/17.jpg',
					title: 'Title 17',
					user: 'User 17',
					recommended: 'Travel'
				}
			]
		}
	},
	computed:{
		splitCards(){
			let cards = this.cards;
			let nPerRow = 5;
			let subCardLength = Math.ceil(cards.length/nPerRow);
			let output = new Array(nPerRow).fill([]).map((i, index)=>{
				return cards.slice(index*subCardLength, (index + 1)*subCardLength);
			});
			console.log(output);
			return output
		}
	}
};
</script>