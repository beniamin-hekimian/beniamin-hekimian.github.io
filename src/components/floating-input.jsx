"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export function FloatingInput({ label, type = "text", className, ...props }) {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = (e) => {
    setIsFocused(false)
    setHasValue(e.target.value !== "")
  }

  const handleChange = (e) => {
    setHasValue(e.target.value !== "")
    if (props.onChange) {
      props.onChange(e)
    }
  }

  const isLabelFloating = isFocused || hasValue

  return (
    <div className="relative">
      <Input
        type={type}
        className={cn(
          "h-14 text-base pt-6 pb-2",
          className,
        )}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder=""
        {...props}
      />
      <label
        className={cn(
          "absolute left-3 transition-all duration-200 ease-in-out pointer-events-none text-gray-500",
          isLabelFloating ? "top-2 text-xs text-primary font-medium" : "top-1/2 -translate-y-1/2 text-base",
        )}
      >
        {label}
      </label>
    </div>
  )
}

export function FloatingTextarea({ label, className, ...props }) {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = (e) => {
    setIsFocused(false)
    setHasValue(e.target.value !== "")
  }

  const handleChange = (e) => {
    setHasValue(e.target.value !== "")
    if (props.onChange) {
      props.onChange(e)
    }
  }

  const isLabelFloating = isFocused || hasValue

  return (
    <div className="relative">
      <Textarea
        className={cn(
          "min-h-[200px] text-base pt-6 pb-2 resize-none",
          className,
        )}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder=""
        {...props}
      />
      <label
        className={cn(
          "absolute left-3 transition-all duration-200 ease-in-out pointer-events-none text-gray-500",
          isLabelFloating ? "top-2 text-xs text-primary font-medium" : "top-6 text-base",
        )}
      >
        {label}
      </label>
    </div>
  )
}
