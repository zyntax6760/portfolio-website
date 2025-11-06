<script>
	import { onMount } from 'svelte';
	import '$lib/app.css';
	import favicon from '$lib/assets/favicon.svg';

	let activeSection = 'home'; // 현재 활성 섹션

	const sections = ['home', 'about', 'skills', 'projects', 'contact'];

	// 네비 대상이 될 section을 추적
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				});
			},
			{
				root: null,
				threshold: 0.5 // 섹션의 절반 이상 보이면 활성으로
			}
		);

		sections.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="flex justify-center">
	<nav
		id="nav_shadow"
		class="backdrop-blur-xs fixed top-2 z-50 w-lvw rounded-full border-b border-white/10 bg-white/10 px-10"
	>
		<div class="mx-auto flex items-center justify-between p-4">
			<a href="/main#home">
				<img src="src\lib\assets\favicon.svg" alt="main logo" width="40" height="40" />
			</a>
			<ul class="gap-15 flex text-xl font-medium text-white">
				{#each sections as id}
					<li>
						<a
							href={'/main#' + id}
							class:text-blue-400={activeSection === id}
							class="transition-colors duration-200 hover:text-blue-400"
						>
							{#if id === 'home'}홈{/if}
							{#if id === 'about'}소개{/if}
							{#if id === 'skills'}능력{/if}
							{#if id === 'projects'}프로젝트{/if}
							{#if id === 'contact'}연락처{/if}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</nav>
</div>

<slot />

<style>
	:global(html, body) {
		font-family: 'Inter', 'Noto Sans CJK KR', sans-serif;
	}

	/* 활성 상태 스타일 */
	a.text-blue-400 {
		font-weight: 600;
	}
</style>
