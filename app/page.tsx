import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { Globe } from "@/components/ui/globe"

export default function Home() {
  return (
    <>
      <Skeleton className="h-[20px] w-[100px] rounded-full" />
      <Globe />
     
    </>
  )
}