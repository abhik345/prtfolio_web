import NavTab from "../Nav/NavTab";
import PropTypes from "prop-types";

const Layout = ({children}) => {
  return (
    <>
        <NavTab />
        <div className="bg-inherit">
        {children}
        </div>

    </>
  )
}

Layout.propTypes = {
  children : PropTypes.node.isRequired,
  title : PropTypes.string
}

export default Layout