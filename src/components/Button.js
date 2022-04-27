import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"

/**
 * Button Component
 * @param {String} children - Contents inside the button tag
 * @param {Boolean} isCustom - Button uses clip-path (custom) or rounded corners (original): <Button isCustom={true}>
 * @param {String} type - Button type: <Button type="button|submit|reset">
 * @param {String} href - Button type: <Button href="www.example.com">
 * @param {String} size - Button size: <Button size="large|medium">
 * @param {String} variant - Button variant: <Button variant="primary|secondary|tertiary">
 * @param {String} className - Additional classes for the button
 */
const Button = ({ children, isCustom, type, href, size, variant, className, clickHandler }) => {


  // const onClickHandler = (e) => {
  //
  //   clickHandler(e.);
  // }

  const ref = useRef()
  const [height, setHeight] = useState(0)

  let btnClass = 'btn';

  // Button styles in ./src/index.css
  // Variant: Primary or Secondary
  if (variant === 'primary' || variant === 'secondary') {
    btnClass += ` btn-${variant}`

    // Size: Large
    if (size === 'large') {
      btnClass += ' btn-lg'
    }
    // Size: Medium
    else if (size === 'medium') {
      btnClass += ' btn-md'
    }
    // Size: Fill Container (fallback option)
    else {
      btnClass += ' btn-full'
    }

    // Using clip-path without rounded corners (custom)
    if (isCustom) {
      btnClass += ' btn-custom';
    }
    // Using rounded corners without clip-path (original) (fallback option)
    else {
      btnClass += ' rounded-md'
    }
  }

  // Variant: Tertiary (fallback option)
  else {
    btnClass += ' btn-tertiary'
  }

  useEffect(() => {
    setHeight(ref.current.offsetHeight)
  }, [height])

  // Link (href link given)
  if (href) {
    return (
      <Link
        ref={ref}
        to={href}
        className={`${btnClass} ${className ?? ''}`}>
        {children}
      </Link>
    )
  }
  // Button (fallback option)
  else {
    return (
      <button
        ref={ref}
        type={type}
        onClick={clickHandler}
        className={`${btnClass} ${className ?? ''}`}>
        {children}
      </button>
    )
  }
}

export default Button
