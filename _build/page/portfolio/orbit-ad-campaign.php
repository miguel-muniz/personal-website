<!DOCTYPE html>
<html lang="en">

<!-- Page header -->
<head>
<?php
	$pageTitle = "Orbit - Ad Campaign | Miguel Muniz";
	$pageType = "Portfolio";

	if ($pageTitle === NULL) {
		$pageTitle = "Miguel Muniz | Designer &amp; Developer";
	} else {
	}
	include "../../php/header.php";
?>
</head>

<body>
<!-- Hides page -->
<script>document.body.className += ' fade';</script>
<!-- Left half -->
<header id="left">
	<?php include '../../php/left.php'; ?>
</header>
<section id="right">
	<main>
		<section id="back">
			<a href="index.html"><i class="fa fa-2x fa-angle-left" aria-hidden="true"></i>Back to all projects</a>
		</section>
		<section id="project">
			<header>
				<header class="row">
					<div>
						<h2>Orbit</h2>
						<h3>Ad Campaign</h3>
					</div>
					<div>
						<ul class="icn-list">
							<li>
								<span class="tooltip"><span>AIGA NE Show:<br>Student Gold</span>
									<a href="https://github.com/" target="_blank"><i class="fa fa-2x fa-trophy" aria-hidden="true"></i></a>
								</span>
							</li>
						</ul>
					</div>
				</header>
				<p>Orbit is one of the leading brands of gum in the US. Orbit wanted to highlight how every piece of Orbit gum creates a flavor sensation. With this ad campaign, it uses hand-drawn, playful illustrations to attract a younger demographic with its fun and interesting characters.</p>
			</header>
			<section>
				<img class="c-100" src="/img/projects/orbit/orbit-print-1.jpg" alt="">
				<img class="c-100" src="/img/projects/orbit/orbit-print-2.jpg" alt="">
				<img class="c-100" src="/img/projects/orbit/orbit-print-3.jpg" alt="">
				<img class="c-100" src="/img/projects/orbit/orbit-social.jpg" alt="">
				<img class="c-100" src="/img/projects/orbit/orbit-environment.jpg" alt="">
			</section>
			<footer>
				<h2>More Projects</h2>
				<div class="row">
					<a id="p-card-one" href="/page/portfolio/the-black-cat-book-design.html" class="p-card c-50 r-1">
						<div>
							<header>
								<h3>The Black Cat</h3>
							</header>
							<p>Book Design</p>
						</div>
					</a>
					<a id="p-card-two" href="/page/portfolio/no-format-identity-design.html" class="p-card c-50 r-1">
						<div>
							<header>
								<h3>No Format</h3>
							</header>
							<p>Identity Design</p>
						</div>
					</a>
				</div>
			</footer>
		</section>
	</main>
	<!-- Footer -->
	<footer>
		<?php include '../../php/footer.php'; ?>
	</footer>
</section>
<!-- Javascript -->
<?php include '../../php/scripts.php'; ?>
</body>
</html>
