// @ts-ignore -- types not accessible any other way
import { SbBlokKeyDataTypes } from '@storyblok/js/dist/types/types'

export interface ComponentType<T extends string> {
  _uid?: string
  component?: T
  _editable?: string
}

export type Component<BlokData, T extends string = string> = ComponentType<T> &
  BlokData & { [index: string]: SbBlokKeyDataTypes }

export type BlokProps<T extends Component<any>> = {
  blok: T
}
