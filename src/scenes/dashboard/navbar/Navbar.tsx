
import { useTheme } from "@emotion/react/macro"
interface NavBarProps {
	palette: []
}
const Navbar = (props: Props) => {
	
		const {palette} = useTheme()
  return (
	<div>Navbar</div>
  )
}
export default Navbar