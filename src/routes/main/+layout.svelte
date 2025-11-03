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
			<a class="text-3xl font-bold text-white" href="/main#home">misty</a>

			<!-- 메뉴 -->
			<ul class="gap-15 flex text-xl font-medium text-white">
				<li>
					<button
						class="hover:text-shadow-blue-400 transition-colors duration-200"
						onclick={(window.location.href = '/main#home')}>홈</button
					>
				</li>
				<li>
					<button
						class="hover:text-shadow-blue-400 transition-colors duration-200"
						onclick={(window.location.href = '/main#about')}>소개</button
					>
				</li>
				<li>
					<button
						class="hover:text-shadow-blue-400 transition-colors duration-200"
						onclick={(window.location.href = '/main#skills')}>능력</button
					>
				</li>
				<li>
					<button
						class="hover:text-shadow-blue-400 transition-colors duration-200"
						onclick={(window.location.href = '/main#projects')}>프로젝트</button
					>
				</li>
				<li>
					<button
						class="hover:text-shadow-blue-400 transition-colors duration-200"
						onclick={(window.location.href = '/main#contact')}>연락처</button
					>
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
