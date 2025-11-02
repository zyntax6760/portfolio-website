<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<main class="min-h-screen bg-gray-100 scroll-smooth">
	<!-- Hero Section -->
	<section
		class="bg-linear-to-b flex h-screen items-center justify-center from-gray-800 to-gray-400 text-white"
	>
		<div class="text-center" transition:fade>
			<h1 class="mb-4 text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">comma6760</h1>
			<p class="mb-8 text-xl">생각하는 개발자</p>
			<a
				href="#about"
				class="rounded-full bg-white px-6 py-2 font-bold text-emerald-600 transition-colors hover:bg-emerald-100"
			>
				자세히 보기
			</a>
		</div>
	</section>

	<!-- About Section -->
	<section id="about" class="bg-gray-400 py-20">
		<div class="mx-auto max-w-4xl px-4">
			<h2 class="mb-8 text-center text-3xl font-bold">About Me</h2>
			<p class="text-lg leading-relaxed text-gray-700">여기서 자기소개를 작성하세요.</p>
		</div>
	</section>

	<!-- Skills Section -->
	<section id="skills" class="bg-gray-400 py-20">
		<div class="mx-auto max-w-4xl px-4">
			<h2 class="mb-8 text-center text-3xl font-bold">Skills</h2>
			<div class="grid grid-cols-2 gap-6 md:grid-cols-3">
				<div class="rounded-lg bg-white p-4 shadow-md">
					<h3 class="mb-2 font-bold">Frontend</h3>
					<ul class="list-inside list-disc text-gray-700">
						<li>HTML/CSS</li>
						<li>JavaScript</li>
						<li>Svelte</li>
					</ul>
				</div>
				<!-- …다른 스킬 카테고리 -->
			</div>
		</div>
	</section>

	<!-- Projects Section -->
	<section id="projects" class="bg-gray-400 py-20">
		<div class="mx-auto max-w-4xl px-4">
			<h2 class="mb-8 text-center text-3xl font-bold">Projects</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
				<div class="overflow-hidden rounded-lg bg-gray-50 shadow-md">
					<div class="p-4">
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
	</section>

	<!-- Contact Section -->
	<section id="contact" class="bg-gray-400 py-20">
		<div class="mx-auto max-w-4xl px-4">
			<h2 class="mb-8 text-center text-3xl font-bold">Contact</h2>
			<div class="flex flex-col items-center space-y-4">
				<a href="mailto:your.email@example.com" class="text-gray-900 hover:text-gray-500">
					your.email@example.com
				</a>
				<div class="flex space-x-6">
					<a href="#GitHub" class="text-gray-900 hover:text-gray-500">GitHub</a>
					<a href="#LinkedIn" class="text-gray-900 hover:text-gray-500">LinkedIn</a>
				</div>
			</div>
		</div>
	</section>
</main>
