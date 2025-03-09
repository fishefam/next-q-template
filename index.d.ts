/* eslint-disable @typescript-eslint/no-empty-object-type */
import type React from 'react'

/* general */
declare global {
  type GlobalThis = typeof globalThis
  type StringRecord<T extends string = string> = Record<T, string>
  type UnknownRecord<T extends string = string> = Record<T, unknown>
}

/* process.env */
declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvironmentVariables {}
  }
}

/* react */
declare global {
  type HOC = (element: React.JSX.Element) => React.JSX.Element
  type HTMLAttributes = BaseAttributes & ImgAttributes & StringRecord<`data-${string}`>
  type HTMLTagName = keyof HTMLElementTagNameMap
  type LayoutProperties<P = UnknownRecord> = { children: ReactNode } & { params: Promise<P> }
  type PageProperties<P, S = 0> = S extends 0 ? HalfProperties<P> : FullProperties<P, S>
  type Properties<T = UnknownRecord> = { children?: ReactNode; className?: string } & T
  type ReactElement = React.ReactElement
  type ReactNode = React.ReactNode
  type SetState<T> = React.Dispatch<React.SetStateAction<T>>
  type UseStateReturn<T> = [T, SetState<T>]
}

type BaseAttributes = React.HTMLAttributes<HTMLElement>
type EnvironmentVariables = Partial<StringRecord>
type FullProperties<P, S> = { params: Promise<P>; searchParams: Promise<Partial<S>> }
type HalfProperties<P> = { params: Promise<P> }
type ImgAttributes = React.ImgHTMLAttributes<HTMLImageElement>
