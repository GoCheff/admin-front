import { FC, PropsWithChildren } from "react";

const ComposerFragment: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): JSX.Element => <> {children} </>;

const providerReducer =
  (
    ParentProvider: FC<PropsWithChildren>,
    ChildProvider: FC<PropsWithChildren>
  ) =>
  ({ children }: PropsWithChildren): JSX.Element =>
    (
      <ParentProvider>
        <ChildProvider>{children}</ChildProvider>
      </ParentProvider>
    );

interface ContextProviderProps extends PropsWithChildren {
  providers: FC<PropsWithChildren>[];
}

function GlobalContextProvider({ children, providers }: ContextProviderProps) {
  const Providers = providers.reduce(providerReducer, ComposerFragment);

  return <Providers>{children}</Providers>;
}

export { GlobalContextProvider };
