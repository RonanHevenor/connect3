export default function Home() {
	return (
		<>
			{/* Navigation - hidden on mobile */}
			<nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800 px-8 py-4">
				<ul className="flex justify-center gap-12 max-w-5xl mx-auto">
					{["intro", "approaches", "results", "discussion"].map((item) => (
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
				<h1 className="text-6xl md:text-8xl font-extrabold tracking-tight bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent mb-6">
					Connect 6X7
				</h1>
				<p className="text-zinc-500 text-sm mb-8">
					Ronan Hevenor, Diane Baek, Colton Perry
				</p>
				<p className="text-zinc-600 text-xs">
					11 December 2025
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
						Connect 4, a tabletop game developed by Howard Wexler, involves two players dropping chips or tokens on top of each other into a six by seven grid. The main objective of the game is to be the first player to get four chips in a row.
					</p>
					<p>
						Though the rules are simple, devising strategies to guarantee a win isn't as straightforward as one might expect. Humans aren't perfect, which means that playing Connect 4 without giving your opponent an advantage would be relatively difficult.
					</p>

					<HighlightBox>
						Is it possible to create an algorithm or neural network that can perfectly play Connect 4 every round? Would this program be superior to human players?
					</HighlightBox>

					<p>
						The common reason for choosing this project is because the advancement and creation of neural networks and algorithms is interesting to us. Therefore, we wanted to develop our own program that could answer the aforementioned questions.
					</p>

					<h3 className="text-2xl font-semibold text-white mt-12 mb-6">Questions We Explored</h3>
					<ul className="space-y-4">
						{[
							"What is the best or ideal approach to creating a perfect (or close to perfect) playing AI?",
							"Can programs or neural networks \"think\" and \"reason\" in a human-like way—thinking, as in taking in information and drawing a conclusion, and reason as in being logical?",
							"If not, is its method of thinking better or worse than a human's, disregarding the obvious difference of speed?",
						].map((q, i) => (
							<li key={i} className="pl-8 relative text-zinc-300">
								<span className="absolute left-0 font-bold text-zinc-600">?</span>
								{q}
							</li>
						))}
					</ul>
					<p className="text-zinc-400 mt-6">
						These questions relate directly to material we discussed in class regarding machine cognition and what it means for a system to exhibit rational behavior.
					</p>
				</div>
			</section>

			{/* Approaches */}
			<section id="approaches" className="max-w-4xl mx-auto px-8 py-32">
				<SectionHeader number="02" title="Our Approaches" />
				<div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
					<p>
						Because there are so many approaches to developing a Connect-4 solving program, we considered the following questions:
					</p>

					<ul className="space-y-4">
						{[
							"Is utilizing search tables or tree algorithms ideal for this situation?",
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
						Since each chip position in the Connect-4 grid could be represented in a 2D array, we initially decided to develop a neural network. Each column is represented by an integer (indexed from zero), and the neural network would "pick" where it would drop its chip.
					</p>
					<p>
						Because the output is a single integer, a neural network that is properly trained would make decisions faster than an algorithm that would calculate every possible position. Due to this, it seemed more probable to take the neural network approach, though we didn't want to entirely disregard utilizing trees or search tables that could aid our neural network.
					</p>

					{/* Approach Cards */}
					<div className="grid gap-6 mt-12">
						<ApproachCard
							number="01"
							title="Neural Network Trained Off Perfect Games"
							description={`We used a genetic algorithm to attempt to determine the optimal parameters. We paired the randomly generated algorithm with a perfect AI, and simulated slight shifts after every game. Our hope was to generate an algorithm which could approximately reproduce the "solved" game.`}
							outcome="Unfortunately, there was a slight oversight in how the AI was evaluated. Since only a perfect AI can beat the perfect AI, the neural network never improved, because it lost every game. The only way that the AI would have become perfect is if it were randomly generated, the odds of which are near zero."
						/>
						<ApproachCard
							number="02"
							title="Brute Force Algorithm"
							description="For this algorithm, we dynamically generate a tree of all possible moves after the current board state, and analyze the percentage of each tree that leads to a win versus the percentage that leads to a loss."
							outcome={`Since there are way too many possible permutations of the Connect 4 board (in the trillions), we have to pick and choose which tree branches will end in failure early and "prune" those branches—that is, stop simulating down that path and prioritize others.`}
						/>
						<ApproachCard
							number="03"
							title="Convolutional Neural Network Using Reinforcement Learning"
							description="For this method, we used a public dataset from Hugging Face, compiled using Pascal Pons's Connect 4 solver. This dataset has roughly 160 million game board states from all levels of the game, as well as the win probability of both player X and player O (and draws) at each of those states."
							outcome="This approach uses a sample-based method, where the idea was to have the AI try to predict the results of the samples, and then extend it to the whole game."
						/>
					</div>

					<HighlightBox>
						Our process of cherry-picking the best playing AI mimics real-life evolution and fitness. In a way, we "breed" the ultimate AI by choosing the best children—like how dog breeders choose dogs with the most desirable traits and breed other dogs with similar traits to eventually end up with the best possible dog.
					</HighlightBox>
				</div>
			</section>

			{/* Results */}
			<section id="results" className="max-w-4xl mx-auto px-8 py-32">
				<SectionHeader number="03" title="Results" />

				<div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
					<p>
						The final iteration of our program is able to play Connect 4. Albeit not perfect, on average, it is able to play better than humans.
					</p>
					<p>
						Its flaws are evident when playing against perfectly playing AIs, because all of them lost against a perfect player.
					</p>

					<HighlightBox>
						Our final minimax algorithm is a significantly better player than our neural network program, and it wins every time against the neural network. This is because the neural network is at its core a statistical algorithm, whereas the minimax finds the near mathematically optimal solution.
					</HighlightBox>

					<p>
						Our self-learning approach never fruited a working algorithm.
					</p>

					<h3 className="text-2xl font-semibold text-white mt-12 mb-6">What We Learned</h3>
					<p>
						From this project, we learned that the best method for making a program (in a short amount of time) to successfully play Connect 4 is to use a tree-searching algorithm like minimax.
					</p>
					<p>
						We also learned that our AI can "think," since it can translate human input into symbols and process information about a game state. It is, up to a certain extent, "logical" or "reasonable" since, using given information, it could develop a strategy to win—it has a given goal and can fulfill it.
					</p>

					<h3 className="text-2xl font-semibold text-white mt-12 mb-6">Potential Improvements</h3>
					<p>
						Our program satisfies the criteria of being able to play Connect 4, though it didn't prove to be satisfactory in winning the final competition.
					</p>
					<ul className="space-y-4 mt-6">
						{[
							"Increase our max search depth in the tree by creating a more intelligent pruning algorithm",
							"Make an AlphaGo-style program that adapted on its own, which would have been a more complete implementation of self-improving artificial intelligence",
						].map((item, i) => (
							<li key={i} className="pl-8 relative text-zinc-300">
								<span className="absolute left-0 font-bold text-zinc-600">&rarr;</span>
								{item}
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* Discussion */}
			<section id="discussion" className="max-w-4xl mx-auto px-8 py-32">
				<SectionHeader number="04" title="Discussion" />

				<div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
					<p>
						The philosophical implications of this project are significant.
					</p>

					<HighlightBox>
						The thing we made isn't able to make itself. We're not making something that has the skills we used while making it. Ethically, this seems better if used only as a tool for menial tasks.
					</HighlightBox>

					<p>
						The learning approach, unlike the tree-algorithm approach, allows the AI to learn from itself, rather than following a set of mathematical pre-written instructions. This gives our AI autonomy and independence, rather than just acting like a robot.
					</p>

					<div className="border border-zinc-800 p-8 my-12">
						<h4 className="font-semibold mb-4 flex items-center gap-3">
							<span className="w-2 h-2 bg-white" />
							Evolutionary Parallels
						</h4>
						<p className="text-zinc-400 leading-relaxed">
							Another difference is that our process of cherry-picking the best playing AI mimics real-life evolution and fitness. In a way, we "breed" the ultimate AI by choosing the best children—like how dog breeders choose dogs with the most desirable traits and breed other dogs with similar traits to eventually end up with the best possible dog.
						</p>
					</div>

					<p>
						In its current state, we've proved that humans can create something that is capable of beating us; so, we are sort of better at making Connect 4 AI than we are at Connect 4.
					</p>

					<div className="bg-zinc-950 border border-zinc-800 p-8 mt-12">
						<p className="text-zinc-300 text-center">
							In conclusion, while our program did not satisfy our goals because we didn't win the competition, the project provided valuable insights into the challenges of creating game-playing AI.
						</p>
					</div>
				</div>

				<div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-16" />

				{/* References */}
				<div className="bg-zinc-950 border border-zinc-800 p-8 mt-12">
					<h4 className="text-sm uppercase tracking-widest text-zinc-500 mb-6">
						References
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
			<footer className="py-16 border-t border-zinc-800 text-zinc-500 text-sm">
				<div className="flex flex-col items-center gap-1 md:flex-row md:justify-center md:gap-0">
					<span>Connect 6X7</span>
					<span className="hidden md:inline">&nbsp;&middot;&nbsp;</span>
					<span>Ronan Hevenor, Diane Baek, Colton Perry</span>
				</div>
				<a
					href="https://github.com/RonanHevenor/connect3/tree/main"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center gap-2 mt-8 text-zinc-600 hover:text-zinc-400 transition-colors"
				>
					<span>See the source on</span>
					<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
					</svg>
				</a>
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


function ApproachCard({ number, title, description, outcome }: { number: string; title: string; description: string; outcome?: string }) {
	return (
		<div className="bg-zinc-950 border border-zinc-800 p-8 hover:border-zinc-600 transition-all hover:-translate-y-1">
			<span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-4">
				Approach {number}
			</span>
			<h4 className="text-xl font-semibold mb-4">{title}</h4>
			<p className="text-zinc-400 text-base leading-relaxed">{description}</p>
			{outcome && <p className="text-zinc-500 text-sm leading-relaxed mt-4 pt-4 border-t border-zinc-800">{outcome}</p>}
		</div>
	);
}

