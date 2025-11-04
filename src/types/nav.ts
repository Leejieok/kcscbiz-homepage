export interface SubMenuItem{
  path: string;
  label: string;
}

export interface NavItem{
  path: string;
  label: string;
  subMenu?: SubMenuItem[];
  isExternal?: boolean;
}