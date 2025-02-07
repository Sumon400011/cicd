<template>
	<div class="card specialist-card">
		<img alt="" class="spacialist-img" src="/images/doctors/doctor-1.jpg" />
		<div class="card-body">
			<div class="icon"><i class="fa-solid fa-user-doctor"></i></div>
			<h3 class="card-title">Norman Collins</h3>
			<p class="card-subtitle">Gynocology</p>
			<a class="btn" tabindex="0">See Details</a>
		</div>
	</div>
</template>

<script setup></script>

<style lang="css">
	.specialist-card {
		border: 0;
		transition: 0.25s;
		cursor: pointer;
		text-align: center;
	}

	.specialist-card:hover .spacialist-img {
		border-color: var(--bs-primary);
	}

	.specialist-card:hover .btn {
		color: var(--white-color);
		background-color: var(--bs-primary);
	}

	.specialist-card .spacialist-img {
		height: 220px;
		width: 220px;
		border: 3px solid white;
		border-radius: 50%;
		display: block;
		margin: 10px auto;
		box-shadow: #0000000d 0 6px 24px, #00000014 0 0 0 1px;
		transition: 0.25s;
	}

	.specialist-card .card-body {
		position: relative;
	}

	.specialist-card .card-body .icon {
		height: 40px;
		width: 40px;
		border-radius: 50%;
		background-color: var(--bs-primary);
		position: absolute;
		top: -30px;
		left: 50%;
		transform: translate(-50%);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5px;
		color: #fff;
		border: 2px solid white;
	}

	.specialist-card .card-title {
		font-size: 18px;
		font-weight: 600;
		text-align: center;
	}

	.specialist-card .card-subtitle {
		font-size: 15px;
		text-align: center;
		color: var(--bs-primary);
	}

	.specialist-card .btn {
		color: var(--primary-color);
		font-size: 14px;
		display: inline-block;
		padding: 6px 24px;
		border-radius: 200px;
		background-color: var(--primary-color-opacity-2);
		margin: 15px auto 0;
	}
</style>
