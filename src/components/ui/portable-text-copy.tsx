'use client'

import {PortableText, type PortableTextComponents} from '@portabletext/react'
import {useRef, useState, useEffect} from 'react'
import {CopyIcon, CheckIcon} from 'lucide-react'

function CopyMark({children, value}: any) {
  const textRef = useRef<HTMLSpanElement>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 1500)
    return () => clearTimeout(t)
  }, [copied])

  const copy = async () => {
    const text = textRef.current?.textContent ?? ''
    if (!text) return
    await navigator.clipboard.writeText(text)
    setCopied(true)
  }

  return (
    <span className="relative flex gap-2 items-center">
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? 'Copied' : (value?.label || 'Copy')}
        className="not-prose px-1 py-1"
      >
        {copied ? <CheckIcon className="h-[16px]! w-[16px]!" /> : <CopyIcon className="h-[16px]! w-[16px]!" />}
      </button>

      <span ref={textRef}>{children}</span>
    </span>
  )
}

export const ptComponents: PortableTextComponents = {
  marks: { copy: CopyMark },
}

export default function RichText({value}: {value: any}) {
  return <PortableText value={value} components={ptComponents} />
}

