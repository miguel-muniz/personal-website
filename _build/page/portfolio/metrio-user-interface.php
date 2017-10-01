<!DOCTYPE html>
<html lang="en">

<!-- Page header -->
<head>
<?php
	$pageTitle = "Metr.io - User Interface | Miguel Muniz";
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
						<h2>Metr.io</h2>
						<h3>User Interface</h3>
					</div>
				</header>
				<p>Metr.io is a futuristic self-driving transportation system requiring an interface for phones and vehicles. Their audience is younger individuals who never learned how to operate a vehicle. They wanted their interface to be perceived as light, playful, uniform, organized, intuitive, and simple.</p>
			</header>
			<section>
				<img class="c-100 r-1-5" src="/img/projects/metrio/metrio-1.jpg" alt="">
				<img class="c-100 r-1-5" src="/img/projects/metrio/metrio-2.jpg" alt="">
				<img class="c-100 r-1-5" src="/img/projects/metrio/metrio-3.jpg" alt="">
				<img class="c-100 r-1-5" src="/img/projects/metrio/metrio-4.jpg" alt="">
				<img class="c-100 r-1-5" src="/img/projects/metrio/metrio-vehicle-1.jpg" alt="">
				<img class="c-100 r-1-5" src="/img/projects/metrio/metrio-vehicle-2.jpg" alt="">
				<img class="c-100 r-1-5" src="/img/projects/metrio/metrio-vehicle-3.jpg" alt="">
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
