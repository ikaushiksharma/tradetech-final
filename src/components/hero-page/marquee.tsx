import { cn } from '@/lib/utils'
import Marquee from '@/components/ui/marquee'
import { useId } from 'react'

const logos = [
  'https://avatar.vercel.sh/jack',
  'https://avatar.vercel.sh/jill',
  'https://avatar.vercel.sh/john',
  'https://avatar.vercel.sh/jane',
  'https://avatar.vercel.sh/jenny',
  'https://avatar.vercel.sh/james',
]

const firstRow = logos.slice(0, logos.length / 2)

const Logo = ({ img }: { img: string }) => {
  return (
    <div className="flex flex-row items-center gap-2 relative cursor-pointer overflow-hidden py-4 px-6">
      <img className="rounded-full" width="36" height="36" alt="" src={img} />
    </div>
  )
}

const Marquees = () => {
  const id = useId()
  return (
    <div className="relative flex-[0.6] h-1/4 flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee repeat={5}>
        {firstRow.map((img) => (
          <Logo key={id} img={img} />
        ))}
      </Marquee>
    </div>
  )
}

export default Marquees
