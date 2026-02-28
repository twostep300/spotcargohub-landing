type LogoProps = {
  className?: string;
};

function WordmarkFrame({
  children,
  className,
}: LogoProps & { children: React.ReactNode }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 180 42" xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  );
}

function LogoOne({ className }: LogoProps) {
  return (
    <WordmarkFrame className={className}>
      <g fill="var(--color-brand)">
        <rect x="10" y="11" width="18" height="8" rx="2" />
        <rect x="10" y="19" width="8" height="12" rx="2" />
        <rect x="34" y="11" width="8" height="20" rx="2" />
        <rect x="48" y="11" width="8" height="20" rx="2" />
        <rect x="62" y="11" width="18" height="8" rx="2" />
        <rect x="86" y="11" width="8" height="20" rx="2" />
        <rect x="100" y="11" width="18" height="20" rx="2" />
        <rect x="124" y="11" width="8" height="20" rx="2" />
        <rect x="138" y="11" width="18" height="8" rx="2" />
      </g>
    </WordmarkFrame>
  );
}

function LogoTwo({ className }: LogoProps) {
  return (
    <WordmarkFrame className={className}>
      <g fill="var(--color-brand)">
        <circle cx="18" cy="21" r="10" />
        <rect x="32" y="11" width="8" height="20" rx="2" />
        <rect x="46" y="11" width="18" height="8" rx="2" />
        <rect x="46" y="19" width="8" height="12" rx="2" />
        <rect x="70" y="11" width="8" height="20" rx="2" />
        <rect x="84" y="11" width="8" height="20" rx="2" />
        <rect x="98" y="11" width="8" height="20" rx="2" />
        <rect x="112" y="23" width="18" height="8" rx="2" />
      </g>
    </WordmarkFrame>
  );
}

function LogoThree({ className }: LogoProps) {
  return (
    <WordmarkFrame className={className}>
      <g fill="var(--color-brand)">
        <rect x="8" y="13" width="24" height="16" rx="2" />
        <rect x="38" y="11" width="8" height="20" rx="2" />
        <rect x="52" y="11" width="8" height="20" rx="2" />
        <rect x="66" y="11" width="18" height="8" rx="2" />
        <rect x="66" y="23" width="18" height="8" rx="2" />
        <rect x="90" y="11" width="8" height="20" rx="2" />
        <rect x="104" y="11" width="8" height="20" rx="2" />
        <rect x="118" y="11" width="18" height="8" rx="2" />
      </g>
    </WordmarkFrame>
  );
}

function LogoFour({ className }: LogoProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 80 58" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="22" r="16" fill="var(--color-brand)" />
      <path d="M28 12L39 30H17L28 12Z" fill="white" />
      <rect x="20" y="35" width="16" height="5" rx="2" fill="var(--color-brand)" />
      <rect x="10" y="46" width="36" height="6" rx="2" fill="var(--color-brand)" />
    </svg>
  );
}

function LogoFive({ className }: LogoProps) {
  return (
    <WordmarkFrame className={className}>
      <g fill="var(--color-brand)">
        <rect x="10" y="11" width="8" height="20" rx="2" />
        <rect x="24" y="11" width="8" height="20" rx="2" />
        <rect x="38" y="11" width="18" height="8" rx="2" />
        <rect x="38" y="19" width="8" height="12" rx="2" />
        <rect x="62" y="11" width="8" height="20" rx="2" />
        <rect x="76" y="11" width="18" height="20" rx="2" />
        <rect x="100" y="11" width="8" height="20" rx="2" />
        <rect x="114" y="23" width="18" height="8" rx="2" />
      </g>
    </WordmarkFrame>
  );
}

function LogoSix({ className }: LogoProps) {
  return (
    <WordmarkFrame className={className}>
      <g fill="var(--color-brand)">
        <rect x="8" y="11" width="18" height="8" rx="2" />
        <rect x="8" y="23" width="18" height="8" rx="2" />
        <rect x="32" y="11" width="8" height="20" rx="2" />
        <rect x="46" y="11" width="18" height="20" rx="2" />
        <path d="M74 31V11H89C93 11 96 14 96 18C96 22 93 25 89 25H82V31H74Z" fill="var(--color-brand)" />
        <path d="M102 31L113 11H119L130 31H123L116 18L109 31H102Z" fill="var(--color-brand)" />
        <rect x="136" y="11" width="8" height="20" rx="2" />
        <rect x="150" y="23" width="16" height="8" rx="2" />
      </g>
    </WordmarkFrame>
  );
}

export const partnerLogoComponents = [
  LogoOne,
  LogoTwo,
  LogoThree,
  LogoFour,
  LogoFive,
  LogoSix,
];
