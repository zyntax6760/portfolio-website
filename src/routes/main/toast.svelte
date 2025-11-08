<script>
	import { toastMessage, showToast } from '$lib/components/store.js';

	let toastVisible = $showToast;
	let display = $showToast;
	let timeoutId;
	let fadeOutTimer;

	$: if ($showToast) {
		display = true;
		toastVisible = true;
		clearTimeout(timeoutId);
		clearTimeout(fadeOutTimer);
		timeoutId = setTimeout(() => {
			showToast.set(false);
		}, 800);
	}

	$: if (!$showToast && toastVisible) {
		clearTimeout(fadeOutTimer);
		fadeOutTimer = setTimeout(() => {
			display = false;
			toastVisible = false;
		}, 500);
	}
</script>

{#if display}
	<div class="z-9999 fixed inset-0 flex items-center justify-center">
		<div
			class="rounded-lg bg-gray-800 bg-opacity-90 px-10 py-8 text-xl font-bold text-white shadow-xl transition-all duration-500"
			class:opacity-0={!$showToast}
			class:translate-y-4={!$showToast}
			class:scale-95={!$showToast}
			class:opacity-100={$showToast}
			class:translate-y-0={$showToast}
			class:scale-100={$showToast}
		>
			<p>{$toastMessage}</p>
		</div>
	</div>
{/if}

<style>
	/* 기본 상태: fade out 상태 */
	div div {
		opacity: 0;
		transform: translateY(1rem) scale(0.95);
		transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
	}

	/* fade in 상태 */
	.opacity-100 {
		opacity: 1;
	}

	.translate-y-0 {
		transform: translateY(0);
	}

	.scale-100 {
		transform: scale(1);
	}
</style>
