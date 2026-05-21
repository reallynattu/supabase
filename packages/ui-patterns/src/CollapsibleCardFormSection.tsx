import { ChevronRight } from 'lucide-react'
import type { PropsWithChildren, ReactNode } from 'react'
import { cn, Collapsible, CollapsibleContent, CollapsibleTrigger } from 'ui'

type CollapsibleCardFormSectionProps = PropsWithChildren<{
  title: string
  description?: ReactNode
  defaultOpen?: boolean
}>

export const CollapsibleCardFormSection = ({
  title,
  description,
  defaultOpen = false,
  children,
}: CollapsibleCardFormSectionProps) => (
  <Collapsible defaultOpen={defaultOpen}>
    <CollapsibleTrigger className="group/trigger font-mono uppercase tracking-widest text-xs flex items-center gap-1 text-foreground-lighter/75 hover:text-foreground-light transition data-open:text-foreground-light">
      {title}
      <ChevronRight
        size={16}
        strokeWidth={1}
        className="mr-2 group-data-open/trigger:rotate-90 group-hover/trigger:text-foreground-light transition"
      />
    </CollapsibleTrigger>
    <CollapsibleContent
      forceMount
      className={cn(
        'grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 ease-out',
        'data-closed:grid-rows-[0fr] data-closed:opacity-0',
        'data-open:grid-rows-[1fr] data-open:opacity-100'
      )}
    >
      <div className="min-h-0 overflow-hidden">
        <div className="pt-2">
          {description && <p className="text-xs text-foreground-lighter mb-6">{description}</p>}
          {children}
        </div>
      </div>
    </CollapsibleContent>
  </Collapsible>
)
