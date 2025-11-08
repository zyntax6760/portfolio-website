<script>
	import { onMount } from 'svelte';
	import '$lib/app.css';
	import { isMobile, mobileMenuOpen } from '$lib/components/mobile_nav.js';

	let activeSection = 'home';
	let mobile = false;

	const sections = ['home', 'about', 'skills', 'projects', 'contact'];

	function toggleMobileMenu() {
		mobileMenuOpen.update((n) => !n);
	}

	function handleResize() {
		mobile = isMobile();
		if (!mobile) {
			mobileMenuOpen.set(false);
		}
	}

	onMount(() => {
		handleResize();

		window.addEventListener('resize', handleResize);

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
				threshold: 0.5
			}
		);

		sections.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => {
			window.removeEventListener('resize', handleResize);
			observer.disconnect();
		};
	});
</script>

<svelte:head>
	<link rel="icon" href="/imgs/favicon.svg" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{#if mobile}
	<div class="mx-10 flex justify-center">
		<nav
			id="nav_shadow"
			class="backdrop-blur-xs min-w-lvw rounded-4xl fixed top-2 z-50 mt-3 overflow-hidden border-b border-white/10 px-10 transition-all duration-300 ease-in-out {$mobileMenuOpen
				? 'bg-black/60'
				: 'bg-white/10'}"
			style="height: {$mobileMenuOpen ? '300px' : '70px'};"
		>
			<div class="mx-auto flex flex-col items-center justify-between p-4">
				<!-- 상단 로고 & 햄버거 버튼 -->
				<div class="flex w-full items-center justify-between">
					<a href="/main#home">
						<img src="/imgs/profile.svg" alt="main logo" width="40" height="40" />
					</a>
					<button
						on:click={toggleMobileMenu}
						class="z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
						aria-label="메뉴"
					>
						<span
							class="block h-0.5 w-6 bg-white transition-all duration-300"
							class:rotate-45={$mobileMenuOpen}
							class:translate-y-2={$mobileMenuOpen}
						></span>
						<span
							class="block h-0.5 w-6 bg-white transition-all duration-300"
							class:opacity-0={$mobileMenuOpen}
						></span>
						<span
							class="block h-0.5 w-6 bg-white transition-all duration-300"
							class:-rotate-45={$mobileMenuOpen}
							class:-translate-y-2={$mobileMenuOpen}
						></span>
					</button>
				</div>

				<!-- 메뉴 항목 -->
				{#if $mobileMenuOpen}
					<ul class="mt-6 flex flex-col items-center gap-4 text-xl font-medium text-white">
						{#each sections as id}
							<li>
								<a
									href={'/main#' + id}
									on:click={toggleMobileMenu}
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
				{/if}
			</div>
		</nav>
	</div>
{:else}
	<div class="flex justify-center">
		<nav
			id="nav_shadow"
			class="backdrop-blur-xs rounded-4xl fixed top-2 z-50 mt-3 w-[99vw] border-b border-white/10 bg-white/10 px-10"
		>
			<div class="mx-auto flex items-center justify-between p-4">
				<a href="/main#home">
					<img src="/imgs/profile.svg" alt="main logo" width="40" height="40" />
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
{/if}

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
