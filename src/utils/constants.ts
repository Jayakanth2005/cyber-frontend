import GoogleLogo from '../public/assets/companies/google.png';
import MicrosoftLogo from '../public/assets/companies/microsoft.png';
import AmazonLogo from '../public/assets/companies/amazon.jpg';
import AppleLogo from '../public/assets/companies/apple.png';
import MetaLogo from '../public/assets/companies/meta.png';
import TeslaLogo from '../public/assets/companies/tesla.png';
import CyberMindsLogo from '../public/assets/companies/cyberminds.png';

export const COMPANY_LOGOS = {
  Google: GoogleLogo,
  Microsoft: MicrosoftLogo,
  Amazon: AmazonLogo,
  Apple: AppleLogo,
  Meta: MetaLogo,
  Tesla: TeslaLogo,
  CyberMinds: CyberMindsLogo,
} as const;

export const DEFAULT_COMPANY_LOGO = CyberMindsLogo;
