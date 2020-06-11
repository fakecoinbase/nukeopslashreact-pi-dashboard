type ActionsBasicType = {
  [k: string]: (...payload: any) => any;
};

export type ActionsType <actions extends ActionsBasicType> = {
  [k in keyof actions]: ReturnType<actions[k]>
};

export type PayloadType <actions extends ActionsType<ActionsBasicType>> = actions[keyof actions]['payload'];