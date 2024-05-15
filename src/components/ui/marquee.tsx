import { cn } from '@/lib/utils'

interface MarqueeProps {
  className?: string
  children?: React.ReactNode
  repeat?: number
  [key: string]: any
}

export default function Marquee({
  className,
  children,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn('group flex overflow-hidden p-2 gap-4', className)}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={
              'flex shrink-0 justify-around gap-4 animate-marquee flex-row'
            }
          >
            {children}
          </div>
        ))}
    </div>
  )
}
