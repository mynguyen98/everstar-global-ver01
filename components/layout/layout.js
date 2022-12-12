import MainNavigation from './main-navigation'
import MainFooter from './footer'
function Layout(props) {
  return (
    <>
      <MainNavigation />
      <main className='main-padding'>{props.children}</main>
      <MainFooter />
    </>
  )
}

export default Layout
