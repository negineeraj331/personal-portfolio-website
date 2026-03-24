import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { ExternalLink, Code2, Star, Users, Github, GitCommit, GitBranch, Flame, Activity } from "lucide-react";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

interface InternalStatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  valueColor?: string;
}

function InternalStatCard({ icon, value, label, valueColor = "text-white" }: InternalStatCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-[#141414]/80 backdrop-blur-md rounded-2xl border border-white/5 shadow-inner">
      <div className="text-white/50 mb-2">{icon}</div>
      <div className={`text-xl font-bold mb-1 ${valueColor}`}>{value}</div>
      <div className="text-xs text-white/50 font-medium">{label}</div>
    </div>
  );
}

function ProgressRing({ radius, stroke, progress, total, color, label }: any) {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const safeProgress = Math.min((progress / (total || 1)) * 100, 100);
  const strokeDashoffset = circumference - (safeProgress / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="relative flex items-center justify-center">
        <svg height={radius * 2} width={radius * 2} className="rotate-[-90deg]">
          {/* Background Ring */}
          <circle
            stroke={`${color}20`}
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          {/* Progress Ring */}
          <circle
            stroke={color}
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference + " " + circumference}
            style={{ strokeDashoffset, strokeLinecap: "round", transition: "stroke-dashoffset 1s ease-in-out" }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <div className="absolute flex items-center justify-center text-xs font-bold text-white">
          {progress}<span className="text-[10px] text-white/40">/{total}</span>
        </div>
      </div>
      <span className="text-xs font-semibold" style={{ color }}>{label}</span>
    </div>
  );
}

export function AchievementsSection() {
  const { resolvedTheme } = useTheme();
  // We force dark styles to match the screenshot strictly since it's a deep dark aesthetic
  const [githubStats, setGithubStats] = useState<any>(null);
  const [leetcodeStats, setLeetcodeStats] = useState<any>(null);
  const [gfgStats, setGfgStats] = useState<any>(null);
  const [githubRepos, setGithubRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch GitHub Stats
        const ghRes = await fetch("https://api.github.com/users/negineeraj331");
        if (ghRes.ok) {
          const ghData = await ghRes.json();
          setGithubStats(ghData);
          if (ghData.public_repos > 0) {
            const reposRes = await fetch("https://api.github.com/users/negineeraj331/repos?per_page=100");
            if (reposRes.ok) setGithubRepos(await reposRes.json());
          }
        }
        
        // Fetch LeetCode Stats (Using stable Faisalshohag API)
        const lcRes = await fetch("https://leetcode-api-faisalshohag.vercel.app/BCfKcjIUL2").catch(() => null);
        if (lcRes && lcRes.ok) {
           const data = await lcRes.json();
           if (data && !data.error) setLeetcodeStats(data);
        }

        // Fetch GeeksForGeeks Stats (attempting public community wrapper)
        const gfgRes = await fetch("https://geeks-for-geeks-stats-api.vercel.app/?userName=negineeuip5").catch(() => null);
        if (gfgRes && gfgRes.ok) {
           const data = await gfgRes.json();
           if (!data.error) setGfgStats(data);
        }
      } catch (err) {
        console.error("Failed to fetch live stats", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const totalGithubStars = githubRepos.reduce((acc, repo) => acc + repo.stargazers_count, 0);

  return (
    <section id="achievements" className="relative py-24 px-4 bg-[#050505] overflow-hidden">
      {/* Abstract Glowing Nodes mimicking the background style of the screenshot */}
      <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
      <div className="absolute top-40 right-20 w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_15px_rgba(244,114,182,0.8)]" />
      <div className="absolute bottom-20 left-1/3 w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.8)]" />

      <div className="max-w-7xl mx-auto">
        {/* Header matching exactly the screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 space-y-2"
        >
          <div className="text-[10px] font-bold tracking-[0.2em] text-[#00E5FF] uppercase">
            Achievements
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center">
            Live Stats
            <span className="w-3 h-3 ml-2 rounded-full bg-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.8)]" />
          </h2>
        </motion.div>

        {/* Outer Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          
          {/* LeetCode Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[24px] bg-[#0a0a0a]/80 border border-white/10 p-6 md:p-8 backdrop-blur-xl relative"
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <SiLeetcode className="text-[#FFA116] w-8 h-8" />
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">LeetCode</h3>
                  <p className="text-[#a0a0a0] text-xs">@BCfKcjIUL2</p>
                </div>
              </div>
              <a href="https://leetcode.com/u/BCfKcjIUL2/" target="_blank" rel="noreferrer" 
                 className="flex items-center gap-1.5 text-xs font-bold text-[#00E5FF] hover:text-cyan-300 transition-colors">
                View Profile <ExternalLink size={14} />
              </a>
            </div>

            {loading ? (
               <div className="h-64 flex items-center justify-center"><Activity className="animate-pulse text-[#00E5FF]" /></div>
            ) : (
              <div className="space-y-4">
                {/* Row 1 */}
                <div className="grid grid-cols-3 gap-4">
                  <InternalStatCard 
                    icon={<Code2 size={18} />} 
                    value={leetcodeStats?.totalSolved ?? "350+"} 
                    label="Total Solved" 
                    valueColor="text-[#00E5FF]" 
                  />
                  <InternalStatCard 
                    icon={<Star size={18} />} 
                    value={leetcodeStats?.ranking ? `#${leetcodeStats.ranking.toLocaleString()}` : "-"} 
                    label="Ranking" 
                  />
                  <InternalStatCard 
                    icon={<Users size={18} />} 
                    value={leetcodeStats?.reputation ?? 0} 
                    label="Reputation" 
                  />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-4">
                  <InternalStatCard 
                    icon={<Flame size={18} />} 
                    value={leetcodeStats?.contributionPoint ?? "-"} 
                    label="Contributions" 
                  />
                  <InternalStatCard 
                    icon={<Activity size={18} />} 
                    value={leetcodeStats?.matchedUserStats ? 
                      ((leetcodeStats.matchedUserStats.acSubmissionNum[0].submissions / leetcodeStats.matchedUserStats.totalSubmissionNum[0].submissions) * 100).toFixed(2) + "%" 
                      : "87.89%"} 
                    label="Acceptance" 
                  />
                </div>

                {/* Progress Rings Base */}
                <div className="pt-6 pb-2 flex justify-around">
                  <ProgressRing 
                    radius={45} stroke={6} 
                    progress={leetcodeStats?.easySolved ?? 87} total={leetcodeStats?.totalEasy ?? 830} 
                    color="#00E5FF" label="Easy" 
                  />
                  <ProgressRing 
                    radius={45} stroke={6} 
                    progress={leetcodeStats?.mediumSolved ?? 93} total={leetcodeStats?.totalMedium ?? 1726} 
                    color="#FFB800" label="Medium" 
                  />
                  <ProgressRing 
                    radius={45} stroke={6} 
                    progress={leetcodeStats?.hardSolved ?? 8} total={leetcodeStats?.totalHard ?? 733} 
                    color="#FF3333" label="Hard" 
                  />
                </div>
              </div>
            )}
          </motion.div>


          {/* GitHub Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-[24px] bg-[#0a0a0a]/80 border border-white/10 p-6 md:p-8 backdrop-blur-xl relative"
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <Github className="text-white w-8 h-8" />
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">GitHub</h3>
                  <p className="text-[#a0a0a0] text-xs">@negineeraj331</p>
                </div>
              </div>
              <a href="https://github.com/negineeraj331" target="_blank" rel="noreferrer" 
                 className="flex items-center gap-1.5 text-xs font-bold text-[#00E5FF] hover:text-cyan-300 transition-colors">
                View Profile <ExternalLink size={14} />
              </a>
            </div>

            {loading ? (
              <div className="h-64 flex items-center justify-center"><Activity className="animate-pulse text-[#00E5FF]" /></div>
            ) : (
              <div className="space-y-4">
                {/* Row 1 */}
                <div className="grid grid-cols-3 gap-4">
                  <InternalStatCard 
                    icon={<GitBranch size={18} />} 
                    value={githubStats?.public_repos || "14"} 
                    label="Repositories" 
                    valueColor="text-[#00E5FF]" 
                  />
                  <InternalStatCard 
                    icon={<Star size={18} />} 
                    value={totalGithubStars || 0} 
                    label="Total Stars" 
                  />
                  <InternalStatCard 
                    icon={<Users size={18} />} 
                    value={githubStats?.followers || 0} 
                    label="Followers" 
                  />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-4">
                  <InternalStatCard 
                    icon={<Users size={18} />} 
                    value={githubStats?.following || 0} 
                    label="Following" 
                  />
                  <InternalStatCard 
                    icon={<GitCommit size={18} />} 
                    value={"350+"} 
                    label="Total Commits" 
                  />
                </div>

                {/* Github Activity Graph */}
                <div className="mt-8 bg-[#141414]/80 border border-white/5 rounded-2xl p-4 overflow-hidden shadow-inner">
                  {/* We integrate the github stats heatmap graph natively */}
                  <img 
                    src="https://ghchart.rshah.org/00E5FF/negineeraj331" 
                    alt="GitHub Activity Chart" 
                    className="w-full h-auto opacity-90 brightness-110 filter hue-rotate-15 contrast-125"
                  />
                </div>
              </div>
            )}
          </motion.div>

          {/* GFG Card spanned below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="xl:col-span-2 rounded-[24px] bg-[#0a0a0a]/80 border border-white/10 p-6 md:p-8 backdrop-blur-xl relative"
          >
            {/* Top Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4 sm:gap-0">
              <div className="flex items-center gap-4">
                <SiGeeksforgeeks className="text-[#2F8D46] w-8 h-8" />
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">GeeksforGeeks</h3>
                  <p className="text-[#a0a0a0] text-xs">@negineeuip5</p>
                </div>
              </div>
              
              <a href="https://www.geeksforgeeks.org/profile/negineeuip5/" target="_blank" rel="noreferrer" 
                 className="flex items-center gap-1.5 text-xs font-bold text-[#00E5FF] hover:text-cyan-300 transition-colors">
                View Profile <ExternalLink size={14} />
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <InternalStatCard 
                icon={<Code2 size={18} />} 
                value={gfgStats?.totalProblemsSolved || "200+"} 
                label="Problems Solved" 
                valueColor="text-[#00E5FF]" 
              />
              <InternalStatCard 
                icon={<Star size={18} />} 
                value={gfgStats?.codingScore || "700+"} 
                label="Coding Score" 
              />
              <InternalStatCard 
                icon={<Flame size={18} />} 
                value={gfgStats?.instituteRank || "Top 5%"} 
                label="Institute Rank" 
              />
              <InternalStatCard 
                icon={<Activity size={18} />} 
                value={gfgStats?.schoolRank || "Notable"} 
                label="Global Rank" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
