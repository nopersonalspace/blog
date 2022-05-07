import '@emotion/react'

import { Theme as CustomTheme } from '@main/utils'

declare module '@emotion/react' {
    export interface Theme extends CustomTheme {}
}
