// prettier-ignore
export interface MyFileInfo {
  path      : string;
  name      : string;
  isDir?    : boolean;
  isSymLink?: boolean;
  metadata? : object;
  error?    : Error;

  // ui stuff
  lazy?     : boolean;
  icon?     : string;
  iconColor?: string;
  header?   : string;
}
