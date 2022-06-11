type Codebase = {
  name: string,
  family?: string,
  language?: string,
  platform?: string,
  shortName?: string
  repo?: string,
  url?: string
}

type DataOrigin = {
  name: string,
  shortName?: string
};

type Host = {
  hostname: string,
  port?: number
};

type Resource = {
  name?: string,
  'type': string,
  url: string,
  description?: string,
  icon?: string
};

type Talker = {
  name: string,
  adult?: boolean,
  codebase?: string,
  dataOrigin?: string,
  description?: string,
  ewtooAbbr?: string,
  hide?: boolean,
  hosts?: Host[],
  resources: Resource[],
  screencaps?: string[],
  textcaps?: string[],
};

type Data = {
  codebases: Codebase[],
  dataOrigins: DataOrigin[],
  resources: Resource[],
  talkers: Talker[]
};
