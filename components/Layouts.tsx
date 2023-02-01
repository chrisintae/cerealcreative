import Link from 'next/link';

export const Header = () => {
	return (
		<header className="w-full fixed top-0 flex justify-between py-2 px-4">
			<h1 className="font-display text-3xl lowercase">Cereal Creative</h1>
			<nav>
				<ul className="flex justify-end gap-4">
					<li><Link href="/client-login" className='text-sm uppercase hover:underline'>Client Login</Link></li>
				</ul>

			</nav>
		</header>
	);
}

export const Footer = () => {
	return (
		<footer className="flex justify-end gap-4 pt-8 pb-4 pl-16 pr-4">
			<small>&copy; {new Date().getFullYear()} CEREAL CREATIVE. All Rights Reserved.</small>
			<small>Privacy Policy</small>
			<small>Terms of Use</small>
		</footer>
	);
}
