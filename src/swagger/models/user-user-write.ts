/* tslint:disable */
export interface UserUserWrite {
  name?: string;
  surnames?: string;
  image?: string;
  phone?: string;
  address?: string;
  username?: string;
  email?: string;
  enabled?: boolean;

  /**
   * Plain password. Used for model validation. Must not be persisted.
   */
  plainPassword?: string;
  lastLogin?: string;
}
