import { createContext } from  'react'


// export const ThemeContext = createContext<color | undefined>(undefined);  

export const BurgerContext = createContext(
  {
    textColor: {
      color: 'white'}
  }
)

