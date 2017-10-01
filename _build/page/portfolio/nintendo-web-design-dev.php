<!DOCTYPE html>
<html lang="en">

<!-- Page header -->
<head>
<?php
	$pageTitle = "Nintendo - Web Design | Miguel Muniz";
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
						<h2>Nintendo</h2>
						<h3>Website Design</h3>
					</div>
				</header>
				<p>Nintendo, most well known for their rich history in developing video games and video game consoles, are rereleasing one of their old consoles with a modern twist. Nintendo required a responsive website to advertise their new product to a new, youthful generation of young adult gamers.</p>
			</header>
			<section>
				<img class="c-100" src="/img/projects/nintendo/nintendo.jpg" alt="">
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
