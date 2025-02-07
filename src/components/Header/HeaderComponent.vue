<template lang="">
	<nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
		<div class="container">
			<RouterLink to="/" class="navbar-brand" href="#">
				<img src="/images/bdaaa-logo.png" class="img-fluid company-logo" />
			</RouterLink>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#offcanvasNavbar"
				aria-controls="offcanvasNavbar"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div
				class="offcanvas offcanvas-end"
				tabindex="-1"
				id="offcanvasNavbar"
				aria-labelledby="offcanvasNavbarLabel"
			>
				<div class="offcanvas-header">
					<h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					></button>
				</div>
				<div class="offcanvas-body">
					<ul
						class="navbar-nav justify-content-end flex-grow-1 pe-3 align-items-center"
					>
						<li
							class="nav-item"
							v-for="(nav, index) in menus.items"
							:key="index"
						>
							<RouterLink class="nav-link me-2" :to="nav.route">
								{{ nav.name }}
							</RouterLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup>
	import { onMounted } from "vue";
	import menus from "/src/datas/menus.json";

	onMounted(() => {
		// console.log(menus.items);
	});
</script>

<style lang="css" scoped>
	@import "./Header.css";
</style>