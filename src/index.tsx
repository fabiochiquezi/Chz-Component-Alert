type ICreateEl = () => HTMLDivElement | undefined
type IOpenFn = (background: string, message: string, delay?: number) => void
type ISuccessFn = (message: string, delay?: number) => void
type IErrorFn = (message: string, delay?: number) => void
type ICloseFn = () => void

export type IUseAlert = (props?: {
  id?: string,
  className?: string,
  animationRemove?: string,
  animationAdd?: string,
  animationDuration?: number
  colorError?: string,
  colorSuccess?: string
}) => {
  open: IOpenFn
  close: ICloseFn
  error: IErrorFn
  success: ISuccessFn
}

export const useAlert: IUseAlert = props => {
  const options = {
    id: props?.id ? props.id : 'AlertPortal',
    className: props?.className ? props.className : 'Alert',
    animationRemove: props?.animationRemove ? props.animationRemove : 'portals-alert-anim-out',
    animationAdd: props?.animationAdd ? props.animationAdd : 'portals-alert-anim-in',
    animationDuration: props?.animationDuration ? props.animationDuration : 300,
    colorsError: props?.colorError ? props.colorError : '#dc2626',
    colorsSuccess: props?.colorSuccess ? props.colorSuccess : '#16a34a'
  }

  const getHTML = (message: string): string => `
    <p>${message}</p>
    <div class="close">
      <svg
        width="20"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="1.6862" y1="22" x2="22" y2="1.68632" stroke="white" stroke-width="2"></line>
        <path d="M1.99341 1.59338C10.2777 9.87765 14.9223 14.5223 23.2066 22.8066" stroke="white" stroke-width="2"></path>
      </svg>
    </div>
  `

  const createElement: ICreateEl = () => {
    const isAlreadyBuild = typeof document === 'object' && document.getElementById(options.id)
    if (typeof document === 'undefined' || isAlreadyBuild) return
    const div = document.createElement('div')
    div.classList.add(`${options.className}`)
    div.classList.add(`${options.animationAdd}`)
    div.setAttribute('id', options.id)
    div.setAttribute('data-testid', options.id)
    div.addEventListener('click', close)
    return div
  }

  const close: ICloseFn = () => {
    const elem = document.getElementById(options.id)
    if (!elem) return
    elem.classList.remove(options.animationAdd)
    elem.classList.add(options.animationRemove)
    const removeEl = (): unknown => elem?.parentNode && elem?.parentNode.removeChild(elem)
    setTimeout(removeEl, options.animationDuration)
  }

  const open: IOpenFn = (background, message, delay) => {
    const div = createElement()
    if (!div) return
    div.style.backgroundColor = background
    div.innerHTML = getHTML(message)
    document.body.appendChild(div)
    if (delay) setTimeout(() => close(), delay)
  }

  const success: ISuccessFn = (message, delay) =>
    open(options.colorsSuccess, message, delay)

  const error: IErrorFn = (message, delay) =>
    open(options.colorsError, message, delay)

  return { open, close, success, error }
}
