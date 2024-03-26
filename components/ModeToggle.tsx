"use client"
 
import * as React from "react"
import { SunIcon, MoonIcon } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

 
export function ModeToggle() {
  const { theme ,setTheme } = useTheme()
 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="text-black dark:text-white" variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => { setTheme("light"); console.log("Theme set to light but in reality it is", theme);}}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => { setTheme("dark"); console.log("Theme set to dark but in reality it is", theme);}}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => { setTheme("system"); console.log("Theme set to system but in reality it is", theme);}}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}