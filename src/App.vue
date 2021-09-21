<template>
	<div id="app">
		<Header></Header>
		<routerView></routerView>
	</div>
</template>

<script>
//-------------------- IMPORTS ---------------------//
import Header from "./components/Navigations/Header";


//--------------------- EXPORT ---------------------//
export default{
	components: {
		Header
	}
};
</script>