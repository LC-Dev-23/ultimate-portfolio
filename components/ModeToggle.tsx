"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "lucide-react"
import { useEffect, useState } from "react"


export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
      setMounted(true)
  }, [])

  if (!mounted) {
      return null
  }

  const toggleDarkMode = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
  };


  return (
    <Button onClick={toggleDarkMode} className="dark:text-black text-white" variant="link" size="icon" aria-label="Click to change theme">
      {theme === 'dark' ? <SunIcon className="h-[1.2rem] w-[1.2rem]" /> : <MoonIcon className="h-[1.2rem] w-[1.2rem]" />}
    </Button>
  )
}