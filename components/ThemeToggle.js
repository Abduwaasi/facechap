
import {FiSun,FiMoon} from "react-icons/fi"
import {useTheme} from 'next-themes'

const ThemeToggle = () => {
    const {theme, setTheme} = useTheme()
  return (
    <div className='w-[2rem] h-[2rem] flex justify-center items-center bg-[#000A0F] dark:bg-white rounded-[1rem]' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === "dark"?<FiSun size="1.5rem" color='#000A0F'/>:<FiMoon size="1.5rem" color="white"/>}
    </div>
  )
}

export default ThemeToggle