interface SpacerProps {
  size?: number;
}

function Spacer({ size = 1 }: SpacerProps): JSX.Element {
  return <div style={{ height: `${size}rem` }}></div>;
}

export { Spacer };
