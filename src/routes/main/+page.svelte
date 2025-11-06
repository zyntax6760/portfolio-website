<script>
	import { onMount } from 'svelte';
	import emailModule from '$lib/components/contact_email.js';

	let emailLink = '';
	const today = new Date();

	onMount(() => {
		// 초기화
		emailModule.initEmailLink();
		emailLink = emailModule.getEmailLink();

		// resize 시 반응형 업데이트
		const updateLink = () => {
			emailLink = emailModule.getEmailLink();
		};

		window.addEventListener('resize', updateLink);

		return () => {
			window.removeEventListener('resize', updateLink);
		};
	});

	function calcAge() {
		const birth = new Date(2008, 3, 21);

		let age = today.getFullYear() - birth.getFullYear() + 1;

		return age;
	}

	function calcCareer() {
		const career = new Date(2022, 1, 1);

		let career_day = today.getFullYear() - career.getFullYear() + 1;

		return career_day;
	}
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
	/>
</svelte:head>

<main class="min-h-screen scroll-smooth bg-gray-100">
	<!-- Hero Section -->
	<div
		id="home"
		class="bg-linear-to-b flex min-h-screen items-center justify-center from-gray-800 to-gray-600 pt-20"
	>
		<div class="mx-auto max-w-4xl px-6 text-center">
			<div class="mb-8">
				<div
					class="h-55 w-55 mx-auto flex aspect-square items-center justify-center overflow-hidden rounded-full border-4 border-gray-200 shadow-lg dark:border-gray-700"
				>
					<img
						src="src/lib/assets/profile.svg"
						alt="profil_logo"
						class="h-45 w-45 mt-10 object-contain p-2"
					/>
				</div>
			</div>
			<div>
				<span
					class="bg-linear-to-r from-indigo-300 to-purple-300 bg-clip-text text-5xl font-bold text-transparent"
					>Misty6760</span
				>
			</div>
			<div class="bg-linear-to-b min-h-50 flex max-h-screen items-center justify-center">
				<a href="#about" class="bottom-30 absolute left-1/2 -translate-x-1/2">
					<img
						src="src/lib/assets/mouse-cursor.svg"
						alt="Scroll down"
						class="h-16 w-16 transform transition duration-300 ease-out hover:translate-y-5"
					/>
				</a>
			</div>
		</div>
	</div>

	<!-- About Section -->
	<div id="about" class="bg-linear-to-b from-gray-600 to-gray-400 py-20">
		<div class="mx-auto my-28 max-w-3xl px-4">
			<h2 class="mb-8 text-center text-3xl font-bold">About Me</h2>
			<div
				class="rounded-xl border border-white/10 bg-gray-500/60 p-6 text-center text-black drop-shadow-xl"
			>
				<div class="font-xl mx-auto max-w-3xl text-center">
					<p class="mb-4 text-base leading-relaxed text-black md:mb-6 md:text-lg">
						안녕하세요! 개발자 <span class="font-bold text-teal-400">Misty6760</span>입니다.
					</p>
					<p>
						<span class="font-bold duration-200 hover:text-teal-400">프론트엔드</span>,
						<span class="font-bold duration-200 hover:text-teal-400">임베디드 시스템</span>,
						<span class="font-bold duration-200 hover:text-teal-400">데이터베이스</span>를 공부하는
						중입니다!
					</p>
				</div>
				<div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-8 md:gap-6">
					<div class="rounded-lg bg-gray-600/50 p-3 text-center md:p-4">
						<p class="text-3xl font-bold text-teal-400">{calcAge()}세</p>
						<p class="text-xs md:text-sm text-gray-600">고등학생</p>
					</div>
					<div class="rounded-lg bg-gray-600/50 p-3 text-center md:p-4">
						<p class="text-3xl font-bold text-teal-400">
							{calcCareer()}년
						</p>
						<p class="text-xs md:text-sm text-gray-600">코딩 공부</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Skills Section -->
	<div id="skills" class="bg-gray-400 py-40">
		<div class="mx-auto my-28 max-w-2xl px-4">
			<h2 class="mb-8 text-center text-3xl font-bold">Skills</h2>
			<div class="grid grid-cols-2 gap-8 md:grid-cols-2">
				<div class="rounded-lg bg-gray-300 p-4 px-8 shadow-lg transition-transform hover:scale-105">
					<h3 class="mb-2 text-xl font-bold">Frontend</h3>
					<ul class="list-inside list-disc text-black">
						<li>HTML/CSS</li>
						<li>JavaScript</li>
						<li>Svelte</li>
					</ul>
				</div>
				<div class="rounded-lg bg-gray-300 p-4 px-8 shadow-lg transition-transform hover:scale-105">
					<h3 class="mb-2 text-xl font-bold">Coding</h3>
					<ul class="list-inside list-disc text-black">
						<li>Python</li>
						<li>C / C++</li>
					</ul>
				</div>
				<!-- …다른 스킬 카테고리 -->
			</div>
		</div>
	</div>

	<!-- Projects Section -->
	<div id="projects" class="bg-gray-400 py-60">
		<div class="mx-auto max-w-4xl px-4">
			<h2 class="mb-8 text-center text-3xl font-bold">Projects</h2>

			<div class="grid grid-cols-2 gap-8 md:grid-cols-2">
				<div
					class="transform-all overflow-hidden rounded-lg bg-gray-300 p-4 shadow-lg duration-300 hover:scale-105"
				>
					<h3 class="mb-2 text-xl font-bold">🧱 방화벽 프로젝트</h3>
					<ul class="list-inside text-black">
						<li>파이썬으로 방화벽의 기본 원리를 알아보다</li>
						<li>
							상태:
							<span class="font-bold text-green-700">완료</span>
						</li>
						<li>
							<button
								on:click={() => window.open('https://github.com/misty6760/Firewall-Project')}
								class="transform-all text-black duration-300 hover:text-black/50"
							>
								GitHub
							</button>
						</li>
					</ul>
				</div>

				<div
					class="transform-all overflow-hidden rounded-lg bg-gray-300 p-4 shadow-lg duration-300 hover:scale-105"
				>
					<h3 class="mb-2 text-xl font-bold">프로젝트 제목</h3>
					<p class="mb-4 text-gray-700">프로젝트 설명을 작성하세요.</p>
					<div class="flex space-x-4">
						<a href="#Demo" class="text-gray-900 hover:text-gray-500">Demo</a>
						<a href="#GitHub" class="text-gray-900 hover:text-gray-500">GitHub</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Contact Section -->
	<div id="contact" class="bg-gray-400 py-40">
		<div class="mx-auto max-w-4xl px-4">
			<h2 class="mb-8 text-center text-3xl font-bold">Contact</h2>
			<div class="flex flex-col items-center space-y-4">
				<a href={emailLink} target="_blank" class="text-gray-900 hover:text-gray-500">
					kinghojoon12@gmail.com
				</a>
				<div class="flex space-x-6">
					<a
						href="https://github.com/misty6760"
						target="_blank"
						class="text-gray-900 hover:text-gray-500">GitHub</a
					>
				</div>
			</div>
		</div>
	</div>
</main>
