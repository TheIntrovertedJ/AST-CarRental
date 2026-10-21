const Newsletter = () => {
	return (
		<div class="my-10 mb-40 flex flex-col items-center justify-center space-y-2 text-center max-md:px-4">
			<h1 class="text-2xl font-semibold md:text-4xl">Never Miss a Deal!</h1>
			<p class="pb-8 text-gray-500/70 md:text-lg">
				Subscribe to get the latest offers, new arrivals, and exclusive
				discounts
			</p>

			{/* Email Subscription */}
			<form
				onSubmit={(e) => e.preventDefault()}
				class="flex h-12 w-full max-w-2xl items-center justify-between md:h-13"
			>
				<input
					className="h-full w-full rounded-md rounded-r-none border border-r-0 border-gray-300 px-3 text-gray-500 outline-none"
					type="email"
					name="email"
					autoComplete="email"
					aria-label="Email address"
					placeholder="Enter your email address"
					required
				/>
				<button
					type="submit"
					class="h-full cursor-pointer rounded-md rounded-l-none bg-primary px-8 text-white transition-all hover:bg-primary-dull md:px-12"
				>
					Subscribe
				</button>
			</form>
		</div>
	);
};

export default Newsletter;
