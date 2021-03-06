import { ReactComponent as ArrowAccordion } from '../../../../public/images/ArrowAccordion.svg'
import { ReactComponent as Dollar } from '../../../../public/images/Benefits/Dollar.svg'
import { ReactComponent as Envelope } from '../../../../public/images/Benefits/Envelope.svg'
import { ReactComponent as Guality } from '../../../../public/images/Benefits/Guality.svg'
import { ReactComponent as Modules } from '../../../../public/images/Benefits/Modules.svg'
import { ReactComponent as Tool } from '../../../../public/images/Benefits/Tool.svg'
import { ReactComponent as Vector } from '../../../../public/images/Benefits/Vector.svg'
import { ReactComponent as Github } from '../../../../public/images/Github.svg'
import { ReactComponent as Intro } from '../../../../public/images/Intro.svg'
import { ReactComponent as Logo } from '../../../../public/images/Logo.svg'
import { ReactComponent as LogoAndText } from '../../../../public/images/LogoAndText.svg'
import { ReactComponent as Regru } from '../../../../public/images/Regru.svg'
import { ReactComponent as Telegram } from '../../../../public/images/Telegram.svg'
import { ReactComponent as User } from '../../../../public/images/User.svg'
import { ReactComponent as Vkontakte } from '../../../../public/images/Vk.svg'

import { Icons } from './Icon.types'

export const ICONS: Record<Icons | string, React.FunctionComponent> = {
  [Icons.arrowAccordion]: ArrowAccordion,
  [Icons.dollar]: Dollar,
  [Icons.envelope]: Envelope,
  [Icons.github]: Github,
  [Icons.guality]: Guality,
  [Icons.intro]: Intro,
  [Icons.logo]: Logo,
  [Icons.logoAndText]: LogoAndText,
  [Icons.modules]: Modules,
  [Icons.regru]: Regru,
  [Icons.user]: User,
  [Icons.telegram]: Telegram,
  [Icons.tool]: Tool,
  [Icons.vector]: Vector,
  [Icons.vkontakte]: Vkontakte
}

export const getIcon = (name: Icons | string) => {
  return ICONS[name]
}
