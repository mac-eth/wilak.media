interface DesktopProps {
  navigation: {
    name: string
    href: string
  }[]
}

const DesktopNavigation = (props: DesktopProps) => {
  return (
    <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
      {props.navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-sm font-semibold leading-6 text-stone-200"
        >
          {item.name}
        </a>
      ))}
    </div>
  )
}

export default DesktopNavigation
