<script>
	import '$lib/app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $$slots;
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
		class="backdrop-blur-xs fixed top-2 z-50 w-lvw rounded-full border-b border-white/20 bg-white/10 px-10"
	>
		<div class="mx-auto flex items-center justify-between p-4">
			<!-- 로고 -->
			<!-- svelte-ignore a11y_missing_attribute -->
			<button class="text-shadow-black cursor-pointer text-3xl font-bold"
				><a href="/">comma</a></button
			>

			<!-- 메뉴 -->
			<ul class="gap-15 flex text-xl font-medium text-black">
				<li>
					<a href="/" class="transition-colors duration-200 hover:text-blue-600">홈</a>
				</li>
				<li>
					<a href="#about" class="transition-colors duration-200 hover:text-blue-600">소개</a>
				</li>
				<li>
					<a href="#projects" class="transition-colors duration-200 hover:text-blue-600">프로젝트</a
					>
				</li>
				<li>
					<a href="#contact" class="transition-colors duration-200 hover:text-blue-600">연락처</a>
				</li>
			</ul>
		</div>
	</nav>
</div>
<slot />

<style>
	:global(html, body) {
		font-family: 'Inter', 'Noto Sans CJK KR', sans-serif;
	}
</style>
