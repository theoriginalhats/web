import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6">
            Experience better gameplay with{' '}
            <span className="text-[#0066cc]">Frostware</span>.
          </h1>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl">
           Enhance your Roblox gameplay with our up-and-coming script. Frostware is a multi-support script made to elevate your experience by providing powerful tools and features, ensuring seamless performance and compatibility across various games. Unlock new possibilities and take your gameplay to the next level with Frostware today!
          </p>
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              className="text-lg px-8 py-6 bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10"
            >
              Get Key
            </Button>
            <Button 
              variant="outline" 
              className="text-lg px-8 py-6 bg-transparent border-2 border-gray-800 text-gray-400 hover:bg-gray-800/50"
            >
              Get Script
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

