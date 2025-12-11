import Background from "@/components/Background";
import React from "react";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full text-white overflow-x-hidden">
      {/* 1. The Dynamic Shader Background */}
      <Background />

      {/* 2. Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-8 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-[2px]">
        <ul className="flex space-x-12 text-xs font-semibold tracking-widest text-gray-300 uppercase mix-blend-plus-lighter">
          {['Intro', 'Program', 'Results', 'Discussion'].map((item) => (
            <li key={item} className="hover:text-white cursor-pointer transition-colors duration-300">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* 3. Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Title with Blend Mode */}
        <h1 className="text-[12vw] font-bold tracking-tighter leading-none text-white/90 mix-blend-overlay blur-[1px] select-none">
          Connect 6X7
        </h1>

        {/* Subtitles */}
        <div className="mt-8 flex flex-col items-center space-y-4">
          <p className="text-xl md:text-2xl font-light text-gray-200 tracking-wide mix-blend-screen text-center">
            Ronan Hevenor, Diane Baek, Colton Perry
          </p>
          <p className="text-sm font-mono text-orange-200/80 uppercase tracking-widest">
            11 December 2025
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center justify-center space-y-4 animate-pulse">
          <span className="text-[10px] tracking-[0.2em] text-gray-400 uppercase">Scroll</span>
          <div className="h-12 w-[1px] bg-gradient-to-b from-gray-400 to-transparent"></div>
        </div>

        {/* Bottom Left Logo */}
        <div className="absolute bottom-10 left-10 hidden md:block">
           <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <span className="font-mono text-xs">N</span>
           </div>
        </div>
      </section>

      {/* 4. Content Sections */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-32 space-y-32">
        
        {/* Introduction */}
        <section id="intro" className="pt-20">
          <SectionHeader number="01" title="Introduction" />
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center">
             {/* Left Text */}
            <div className="text-xl font-light text-white/90 leading-relaxed space-y-6 md:col-span-2">
              <LiquidCard className="p-10 md:p-12" animation="morph">
                <p className="mb-6">
                  Connect 4, a tabletop game developed by Howard Wexler, involves two players dropping chips or tokens on top of each other into a six by seven grid. The main objective of the game is to be the first player to get four chips in a row.
                </p>
                <div className="pl-4 border-l-2 border-orange-500/50 italic text-orange-100/80">
                  Through this project, we aimed to explore: What is the best approach to creating a perfect AI? Can programs "think" and "reason" in a human-like way?
                </div>
              </LiquidCard>

              <p className="px-4">
                 Because there are so many approaches to developing a Connect-4 solving program, we considered the following questions: Is utilizing search tables or tree algorithms ideal for this situation? Would it make sense to develop a neural network? What is the best way to train a neural network?
              </p>
            </div>
          </div>
        </section>

        {/* Program */}
        <section id="program" className="pt-20">
          <SectionHeader number="02" title="Program" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
             <LiquidCard animation="subtle" delay="0s">
                <ApproachContent 
                  number="01" 
                  title="Genetic Algorithm" 
                  desc="Our first attempt involved creating a neural network trained off perfect games using a genetic algorithm. Unfortunately, since only a perfect AI can beat a perfect AI, the network never improved."
                />
             </LiquidCard>
             <LiquidCard animation="subtle" delay="2s">
                <ApproachContent 
                   number="02" 
                   title="Brute Force" 
                   desc="We dynamically generate a tree of all possible moves. Since there are trillions of permutations, we 'prune' branches that are likely to fail to save computational resources."
                 />
             </LiquidCard>
             <LiquidCard animation="subtle" delay="4s">
                <ApproachContent 
                   number="03" 
                   title="CNN + Reinforcement" 
                   desc="We used a dataset of ~160 million game states from Pascal Pons's solver. The AI attempts to predict results of samples and extend that logic to the whole game."
                 />
             </LiquidCard>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-orange-100 px-4">Training Output</h3>
            <div className="liquid-glass rounded-[30px] p-8 md:p-10 shadow-2xl backdrop-blur-2xl">
              <TerminalContent />
            </div>
          </div>
        </section>

        {/* Results */}
        <section id="results" className="pt-20">
          <SectionHeader number="03" title="Results" />
          <div className="space-y-8 text-lg text-white/80 font-light leading-relaxed">
            <p className="px-4">
              The final iteration of our program is able to play Connect 4. Albeit not perfect, on average, it is able to play better than humans. Its flaws are evident when playing against perfectly playing AIs.
            </p>
            
            <LiquidCard animation="morph" className="p-10 md:p-12 border-orange-500/30">
              <p className="text-orange-50 font-medium">
                Our final minimax algorithm is a significantly better player than our neural network program. This is because the neural network is at its core a statistical algorithm, whereas the minimax finds the near mathematically optimal solution.
              </p>
            </LiquidCard>
            
            <p className="px-4">
              From this project, we learned that the best method for making a program (in a short amount of time) to successfully play Connect 4 is to use a tree-searching algorithm like minimax. We also learned that our AI can "think," since it can translate human input into symbols and process information.
            </p>
          </div>
        </section>

        {/* Discussion */}
        <section id="discussion" className="pt-20">
          <SectionHeader number="04" title="Discussion" />
          <div className="space-y-12 text-lg text-white/80 font-light leading-relaxed">
             <div className="grid md:grid-cols-2 gap-8">
                <LiquidCard animation="subtle" className="p-8">
                  The philosophical implications of this project are significant. The thing we made isn't able to make itself. We're not making something that has the skills we used while making it. Ethically, this seems better if used only as a tool for menial tasks.
                </LiquidCard>
                <LiquidCard animation="subtle" className="p-8" delay="3s">
                  Another difference is that our process of cherry-picking the best playing AI mimics real-life evolution and fitness. In a way, we "breed" the ultimate AI by choosing the best children.
                </LiquidCard>
             </div>

             <LiquidCard animation="morph" className="p-10 md:p-14 text-center">
              <p className="text-xl text-white font-medium">
                In conclusion, while our program did not satisfy our goals because we didn't win the competition, the project provided valuable insights into the challenges of creating game-playing AI.
              </p>
            </LiquidCard>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10 px-4">
             <h4 className="text-xs font-mono uppercase tracking-widest text-orange-300/50 mb-6">References</h4>
             <ul className="space-y-4 font-mono text-sm text-white/40">
                <li><a href="#" className="hover:text-orange-400 transition-colors">github.com/PascalPons/connect4</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">blog.gamesolver.org</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">huggingface.co/datasets/TonyCWang/ConnectFour</a></li>
             </ul>
          </div>
        </section>

      </div>
      
      <footer className="relative z-10 py-12 text-center text-white/20 text-xs uppercase tracking-widest font-semibold">
        Connect 6X7 — Ronan Hevenor, Diane Baek, Colton Perry
      </footer>

    </main>
  );
}

// --- Subcomponents ---

function SectionHeader({ number, title }: { number: string, title: string }) {
  return (
    <div className="mb-12 flex items-baseline space-x-4 border-b border-white/10 pb-4 px-4">
      <span className="text-sm font-mono text-orange-500 font-bold">{number}</span>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-100 to-orange-500/50">
        {title}
      </h2>
    </div>
  );
}

function LiquidCard({ 
  children, 
  className = "", 
  animation = "none",
  delay = "0s"
}: { 
  children: React.ReactNode, 
  className?: string,
  animation?: "morph" | "subtle" | "none",
  delay?: string
}) {
  
  const animStyle = 
    animation === "morph" ? "liquid-morph 10s ease-in-out infinite" :
    animation === "subtle" ? "liquid-subtle 12s ease-in-out infinite" : 
    "none";

  return (
    <div 
      className={`liquid-glass ${className}`}
      style={{ 
        animation: animStyle,
        animationDelay: delay
      }}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

function ApproachContent({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="p-8 h-full flex flex-col justify-between">
      <div>
        <div className="mb-4 opacity-30">
          <span className="text-6xl font-bold text-white">{number}</span>
        </div>
        <h3 className="text-2xl font-bold text-orange-50 mb-4">{title}</h3>
      </div>
      <p className="text-sm text-gray-200 leading-relaxed">{desc}</p>
    </div>
  );
}

function TerminalContent() {
  return (
    <div className="font-mono text-xs md:text-sm overflow-x-auto">
      <div className="flex space-x-2 mb-4 opacity-50">
        <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_red]"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_yellow]"></div>
        <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_green]"></div>
      </div>
      <div className="text-gray-300 space-y-1">
        <p><span className="text-green-500">➜</span> <span className="text-blue-400">~</span> Initializing population of 40 neural networks...</p>
        <p className="text-gray-400">Population created! Starting training for 50 generations...</p>
        <p>Evaluated 10/40 networks</p>
        <p>Evaluated 40/40 networks</p>
        <p className="text-orange-300">Gen 0 Best fitness: -12.000 (range: -12.000 → -12.000)</p>
        <p>...</p>
        <p className="text-orange-300">Gen 15 Best fitness: -8.500 (range: -12.000 → -8.500)</p>
        <p className="animate-pulse">_</p>
      </div>
    </div>
  );
}