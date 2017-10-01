<!DOCTYPE html>
<html lang="en">

<!-- Page header -->
<head>
<?php
	$pageTitle = NULL;
	$pageType = "Homepage";

	if ($pageTitle === NULL) {
		$pageTitle = "Miguel Muniz | Designer &amp; Developer";
	} else {
	}
	include "php/header.php";
?>
</head>

<body>
<!-- Hides page -->
<script>document.body.className += ' fade';</script>
<!-- Left half -->
<header id="left">
	<?php include 'php/left.php'; ?>
</header>
<section id="right">
	<main>
		<section id="intro">
			<header>
				<h2>Hello. I'm Miguel Muniz</h2>
			</header>
			<p>I'm a graduate of the Graphic Design | Media Arts program at SCC. Currently, I work at Firespring as a Front-End Web Development Intern, but I'm always on the look for new opportunities. During my time at SCC I developed a passion for all things graphic design, UI/UX design, and front-end web development. When I’m not doing any of those things, I play video games and geek out about pencils.</p>
		</section>
		<section id="portfolio">
			<header>
				<h2>My Work</h2>
			</header>
			<div class="row">
				<div class="c-50">
					<a href="/page/portfolio/orbit-ad-campaign.html" class="p-card r-1">
						<div>
							<header>
								<h3>Orbit</h3>
							</header>
							<p>Ad Campaign</p>
						</div>
					</a>
					<a href="/page/portfolio/rayonier-annual-report.html" class="p-card r-1">
						<div>
							<header>
								<h3>Rayonier</h3>
							</header>
							<p>Annual Report</p>
						</div>
					</a>
				</div>
				<a href="/page/portfolio/metrio-user-interface.html" class="p-card c-50 r-2">
					<div>
						<header>
							<h3>Metr.io</h3>
						</header>
						<p>User Interface</p>
					</div>
				</a>
			</div>
			<div class="row">
				<a href="/page/portfolio/restore-gorilla-grocery-metrio.html" class="p-card c-100 r-1">
					<div>
						<header>
							<h3>Restore, Gorilla Grocery, and Metr.io</h3>
						</header>
						<p>Identity Design</p>
					</div>
				</a>
			</div>
			<div class="row">
				<a href="/page/portfolio/the-black-cat-book-design.html" class="p-card c-50 r-1">
					<div>
						<header>
							<h3>The Black Cat</h3>
						</header>
						<p>Book Design</p>
					</div>
				</a>
				<a href="/page/portfolio/no-format-identity-design.html" class="p-card c-50 r-1">
					<div>
						<header>
							<h3>No Format</h3>
						</header>
						<p>Identity Design</p>
					</div>
				</a>
			</div>
			<div class="row">
				<a href="/page/portfolio/nintendo-web-design-dev.html" class="p-card c-50 r-2">
					<div>
						<header>
							<h3>Nintendo</h3>
						</header>
						<p>Web Design</p>
					</div>
				</a>
				<div class="c-50">
					<a href="/page/portfolio/staples-ad-campaign.html" class="p-card r-1">
						<div>
							<header>
								<h3>Staples</h3>
							</header>
							<p>Ad Campaign</p>
						</div>
					</a>
					<a href="/page/portfolio/kikkoman-promo-design.html" class="p-card r-1">
						<div>
							<header>
								<h3>Kikkoman</h3>
							</header>
							<p>Promo Design</p>
						</div>
					</a>
				</div>
			</div>
			<div class="row">
				<a href="/page/portfolio/dot-dot-package-design.html" class="p-card c-100 r-1">
					<div>
						<header>
							<h3>Dot Dot</h3>
						</header>
						<p>Package Design</p>
					</div>
				</a>
			</div>
		</section>
	</main>
	<!-- Footer -->
	<footer>
		<?php include 'php/footer.php'; ?>
	</footer>
</section>
<!-- Javascript -->
<?php include 'php/scripts.php'; ?>
</body>
</html>
