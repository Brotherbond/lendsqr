export interface DefaultProps {
  title: string;
  children: Children['children'];
  link?: Url;
}

export interface Children {
  children: React.ReactNode 
}
