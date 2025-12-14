<script>
	import { slide } from 'svelte/transition';
	/** 외부에서 제어하고 싶을 때 bind:open 으로 바인딩한다 */
	export let open = false;
	/** 헤더에 표시할 문자열 */
	export let title = '상세 설명';
	function toggle() {
		open = !open; // 상태 토글
	}
</script>

<div class="overflow-hidden">
	<!-- 헤더 (클릭 영역) -->
	<button
		type="button"
		class="flex w-full items-center justify-between py-2 focus:outline-none"
		on:mouseover={() => toggle()}
		on:mouseout={() => toggle()}
		on:focus={() => toggle()}
		on:blur={() => toggle()}
	>
		<h3 class="text-lg font-medium dark:text-white">{title}</h3>
		<!-- 삼각형 클릭하면 아래로 90도 -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 14 14"
			class="duration-250 h-7 w-7 text-black transition-transform dark:text-white"
			style="transform: rotate({open ? -90 : 0}deg)"
		>
			<!-- 왼쪽을 가리키는 삼각형 -->
			<path
				d="M 10 1 Z L 0 7 L 10 12 Z"
				fill="currentColor"
				class="transition-all duration-200 hover:cursor-pointer hover:fill-gray-400"
			/>
		</svg>
	</button>
	<!-- 내용 (슬라이드) -->
	{#if open}
		<div transition:slide={{ duration: 250 }} class="mt-2 dark:text-white">
			<slot />
		</div>
	{/if}
</div>

<style>
	/* 필요 시 추가 스타일 – 현재는 모든 회전·전환을 SVG 자체에 inline style 로 제어 */
</style>
