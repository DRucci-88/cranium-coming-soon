import React from "react"
import {Link} from "react-router-dom"

type TypeButton = "button" | "submit" | "reset" | undefined
type VariantButton = "primary" | "secondary" | "tertiary" | "any"
type SizeButton = "large" | "medium" | "fill-container"

interface Props {
  isCustom?: boolean,
  type: TypeButton,
  href?: Partial<Location> | string,
  newTab?: boolean,
  size?: SizeButton,
  variant: VariantButton,
  className?: string,
  clickHandler?: () => void,
  children: React.ReactNode
}

const Button: React.FC<Props> = (
  {
    isCustom = false,
    type,
    href,
    newTab = false,
    size = 'fill-container',
    variant,
    className,
    clickHandler,
    children
  }) => {

  // const ref = useRef()

  let btnClass = 'btn'

  // Button styles in ./src/index.css
  if (variant === 'primary' || variant === 'secondary') {
    btnClass += ` btn-${variant}`

    switch (size) {
      // Size: Large
      case 'large': btnClass += ' btn-lg'
        break
      // Size: Medium
      case 'medium': btnClass += ' btn-md'
        break
      // Size: Fill Container (fallback option)
      default: btnClass += ' btn-full'
    }

    // Using clip-path without rounded corners (custom) | Using rounded corners without clip-path (original) (fallback option)
    btnClass += (isCustom ? ' btn-custom' : ' rounded-md')
  }

  // Variant: Tertiary
  else if (variant === 'tertiary') {
    btnClass += ' btn-tertiary'
  }

  // href link given
  if (href) {
    // a (href link is an full website address)
    if ((href as String).startsWith('https://')) {
      return (
        <a
          href={href as string}
          target={newTab ? '_blank' : '_top'}
          rel="noreferrer"
          className={`max-w-fit ${btnClass} ${className ?? ''}`}>
          {children}
        </a>
      )
    }
    // Link (fallback option)
    else {
      return (
        <Link
          to={href}
          target={newTab ? '_blank' : '_top'}
          rel="noreferrer"
          className={`max-w-fit ${btnClass} ${className ?? ''}`}>
          {children}
        </Link>
      )
    }
  }
  
  // Button (fallback option)
  else {
    return (
      <button
        type={type}
        onClick={clickHandler}
        className={`${btnClass} ${className ?? ''}`}>
        {children}
      </button>
    )
  }
}

export default Button;
