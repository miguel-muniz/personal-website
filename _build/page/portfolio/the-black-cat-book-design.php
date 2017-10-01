<!DOCTYPE html>
<html lang="en">

<!-- Page header -->
<head>
<?php
	$pageTitle = "The Black Cat - Book Design | Miguel Muniz";
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
						<h2>The Black Cat</h2>
						<h3>Book Design</h3>
					</div>
					<div>
						<ul class="icn-list">
							<li>
								<span class="tooltip"><span>AIGA NE Show: Student Silver &amp; Judge's choice</span>
									<a href="https://github.com/" target="_blank"><i class="fa fa-2x fa-trophy" aria-hidden="true"></i></a>
								</span>
							</li>
						</ul>
					</div>
				</header>
				<p>Feed Books is expanding into the printed book market by publishing public domain books. Feed Books requested a book cover for The Black Cat that would be dark, chaotic, slightly mysterious and would represent the characters in the book to catch the attention of young, avid bookstore shoppers.</p>
			</header>
			<section>
				<img class="c-100 r-1-5" src="/img/projects/the-black-cat/the-black-cat-1.jpg" alt="">
				<img class="c-100 r-1-5" src="/img/projects/the-black-cat/the-black-cat-2.jpg" alt="">
				<img class="c-100 r-1-5" src="/img/projects/the-black-cat/the-black-cat-3.jpg" alt="">
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
