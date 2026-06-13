"use client"
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

export default function Appearance() {
      const {setTheme} = useTheme();
  return (
    <div>
              <Button type="button" onClick={()=> setTheme("light")}>Light Mode</Button>
              <Button type="button" onClick={()=> setTheme("dark")}>Dark Mode</Button>
    </div>
  )
}
