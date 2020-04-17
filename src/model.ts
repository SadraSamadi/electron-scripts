export type Target = 'main' | 'renderer';

export type Environment = 'dev' | 'prod';

export interface Configurator<T = any> {

  default?: Override<T>;

  main?: Override<T>;

  renderer?: Override<T>;

}

export interface Override<T = any> {

  (config?: T, env?: Environment): T | Promise<T>

}

export interface Options {

  env?: Environment;

  electron?: string;

  src?: Directory;

  dist?: Directory;

  out?: string;

  config?: Config;

  host?: string;

  port?: number;

}

export interface Directory {

  main?: string;

  renderer?: string;

}

export interface Config {

  eslint?: string;

  babel?: string;

  tailwind?: string;

  postcss?: string;

  webpack?: string;

}
