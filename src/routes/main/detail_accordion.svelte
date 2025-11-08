<!--detail_accordion.svelte-->
<script>
	import { createEventDispatcher } from 'svelte';
	import { slide } from 'svelte/transition';
	/** 외부에서 제어하고 싶을 때 bind:open 으로 바인딩한다 */
	export let open = false;
	/** 헤더에 표시할 문자열 */
	export let title = '상세 설명';
	const dispatch = createEventDispatcher();
	function toggle() {
		open = !open; // 상태 토글
		dispatch('toggle', { open }); // 외부에 이벤트 전달 (선택)
	}
</script>

<div class="overflow-hidden">
	<!-- 헤더 (클릭 영역) -->
	<button
		type="button"
		class="flex w-full items-center justify-between py-2 focus:outline-none"
		on:click={toggle}
	>
		<h3 class="text-lg font-medium">{title}</h3>
		<!-- 삼각형 클릭하면 아래로 90도 -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 14 14"
			class="h-5 w-5 transition-transform duration-200"
			style="transform: rotate({open ? -90 : 0}deg)"
		>
			<!-- 왼쪽을 가리키는 삼각형 -->
			<path d="M 10 1 Z L 0 7 L 10 12 Z" fill="#000" />
		</svg>
	</button>
	<!-- 내용 (슬라이드) -->
	{#if open}
		<div transition:slide={{ duration: 250 }} class="mt-2 text-black">
			<slot />
		</div>
	{/if}
</div>

<style>
	/* 필요 시 추가 스타일 – 현재는 모든 회전·전환을 SVG 자체에 inline style 로 제어 */
</style>
