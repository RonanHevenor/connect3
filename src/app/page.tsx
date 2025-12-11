export default function Home() {
	return (
		<>
			{/* Navigation */}
			<nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800 px-8 py-4">
				<ul className="flex justify-center gap-12 max-w-5xl mx-auto">
					{["intro", "program", "results", "discussion"].map((item) => (
						<li key={item}>
							<a
								href={`#${item}`}
								className="text-zinc-500 text-sm font-medium uppercase tracking-widest hover:text-white transition-colors"
							>
								{item}
							</a>
						</li>
					))}
				</ul>
			</nav>

			{/* Hero */}
			<header className="min-h-screen flex flex-col justify-center items-center text-center px-8 py-24 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-radial from-zinc-900 to-black -z-10" />
				<span className="text-xs tracking-[0.3em] uppercase text-zinc-500 font-medium mb-8">
					AI Programming Project
				</span>
				<h1 className="text-6xl md:text-8xl font-extrabold tracking-tight bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent mb-6">
					Connect-4
				</h1>
				<p className="text-xl text-zinc-500 max-w-xl font-light">
					Can a neural network learn to play a solved game perfectly? We built one to find out.
				</p>
				<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 text-xs uppercase tracking-widest">
					<span>Scroll</span>
					<div className="w-px h-10 bg-gradient-to-b from-zinc-500 to-transparent animate-pulse" />
				</div>
			</header>

			{/* Introduction */}
			<section id="intro" className="max-w-4xl mx-auto px-8 py-32">
				<SectionHeader number="01" title="Introduction" />
				<div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
					<p>
						Connect 4, developed by Howard Wexler, is deceptively simple: two players drop chips into a 6×7 grid, racing to align four in a row. The rules take seconds to learn. Mastery is another matter entirely.
					</p>
					<p>
						Humans make mistakes. We overlook threats, misjudge positions, and fail to see optimal moves. Connect 4 has been mathematically solved since 1988—the first player can always force a win with perfect play. But "perfect play" requires evaluating positions that number in the trillions.
					</p>

					<HighlightBox>
						This raises a fundamental question: can we create an AI that plays Connect 4 perfectly? And if so, what does that tell us about machine intelligence versus human reasoning?
					</HighlightBox>

					<ImagePlaceholder label="Project Visual" />

					<h3 className="text-2xl font-semibold text-white mt-12 mb-6">Research Questions</h3>
					<ul className="space-y-4">
						{[
							"What is the optimal approach to creating a perfect (or near-perfect) Connect 4 AI?",
							"Can neural networks \"think\" and \"reason\" in ways comparable to humans?",
							"Setting aside raw speed, is the AI's decision-making process fundamentally better or worse than human intuition?",
							"What ethical questions emerge from developing algorithms that surpass human capability?",
							"Can any algorithm achieve true perfection, or will biases always exist—such as hardcoded opening books?",
						].map((q, i) => (
							<li key={i} className="pl-8 relative text-zinc-300">
								<span className="absolute left-0 font-bold text-zinc-600">?</span>
								{q}
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* Program */}
			<section id="program" className="max-w-4xl mx-auto px-8 py-32">
				<SectionHeader number="02" title="Program" />
				<div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
					<p>
						Developing a Connect-4 solver demands careful consideration of methodology. We explored multiple approaches before arriving at our final implementation.
					</p>

					<h3 className="text-2xl font-semibold text-white mt-12 mb-6">Initial Considerations</h3>
					<ul className="space-y-4">
						{[
							"Is utilizing search tables/tree algorithms ideal for this situation?",
							"Would it make sense to develop a neural network?",
							"What is the best way to train a neural network?",
						].map((q, i) => (
							<li key={i} className="pl-8 relative text-zinc-300">
								<span className="absolute left-0 font-bold text-zinc-600">?</span>
								{q}
							</li>
						))}
					</ul>

					<p className="mt-8">
						Since each chip position in the Connect-4 grid could be represented in a 2D array, we initially decided to develop a neural network. Each column is represented by an integer (indexed from zero), and the neural network would "pick" where to drop its chip. Because the output is a single integer, a properly trained neural network could make decisions faster than an algorithm calculating every possible position.
					</p>

					{/* Approach Cards */}
					<div className="grid gap-6 mt-12">
						<ApproachCard
							number="01"
							title="Genetic Algorithm + Perfect Games"
							description="We paired randomly generated algorithms with a perfect AI, simulating slight mutations after every game. The goal: generate an algorithm that could approximate the solved game. Unfortunately, since only a perfect AI can beat the perfect AI, the neural network never improved—it lost every game. The only way it could have succeeded was random chance, with near-zero probability."
						/>
						<ApproachCard
							number="02"
							title="Brute Force Tree Search"
							description="We dynamically generated a tree of all possible moves from the current board state, analyzing what percentage of each branch leads to victory versus defeat. With trillions of possible permutations, we implemented pruning to cut off branches destined for failure early—prioritizing more promising paths."
						/>
						<ApproachCard
							number="03"
							title="Convolutional Neural Network + Reinforcement Learning"
							description="Using a public dataset from Hugging Face compiled with Pascal Pons' Connect 4 solver (~160 million game board states), we trained the AI to predict win probabilities for both players at each position. This sample-based approach extended predictions across the entire game tree."
						/>
					</div>

					<ImagePlaceholder label="Architecture Diagram" />

					<h3 className="text-2xl font-semibold text-white mt-12 mb-6">Evolution Strategy</h3>
					<p>
						We chose to make the AI play against mutated versions of itself. This makes it far easier to evaluate win-to-loss ratios—playing against the perfect AI wouldn't allow learning, since it would always lose.
					</p>

					<HighlightBox>
						Our process of cherry-picking the best-performing AI mimics real-life evolution and fitness. We "breed" the ultimate AI by selecting the best children—like how dog breeders choose dogs with the most desirable traits and breed similar dogs to eventually produce the best possible outcome.
					</HighlightBox>

					<h3 className="text-2xl font-semibold text-white mt-12 mb-6">Training Output</h3>
					<Terminal>
						<span className="text-green-400">Using device: cuda</span>{"\n"}
						<span className="text-white">GPU: NVIDIA GeForce RTX 4070</span>{"\n"}
						{"============================================================\n"}
						{"(against the perfect algo)\n"}
						{"============================================================\n\n"}
						{"Initializing population of 40 neural networks...\n"}
						<span className="text-green-400">Population created! Starting training for 50 generations...</span>{"\n\n"}
						{"  Evaluated 10/40 networks\n"}
						{"  Evaluated 20/40 networks\n"}
						{"  Evaluated 30/40 networks\n"}
						{"  Evaluated 40/40 networks\n"}
						<span className="text-white">Gen 0 Best fitness: -12.000  (range: -12.000 → -12.000)</span>{"\n"}
						{"  ...\n"}
						<span className="text-white">Gen 15 Best fitness: -12.000  (range: -12.000 → -12.000)</span>
					</Terminal>

					<h3 className="text-2xl font-semibold text-white mt-12 mb-6">Selection Process</h3>
					<p>
						We refined our approach with an intermediate selection phase after the main tournament:
					</p>
					<ol className="space-y-4 mt-6 list-decimal list-inside text-zinc-300">
						<li>Take the top 10 performers and play them against a random AI (two games each—starting first and second)</li>
						<li>Only those with 100% success rate against the random AI move on</li>
						<li>Survivors play the perfect AI, ranked by: least moves to win → most moves to win → most moves to lose → least moves to lose</li>
						<li>Top three become parents for the next generation</li>
					</ol>
					<p className="mt-6 text-zinc-400">
						If no models survive against the random AI with 100% success, we take the top three from the tournament instead.
					</p>
				</div>
			</section>

			{/* Results */}
			<section id="results" className="max-w-4xl mx-auto px-8 py-32">
				<SectionHeader number="03" title="Results" />

				{/* Stats */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
					<StatCard number="160M+" label="Training States" />
					<StatCard number="40" label="Network Population" />
					<StatCard number="50" label="Generations" />
				</div>

				<ImagePlaceholder label="Performance Graph" />

				<div className="space-y-6 text-zinc-300 text-lg leading-relaxed mt-12">
					<h3 className="text-2xl font-semibold text-white mb-6">Observations</h3>
					<p>
						During testing, our AI won against the perfect AI in 39 moves. However, in a theoretically perfect game where our AI moves first, the minimum number of moves to win should be 41—since the opponent plays perfectly.
					</p>

					<HighlightBox>
						This discrepancy indicates potential issues in our evaluation system or reveals interesting edge cases in the game tree that warrant further investigation.
					</HighlightBox>

					<h3 className="text-2xl font-semibold text-white mt-12 mb-6">Current Capabilities</h3>
					<p>
						The program successfully plays Connect-4 and demonstrates strategic decision-making. However, it has not yet achieved truly "perfect" play, as evidenced by the move count anomalies observed during testing. The AI is still not playing perfectly—further refinement is needed.
					</p>
				</div>
			</section>

			{/* Discussion */}
			<section id="discussion" className="max-w-4xl mx-auto px-8 py-32">
				<SectionHeader number="04" title="Discussion" />

				<div className="grid md:grid-cols-2 gap-6 my-12">
					<DiscussionCard
						title="Autonomy Through Learning"
						description="Unlike tree-algorithm approaches, our learning method allows the AI to learn from itself rather than following pre-written mathematical instructions. This gives the AI autonomy and independence—it acts through learned behavior, not rigid programming."
					/>
					<DiscussionCard
						title="Evolutionary Parallels"
						description="Our selection process mirrors natural evolution: cherry-picking the fittest individuals to produce the next generation. The alterations between generations are determined through mutations, mimicking biological inheritance."
					/>
					<DiscussionCard
						title="Move-Level Evaluation"
						description="Instead of scoring entire games, we shifted to evaluating individual moves. This provides more granular feedback for the learning process and allows the AI to understand which specific decisions lead to better outcomes."
					/>
					<DiscussionCard
						title="Future Directions"
						description="Training on probabilistic movesets from the dataset and implementing more sophisticated evaluation functions could push the AI closer to perfect play. The CNN approach using reinforcement learning shows the most promise."
					/>
				</div>

				<ImagePlaceholder label="Comparison Chart" />

				<div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-16" />

				{/* References */}
				<div className="bg-zinc-950 border border-zinc-800 p-8 mt-12">
					<h4 className="text-sm uppercase tracking-widest text-zinc-500 mb-6">
						References & Resources
					</h4>
					<div className="space-y-0 divide-y divide-zinc-800">
						{[
							{ url: "https://github.com/PascalPons/connect4", label: "github.com/PascalPons/connect4" },
							{ url: "http://blog.gamesolver.org/", label: "blog.gamesolver.org" },
							{ url: "https://huggingface.co/datasets/TonyCWang/ConnectFour", label: "huggingface.co/datasets/TonyCWang/ConnectFour" },
						].map((link, i) => (
							<a
								key={i}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="block py-4 font-mono text-sm text-white hover:text-zinc-400 transition-colors"
							>
								{link.label}
							</a>
						))}
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="text-center py-16 border-t border-zinc-800 text-zinc-500 text-sm">
				Connect-4 AI Programming Project
			</footer>
		</>
	);
}

// Components
function SectionHeader({ number, title }: { number: string; title: string }) {
	return (
		<div className="mb-16">
			<span className="font-mono text-sm text-zinc-500 block mb-4">{number}</span>
			<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h2>
			<div className="w-16 h-0.5 bg-white" />
		</div>
	);
}

function HighlightBox({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-zinc-900 border-l-2 border-white px-8 py-6 my-8">
			<p className="text-zinc-200 m-0">{children}</p>
		</div>
	);
}

function ImagePlaceholder({ label }: { label: string }) {
	return (
		<div className="bg-zinc-900 border border-dashed border-zinc-700 aspect-video flex items-center justify-center my-12 text-zinc-500 text-sm uppercase tracking-widest">
			[ {label} ]
		</div>
	);
}

function ApproachCard({ number, title, description }: { number: string; title: string; description: string }) {
	return (
		<div className="bg-zinc-950 border border-zinc-800 p-8 hover:border-zinc-600 transition-all hover:-translate-y-1">
			<span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-4">
				Approach {number}
			</span>
			<h4 className="text-xl font-semibold mb-4">{title}</h4>
			<p className="text-zinc-400 text-base leading-relaxed">{description}</p>
		</div>
	);
}

function StatCard({ number, label }: { number: string; label: string }) {
	return (
		<div className="bg-zinc-950 border border-zinc-800 p-8 text-center">
			<span className="text-5xl font-extrabold block mb-2">{number}</span>
			<span className="text-xs uppercase tracking-widest text-zinc-500">{label}</span>
		</div>
	);
}

function DiscussionCard({ title, description }: { title: string; description: string }) {
	return (
		<div className="border border-zinc-800 p-8">
			<h4 className="font-semibold mb-4 flex items-center gap-3">
				<span className="w-2 h-2 bg-white" />
				{title}
			</h4>
			<p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
		</div>
	);
}

function Terminal({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden my-8">
			<div className="bg-zinc-900 px-4 py-3 flex gap-2">
				<div className="w-3 h-3 rounded-full bg-zinc-700" />
				<div className="w-3 h-3 rounded-full bg-zinc-700" />
				<div className="w-3 h-3 rounded-full bg-zinc-700" />
			</div>
			<pre className="p-6 font-mono text-xs text-zinc-400 overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-96 overflow-y-auto">
				{children}
			</pre>
		</div>
	);
}
