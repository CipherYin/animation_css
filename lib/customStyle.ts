type CSSCustomProperties = {
    [key: `--${string}`]: String | Number;
  };

export function createCustomStyle(properties: CSSCustomProperties): React.CSSProperties{
    return properties as React.CSSProperties;
  };