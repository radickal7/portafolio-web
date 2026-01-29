export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-slate-900"></div>
      <div className="absolute w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl animate-float-delay"></div>
    </div>
  )
}
