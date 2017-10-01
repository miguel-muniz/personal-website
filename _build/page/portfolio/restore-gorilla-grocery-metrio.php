<!DOCTYPE html>
<html lang="en">

<!-- Page header -->
<head>
<?php
	$pageTitle = "Restore, Gorilla Grocery, &amp; Metr.io - Identity Design | Miguel Muniz";
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
						<h2>Restore, Gorilla Grocery, and Metrio</h2>
						<h3>Identity Design</h3>
					</div>
				</header>
				<p>This is a collection of various identities for Metr.io, Gorilla Grocery, and Restore. Metr.io is a simplistic and futuristic transportation app, Gorilla Grocery is a youthful and up beat grocery store, and Restore is a yearly choir series done by Nebraska Christian University.</p>
			</header>
			<section>
				<img class="c-100" src="/img/projects/restore-gorilla-grocery-metrio/restore.jpg" alt="">
				<img class="c-100" src="/img/projects/restore-gorilla-grocery-metrio/gorilla-grocery.jpg" alt="">
				<img class="c-100" src="/img/projects/restore-gorilla-grocery-metrio/metrio.jpg" alt="">
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
