<script>
	import { onMount } from 'svelte';
	import emailModule from '$lib/components/contact_email.js';
	import { isMobile } from '$lib/components/mobile_nav.js';
	import DetailAccordion from './detail_accordion.svelte';
	import { Github, Mail } from 'lucide-svelte';
	import { toastMessage, showToast } from '$lib/components/store.js';
	import Toast from './toast.svelte';

	let emailLink = '';
	let isMobileDevice = false;

	const today = new Date();

	let showFirewall = false;
	let showWeather = false;
	let showAir = false;

	function showLinkMessage() {
		toastMessage.set('아직  링크가 준비되지 않았습니다!');
		showToast.set(true);
	}

	onMount(() => {
		// 초기화
		emailModule.initEmailLink();
		emailLink = emailModule.getEmailLink();
		isMobileDevice = isMobile();
		// resize 시 반응형 업데이트
		const updateLink = () => {
			emailLink = emailModule.getEmailLink();
			isMobileDevice = isMobile();
		};
		window.addEventListener('resize', updateLink);
		return () => {
			window.removeEventListener('resize', updateLink);
		};
	});

	/**
	 * 나이 계산
	 */
	function calcAge() {
		const birth = new Date(2008, 3, 21);
		let age = today.getFullYear() - birth.getFullYear() + 1;
		return age;
	}

	/**
	 * 경력 계산
	 */
	function calcCareer() {
		const career = new Date(2022, 1, 1);
		let career_day = today.getFullYear() - career.getFullYear() + 1;
		return career_day;
	}
</script>

<svelte:head>
	<meta property="og:title" content="Misty6760">
	<meta property="og:description" content="안녕하세요! 이곳은 Misty6760의 자기소개 사이트입니다!">
	<meta property="og:url" content="https://misty6760.kro.kr">
	<meta property="og:image" content="static/imgs/favicon.svg">
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
	/>
</svelte:head>
<main
	class="bg-linear-to-b min-h-screen scroll-smooth from-gray-700 to-gray-400 dark:from-gray-900 dark:to-gray-500"
>
	<!-- 히어로 섹션 -->
	<div id="home" class="bg-linear-to-b py-50 flex min-h-screen items-center justify-center">
		<div class="mx-auto max-w-4xl px-6 text-center">
			<div class="mb-8">
				<div
					class="h-55 w-55 mx-auto flex aspect-square items-center justify-center overflow-hidden rounded-full border-4 border-gray-200 shadow-lg dark:border-gray-700"
				>
					<img
						src="/imgs/profile.svg"
						alt="profil_logo"
						class="h-45 w-45 mt-10 object-contain p-2"
					/>
				</div>
			</div>
			<div>
				<span
					class="bg-linear-to-r from-indigo-300 to-purple-300 bg-clip-text text-5xl font-bold text-transparent dark:from-indigo-400 dark:to-purple-400"
					>Misty6760</span
				>
			</div>
			<div class="min-h-50 relative flex max-h-screen items-center justify-center">
				{#if !isMobileDevice}
					<a href="#about" class="absolute bottom-10 left-1/2 -translate-x-1/2">
						<img
							src="/imgs/mouse-cursor.svg"
							alt="Scroll down"
							class="h-16 w-16 transform transition duration-300 ease-out hover:translate-y-5 dark:invert"
						/>
					</a>
				{:else}
					<a href="#about" class="absolute bottom-10 left-1/2 -translate-x-1/2">
						<img
							src="/imgs/mouse-cursor.svg"
							alt="Scroll down"
							class="h-16 w-16 transform transition duration-300 ease-out active:translate-y-5 dark:invert"
						/>
					</a>
				{/if}
			</div>
		</div>
	</div>
	<!-- 정보 섹션 -->
	<div id="about" class="py-20">
		<div class="mx-auto my-28 max-w-3xl px-4">
			<h2 class="mb-8 text-center text-3xl font-bold dark:text-white">About Me</h2>
			<div
				class="rounded-xl border border-white/10 bg-gray-500/60 p-6 text-center text-black drop-shadow-xl dark:bg-gray-700/60 dark:text-gray-100"
			>
				<div class="font-xl mx-auto max-w-3xl text-center">
					<p
						class="mb-4 text-base leading-relaxed text-black md:mb-6 md:text-lg dark:text-gray-100"
					>
						안녕하세요! 개발자 <span class="font-bold text-teal-400 dark:text-teal-300"
							>Misty6760</span
						>입니다.
					</p>
					<p class="dark:text-gray-100">
						<span
							class="cursor-pointer font-bold duration-200 hover:text-teal-400 dark:hover:text-teal-300"
							>프론트엔드</span
						>,
						<span
							class="cursor-pointer font-bold duration-200 hover:text-teal-400 dark:hover:text-teal-300"
							>임베디드 시스템</span
						>,
						<span
							class="cursor-pointer font-bold duration-200 hover:text-teal-400 dark:hover:text-teal-300"
							>데이터베이스</span
						>를 공부하는 중입니다!
					</p>
				</div>
				<div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-8 md:gap-6">
					<div class="rounded-lg bg-gray-600/50 p-3 text-center md:p-4 dark:bg-gray-800/50">
						<p class="text-3xl font-bold text-teal-400 dark:text-teal-300">{calcAge()}세</p>
						<p class="text-xs text-gray-700 md:text-sm dark:text-gray-300">고등학생</p>
					</div>
					<div class="rounded-lg bg-gray-600/50 p-3 text-center md:p-4 dark:bg-gray-800/50">
						<p class="text-3xl font-bold text-teal-400 dark:text-teal-300">
							{calcCareer()}년
						</p>
						<p class="text-xs text-gray-700 md:text-sm dark:text-gray-300">코딩 공부</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 스킬 섹션 -->
	<div id="skills" class="py-30">
		<div class="mx-auto my-28 max-w-3xl px-4">
			<h2 class="mb-8 text-center text-3xl font-bold dark:text-white">Skills</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				<div
					class="rounded-lg bg-gray-300 p-4 px-8 shadow-lg transition-transform hover:scale-105 dark:bg-gray-700"
				>
					<h3 class="mb-2 text-xl font-bold dark:text-white">Frontend</h3>
					<ul class="list-inside list-disc text-black dark:text-gray-200">
						<li>HTML/CSS</li>
						<li>JavaScript</li>
						<li>Svelte</li>
					</ul>
				</div>
				<div
					class="rounded-lg bg-gray-300 p-4 px-8 shadow-lg transition-transform hover:scale-105 dark:bg-gray-700"
				>
					<h3 class="mb-2 text-xl font-bold dark:text-white">Coding</h3>
					<ul class="list-inside list-disc text-black dark:text-gray-200">
						<li>Python</li>
						<li>C / C++</li>
					</ul>
				</div>
				<div
					class="rounded-lg bg-gray-300 p-4 px-8 shadow-lg transition-transform hover:scale-105 dark:bg-gray-700"
				>
					<h3 class="mb-2 text-xl font-bold dark:text-white">Database</h3>
					<div class="list-inside list-disc text-black dark:text-gray-200">
						<ul class="list-inside list-disc text-black dark:text-gray-200">
							<li>SQLite</li>
						</ul>
					</div>
				</div>
				<!-- …다른 스킬 카테고리 -->
			</div>
		</div>
	</div>
	<!-- 프로젝트 섹션 -->
	<Toast />
	<div id="projects" class="py-50">
		<div class="mx-auto max-w-6xl px-4">
			<h2 class="mb-8 text-center text-3xl font-bold dark:text-white">Projects</h2>
			<div class="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
				<div
					class="overflow-hidden rounded-lg bg-gray-300 p-4 shadow-lg duration-300 hover:scale-105 dark:bg-gray-700"
				>
					<h3 class="mb-2 text-xl font-bold dark:text-white">🧱 방화벽 프로젝트</h3>
					<!-- 상세 설명만 토글 -->
					<DetailAccordion bind:open={showFirewall}>
						<ul class="list-inside list-disc space-y-2 pl-5">
							<li class="ml-2 -indent-5">파이썬을 활용하여 방화벽의 원리를 알아보았습니다.</li>
						</ul>
					</DetailAccordion>
					<div class="mt-1">
						<p class="dark:text-gray-200">
							상태: <span class="font-bold text-green-700 dark:text-green-400">완료</span>
						</p>
					</div>
					<div class="flex space-x-4">
						<a
							href="https://github.com/misty6760/Firewall-Projecte"
							target="_blank"
							class="transform-all text-black duration-200 hover:text-black/50 dark:text-gray-200 dark:hover:text-gray-400"
							>Github</a
						>
					</div>
				</div>
				<div
					class="transform-all overflow-hidden rounded-lg bg-gray-300 p-4 shadow-lg duration-200 hover:scale-105 dark:bg-gray-700"
				>
					<h3 class="mb-2 text-xl font-bold dark:text-white">🌥️ 날씨 친구</h3>
					<DetailAccordion bind:open={showWeather}>
						<ul class="list-inside list-disc space-y-2 pl-5">
							<li class="ml-2 -indent-5">
								원하는 이미지를 날씨에 맞추어 넣으면, 날씨에 따라 이미지를 띄워줍니다.
							</li>

							<li>
								사용 API
								<ol class="mt-1 list-inside list-decimal space-y-1 pl-6">
									<li>OpenWeatherMap</li>
									<li>Kakao Map</li>
								</ol>
							</li>
						</ul>
					</DetailAccordion>
					<div class="mt-1">
						<p class="dark:text-gray-200">
							상태: <span class="font-bold text-green-700 dark:text-green-400">완료</span>
						</p>
					</div>
					<div class="flex space-x-4">
						<a
							href="https://github.com/misty6760/Weather-Mate"
							target="_blank"
							class="transform-all text-black duration-200 hover:text-black/50 dark:text-gray-200 dark:hover:text-gray-400"
							>Github</a
						>
					</div>
				</div>
				<div
					class="transform-all overflow-hidden rounded-lg bg-gray-300 p-4 shadow-lg duration-200 hover:scale-105 dark:bg-gray-700"
				>
					<h3 class="mb-2 text-xl font-bold dark:text-white">액자형 공기청정기</h3>
					<DetailAccordion bind:open={showAir}>
						<ul class="list-inside list-disc space-y-2 pl-5">
							<li class="ml-2 -indent-5">액자식 공기청정기를 라즈베리파이로 제작하였습니다.</li>
							<li>
								특징
								<ol class="mt-1 list-inside list-decimal space-y-1 pl-6">
									<li>액자식 형태로 공간 차지 최소화</li>
									<li>디자인에 잘 어울리고 분위기 저하 감소</li>
								</ol>
							</li>
						</ul>
					</DetailAccordion>
					<div class="mt-1">
						<p class="dark:text-gray-200">
							상태: <span class="font-bold text-red-700 dark:text-red-400">미완성</span>
						</p>
					</div>
					<div class="flex space-x-4">
						<button
							class="text-gray-900 transition-colors hover:cursor-pointer hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
							on:click={showLinkMessage}
						>
							관련 링크 없음
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 연락처 섹션 -->
	<div id="contact" class="pt-30 pb-20">
		<div class="mx-auto max-w-4xl px-4">
			<h2 class="mb-8 text-center text-3xl font-bold dark:text-white">Contact</h2>
			<div class="grid grid-cols-2 items-center gap-x-6 gap-y-4">
				<div class="justify-self-end">
					<Mail />
				</div>
				<div class="justify-self-start">
					<a
						href={emailLink}
						target="_blank"
						rel="noopener noreferrer"
						class="text-xl font-bold text-gray-900 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
						>Email</a
					>
				</div>
				<div class="justify-self-end">
					<Github />
				</div>
				<div class="justify-self-start">
					<a
						href="https://github.com/misty6760"
						target="_blank"
						rel="noopener noreferrer"
						class="text-xl font-bold text-gray-900 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
						>GitHub</a
					>
				</div>
				<div class="justify-self-end">
					<img src="imgs/discord.svg" alt="Discord" class="w-6.5 h-6.5" />
				</div>
				<div class="justify-self-start">
					<a
						href="https://discord.com/users/901664081801535489"
						target="_blank"
						rel="noopener noreferrer"
						class="text-xl font-bold text-gray-700 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
					>Discord</a>
				</div>
			</div>
		</div>
	</div>
	<!-- 푸터 섹션 -->
	<div class="bg-gray-700 py-30">
		<div class="grid grid-cols-">

		</div>
	</div>
</main>
