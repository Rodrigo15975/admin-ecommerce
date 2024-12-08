import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, MenuItem, MenuItemStyles } from 'react-pro-sidebar'
import { linksBusiness, linksGeneral } from './linkSidebar'

const LinksItemsSidebar = () => {
  const pathName = usePathname()

  const menuItemStyles: MenuItemStyles = {
    icon: {
      fontSize: 20,
    },
    button: {
      ':hover': {
        transition: 'all .2s ease',
        background: `linear-gradient(225deg, rgba(50,50,50,0) 0%, rgba(28,24,24,0.07594756652661061) 100%);`,
        color: 'black',
      },
      borderRadius: '.5rem',
      transition: 'all .2s ease',
      marginTop: 5,
    },
  }

  const renderClassName = (pathName: string, path: string) => pathName === path

  return (
    <>
      <Menu menuItemStyles={menuItemStyles}>
        <p className="mb-2 px-2 text-neutral-400 font-medium">General</p>
        {linksGeneral.map((link, index) => (
          <MenuItem
            icon={link.icon}
            component={
              <Link
                className={`w-full ${
                  renderClassName(pathName, link.path) &&
                  'bg-primary/10 !text-primary'
                }  `}
                href={link.path}
              ></Link>
            }
            key={index}
            className={`font-semibold flex text-primary ${
              renderClassName(pathName, link.path) && '!text-slate-50'
            }  `}
          >
            {link.label}
          </MenuItem>
        ))}
        <p className="mb-2 px-2 mt-4 text-neutral-400 font-medium ">Business</p>
        {linksBusiness.map((link, index) => (
          <MenuItem
            icon={link.icon}
            component={
              <Link
                className={`w-full ${
                  renderClassName(pathName, link.path) && 'bg-primary/10'
                }  `}
                href={link.path}
              ></Link>
            }
            key={index}
            className={`font-semibold flex text-[1rem] text-primary ${
              renderClassName(pathName, link.path) && '!text-primary'
            }  `}
          >
            {link.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default LinksItemsSidebar